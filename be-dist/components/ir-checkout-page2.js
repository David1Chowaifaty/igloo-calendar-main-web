import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { z, Z as ZodError } from './index4.js';
import { I as IrUserFormData, d as defineCustomElement$1 } from './ir-user-form2.js';
import { P as PropertyService } from './property.service.js';
import { a as app_store } from './app.store.js';
import { c as checkout_store } from './checkout.store.js';
import { d as defineCustomElement$m } from './ir-auth2.js';
import { d as defineCustomElement$l } from './ir-badge-group2.js';
import { d as defineCustomElement$k } from './ir-booking-details2.js';
import { d as defineCustomElement$j } from './ir-booking-summary2.js';
import { d as defineCustomElement$i } from './ir-button2.js';
import { d as defineCustomElement$h } from './ir-calendar2.js';
import { d as defineCustomElement$g } from './ir-checkbox2.js';
import { d as defineCustomElement$f } from './ir-credit-card-input2.js';
import { d as defineCustomElement$e } from './ir-dialog2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-phone-input2.js';
import { d as defineCustomElement$a } from './ir-pickup2.js';
import { d as defineCustomElement$9 } from './ir-popover2.js';
import { d as defineCustomElement$8 } from './ir-radio2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-seo-injector2.js';
import { d as defineCustomElement$5 } from './ir-signin2.js';
import { d as defineCustomElement$4 } from './ir-signup2.js';
import { d as defineCustomElement$3 } from './ir-social-button2.js';
import { d as defineCustomElement$2 } from './ir-textarea2.js';

const ZCurrency = z.object({
    code: z.string(),
    name: z.string().optional(),
    symbol: z.string(),
    id: z.coerce.number().optional(),
});

const ZAllowedLocation = z.object({
    description: z.string(),
    id: z.number(),
});
const ZVehicle = z.object({
    code: z.string(),
    description: z.string(),
    capacity: z.number(),
});
const ZPriceModel = z.object({
    code: z.string(),
    description: z.string(),
});
const ZAllowedOptions = z.object({
    amount: z.number(),
    currency: ZCurrency,
    id: z.number(),
    location: ZAllowedLocation,
    vehicle: ZVehicle,
    pricing_model: ZPriceModel,
});
const PickupFormData = z.object({
    location: z.coerce.number(),
    flight_details: z.string().nullable().default(null),
    due_upon_booking: z.string(),
    number_of_vehicles: z.number().min(1),
    currency: ZCurrency,
    arrival_time: z.string(),
    arrival_date: z.string(),
    selected_option: ZAllowedOptions,
    vehicle_type_code: z.string(),
});
z.object({
    currency: ZCurrency,
    date: z.string(),
    details: z.string(),
    hour: z.number(),
    minute: z.number(),
    nbr_of_units: z.number(),
    selected_option: ZAllowedOptions,
    total: z.number(),
});
z.object({
    code: z.string(),
    amount: z.number(),
    numberOfPersons: z.number(),
    number_of_vehicles: z.number(),
});

const irCheckoutPageCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}:host{display:block}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.visible{visibility:visible}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.justify-center{justify-content:center}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3rem*var(--tw-space-y-reverse));margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}.font-semibold{font-weight:600}@media (min-width:768px){.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:sticky{position:sticky}.lg\\:top-20{top:5rem}.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:justify-end{justify-content:flex-end}}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.size-4{height:1rem;width:1rem}.h-5{height:1.25rem}.w-5{width:1.25rem}.justify-start{justify-content:flex-start}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.hidden{display:none}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-full{height:100%}.border{border-width:1px}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.pb-2{padding-bottom:.5rem}.font-normal{font-weight:400}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.size-\\[18px\\]{height:18px;width:18px}.h-\\[3rem\\]{height:3rem}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.ml-1{margin-left:.25rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-1{gap:.25rem}.gap-3{gap:.75rem}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.pl-0{padding-left:0}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:inline-flex{display:inline-flex}.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}.md\\:flex-row{flex-direction:row}.md\\:justify-end{justify-content:flex-end}.md\\:justify-center{justify-content:center}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.mt-4{margin-top:1rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[1px\\]{height:1px}.max-h-32{max-height:8rem}.w-56{width:14rem}.min-w-\\[50px\\]{min-width:50px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-solid{border-style:solid}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.p-2{padding:.5rem}.text-center{text-align:center}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:max-w-sm{max-width:24rem}.lg\\:p-6{padding:1.5rem}}.mb-6{margin-bottom:1.5rem}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.bg-\\[hsla\\(var\\(--brand-100\\)\\2c 8\\%\\)\\]{background-color:hsla(var(--brand-100),8%)}.px-2{padding-left:.5rem;padding-right:.5rem}.pr-4{padding-right:1rem}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-\\[hsla\\(var\\(--brand-100\\)\\2c 13\\%\\)\\]:hover{background-color:hsla(var(--brand-100),13%)}@media (min-width:640px){.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.p-6{padding:1.5rem}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:items-start{align-items:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:768px){.md\\:p-4{padding:1rem}}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.pb-0{padding-bottom:0}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}@media (min-width:640px){.sm\\:pb-0{padding-bottom:0}.sm\\:pt-0{padding-top:0}}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.mb-2\\.5{margin-bottom:.625rem}";
const IrCheckoutPageStyle0 = irCheckoutPageCss;

const IrCheckoutPage = /*@__PURE__*/ proxyCustomElement(class IrCheckoutPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.routing = createEvent(this, "routing", 7);
        this.propertyService = new PropertyService();
        this.isLoading = false;
        this.error = undefined;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.error = undefined;
        this.isLoading = true;
        try {
            IrUserFormData.parse(checkout_store.userFormData);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error);
                let issues = {};
                error.issues.map(issue => (issues[issue.path[0]] = issue));
                this.error = {
                    cause: 'user',
                    issues,
                };
            }
            this.isLoading = false;
            return;
        }
        console.log('first');
        try {
            if (checkout_store.pickup.location) {
                PickupFormData.parse(checkout_store.pickup);
            }
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                let issues = {};
                error.issues.map(issue => (issues[issue.path[0]] = issue));
                this.error = {
                    cause: 'pickup',
                    issues,
                };
            }
            this.isLoading = false;
            return;
        }
        try {
            await this.propertyService.bookUser();
        }
        catch (error) {
            console.log(error);
        }
        this.isLoading = false;
    }
    render() {
        return (h(Host, { key: '38e4eea367a4bc84d66909736127870e2089e24c' }, h("ir-seo-injector", { key: '7e0281312fd85a98cd55feda4515ff3c6f76de95', pageTitle: 'checkout', pageKeywords: "checkout", pageDescription: "checkout page" }), h("main", { key: '9f4bc314c2f50df014bc0149b782910edfb66148', class: "flex w-full  flex-col justify-between gap-4 md:items-center lg:flex-row lg:items-start" }, h("section", { key: 'e68b068e8ad38d64c65321ff675b4ca84898ad41', class: "w-full space-y-12 md:max-w-4xl" }, h("div", { key: '12ce10afcb38a6dc70d81a7b3b5a30d72a66c41b', class: "flex items-center gap-2.5" }, h("ir-button", { key: 'fce507dfb86888df94d0a7f7488766ab4c224878', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            } }, h("ir-icons", { key: 'acc6fb145793e101523eb39a2dbeb4d673c22a85', name: "angle_left", slot: "btn-icon" })), h("p", { key: '094ce31ddec92c29f1c4a9237e156d64eb7bd7f1', class: "text-2xl font-semibold" }, "Complete your booking")), h("ir-user-form", { key: '274a632236ce00ac61561194c7cb7a7c2704f0d4', class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: '6b9d8b04fa9355846c906f1d6ce607e9c140ff61' }), h("ir-pickup", { key: '100b9863300bb9a785b936ed52915fe06d1f87aa', errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: 'e75471933ede19bee7b1ac6a5d048fdfb8e7c38f', class: "w-full md:flex  lg:sticky  lg:top-20 lg:max-w-md lg:justify-end" }, h("ir-booking-summary", { key: 'f28dc4ce2a0142e2009bd11e3e5e277c43391bf4', isLoading: this.isLoading })))));
    }
    static get style() { return IrCheckoutPageStyle0; }
}, [1, "ir-checkout-page", {
        "isLoading": [32],
        "error": [32]
    }, [[0, "bookingClicked", "handleBooking"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-checkout-page", "ir-auth", "ir-badge-group", "ir-booking-details", "ir-booking-summary", "ir-button", "ir-calendar", "ir-checkbox", "ir-credit-card-input", "ir-dialog", "ir-icons", "ir-input", "ir-phone-input", "ir-pickup", "ir-popover", "ir-radio", "ir-select", "ir-seo-injector", "ir-signin", "ir-signup", "ir-social-button", "ir-textarea", "ir-user-form"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-checkout-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCheckoutPage);
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-booking-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-calendar":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-credit-card-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-seo-injector":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-social-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-user-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCheckoutPage as I, defineCustomElement as d };

//# sourceMappingURL=ir-checkout-page2.js.map