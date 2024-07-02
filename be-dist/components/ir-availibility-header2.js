import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { z, Z as ZodError } from './index4.js';
import { a as app_store, o as onAppDataChange } from './app.store.js';
import { P as PropertyService } from './property.service.js';
import { b as booking_store } from './booking.js';
import { A as AvailabiltyService } from './availability.service.js';
import { d as defineCustomElement$a } from './ir-adult-child-counter2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-coupon-dialog2.js';
import { d as defineCustomElement$7 } from './ir-date-popup2.js';
import { d as defineCustomElement$6 } from './ir-date-range2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-loyalty2.js';
import { d as defineCustomElement$1 } from './ir-popover2.js';
import { v as v4 } from './v4.js';
import { d as dateFns } from './utils.js';

const ExposedBookingAvailability = z.object({
    propertyid: z.coerce.number(),
    from_date: z.string().min(2),
    to_date: z.string().min(2),
    room_type_ids: z.string().array().optional().default([]),
    adult_nbr: z.number().min(1),
    child_nbr: z.number().min(0),
    language: z.string().default('en'),
    currency_ref: z.string(),
    is_in_loyalty_mode: z.boolean().default(false),
    promo_key: z.string(),
    is_in_agent_mode: z.boolean().default(false),
    agent_id: z.number().default(0).optional(),
});

const irAvailibilityHeaderCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.availability-container{background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),.75rem);padding:1rem}.availability-container,.availability-inputs{align-items:center;display:flex;flex-direction:column;gap:1rem}.adult-child-counter,.availability-inputs,.button-container,.date-popup{width:100%}.availability-controls{align-items:center;display:flex;gap:1rem;width:100%}.availability-controls ir-adult-child-counter{flex:1 1 0%;width:100%}.date-toast .toast-message{background-color:#ef4444;border-radius:.375rem;color:#fff;font-size:.875rem;padding:.25rem 1.25rem}.button-container{display:flex;flex-direction:column}.hidden-on-mobile{display:none}.full-width-on-mobile{display:block;width:100%}.promotions-container{align-items:center;display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;width:100%}.arrow-up{animation:tooltipAnimation .3s ease-out;border-bottom:.4rem solid #ef4444;border-left:.6rem solid transparent;border-right:.6rem solid transparent;height:0;position:absolute;top:-3.2px;width:0}.arrow-up:dir(rtl){right:.625rem}.arrow-up:dir(ltr){left:.625rem}.date-toast{animation:tooltipAnimation .3s ease-out;position:relative}@keyframes tooltipAnimation{0%{opacity:.6;transform:translateY(4px)}}@media (min-width:640px){.availability-container{flex-direction:row;flex-wrap:wrap;gap:1rem;justify-content:center}.availability-inputs{flex-direction:row;width:auto}.date-popup{width:100%}.adult-child-counter,.button-container{width:auto}.hidden-on-mobile{display:block}.full-width-on-mobile{display:none}.promotions-container{justify-content:flex-start;width:auto}}@media (min-width:1024px){.availability-container{flex-direction:row;flex-wrap:wrap;gap:4rem;justify-content:center}}.static{position:static}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-full{height:100%}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:768px){.md\\:text-right{text-align:right}}.grid{display:grid}.h-screen{height:100vh}.max-w-md{max-width:28rem}.place-content-center{place-content:center}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}.font-semibold{font-weight:600}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.right-3{right:.75rem}.top-3{top:.75rem}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.visible{visibility:visible}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.size-4{height:1rem;width:1rem}.pb-2{padding-bottom:.5rem}.font-normal{font-weight:400}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.py-4{padding-bottom:1rem;padding-top:1rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:768px){.md\\:block{display:block}}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.pl-0{padding-left:0}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-end{text-align:end}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:768px){.md\\:p-4{padding:1rem}}.size-3{height:.75rem;width:.75rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end{align-items:flex-end}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.-bottom-0{bottom:0}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4{padding-bottom:1rem}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrAvailibilityHeaderStyle0 = irAvailibilityHeaderCss;

const IrAvailibilityHeader = /*@__PURE__*/ proxyCustomElement(class IrAvailibilityHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.resetBooking = createEvent(this, "resetBooking", 7);
        this.scrollToRoomType = createEvent(this, "scrollToRoomType", 7);
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
        this.availabiltyService = new AvailabiltyService();
        this.fromDate = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.exposedBookingAvailabiltyParams = {
            adult_nbr: 0,
            child_nbr: 0,
            currency_ref: 'USD',
            language: 'en',
            room_type_ids: [],
            propertyid: 42,
            is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: booking_store.bookingAvailabilityParams.agent || 0,
        };
        this.target = null;
        this.errorCause = null;
        this.isLoading = false;
    }
    // private popperInstance: any;
    // private personCounter: HTMLIrAdultChildCounterElement;
    componentWillLoad() {
        const { token, property_id } = app_store.app_data;
        this.propertyService.setToken(token);
        this.availabiltyService.subscribe(() => this.disableLoading());
        this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { adult_nbr: +this.adultCount || 0, child_nbr: +this.childrenCount || 0, from_date: this.fromDate, to_date: this.toDate });
        if (booking_store.bookingAvailabilityParams.from_date) {
            this.exposedBookingAvailabiltyParams.from_date = dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd');
            this.exposedBookingAvailabiltyParams.to_date = dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd');
        }
        if (booking_store.bookingAvailabilityParams.adult_nbr) {
            this.exposedBookingAvailabiltyParams.adult_nbr = booking_store.bookingAvailabilityParams.adult_nbr;
            this.exposedBookingAvailabiltyParams.child_nbr = booking_store.bookingAvailabilityParams.child_nbr;
        }
        this.changeExposedAvailabilityParams({
            propertyid: property_id,
            language: app_store.userPreferences.language_id,
            currency_ref: app_store.userPreferences.currency_id,
        });
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
            catch (error) { }
        });
        if (this.fromDate && this.toDate && this.adultCount) {
            this.checkAvailability();
        }
    }
    disableLoading() {
        if (this.isLoading) {
            this.isLoading = false;
        }
    }
    handleFromDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { from_date: newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    handleToDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { to_date: newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    handleChildrenCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { child_nbr: +newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    handleAdultCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { adult_nbr: +newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    async checkAvailability() {
        const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabiltyParams);
        this.identifier = v4();
        this.availabiltyService.initSocket(this.identifier);
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: new Date(params.from_date), to_date: new Date(params.to_date), adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
        await this.propertyService.getExposedBookingAvailability({
            params: Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: booking_store.bookingAvailabilityParams.agent || 0, is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon }),
            identifier: this.identifier,
            mode: 'default',
        });
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            if (window.innerWidth < 640) {
                this.scrollToRoomType.emit(null);
            }
            await this.checkAvailability();
            app_store.fetchedBooking = true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.errors);
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
        this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), params);
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
        else if (this.exposedBookingAvailabiltyParams.to_date && !end) {
            this.changeExposedAvailabilityParams({
                from_date: dateFns.format(start, 'yyyy-MM-dd').toString(),
                to_date: null,
            });
        }
        else {
            this.changeExposedAvailabilityParams({ from_date: dateFns.format(start, 'yyyy-MM-dd') });
        }
    }
    handleAdultChildChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.changeExposedAvailabilityParams(Object.assign({}, e.detail));
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        if (this.toast_timeout) {
            clearTimeout(this.toast_timeout);
        }
        this.availabiltyService.unsubscribe(() => this.disableLoading());
        this.availabiltyService.disconnectSocket();
    }
    shouldRenderErrorToast() {
        var _a, _b, _c, _d, _e;
        // Check for date-related errors
        if (((_a = this.errorCause) === null || _a === void 0 ? void 0 : _a.find(c => c === 'date')) !== undefined) {
            // Both dates must be present to clear the error
            if (this.exposedBookingAvailabiltyParams.from_date && this.exposedBookingAvailabiltyParams.to_date) {
                this.errorCause = (_b = this.errorCause) === null || _b === void 0 ? void 0 : _b.filter(c => c !== 'date');
            }
        }
        // Check for adult/child count related errors
        if ((_c = this.errorCause) === null || _c === void 0 ? void 0 : _c.find(c => c === 'adult_child')) {
            // There must be at least one adult to clear the error
            if (this.exposedBookingAvailabiltyParams.adult_nbr > 0) {
                this.errorCause = (_d = this.errorCause) === null || _d === void 0 ? void 0 : _d.filter(c => c !== 'adult_child');
            }
        }
        return ((_e = this.errorCause) === null || _e === void 0 ? void 0 : _e.length) > 0;
    }
    render() {
        var _a, _b, _c, _d, _e;
        this.shouldRenderErrorToast();
        return (h("div", { key: '0ea72e48511c2f9e2bc6c77ce4ca6562b4921db1', class: "availability-container" }, h("div", { key: 'a53d0e2586446f88ddf716fa720cf680107e767c', class: "availability-inputs" }, h("ir-date-popup", { key: 'f4ad4d3eb7213ad5de65fa3fa3461b92963067c0', "data-state": ((_a = this.errorCause) === null || _a === void 0 ? void 0 : _a.find(c => c === 'date')) ? 'error' : '', dates: {
                start: ((_b = this.exposedBookingAvailabiltyParams) === null || _b === void 0 ? void 0 : _b.from_date) ? new Date(this.exposedBookingAvailabiltyParams.from_date) : null,
                end: ((_c = this.exposedBookingAvailabiltyParams) === null || _c === void 0 ? void 0 : _c.to_date) ? new Date(this.exposedBookingAvailabiltyParams.to_date) : null,
            }, class: "date-popup" }), h("div", { key: 'b2f1afa55ddbdc01da4aed0b0cf2a267dc23f6c8', class: "availability-controls" }, h("ir-adult-child-counter", { key: 'fb47351765fe7427752ac2bd33248953e15cb537', "data-state": ((_d = this.errorCause) === null || _d === void 0 ? void 0 : _d.find(c => c === 'adult_child')) ? 'error' : '', adultCount: this.exposedBookingAvailabiltyParams.adult_nbr, childrenCount: this.exposedBookingAvailabiltyParams.child_nbr, minAdultCount: 0, maxAdultCount: app_store.property.adult_child_constraints.adult_max_nbr, maxChildrenCount: app_store.property.adult_child_constraints.child_max_nbr, childMaxAge: app_store.property.adult_child_constraints.child_max_age, class: "adult-child-counter" }), h("ir-button", { key: '059606a61b8a5765b749e419d1b472f6e46b268c', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary", iconName: "search" }))), ((_e = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _e === void 0 ? void 0 : _e.promotions) && (h("div", { key: '972345e816ae675edf17714d249b3faa344afc4f', class: "promotions-container" }, h("ir-coupon-dialog", { key: '0c4ef8dbfcda3a969e38ef86f9cee4e2a604d86e', class: "coupon-dialog" }), h("ir-loyalty", { key: 'd18e2fdbde0b03fac5cfbfcf2ca1210d514429b9', class: "loyalty" })))));
    }
    static get watchers() { return {
        "fromDate": ["handleFromDateChange"],
        "toDate": ["handleToDateChange"],
        "childrenCount": ["handleChildrenCountChange"],
        "adultCount": ["handleAdultCountChange"]
    }; }
    static get style() { return IrAvailibilityHeaderStyle0; }
}, [1, "ir-availibility-header", {
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "adultCount": [1, "adult-count"],
        "childrenCount": [1, "children-count"],
        "exposedBookingAvailabiltyParams": [32],
        "target": [32],
        "errorCause": [32],
        "isLoading": [32]
    }, [[0, "dateChange", "handleDateChange"], [0, "addAdultsAndChildren", "handleAdultChildChange"]], {
        "fromDate": ["handleFromDateChange"],
        "toDate": ["handleToDateChange"],
        "childrenCount": ["handleChildrenCountChange"],
        "adultCount": ["handleAdultCountChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-availibility-header", "ir-adult-child-counter", "ir-button", "ir-coupon-dialog", "ir-date-popup", "ir-date-range", "ir-dialog", "ir-icons", "ir-input", "ir-loyalty", "ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-availibility-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAvailibilityHeader);
            }
            break;
        case "ir-adult-child-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-coupon-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-loyalty":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrAvailibilityHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-availibility-header2.js.map