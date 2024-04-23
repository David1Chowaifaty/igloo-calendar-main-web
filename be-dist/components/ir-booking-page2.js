import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { u as updateRoomParams, b as booking_store, r as reserveRooms, c as calculateTotalCost, g as getVisibleInventory } from './booking.js';
import { a as app_store, o as onAppDataChange } from './app.store.js';
import { c as cn, f as formatAmount, g as getDateDifference } from './utils.js';
import { d as defineCustomElement$j } from './ir-accomodations2.js';
import { d as defineCustomElement$i } from './ir-adult-child-counter2.js';
import { d as defineCustomElement$h } from './ir-availibility-header2.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-carousel2.js';
import { d as defineCustomElement$e } from './ir-coupon-dialog2.js';
import { d as defineCustomElement$d } from './ir-date-popup2.js';
import { d as defineCustomElement$c } from './ir-date-range2.js';
import { d as defineCustomElement$b } from './ir-dialog2.js';
import { d as defineCustomElement$a } from './ir-facilities2.js';
import { d as defineCustomElement$9 } from './ir-gallery2.js';
import { d as defineCustomElement$8 } from './ir-icons2.js';
import { d as defineCustomElement$7 } from './ir-input2.js';
import { d as defineCustomElement$6 } from './ir-loyalty2.js';
import { d as defineCustomElement$5 } from './ir-popover2.js';
import { d as defineCustomElement$4 } from './ir-property-gallery2.js';
import { d as defineCustomElement$3 } from './ir-room-type-amenities2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irBookingPageCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.m-0{margin:0}.block{display:block}.flex{display:flex}.table{caption-side:bottom;color:var(--gray-900);display:table;font-size:.875rem;line-height:1.25rem;width:100%}.table-cell{display:table-cell}.table-row{border-bottom-width:1px;border-color:var(--gray-200);display:table-row;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.border{border-width:1px}.p-0{padding:0}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.app_container{border-radius:min(var(--radius,8px),8px)!important}.trigger-container{min-block-size:3rem}.table-header{background:var(--gray-50);border-bottom:1px solid var(--gray-200);color:var(--gray-600);font-size:12px}.table-header th:first-child{border-top-left-radius:var(--radius)}.table-header th:last-child{border-top-right-radius:var(--radius)}.table-header:hover,.table-row:hover{background:var(--gray-100)}.table-header tr{border-bottom:1px solid var(--gray-200)}.table-footer{border-top:1px solid var(--gray-200);font-weight:500}.table-footer tr:last-child{border-bottom-width:0}.table-head{font-weight:500;height:2.5rem;text-align:left}.table-cell,.table-head{padding:.75rem 1.5rem;vertical-align:middle}.table-container{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius)}.carousel-container{aspect-ratio:4/3}.bounce-twice{animation:bounce .5s ease-in-out 2}.flex-wrap p{overflow-wrap:break-word;word-break:break-word}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.w-full{width:100%}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.col-span-2{grid-column:span 2/span 2}.col-span-5{grid-column:span 5/span 5}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.hidden{display:none}.w-60{width:15rem}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-md{border-radius:.375rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.p-2{padding:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:block{display:block}.md\\:inline{display:inline}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-auto{width:auto}.md\\:w-fit{width:fit-content}.md\\:w-full{width:100%}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-normal{justify-content:normal}.md\\:justify-start{justify-content:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:gap-4{gap:1rem}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:col-span-1{grid-column:span 1/span 1}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:col-span-5{grid-column:span 5/span 5}.lg\\:col-span-6{grid-column:span 6/span 6}.lg\\:block{display:block}.lg\\:grid{display:grid}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.lg\\:gap-4{gap:1rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (min-width:1280px){.xl\\:col-span-2{grid-column:span 2/span 2}.xl\\:col-span-5{grid-column:span 5/span 5}}.flex-col-reverse{flex-direction:column-reverse}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3rem*var(--tw-space-y-reverse));margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)))}@media (min-width:768px){.md\\:max-w-2xl{max-width:42rem}.md\\:max-w-4xl{max-width:56rem}.md\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:sticky{position:sticky}.lg\\:top-0{top:0}.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}}.mb-8{margin-bottom:2rem}.mt-8{margin-top:2rem}.w-fit{width:fit-content}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.p-4{padding:1rem}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.outline{outline-style:solid}@media (min-width:640px){.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}.sm\\:p-6{padding:1.5rem}}.h-3{height:.75rem}.h-full{height:100%}.w-5{width:1.25rem}.items-end{align-items:flex-end}.gap-3{gap:.75rem}.border-0{border-width:0}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:w-3{width:.75rem}.md\\:p-4{padding:1rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.grid{display:grid}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.size-10{height:2.5rem;width:2.5rem}.w-32{width:8rem}.border-t{border-top-width:1px}.object-contain{object-fit:contain}@media (min-width:768px){.md\\:flex-col{flex-direction:column}}.w-\\[30rem\\]{width:30rem}.space-y-\\[0\\.75rem\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}@media (min-width:640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.visible{visibility:visible}.size-4{width:1rem}.h-4,.size-4{height:1rem}.h-5{height:1.25rem}.w-4{width:1rem}.rounded{border-radius:.25rem}.border-\\[var\\(--gray-300\\2c \\#D0D5DD\\)\\]{border-color:var(--gray-300,#d0d5dd)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.text-\\[var\\(--gray-600\\)\\]{color:var(--gray-600)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-10{height:2.5rem}.h-14{height:3.5rem}.w-auto{width:auto}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.object-fill{object-fit:fill}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.max-h-\\[90vh\\]{max-height:90vh}.pt-4{padding-top:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}@media (min-width:768px){.md\\:p-6{padding:1.5rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:pb-6{padding-bottom:1.5rem}.md\\:pt-6{padding-top:1.5rem}}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.object-cover{object-fit:cover}.pb-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}@media (min-width:768px){.md\\:max-h-\\[150px\\]{max-height:150px}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:hidden{display:none}.lg\\:max-h-\\[200px\\]{max-height:200px}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.ml-4{margin-left:1rem}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:items-center{align-items:center}}@media (min-width:768px){.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.mx-auto{margin-left:auto;margin-right:auto}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.w-56{width:14rem}.max-w-\\[30px\\]{max-width:30px}.max-w-\\[60\\%\\]{max-width:60%}.max-w-xs{max-width:20rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.ml-1{margin-left:.25rem}.line-clamp-2{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden}.pl-0{padding-left:0}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:1280px){.xl\\:block{display:block}.xl\\:hidden{display:none}.xl\\:max-w-\\[65\\%\\]{max-width:65%}}.ml-3{margin-left:.75rem}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.absolute{position:absolute}.w-72{width:18rem}.max-w-\\[65\\%\\]{max-width:65%}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-\\[3rem\\]{height:3rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.mt-3{margin-top:.75rem}.mt-6{margin-top:1.5rem}.max-w-72{max-width:18rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}";
const IrBookingPageStyle0 = irBookingPageCss;

const IrBookingPage = /*@__PURE__*/ proxyCustomElement(class IrBookingPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.routing = createEvent(this, "routing", 7);
        this.selectedLocale = undefined;
        this.property = undefined;
        this.currencies = undefined;
        this.languages = undefined;
    }
    componentWillLoad() {
        this.property = Object.assign({}, app_store.property);
        onAppDataChange('property', (newValue) => {
            console.log(newValue);
            this.property = Object.assign({}, newValue);
        });
    }
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    render() {
        var _a, _b, _c, _d;
        return (h(Host, { key: '4684cfee6c4b5bce969f8cd38825015e9291ae6c' }, h("div", { key: '1cdcae2d33b2d043813b513873220e5bb51e90be', class: "space-y-5" }, h("div", { key: '5e10eb610f7ba2189838bc12f61ce05d1546d092' }, h("ir-property-gallery", { key: '39a6d4dd1dd6f614a041ef93c99eee0977f07ece', exposed_property: this.property })), h("div", { key: 'ce7dfe3e0193206972afac3bca5bad6df5cc79f3' }, h("ir-availibility-header", { key: '75471bfbfa7eea483f950bb5521b021e486900ab' })), h("section", { key: 'ada24a04870bb993c03523dd234bc802c6fd80fc', class: "relative rounded-md gap-4 justify-between " }, h("div", { key: '3e1517627a84e0cb97c30d9c3f2f86edd0ad6aa2', class: "divide-y flex-1 py-2" }, (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => {
            if (!roomType.is_active || roomType.images.length <= 0 || (roomType.inventory <= 0 && booking_store.enableBooking)) {
                return null;
            }
            return (h("section", { class: "flex flex-col  justify-start gap-4 mb-4   md:flex-row" }, h("aside", { class: "hidden md:block" }, h("ir-property-gallery", { property_state: "carousel", roomType: roomType, exposed_property: this.property })), h("div", { class: "space-y-1 w-full flex-1 py-2" }, h("h3", { class: "text-slate-900  font-medium text-lg " }, roomType.name), h("div", { class: "md:hidden" }, h("ir-property-gallery", { property_state: "carousel", roomType: roomType, exposed_property: this.property })), h("div", { class: "hidden lg:block" }, h("ir-accomodations", { bookingAttributes: {
                    max_occupancy: roomType.occupancy_max.adult_nbr,
                    bedding_setup: roomType.bedding_setup,
                }, amenities: this.property.amenities })), booking_store.enableBooking ? (roomType.rateplans.map(ratePlan => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (!ratePlan.is_active) {
                    return null;
                }
                if (!ratePlan.variations) {
                    return null;
                }
                const visibleInventory = getVisibleInventory(roomType.id, ratePlan.id);
                return (h("div", { key: ratePlan.id, class: "bg-gray-100 app_container w-full p-2 flex flex-col lg:grid lg:grid-cols-7 lg:gap-4 space-y-1 text-sm" }, h("div", { class: cn('flex justify-between md:justify-start w-full md:w-fit', {
                        'lg:col-span-1 xl:col-span-2': !ratePlan.custom_text,
                    }) }, h("p", { class: "line-clamp-3 font-semibold" }, ratePlan.short_name, h("span", { class: "hidden md:inline text-slate-700 text-sm" }, ratePlan.custom_text)), visibleInventory.reserved > 0 && (h("div", { class: "flex items-start gap-1 md:hidden" }, h("p", { class: "font-medium" }, formatAmount((_a = visibleInventory.selected_variation) === null || _a === void 0 ? void 0 : _a.amount, app_store.userPreferences.currency_id)), h("p", { class: "font-medium line-through text-red-500" }, formatAmount((_b = visibleInventory.selected_variation) === null || _b === void 0 ? void 0 : _b.total_before_discount, app_store.userPreferences.currency_id))))), h("p", { class: "md:hidden line-clamp-3 text-slate-700 text-xs" }, ratePlan.custom_text), h("div", { class: cn('w-full space-y-2  flex flex-col md:space-y-0  md:justify-between md:flex-row md:items-start lg:grid lg:grid-cols-5 lg:col-span-5 lg:gap-4', {
                        'lg:col-span-6 xl:col-span-5': !ratePlan.custom_text,
                        'md:justify-normal md:gap-4': visibleInventory.reserved === 0,
                    }) }, h("div", { class: cn('lg:col-span-2', {
                        'md:w-full': visibleInventory.reserved === 0,
                    }) }, h("ir-select", { class: "w-full md:w-auto", label: "Travelers", value: (_c = visibleInventory.selected_variation) === null || _c === void 0 ? void 0 : _c.adult_child_offering, onValueChange: e => {
                        this.handleVariationChange(e, ratePlan.variations, ratePlan.id, roomType.id);
                    }, data: ratePlan.variations.map(v => ({
                        id: v.adult_child_offering,
                        value: `${v.adult_nbr} adults - ${v.child_nbr} children`,
                    })) }), h("div", { class: "hidden md:flex items-center gap-4" }, h("p", null, "Cancelation conditions"), h("ir-tooltip", { class: "text-gray-700 flex items-center justify-center", message: ratePlan.cancelation }))), visibleInventory.reserved > 0 && (h("div", { class: "hidden md:flex items-center gap-1 flex-col justify-between" }, h(Fragment, null, h("p", { class: "font-medium line-through" }, formatAmount((_d = visibleInventory.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)), h("p", { class: "font-medium  text-red-500" }, "%", (_e = visibleInventory.selected_variation) === null || _e === void 0 ? void 0 :
                    _e.discount_pct)))), visibleInventory.reserved > 0 && (h("div", { class: "hidden md:flex items-center  flex-col justify-between" }, h(Fragment, null, h("p", { class: "font-medium text-lg" }, formatAmount((_f = visibleInventory.selected_variation) === null || _f === void 0 ? void 0 : _f.amount, app_store.userPreferences.currency_id)), h("p", { class: "font-medium text-xs" }, (_g = visibleInventory.selected_variation) === null || _g === void 0 ? void 0 : _g.amount_per_night)))), h("ir-select", { onValueChange: e => {
                        reserveRooms(roomType.id, ratePlan.id, Number(e.detail));
                        this.checkoutContainerRef.classList.add('bounce-twice');
                        this.checkoutContainerRef.addEventListener('animationend', () => {
                            this.checkoutContainerRef.classList.remove('bounce-twice');
                        });
                    }, label: "Rooms", value: visibleInventory.reserved, class: cn('w-full  md:w-auto', {
                        'md:w-full lg:col-span-2': visibleInventory.reserved === 0,
                    }), data: (_h = [...new Array(roomType.inventory + 1)]) === null || _h === void 0 ? void 0 : _h.map((_, i) => {
                        var _a;
                        return ({
                            id: i,
                            value: `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_a = visibleInventory.selected_variation) === null || _a === void 0 ? void 0 : _a.amount) * i, app_store.userPreferences.currency_id)}`,
                            disabled: i >= visibleInventory.visibleInventory + 1,
                            html: true,
                        });
                    }) }))));
            })) : (h("div", { class: "bg-gray-100 app_container w-full p-2 flex-1  flex flex-col md:flex-row justify-between space-y-1 text-sm rounded-[var(--radius,8px)]" }, h("p", null, roomType.description))))));
        }))), h("section", { key: 'cc39da3e36c0048436adbfd55150a44866c62448', class: 'text-sm' }, h("h2", { key: 'c2fdffe63f89bb8cf57d5475f80f6a6849f68ab0', class: "text-lg font-medium mb-5" }, "Facilities and services"), h("ir-facilities", { key: '6d31ab1537a388ffab0b6a0385ad436b385be6bf', properties: this.property }), h("p", { key: '693c83d70da0f259676b09d1d3925797e9e07ac0', innerHTML: (_b = this.property) === null || _b === void 0 ? void 0 : _b.description.location_and_intro, class: "py-2" }))), booking_store.enableBooking && calculateTotalCost() > 0 && (h("div", { ref: el => (this.checkoutContainerRef = el), class: "z-40 text-lg mt-14 lg:text-2xl rounded-md   sticky bottom-2 text-gray-200 gap-10  flex w-full items-center justify-end  bg-gray-700/80" }, h("div", { class: "" }, h("p", null, getDateDifference((_c = booking_store.bookingAvailabilityParams.from_date) !== null && _c !== void 0 ? _c : new Date(), (_d = booking_store.bookingAvailabilityParams.to_date) !== null && _d !== void 0 ? _d : new Date()), " nights")), calculateTotalCost() > 0 && h("div", null, formatAmount(calculateTotalCost(), app_store.userPreferences.currency_id)), h("ir-button", { onButtonClick: () => this.routing.emit('checkout'), label: "BOOK NOW", size: "lg", class: "w-60", buttonStyles: {
                height: '64px',
                borderRadius: '0',
                borderTopRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderBottomRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderTopLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
                borderBottomLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
            } })))));
    }
    static get style() { return IrBookingPageStyle0; }
}, [1, "ir-booking-page", {
        "selectedLocale": [32],
        "property": [32],
        "currencies": [32],
        "languages": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-page", "ir-accomodations", "ir-adult-child-counter", "ir-availibility-header", "ir-button", "ir-carousel", "ir-coupon-dialog", "ir-date-popup", "ir-date-range", "ir-dialog", "ir-facilities", "ir-gallery", "ir-icons", "ir-input", "ir-loyalty", "ir-popover", "ir-property-gallery", "ir-room-type-amenities", "ir-select", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingPage);
            }
            break;
        case "ir-accomodations":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-adult-child-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-availibility-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-coupon-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-date-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-facilities":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-loyalty":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-property-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-room-type-amenities":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingPage as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-page2.js.map