import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { r as renderTime, d as dateFns, f as formatAmount } from './utils.js';
import { a as app_store, o as onAppDataChange } from './app.store.js';
import { c as checkout_store, o as onCheckoutDataChange, a as updatePickupFormData, b as updatePartialPickupFormData } from './checkout.store.js';
import { I as IMask, d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$6 } from './ir-calendar2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-popover2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

class PickupService {
    async savePickup(params, booking_nbr, is_remove) {
        try {
            const splitTime = params.arrival_time.split(':');
            await axios.post(`/Do_Pickup?Ticket=${app_store.app_data.token}`, {
                booking_nbr,
                is_remove,
                currency: params.currency,
                date: params.arrival_date,
                details: params.flight_details,
                hour: splitTime[0],
                minute: splitTime[1],
                nbr_of_units: params.number_of_vehicles,
                selected_option: params.selected_option,
                total: +params.due_upon_booking,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    transformDefaultPickupData(data) {
        const arrival_time = renderTime(data.hour) + ':' + renderTime(data.minute);
        return {
            arrival_date: data.date,
            arrival_time,
            currency: data.currency,
            due_upon_booking: data.total.toFixed(2),
            flight_details: data.details,
            location: data.selected_option.location.id,
            number_of_vehicles: data.nbr_of_units,
            selected_option: data.selected_option,
            vehicle_type_code: data.selected_option.vehicle.code,
        };
    }
    getAvailableLocations(message) {
        let locationsMap = new Map();
        app_store.property.pickup_service.allowed_options.forEach(option => {
            if (!locationsMap.has(option.location.id)) {
                locationsMap.set(option.location.id, {
                    value: message + ' ' + option.location.description,
                    id: option.location.id,
                });
            }
        });
        return Array.from(locationsMap.values());
    }
    getNumberOfVehicles(capacity, numberOfPersons) {
        let total_number_of_vehicles = Math.ceil(numberOfPersons / capacity);
        let startNumber = total_number_of_vehicles > 1 ? total_number_of_vehicles : 1;
        let bonus_number = total_number_of_vehicles > 1 ? 2 : 3;
        return Array.from({ length: total_number_of_vehicles + bonus_number }, (_, i) => startNumber + i);
    }
    getPickUpPersonStatus(code) {
        const getCodeDescription = app_store.property.pickup_service.allowed_pricing_models.find(model => model.code === code);
        if (!getCodeDescription) {
            return null;
        }
        return getCodeDescription.description;
    }
    updateDue(params) {
        const getCodeDescription = this.getPickUpPersonStatus(params.code);
        if (!getCodeDescription) {
            return;
        }
        if (getCodeDescription === 'Person') {
            return params.amount * params.numberOfPersons;
        }
        else {
            return params.amount * params.number_of_vehicles;
        }
    }
}

const irPickupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.block{display:block}.border{border-width:1px}:host{display:block}.date-range-container{background:#fff;border:1px solid var(--gray-100);border-radius:8px;box-shadow:0 12px 16px -4px rgba(16,24,40,.08),0 4px 6px -2px rgba(16,24,40,.03);box-sizing:border-box}.popover-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:var(--radius,8px);box-sizing:border-box;color:var(--gray-700);cursor:pointer;display:inline-flex;gap:16px;line-height:1;min-block-size:3rem;min-width:230px;padding:0 14px}.popover-trigger:active,.popover-trigger:focus-visible,.popover-trigger[data-state=opened]{border-color:hsl(var(--brand-300,206,100%,76%));box-shadow:0 1px 2px 0 rgba(16,24,40,.08),0 0 0 4px hsla(var(--brand-100,209,100%,91%),.2)}.trigger-label{font-size:.75rem;margin:0;padding:0;padding-block-end:.5rem;position:absolute;transform-origin:left top}.date{color:var(--gray-600);font-size:1rem;font-weight:400;inline-size:100%;line-height:1.25rem;padding-block-start:1rem}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.flex{display:flex}.w-full{width:100%}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.col-span-2{grid-column:span 2/span 2}.col-span-5{grid-column:span 5/span 5}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.hidden{display:none}.w-60{width:15rem}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-md{border-radius:.375rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.p-2{padding:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:block{display:block}.md\\:inline{display:inline}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-auto{width:auto}.md\\:w-fit{width:fit-content}.md\\:w-full{width:100%}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-normal{justify-content:normal}.md\\:justify-start{justify-content:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:gap-4{gap:1rem}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:col-span-1{grid-column:span 1/span 1}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:col-span-5{grid-column:span 5/span 5}.lg\\:col-span-6{grid-column:span 6/span 6}.lg\\:block{display:block}.lg\\:grid{display:grid}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.lg\\:gap-4{gap:1rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (min-width:1280px){.xl\\:col-span-2{grid-column:span 2/span 2}.xl\\:col-span-5{grid-column:span 5/span 5}}.flex-col-reverse{flex-direction:column-reverse}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3rem*var(--tw-space-y-reverse));margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)))}@media (min-width:768px){.md\\:max-w-2xl{max-width:42rem}.md\\:max-w-4xl{max-width:56rem}.md\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:sticky{position:sticky}.lg\\:top-0{top:0}.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}}.mb-8{margin-bottom:2rem}.mt-8{margin-top:2rem}.w-fit{width:fit-content}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.p-4{padding:1rem}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.outline{outline-style:solid}@media (min-width:640px){.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}.sm\\:p-6{padding:1.5rem}}.h-3{height:.75rem}.h-full{height:100%}.w-5{width:1.25rem}.items-end{align-items:flex-end}.gap-3{gap:.75rem}.border-0{border-width:0}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:w-3{width:.75rem}.md\\:p-4{padding:1rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.flex-wrap{flex-wrap:wrap}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.size-10{height:2.5rem;width:2.5rem}.w-32{width:8rem}.border-t{border-top-width:1px}.object-contain{object-fit:contain}@media (min-width:768px){.md\\:flex-col{flex-direction:column}}.w-\\[30rem\\]{width:30rem}.space-y-\\[0\\.75rem\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}@media (min-width:640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.visible{visibility:visible}.size-4{width:1rem}.h-4,.size-4{height:1rem}.h-5{height:1.25rem}.w-4{width:1rem}.rounded{border-radius:.25rem}.border-\\[var\\(--gray-300\\2c \\#D0D5DD\\)\\]{border-color:var(--gray-300,#d0d5dd)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.text-\\[var\\(--gray-600\\)\\]{color:var(--gray-600)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-10{height:2.5rem}.h-14{height:3.5rem}.w-auto{width:auto}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.object-fill{object-fit:fill}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.max-h-\\[90vh\\]{max-height:90vh}.pt-4{padding-top:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}@media (min-width:768px){.md\\:p-6{padding:1.5rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:pb-6{padding-bottom:1.5rem}.md\\:pt-6{padding-top:1.5rem}}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.object-cover{object-fit:cover}.pb-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}@media (min-width:768px){.md\\:max-h-\\[150px\\]{max-height:150px}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:hidden{display:none}.lg\\:max-h-\\[200px\\]{max-height:200px}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.ml-4{margin-left:1rem}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:items-center{align-items:center}}@media (min-width:768px){.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.mx-auto{margin-left:auto;margin-right:auto}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.w-56{width:14rem}.max-w-\\[30px\\]{max-width:30px}.max-w-\\[60\\%\\]{max-width:60%}.max-w-xs{max-width:20rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.ml-1{margin-left:.25rem}.line-clamp-2{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden}.pl-0{padding-left:0}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:1280px){.xl\\:block{display:block}.xl\\:hidden{display:none}.xl\\:max-w-\\[65\\%\\]{max-width:65%}}.ml-3{margin-left:.75rem}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.w-72{width:18rem}.max-w-\\[65\\%\\]{max-width:65%}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-\\[3rem\\]{height:3rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.mt-3{margin-top:.75rem}.mt-6{margin-top:1.5rem}.max-w-72{max-width:18rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}";
const IrPickupStyle0 = irPickupCss;

const IrPickup = /*@__PURE__*/ proxyCustomElement(class IrPickup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pickupService = new PickupService();
        this.time_mask = {
            mask: 'HH:MM',
            blocks: {
                HH: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 23,
                    maxLength: 2,
                    placeholderChar: 'H',
                },
                MM: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 59,
                    maxLength: 2,
                    placeholderChar: 'M',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
        this.errors = undefined;
        this.vehicleCapacity = [];
        this.allowedOptionsByLocation = [];
    }
    componentWillLoad() {
        this.oldCurrencyValue = app_store.userPreferences.currency_id;
        this.updateCurrency();
        onAppDataChange('userPreferences', newValue => {
            if (newValue.currency_id !== this.oldCurrencyValue) {
                this.updateCurrency();
            }
        });
        if (checkout_store.pickup.location) {
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(checkout_store.pickup.selected_option.vehicle.capacity, 3);
            this.allowedOptionsByLocation = app_store.property.pickup_service.allowed_options.filter(option => option.location.id.toString() === checkout_store.pickup.location.toString());
        }
        onCheckoutDataChange('pickup', newValue => {
            if (newValue.location) {
                this.vehicleCapacity = this.pickupService.getNumberOfVehicles(newValue.selected_option.vehicle.capacity, 3);
                this.allowedOptionsByLocation = app_store.property.pickup_service.allowed_options.filter(option => option.location.id.toString() === newValue.location.toString());
            }
        });
    }
    updateCurrency() {
        const currency = app_store.currencies.find(c => c.code === app_store.userPreferences.currency_id);
        updatePickupFormData('currency', currency);
    }
    dateTrigger() {
        return (h("div", { class: "popover-trigger w-full ", slot: "trigger" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "12.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })), h("div", null, h("p", { class: "trigger-label" }, "Arrival date"), h("p", { class: 'date' }, dateFns.format(new Date(checkout_store.pickup.arrival_date), 'MMM dd, yyyy')))));
    }
    handleChangeDate(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        updatePickupFormData('arrival_date', dateFns.format(e.detail, 'yyyy-MM-dd'));
        this.popover.toggleVisibility();
    }
    handleVehicleTypeChange(e) {
        if (e.detail === '') {
            updatePartialPickupFormData({ due_upon_booking: '', vehicle_type_code: '' });
            return;
        }
        let locationChoice = app_store.property.pickup_service.allowed_options.find(option => option.location.id === +checkout_store.pickup.location && option.vehicle.code === e.detail);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = [...this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, 3)];
        updatePartialPickupFormData({
            selected_option: locationChoice,
            number_of_vehicles: this.vehicleCapacity[0],
            due_upon_booking: this.pickupService
                .updateDue({
                amount: locationChoice.amount,
                code: locationChoice.pricing_model.code,
                numberOfPersons: 3,
                number_of_vehicles: this.vehicleCapacity[0],
            })
                .toFixed(2),
            vehicle_type_code: locationChoice.vehicle.code,
        });
    }
    handleLocationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (value === '-1') {
            updatePickupFormData('location', null);
        }
        if (value !== '-1') {
            this.allowedOptionsByLocation = app_store.property.pickup_service.allowed_options.filter(option => option.location.id.toString() === value);
            let locationChoice = this.allowedOptionsByLocation[0];
            if (!locationChoice) {
                return;
            }
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, 3);
            updatePartialPickupFormData({
                location: value,
                selected_option: locationChoice,
                number_of_vehicles: this.vehicleCapacity[0],
                due_upon_booking: this.pickupService
                    .updateDue({
                    amount: locationChoice.amount,
                    code: locationChoice.pricing_model.code,
                    numberOfPersons: 3,
                    number_of_vehicles: this.vehicleCapacity[0],
                })
                    .toFixed(2),
                vehicle_type_code: locationChoice.vehicle.code,
                currency: locationChoice.currency,
            });
        }
    }
    handleVehicleQuantityChange(e) {
        if (e.detail === '') {
            return;
        }
        const value = +e.detail;
        updatePartialPickupFormData({
            number_of_vehicles: value,
            due_upon_booking: this.pickupService
                .updateDue({
                amount: checkout_store.pickup.selected_option.amount,
                code: checkout_store.pickup.selected_option.pricing_model.code,
                numberOfPersons: 3,
                number_of_vehicles: value,
            })
                .toFixed(2),
        });
    }
    render() {
        var _a;
        return (h("section", { key: 'be46d6554c5da8d43e15a07d42e4c1bd013f7a36', class: "space-y-5" }, h("div", { key: '423255f664ece4bd9e4042adf41b4745d950f4fe', class: "bg-gray-100 py-2 px-4 rounded-md flex items-center gap-2" }, h("ir-icons", { key: 'd1794ec5eaad95803f7b0203d0cab2772aba62fe', name: "car" }), h("p", { key: '096e4006478f7abd718efc35dd15bec3325ee3d4' }, "Need Pickup?"), h("ir-select", { key: '21a40979fff30ad5e697933ef71a292266080d13', value: (_a = checkout_store.pickup) === null || _a === void 0 ? void 0 : _a.location, onValueChange: this.handleLocationChange.bind(this), data: [{ id: -1, value: 'No thank you' }, ...this.pickupService.getAvailableLocations('yes from')] })), checkout_store.pickup.location && (h("div", { class: 'flex items-center  justify-between' }, h("div", { class: "space-y-5 flex-1 max-w-[65%]" }, h("div", { class: 'flex items-center gap-4' }, h("ir-popover", { ref: el => (this.popover = el), class: "w-fit" }, this.dateTrigger(), h("div", { slot: "popover-content", class: "date-range-container p-2 md:p-4 border-0 w-full shadow-none sm:border sm:w-auto sm:shadow-sm " }, h("ir-calendar", null))), h("ir-input", { onTextChanged: e => updatePickupFormData('arrival_time', e.detail), label: "Arrival hour", mask: this.time_mask, type: "text", id: "time-input" })), h("div", null, h("ir-input", { label: "Flight details", placeholder: "", value: checkout_store.pickup.flight_details, onTextChanged: e => updatePickupFormData('flight_details', e.detail) })), h("div", { class: "flex flex-1 items-center gap-4" }, h("ir-select", { value: checkout_store.pickup.vehicle_type_code, data: this.allowedOptionsByLocation.map(option => ({
                id: option.vehicle.code,
                value: option.vehicle.description,
            })), onValueChange: this.handleVehicleTypeChange.bind(this), class: "w-full", label: "Car model", variant: "double-line" }), h("ir-select", { value: checkout_store.pickup.number_of_vehicles, onValueChange: this.handleVehicleQuantityChange.bind(this), class: "w-72", data: this.vehicleCapacity.map(i => ({
                id: i,
                value: i.toString(),
            })), label: "No. of vehicles", variant: "double-line" }))), h("div", { class: "text-right " }, h("p", { class: "font-medium text-base xl:text-xl" }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))))));
    }
    get el() { return this; }
    static get style() { return IrPickupStyle0; }
}, [1, "ir-pickup", {
        "errors": [16],
        "vehicleCapacity": [32],
        "allowedOptionsByLocation": [32]
    }, [[0, "dateChange", "handleChangeDate"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pickup", "ir-calendar", "ir-dialog", "ir-icons", "ir-input", "ir-popover", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPickup);
            }
            break;
        case "ir-calendar":
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

export { IrPickup as I, defineCustomElement as d };

//# sourceMappingURL=ir-pickup2.js.map