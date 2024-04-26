import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { a as app_store } from './app.store.js';
import { d as defineCustomElement$c } from './ir-auth2.js';
import { d as defineCustomElement$b } from './ir-badge-group2.js';
import { d as defineCustomElement$a } from './ir-booking-code2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-dialog2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-language-picker2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-sheet2.js';
import { d as defineCustomElement$2 } from './ir-signin2.js';
import { d as defineCustomElement$1 } from './ir-signup2.js';

const irNavCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.underline{text-decoration-line:underline}:host{--ir-dialog-max-width:32rem;display:block}.logo{height:20px;width:10px!important}.button-link{background:#fff;color:var(--gray-600,#475467);font-size:14px;line-height:14px;padding:8px 14px}.button-link:hover{text-decoration:underline}.button-link:disabled{background:#fff;color:var(--gray-300,#d0d5dd)}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-60{width:15rem}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:1024px){.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.justify-center{justify-content:center}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.ml-3{margin-left:.75rem}.flex-col-reverse{flex-direction:column-reverse}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3rem*var(--tw-space-y-reverse));margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)))}@media (min-width:768px){.md\\:max-w-2xl{max-width:42rem}.md\\:max-w-4xl{max-width:56rem}.md\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:sticky{position:sticky}.lg\\:top-0{top:0}.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}}.gap-2{gap:.5rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.border-t{border-top-width:1px}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:flex-col{flex-direction:column}.md\\:gap-4{gap:1rem}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}.absolute{position:absolute}.h-5{height:1.25rem}.w-5{width:1.25rem}.visible{visibility:visible}.hidden{display:none}.size-4{width:1rem}.h-4,.size-4{height:1rem}.w-4{width:1rem}.rounded{border-radius:.25rem}.border{border-width:1px}.border-\\[var\\(--gray-300\\2c \\#D0D5DD\\)\\]{border-color:var(--gray-300,#d0d5dd)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.text-\\[var\\(--gray-600\\)\\]{color:var(--gray-600)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-10{height:2.5rem}.h-14{height:3.5rem}.w-auto{width:auto}.justify-start{justify-content:flex-start}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.object-fill{object-fit:fill}.p-4{padding:1rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}}@media (min-width:1024px){.lg\\:px-0{padding-left:0;padding-right:0}}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-\\[3rem\\]{height:3rem}.h-full{height:100%}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.flex-wrap{flex-wrap:wrap}.gap-2\\.5{gap:.625rem}.pb-2{padding-bottom:.5rem}.font-normal{font-weight:400}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:justify-center{justify-content:center}}@media (min-width:768px){.md\\:justify-start{justify-content:flex-start}}@media (min-width:1024px){.lg\\:mr-10{margin-right:2.5rem}}.size-\\[18px\\]{height:18px;width:18px}.border-0{border-width:0}.pt-3{padding-top:.75rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.mb-8{margin-bottom:2rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.ml-1{margin-left:.25rem}.line-clamp-2{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden}.gap-3{gap:.75rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.text-right{text-align:right}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:1280px){.xl\\:block{display:block}.xl\\:hidden{display:none}.xl\\:max-w-\\[65\\%\\]{max-width:65%}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.max-w-\\[30px\\]{max-width:30px}.max-w-\\[60\\%\\]{max-width:60%}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pb-4{padding-bottom:1rem}.text-center{text-align:center}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:items-start{align-items:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}@media (min-width:1024px){.lg\\:gap-10{gap:2.5rem}}.mb-6{margin-bottom:1.5rem}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.bg-\\[hsla\\(var\\(--brand-100\\)\\2c 8\\%\\)\\]{background-color:hsla(var(--brand-100),8%)}.px-2{padding-left:.5rem;padding-right:.5rem}.pr-4{padding-right:1rem}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-\\[hsla\\(var\\(--brand-100\\)\\2c 13\\%\\)\\]:hover{background-color:hsla(var(--brand-100),13%)}@media (min-width:640px){.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.w-72{width:18rem}.w-fit{width:fit-content}.max-w-\\[65\\%\\]{max-width:65%}@media (min-width:768px){.md\\:p-4{padding:1rem}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.col-span-2{grid-column:span 2/span 2}.col-span-5{grid-column:span 5/span 5}.col-span-6{grid-column:span 6/span 6}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.items-start{align-items:flex-start}.gap-1{gap:.25rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:line-clamp-none{-webkit-box-orient:horizontal;-webkit-line-clamp:none;display:block;overflow:visible}.md\\:inline{display:inline}.md\\:w-auto{width:auto}}@media (min-width:1024px){.lg\\:col-span-1{grid-column:span 1/span 1}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:col-span-5{grid-column:span 5/span 5}.lg\\:col-span-6{grid-column:span 6/span 6}.lg\\:grid{display:grid}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.lg\\:gap-4{gap:1rem}}@media (min-width:1280px){.xl\\:col-span-2{grid-column:span 2/span 2}.xl\\:col-span-5{grid-column:span 5/span 5}}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.ml-4{margin-left:1rem}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.py-4{padding-bottom:1rem;padding-top:1rem}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.pt-0{padding-top:0}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.mt-3{margin-top:.75rem}.mt-6{margin-top:1.5rem}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.w-\\[45\\%\\]{width:45%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.mb-2\\.5{margin-bottom:.625rem}";
const IrNavStyle0 = irNavCss;

const IrNav = /*@__PURE__*/ proxyCustomElement(class IrNav extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.currencies = undefined;
        this.languages = undefined;
        this.logo = undefined;
        this.website = undefined;
        this.currentPage = null;
    }
    handleButtonClick(e, page) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentPage = page;
        setTimeout(() => {
            this.dialogRef.openModal();
        }, 50);
    }
    handleCloseDialog(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.dialogRef.closeModal();
    }
    renderDialogBody() {
        switch (this.currentPage) {
            case 'language':
                return h("ir-language-picker", { slot: "modal-body", currencies: this.currencies, languages: this.languages });
            case 'auth':
                return h("ir-auth", { slot: "modal-body" });
            case 'booking_code':
                return h("ir-booking-code", { slot: "modal-body" });
            default:
                return null;
        }
    }
    renderLocationField(fieled, withComma = true) {
        if (!fieled) {
            return '';
        }
        return withComma ? `, ${fieled}` : fieled;
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Fragment, { key: '5a99b8f95c45f6f6c524834bd058169e5e7e9f0b' }, h("nav", { key: '5e53488a8d6b45419503439fd5b94cad408c64f9', class: "w-full bg-white" }, h("div", { key: 'f5641b28f9b8f07c80d5c2f6a1bd7b1d04e1735f', class: "max-w-6xl h-14 mx-auto flex items-center justify-between px-4 lg:px-0" }, h("div", { key: '4fd6c800a1e5708a05fb31fe58f884022d0751fa', class: "flex items-center space-x-4 " }, h("a", { key: 'd1dd11316e40c5a4caa854325d004e9c096bf85c', "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { key: '29e5f8aa0f6149a76112562a98c809f8cf022b39', src: this.logo, alt: "logo", class: "object-fill h-10  w-auto" })), h("div", { key: '4f5ce1b7bab889760201c0e065662af7cc17bfff', class: "hidden md:block" }, h("h3", { key: '7adcbf812eb82245cd6474cb1b5d6e5f6adeb9a1', class: "font-medium text-lg" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name), h("p", { key: 'b64d616284bf161ed9dc6d88f883ba32e8cb0aa4', class: "text-sm text-slate-700 flex items-center" }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.city.name), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.postal)))), h("div", { key: 'cf7e11d450d8f878888cd911bf53036ed8dc5572', class: "md:hidden" }, h("ir-button", { key: '7c7beda715ef0a922b62c2d6463feacaa1d7a9a8', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: 'aeab99b1ebd103b8a0cc717eb6f9e38759ff78e3', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: '386f3581b7d5babd2d4d33601639bd2101ccc28a', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: 'c06a97d2e4eb91776cae51cacd83cd641c9cc952', class: "hidden md:flex items-center gap-2" }, h("li", { key: 'dcf79ef8c3c4327e027903399f71ce359d0f0838' }, h("ir-button", { key: '34820efb038725ac016cb29e68114c75730db270', variants: "outline", haveLeftIcon: true }, h("p", { key: 'e30c90ec06ee4b2edf5fc82da700ba7edd3b4f91', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: '0ade43a01e1a2a0d0906011e09017440714615db', slot: "left-icon", name: "home", svgClassName: "h-4 w-4" }))), h("li", { key: '3da69329f4176e40525f4942813ecd53cd5fcdeb' }, h("ir-button", { key: 'ca8ff247c47fce34b4969c085abf845bf3ddfdd6', variants: "outline", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: '62fdfe99b29e3d3351ca96e339fed7b4432371d6' }, h("ir-button", { key: '80b6e108eb2b86638298c70a980bb41fd432f3a0', variants: "outline", label: "Cur / Flag", name: "language", onButtonClick: e => this.handleButtonClick(e, 'language') })), h("li", { key: '1faaa315180ab4f3e91609e22a275de5565d729a' }, h("ir-button", { key: '7d768990d89637705430c2cddd9b2f15d6fcb6e1', variants: "outline", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') }))))), h("ir-sheet", { key: 'fa62742724b5faa4d13db2ece7c803a76043c103', ref: el => (this.sheetRef = el) }, h("ul", { key: 'e04fe0819a8374f1613af22264e1b9e1a4b56c8a', slot: "sheet-content", class: "flex  flex-col p-4 py-6 md:hidden gap-2" }, h("li", { key: '81e003dda1f5cdb1a3cff9f719d35934300c47a6' }, h("ir-button", { key: '684c7ebe51f928989374d318cbce80c2477b1120', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" })), h("li", { key: '48382feb2082b23ebdb4c3625ed727f3fe4b5c3e' }, h("ir-button", { key: 'f12ea38eb63e358a4f3e9eaa333defa32074da42', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: 'db4cecee89f9007d422147c8b03498bee9bd5365' }, h("ir-button", { key: '65e6047a04fe22a5e92175e1b61f3ed67d824155', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Cur / Flag", name: "language", onButtonClick: e => this.handleButtonClick(e, 'language') })), h("li", { key: '76fee2fb34cde2d71cb67e98b8c5ededad84a956' }, h("ir-button", { key: 'ac275f610890141603fd126353cde0c10a7f7d14', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-dialog", { key: '315b15279129edff881d9e32245c2c66a0240b6a', ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
    }
    static get style() { return IrNavStyle0; }
}, [1, "ir-nav", {
        "currencies": [16],
        "languages": [16],
        "logo": [1],
        "website": [1],
        "currentPage": [32]
    }, [[0, "closeDialog", "handleCloseDialog"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-nav", "ir-auth", "ir-badge-group", "ir-booking-code", "ir-button", "ir-dialog", "ir-icons", "ir-input", "ir-language-picker", "ir-select", "ir-sheet", "ir-signin", "ir-signup"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-nav":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrNav);
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-sheet":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrNav as I, defineCustomElement as d };

//# sourceMappingURL=ir-nav2.js.map