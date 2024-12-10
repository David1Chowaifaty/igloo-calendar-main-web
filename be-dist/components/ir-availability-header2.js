import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { z, Z as ZodError } from './index4.js';
import { a as app_store, o as onAppDataChange } from './app.store.js';
import { P as PropertyService } from './property.service.js';
import { d as dateFns, b as booking_store, j as modifyQueryParam, a as calculateInfantNumber, l as localizedWords } from './utils.js';
import './index5.js';
import { d as defineCustomElement$b } from './ir-adult-child-counter2.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-coupon-dialog2.js';
import { d as defineCustomElement$8 } from './ir-date-popup2.js';
import { d as defineCustomElement$7 } from './ir-date-range2.js';
import { d as defineCustomElement$6 } from './ir-dialog2.js';
import { d as defineCustomElement$5 } from './ir-icons2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-loyalty2.js';
import { d as defineCustomElement$2 } from './ir-popover2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const ExposedBookingAvailability = z.object({
    propertyid: z.coerce.number(),
    from_date: z.string().min(2),
    to_date: z.string().min(2),
    room_type_ids: z.string().array().optional().default([]),
    adult_nbr: z.number().min(1),
    child_nbr: z.number().min(0),
    infant_nbr: z.number().min(0),
    language: z.string().default('en'),
    currency_ref: z.string(),
    is_in_loyalty_mode: z.boolean().default(false),
    promo_key: z.string(),
    is_in_agent_mode: z.boolean().default(false),
    agent_id: z.number().default(0).optional(),
    is_in_affiliate_mode: z.boolean().default(false),
    affiliate_id: z.number().default(0).optional(),
});

class QueryStringValidator {
    constructor() {
        this.errors = [];
        this.dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: 'Date must be in YYYY-MM-DD format.',
        });
    }
    validateCheckin(checkinStr) {
        this.errors = [];
        try {
            this.dateSchema.parse(checkinStr);
        }
        catch (e) {
            this.errors.push('Checkin date must be in YYYY-MM-DD format.');
            return null;
        }
        const checkinDate = dateFns.parseISO(checkinStr);
        const today = new Date();
        if (!dateFns.isValid(checkinDate)) {
            this.errors.push('Checkin date is not a valid date.');
            return null;
        }
        if (dateFns.isBefore(checkinDate, today) && !dateFns.isSameDay(checkinDate, today)) {
            this.errors.push('Checkin date must be today or in the future.');
            return null;
        }
        if (app_store.nonBookableNights[checkinStr]) {
            this.errors.push('Checkin date is unavailable.');
            return null;
        }
        return checkinDate;
    }
    validateAges(str) {
        if (str.length === 1 && !isNaN(Number(str))) {
            return true;
        }
        const regex = /^(\d+_)+\d+$/;
        return regex.test(str);
    }
    validateCheckout(checkoutStr, checkinDate) {
        try {
            this.dateSchema.parse(checkoutStr);
        }
        catch (e) {
            this.errors.push('Checkout date must be in YYYY-MM-DD format.');
            return null;
        }
        const checkoutDate = dateFns.parseISO(checkoutStr);
        if (!dateFns.isValid(checkoutDate)) {
            this.errors.push('Checkout date is not a valid date.');
            return null;
        }
        if (!dateFns.isAfter(checkoutDate, checkinDate)) {
            this.errors.push('Checkout date must be at least one day after checkin date.');
            return null;
        }
        if (app_store.nonBookableNights[checkoutStr] && app_store.nonBookableNights[dateFns.format(checkinDate, 'yyyy-MM-dd')]) {
            this.errors.push('Checkout date is unavailable.');
            return null;
        }
        return checkoutDate;
    }
    validateAdultCount(adultCount) {
        return isNaN(Number(adultCount));
    }
    validateChildrenCount(children) {
        return isNaN(Number(children));
    }
    getErrors() {
        return this.errors;
    }
}

const irAvailabilityHeaderCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.availability-container{align-items:center;background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),.75rem);display:flex;flex-direction:column;gap:1rem;padding:1rem}.full-width-on-mobile{display:block;width:100%}.availability-inputs{align-items:center;display:flex;flex-direction:column;gap:1rem;width:100%}.adult-child-counter,.button-container,.date-popup{width:100%}.availability-controls{align-items:center;display:flex;gap:1rem;width:100%}.availability-controls ir-adult-child-counter{flex:1 1 0%;width:100%}.date-toast .toast-message{background-color:#ef4444;border-radius:.375rem;color:#fff;font-size:.875rem;padding:.25rem 1.25rem}.button-container{display:flex;flex-direction:column}.hidden-on-mobile{display:none}.promotions-container{align-items:center;display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;width:100%}.arrow-up{animation:tooltipAnimation .3s ease-out;border-bottom:.4rem solid #ef4444;border-left:.6rem solid transparent;border-right:.6rem solid transparent;height:0;position:absolute;top:-3.2px;width:0}.arrow-up:dir(rtl){right:.625rem}.arrow-up:dir(ltr){left:.625rem}.date-toast{animation:tooltipAnimation .3s ease-out;position:relative}.availability-inputs.promotions,.availability-inputs.promotions .adult-child-counter,.availability-inputs.promotions .date-popup{flex:1 1 0%}@keyframes tooltipAnimation{0%{opacity:.6;transform:translateY(4px)}}@media (min-width:640px){.availability-container{flex-direction:row;flex-wrap:wrap;gap:1rem;justify-content:center}.availability-inputs{flex-direction:row;width:auto}.date-popup{width:100%}.adult-child-counter,.button-container{width:auto}.hidden-on-mobile{display:block}.full-width-on-mobile{display:none}.promotions-container{justify-content:flex-start;width:auto}}@media (min-width:1024px){.availability-container{flex-direction:row;flex-wrap:wrap;gap:2rem}.availability-container.promotions{justify-content:flex-start}}@media (min-width:1280px){.availability-container{gap:4rem}}.static{position:static}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.h-full{height:100%}.grid{display:grid}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-4{height:1rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline{outline-style:solid}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.mb-2{margin-bottom:.5rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.capitalize{text-transform:capitalize}.fixed{position:fixed}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.h-5{height:1.25rem}.w-5{width:1.25rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.visible{visibility:visible}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}@media (min-width:640px){.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.w-16{width:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.text-start{text-align:start}.h-24{height:6rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.size-3{height:.75rem;width:.75rem}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:768px){.md\\:p-4{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end{align-items:flex-end}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.-bottom-0{bottom:0}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.overflow-hidden{overflow:hidden}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.pt-2,.py-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.h-72{height:18rem}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrAvailabilityHeaderStyle0 = irAvailabilityHeaderCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrAvailabilityHeader = /*@__PURE__*/ proxyCustomElement(class IrAvailabilityHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.resetBooking = createEvent(this, "resetBooking", 7);
        this.scrollToRoomType = createEvent(this, "scrollToRoomType", 7);
        var _a;
        this.errorCause = null;
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
        this.validator = new QueryStringValidator();
        this.fromDate = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.ages = '';
        this.target = null;
        this.isLoading = false;
        this.exposedBookingAvailabilityParams = {
            adult_nbr: 2,
            child_nbr: 0,
            currency_ref: 'USD',
            infant_nbr: 0,
            language: 'en',
            room_type_ids: [],
            propertyid: 42,
            is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0,
        };
    }
    componentWillLoad() {
        const { property_id } = app_store.app_data;
        const validatedFromDate = this.validator.validateCheckin(this.fromDate);
        this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { adult_nbr: this.setDefaultAdultCount(), child_nbr: this.setDefaultChildCount(), from_date: validatedFromDate ? this.fromDate : null, to_date: this.validator.validateCheckout(this.toDate, validatedFromDate) ? this.toDate : null });
        if (booking_store.bookingAvailabilityParams.from_date) {
            this.exposedBookingAvailabilityParams.from_date = dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd');
            this.exposedBookingAvailabilityParams.to_date = dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd');
        }
        if (booking_store.bookingAvailabilityParams.adult_nbr) {
            this.exposedBookingAvailabilityParams.adult_nbr = booking_store.bookingAvailabilityParams.adult_nbr;
            this.exposedBookingAvailabilityParams.child_nbr = booking_store.bookingAvailabilityParams.child_nbr;
        }
        this.changeExposedAvailabilityParams({
            propertyid: property_id,
            language: app_store.userPreferences.language_id,
            currency_ref: app_store.userPreferences.currency_id,
        });
        if (booking_store.childrenAges.length == 0) {
            booking_store.childrenAges = [...Array(this.exposedBookingAvailabilityParams.child_nbr)].fill('');
        }
        this.processAges();
        onAppDataChange('userPreferences', async (newValue) => {
            this.changeExposedAvailabilityParams({
                language: newValue.language_id,
                currency_ref: newValue.currency_id,
            });
            try {
                if (app_store.currentPage === 'booking') {
                    this.resetBooking.emit(null);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        this.recheckAvailability();
    }
    handleAgesChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.processAges();
        }
    }
    handleFromDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this.validator.validateCheckin(newValue)) {
                this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { from_date: newValue });
                if (this.fromDate && this.toDate && !this.validator.validateAdultCount(this.adultCount)) {
                    this.checkAvailability();
                }
            }
        }
    }
    handleToDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            const validatedFromDate = this.validator.validateCheckin(this.fromDate);
            if (validatedFromDate) {
                if (this.validator.validateCheckout(newValue, validatedFromDate)) {
                    this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { to_date: newValue });
                    this.recheckAvailability();
                }
            }
        }
    }
    handleChildrenCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (!this.validator.validateChildrenCount(newValue)) {
                this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { child_nbr: +newValue });
                booking_store.childrenAges = [...Array(this.exposedBookingAvailabilityParams.child_nbr)].fill('');
                this.recheckAvailability();
            }
        }
    }
    handleAdultCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (!this.validator.validateAdultCount(newValue)) {
                this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { adult_nbr: +newValue });
                this.recheckAvailability();
            }
        }
    }
    handleDateChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        if (end) {
            this.changeExposedAvailabilityParams({
                from_date: dateFns.format(start, 'yyyy-MM-dd').toString(),
                to_date: dateFns.format(end, 'yyyy-MM-dd').toString(),
            });
        }
        else if (this.exposedBookingAvailabilityParams.to_date && !end) {
            this.changeExposedAvailabilityParams({
                from_date: dateFns.format(start, 'yyyy-MM-dd').toString(),
                to_date: null,
            });
        }
        else {
            this.changeExposedAvailabilityParams({ from_date: dateFns.format(start, 'yyyy-MM-dd') });
        }
        modifyQueryParam('checkin', this.exposedBookingAvailabilityParams.from_date);
        modifyQueryParam('checkout', this.exposedBookingAvailabilityParams.to_date);
        if (this.exposedBookingAvailabilityParams.adult_nbr && this.exposedBookingAvailabilityParams.from_date && this.exposedBookingAvailabilityParams.to_date) {
            this.recheckAvailability();
        }
    }
    handleAdultChildChange(e) {
        var _a, _b;
        e.stopPropagation();
        e.stopImmediatePropagation();
        const { adult_nbr, child_nbr, childrenAges, infant_nbr } = e.detail;
        booking_store.childrenAges = [...childrenAges];
        this.changeExposedAvailabilityParams({ adult_nbr, child_nbr, infant_nbr });
        modifyQueryParam('adults', (_a = this.exposedBookingAvailabilityParams.adult_nbr) === null || _a === void 0 ? void 0 : _a.toString());
        modifyQueryParam('children', (_b = this.exposedBookingAvailabilityParams.child_nbr) === null || _b === void 0 ? void 0 : _b.toString());
        if (infant_nbr) {
            modifyQueryParam('ages', encodeURIComponent(childrenAges.join('_')));
        }
    }
    setDefaultAdultCount() {
        if (this.validator.validateAdultCount(this.adultCount)) {
            return 2;
        }
        const adCountNumber = Number(this.adultCount);
        return adCountNumber > app_store.property.adult_child_constraints.adult_max_nbr ? app_store.property.adult_child_constraints.adult_max_nbr : adCountNumber;
    }
    setDefaultChildCount() {
        if (this.validator.validateChildrenCount(this.childrenCount)) {
            return 0;
        }
        const childCountNumber = Number(this.childrenCount);
        return childCountNumber > app_store.property.adult_child_constraints.child_max_nbr ? app_store.property.adult_child_constraints.child_max_nbr : childCountNumber;
    }
    recheckAvailability() {
        if (!this.fromDate || !this.toDate || !this.adultCount) {
            return;
        }
        const isValidFromDate = this.validator.validateCheckin(this.fromDate);
        const isValidToDate = this.validator.validateCheckout(this.toDate, isValidFromDate);
        const isValidAdultCount = this.validator.validateAdultCount(this.adultCount);
        if (!isValidAdultCount && isValidFromDate && isValidToDate) {
            this.checkAvailability();
        }
    }
    processAges() {
        if (this.exposedBookingAvailabilityParams.child_nbr === 0) {
            return;
        }
        if (this.validator.validateAges(this.ages)) {
            const ages = this.ages.split('_');
            ages.slice(0, this.adultCount.length + 1).forEach((age, index) => {
                booking_store.childrenAges[index] = age.toString();
            });
            const infant_nbr = calculateInfantNumber(booking_store.childrenAges);
            this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { infant_nbr });
        }
        if (this.exposedBookingAvailabilityParams.child_nbr > 0 && booking_store.childrenAges.some(c => c === '')) {
            setTimeout(() => {
                var _a;
                (_a = this.personCounter) === null || _a === void 0 ? void 0 : _a.open();
            }, 100);
        }
    }
    async checkAvailability() {
        var _a;
        const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabilityParams);
        if (app_store.app_data.injected) {
            const { from_date, to_date, adult_nbr, child_nbr, infant_nbr } = params;
            const fromDate = `checkin=${from_date}`;
            const toDate = `checkout=${to_date}`;
            const adults = `adults=${adult_nbr}`;
            const children = child_nbr > 0 ? `children=${child_nbr}` : '';
            const affiliate = app_store.app_data.affiliate ? `aff=${app_store.app_data.affiliate.afname}` : '';
            const currency = `cur=${app_store.userPreferences.currency_id}`;
            const language = `lang=${app_store.userPreferences.language_id}`;
            const loyalty = booking_store.bookingAvailabilityParams.loyalty ? 'loyalty=true' : '';
            const promo_key = booking_store.bookingAvailabilityParams.coupon ? `promo=${booking_store.bookingAvailabilityParams.coupon}` : '';
            const agent = booking_store.bookingAvailabilityParams.agent ? `agent=${booking_store.bookingAvailabilityParams.agent}` : '';
            const ages = infant_nbr > 0 && !booking_store.childrenAges.every(c => c === '') ? `ages=${booking_store.childrenAges.join('_')}` : '';
            // const queryParams = [fromDate, toDate, adults, children, affiliate, language, currency, loyalty, promo_key, agent];
            const queryParams = [fromDate, toDate, adults, ages, children, affiliate, language, currency, loyalty, promo_key, agent];
            const queryString = queryParams.filter(param => param !== '').join('&');
            return (location.href = `https://${app_store.property.perma_link}.bookingmystay.com?${queryString}`);
        }
        if (booking_store.childrenAges.length > 0 && booking_store.childrenAges.some(c => c === '') && this.exposedBookingAvailabilityParams.child_nbr > 0) {
            if (!this.errorCause) {
                this.errorCause = [];
            }
            console.log('error');
            this.errorCause.push('adult_child');
            return;
        }
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: new Date(params.from_date), to_date: new Date(params.to_date), adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
        this.scrollToRoomType.emit(null);
        booking_store.resetBooking = true;
        const _b = this.exposedBookingAvailabilityParams, rest = __rest(_b, ["infant_nbr"]);
        await this.propertyService.getExposedBookingAvailability(Object.assign(Object.assign({}, rest), { child_nbr: this.exposedBookingAvailabilityParams.child_nbr,
            // child_nbr: this.exposedBookingAvailabilityParams.child_nbr - this.exposedBookingAvailabilityParams.infant_nbr,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0, is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon, is_in_affiliate_mode: !!app_store.app_data.affiliate, affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null }));
        app_store.fetchedBooking = true;
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            await this.checkAvailability();
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.error(error.errors);
                for (const err of error.errors) {
                    if (!this.errorCause) {
                        this.errorCause = [];
                    }
                    const error_cause = err.path[0].toString();
                    if (error_cause.includes('date') && !this.errorCause.find(c => c === 'date')) {
                        this.errorCause.push('date');
                    }
                    if (error_cause.includes('nbr')) {
                        this.errorCause.push('adult_child');
                    }
                }
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    changeExposedAvailabilityParams(params) {
        this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), params);
    }
    shouldRenderErrorToast() {
        var _a, _b, _c, _d, _e;
        // Check for date-related errors
        if (((_a = this.errorCause) === null || _a === void 0 ? void 0 : _a.find(c => c === 'date')) !== undefined) {
            // Both dates must be present to clear the error
            if (this.exposedBookingAvailabilityParams.from_date && this.exposedBookingAvailabilityParams.to_date) {
                this.errorCause = (_b = this.errorCause) === null || _b === void 0 ? void 0 : _b.filter(c => c !== 'date');
            }
        }
        // Check for adult/child count related errors
        if ((_c = this.errorCause) === null || _c === void 0 ? void 0 : _c.find(c => c === 'adult_child')) {
            // There must be at least one adult to clear the error
            if (this.exposedBookingAvailabilityParams.adult_nbr > 0) {
                this.errorCause = (_d = this.errorCause) === null || _d === void 0 ? void 0 : _d.filter(c => c !== 'adult_child');
            }
        }
        return ((_e = this.errorCause) === null || _e === void 0 ? void 0 : _e.length) > 0;
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        if (this.toast_timeout) {
            clearTimeout(this.toast_timeout);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.shouldRenderErrorToast();
        const show_loyalty = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.is_loyalty);
        const show_coupon = (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.promotions) === null || _d === void 0 ? void 0 : _d.some(p => p.is_loyalty);
        const showPromotions = ((_e = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _e === void 0 ? void 0 : _e.promotions) && (show_coupon || show_loyalty);
        return (h("div", { key: 'a4a26fe0ff90e17ed64ae71c1ca5fdd161e11450', class: `availability-container ${showPromotions ? 'promotions' : ''} xl:text-cyan-50` }, h("div", { key: '996fd67806d67884bd1e7031e8b2d378dd3b3d36', class: `availability-inputs ${showPromotions ? 'promotions' : ''}` }, h("ir-date-popup", { key: '92c3bb6b00e98e04f25f17e6a98c7dc9c20a420d', "data-state": ((_f = this.errorCause) === null || _f === void 0 ? void 0 : _f.find(c => c === 'date')) ? 'error' : '', dates: {
                start: ((_g = this.exposedBookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.from_date) ? new Date(this.exposedBookingAvailabilityParams.from_date) : null,
                end: ((_h = this.exposedBookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date(this.exposedBookingAvailabilityParams.to_date) : null,
            }, class: "date-popup" }), h("ir-adult-child-counter", { key: '691a180ee8c6990198a7eb00639a1cdbdee0ffef', "data-state": ((_j = this.errorCause) === null || _j === void 0 ? void 0 : _j.find(c => c === 'adult_child')) ? 'error' : '', adultCount: this.exposedBookingAvailabilityParams.adult_nbr, childrenCount: this.exposedBookingAvailabilityParams.child_nbr, minAdultCount: 0, maxAdultCount: app_store.property.adult_child_constraints.adult_max_nbr, maxChildrenCount: app_store.property.adult_child_constraints.child_max_nbr, childMaxAge: app_store.property.adult_child_constraints.child_max_age, class: "adult-child-counter", ref: el => (this.personCounter = el), baseChildrenAges: booking_store.childrenAges }), h("div", { key: 'bf133d0b6f30225aa25120165d3549156ff883b8', class: 'hidden sm:block' }, h("ir-button", { key: '8f436c62b9aae0bbc75f7ebfecf8fce999ba2820', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary", iconName: "search", label: "Check availability" })), h("div", { key: 'a7113fe3773c0e35a78afb0634c628c18e43fd16', class: "full-width-on-mobile sm:hidden" }, h("ir-button", { key: '3dfa8edf6278e1ba754662dca623dc78a3967267', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "md", label: localizedWords.entries.Lcz_Search, buttonStyles: { width: '100%' } }))), ((_k = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _k === void 0 ? void 0 : _k.promotions) && (h("div", { key: '24ba631ef214da4e3910d107eec10f6fe2fed6c6', class: "promotions-container" }, h("ir-coupon-dialog", { key: 'f0a55d8d3f0f6ca44b64fbdf9bfb5a9abf3e217a', class: "coupon-dialog" }), h("ir-loyalty", { key: 'aa9ac400b236efee4fd0fb415e97e770eff3197e', class: "loyalty" })))));
    }
    static get watchers() { return {
        "ages": ["handleAgesChange"],
        "fromDate": ["handleFromDateChange"],
        "toDate": ["handleToDateChange"],
        "childrenCount": ["handleChildrenCountChange"],
        "adultCount": ["handleAdultCountChange"]
    }; }
    static get style() { return IrAvailabilityHeaderStyle0; }
}, [1, "ir-availability-header", {
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "adultCount": [1, "adult-count"],
        "childrenCount": [1, "children-count"],
        "ages": [1],
        "target": [32],
        "isLoading": [32],
        "exposedBookingAvailabilityParams": [32]
    }, [[0, "dateChange", "handleDateChange"], [0, "addAdultsAndChildren", "handleAdultChildChange"]], {
        "ages": ["handleAgesChange"],
        "fromDate": ["handleFromDateChange"],
        "toDate": ["handleToDateChange"],
        "childrenCount": ["handleChildrenCountChange"],
        "adultCount": ["handleAdultCountChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-availability-header", "ir-adult-child-counter", "ir-button", "ir-coupon-dialog", "ir-date-popup", "ir-date-range", "ir-dialog", "ir-icons", "ir-input", "ir-loyalty", "ir-popover", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-availability-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAvailabilityHeader);
            }
            break;
        case "ir-adult-child-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-coupon-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-loyalty":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrAvailabilityHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-availability-header2.js.map