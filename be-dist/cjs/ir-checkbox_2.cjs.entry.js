'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-380c61af.js');
const v4 = require('./v4-9b297151.js');
const app_store = require('./app.store-52efa6e0.js');
const common_service = require('./common.service-72df2a80.js');
const checkout_store = require('./checkout.store-c57806bb.js');
const localization_store = require('./localization.store-636d94a8.js');
const phone_store = require('./phone.store-266d6eb8.js');
const popper = require('./popper-31badbf8.js');
require('./index-10c552bd.js');
require('./Token-a5a71953.js');
require('./index-e2246344.js');
require('./index-505d795c.js');

const irCheckboxCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{align-items:center;box-sizing:border-box;display:block;display:flex;width:-moz-fit-content;width:fit-content}button{all:unset}.CheckboxRoot{align-items:center;background-color:#fff;border:1px solid var(--gray-300,#eaecf0);border-radius:min(calc(var(--radius, 8px)/2),4px);box-sizing:border-box;display:flex;height:20px;justify-content:center;transition:all .3s ease-in-out;width:20px}.CheckboxRoot:active,.CheckboxRoot:focus-visible{box-shadow:0 1px 2px 0 rgba(0,0,0,.1),0 0 0 4px hsla(var(--brand-100,209,100%,91%),.2)}.CheckboxRoot:hover{background:hsla(var(--brand-50,206,100%,97%),.1)}.CheckboxRoot:disabled{background-color:var(--gray-100,#f2f4f7);border-color:var(--gray-200,#eaecf0);pointer-events:none}.CheckboxRoot[data-state=checked]{background-color:hsla(var(--brand-50,206,100%,97%),.1);border-color:hsl(var(--brand-600,215,87%,51%));color:hsl(var(--brand-600,215,87%,51%))}input[type=checkbox]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;background-color:initial;border:initial;box-sizing:border-box;cursor:default;margin:3px 3px 3px 4px;padding:initial}.checkbox{height:20px;margin:0;opacity:0;pointer-events:none;position:absolute;transform:translateX(-100%);width:20px}.checkbox-label{cursor:pointer}.checkbox-label:dir(ltr){margin-left:.75rem}.checkbox-label:dir(rtl){margin-right:.75rem}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.h-full{height:100%}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[80vh\\]{height:80vh}.max-h-32{max-height:8rem}.max-h-52{max-height:13rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.h-5{height:1.25rem}.w-5{width:1.25rem}.right-3{right:.75rem}.top-3{top:.75rem}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.h-64{height:16rem}.h-screen{height:100vh}.max-w-md{max-width:28rem}.place-content-center{place-content:center}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}}.-bottom-0{bottom:0}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.p-2{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.size-4{height:1rem;width:1rem}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.w-72{width:18rem}.w-fit{width:fit-content}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.h-\\[50vh\\]{height:50vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid{display:grid}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrCheckboxStyle0 = irCheckboxCss;

const IrCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
        this.checked = false;
        this.label = undefined;
        this.checkboxId = v4.v4();
        this.name = undefined;
        this.disabled = undefined;
        this.currentChecked = false;
    }
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (index.h(index.Host, { key: 'ee10b0957bcfa917a915e52244bc540599d654d9' }, index.h("button", { key: '1ceecad12aff6acdfc765ddbe1f84ae995abee0f', disabled: this.disabled, name: this.name, onClick: this.handleCheckChange.bind(this), id: this.checkboxId, "data-state": this.currentChecked ? 'checked' : 'unchecked', value: 'on', ref: ref => (this.checkboxRef = ref), type: "button", role: "checkbox", class: "CheckboxRoot" }, this.currentChecked && (index.h("svg", { key: '6b328993b28de69c30324cec3b9445db4e9832e2', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '72cb3c09ecdfff989fb8806e3a2a15e86ab7db56', fill: "currentColor", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" })))), index.h("input", { key: '69f2df8fefc2de8be59ac080ae4e8c74f78be8ad', type: "checkbox", "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.currentChecked, class: "checkbox" }), this.label && (index.h("label", { key: '130c99b8919729c51d4eb1b51712e5942157d81b', htmlFor: this.checkboxId, class: "checkbox-label" }, this.label))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrCheckbox.style = IrCheckboxStyle0;

const irPhoneInputCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{display:block}.phone-input-container{background:#fff;width:100%}.input-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:8px;display:flex;transition:all .3s ease-in-out}.input-trigger label{background:#fff;padding:0 .3rem;position:absolute;top:0;transform:translateY(-.6rem) scale(1);z-index:10}.input-trigger:dir(ltr) label{left:.575rem}.input-trigger:dir(rtl) label{right:.575rem}:host([data-state=error]) .input-trigger{border-color:var(--error-500,#f04438)}:host([data-state=error]) label{color:var(--error-500,#f04438)}.input-trigger:focus-within{border-color:#000}.input-trigger:focus-within label{color:#000}.input-section{flex:1;padding:.625rem .875rem;position:relative}.input-section label{color:var(--gray-500,#667085);display:block;font-size:.75rem;line-height:1rem}.input-subtrigger{align-items:center;display:flex;font-size:1rem;outline:none;width:100%}.flag-icon{border-radius:.125rem;height:1rem}.dropdown-container{z-index:2000}.dropdown-content{background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 10px 38px -10px rgba(22,23,24,.35),0 10px 20px -15px rgba(22,23,24,.2);max-height:250px;overflow-y:auto;width:100%;z-index:99999}.combobox-item{align-items:center;display:flex;justify-content:space-between;line-height:1;padding:.625rem .875rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.combobox-item[data-highlighted=true]{background-color:var(--gray-50,#f9fafb);color:var(--gray-900,#101828)}.combobox-item[data-disabled]{color:var(--gray-300,#d0d5dd)}.combobox-item-content{align-items:center;display:flex;gap:.5rem}.filter-container{align-items:center;background:#fff;display:flex;padding:.625rem .875rem;position:sticky;top:0}.filter-input{border-top-left-radius:.5rem;border-top-right-radius:.5rem;color:var(--gray-900);outline:none;padding-inline:.5rem;width:100%}.filter-icon{margin-right:.5rem}.check-icon,.filter-icon{height:1rem;width:1rem}.input-trigger .input-section:first-child{max-width:-moz-max-content;max-width:max-content}.input-trigger .input-section:first-child .input-subtrigger svg{margin-left:.5rem}.input-trigger .input-section:first-child .input-subtrigger span{margin-left:.3rem}.static{position:static}.top-0{top:0}.z-50{z-index:50}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-full{height:100%}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[80vh\\]{height:80vh}.max-h-32{max-height:8rem}.max-h-52{max-height:13rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.h-5{height:1.25rem}.w-5{width:1.25rem}.right-3{right:.75rem}.top-3{top:.75rem}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.h-64{height:16rem}.h-screen{height:100vh}.max-w-md{max-width:28rem}.place-content-center{place-content:center}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}}.-bottom-0{bottom:0}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.p-2{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.size-4{height:1rem;width:1rem}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.w-72{width:18rem}.w-fit{width:fit-content}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.h-\\[50vh\\]{height:50vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid{display:grid}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.phoneInputBlur = index.createEvent(this, "phoneInputBlur", 7);
        this.phoneInputFocus = index.createEvent(this, "phoneInputFocus", 7);
        this.popoverInstance = null;
        this.commonService = new common_service.CommonService();
        this.handleOutsideClick = (event) => {
            const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
            if (outsideClick && this.isVisible) {
                this.toggleVisibility();
            }
        };
        this.handleKeyboardPress = (e) => {
            if (!this.isVisible) {
                return;
            }
            if (e.key === 'Escape') {
                this.toggleVisibility();
            }
            return;
        };
        this.error = undefined;
        this.mobile_number = undefined;
        this.country_phone_prefix = undefined;
        this.country_code = undefined;
        this.mode = 'country_code_and_prefix';
        this.isVisible = false;
        this.currentHighlightedIndex = -1;
        this.selectedItem = undefined;
        this.filteredCountries = [];
        this.inputValue = '';
    }
    async componentWillLoad() {
        this.commonService.setToken(app_store.app_store.app_data.token);
        await this.initializeCountries();
        this.inputValue = this.mobile_number;
    }
    componentDidLoad() {
        this.initializePopover();
    }
    async initializeCountries() {
        if (phone_store.phone_input_store.countries.length === 0) {
            const requests = [this.commonService.getCountries(app_store.app_store.userPreferences.language_id)];
            if (!this.country_code) {
                requests.push(this.setUpUserDefaultCountry());
            }
            const [countries] = await Promise.all(requests);
            phone_store.phone_input_store.countries = countries;
        }
        if (this.user_country) {
            this.selectCountryByProperty('id', this.user_country.COUNTRY_ID);
        }
        else if (this.country_code && this.mode === 'country_code_and_prefix') {
            this.selectCountryByProperty('id', this.country_code.toString());
        }
        else if (this.mode === 'prefix_only' && this.country_phone_prefix) {
            this.selectCountryByProperty('phone_prefix', this.country_phone_prefix.toString());
        }
        this.filteredCountries = phone_store.phone_input_store.countries;
    }
    handleCountryCodeChange(newValue, oldValue) {
        if (newValue !== oldValue && this.mode === 'country_code_and_prefix') {
            this.selectCountryByProperty('id', this.country_code.toString());
        }
    }
    handleCountryPhonePrefixChange(newValue, oldValue) {
        if (newValue !== oldValue && this.mode === 'prefix_only') {
            this.selectCountryByProperty('phone_prefix', this.country_phone_prefix.toString());
        }
    }
    handleMobileNumberChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.inputValue) {
            this.inputValue = newValue;
        }
    }
    selectCountryByProperty(property, value) {
        const selectedCountry = phone_store.phone_input_store.countries.find(c => c[property].toString() === value.toString());
        if (selectedCountry) {
            if (this.mode === 'country_code_and_prefix') {
                checkout_store.updateUserFormData('country_id', selectedCountry.id);
            }
            checkout_store.updateUserFormData('country_phone_prefix', selectedCountry.phone_prefix);
            this.selectedItem = selectedCountry;
            if (!this.mobile_number) {
                this.textChange.emit({
                    phone_prefix: selectedCountry.phone_prefix.toString(),
                    mobile: '',
                });
            }
        }
    }
    async setUpUserDefaultCountry() {
        this.user_country = await this.commonService.getUserDefaultCountry();
    }
    initializePopover() {
        if (this.triggerElement && this.contentElement) {
            this.popoverInstance = popper.createPopper(this.triggerElement, this.contentElement, {
                placement: app_store.app_store.dir === 'LTR' ? 'auto-start' : 'auto-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 2],
                        },
                    },
                ],
            });
        }
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            const rect = this.contentElement.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.popoverInstance.setOptions({
                    placement: 'top-end',
                });
            }
            else if (rect.top < 0) {
                this.popoverInstance.setOptions({
                    placement: 'bottom-end',
                });
            }
            this.popoverInstance.update();
        });
    }
    async toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.filteredCountries = phone_store.phone_input_store.countries;
        if (this.isVisible && this.popoverInstance) {
            setTimeout(() => this.searchInput.focus(), 20);
            this.adjustPopoverPlacement();
            const currentDir = app_store.app_store.dir.toLowerCase() || 'ltr';
            if ((this.popoverInstance.state.options.placement === 'bottom-start' && currentDir === 'rtl') ||
                (this.popoverInstance.state.options.placement === 'bottom-end' && currentDir === 'ltr')) {
                let newPlacement = this.popoverInstance.state.options.placement;
                if (currentDir === 'rtl') {
                    newPlacement = newPlacement.replace('bottom-start', 'bottom-end');
                }
                else {
                    newPlacement = newPlacement.replace('bottom-end', 'bottom-start');
                }
                this.popoverInstance
                    .setOptions({
                    placement: newPlacement,
                })
                    .then(() => {
                    this.popoverInstance.update();
                });
            }
            else {
                this.popoverInstance.update();
            }
        }
        if (this.isVisible) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('click', this.handleOutsideClick, true);
            document.addEventListener('keydown', this.handleKeyboardPress, true);
        }
        else {
            document.body.style.overflow = 'visible';
            document.removeEventListener('click', this.handleOutsideClick, true);
            document.removeEventListener('keydown', this.handleKeyboardPress, true);
        }
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick, true);
        document.removeEventListener('keydown', this.handleKeyboardPress, true);
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
    }
    synchroniseSuggestionsBox() {
        var _a;
        const item = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`li:nth-of-type(${this.currentHighlightedIndex + 1})`);
        item === null || item === void 0 ? void 0 : item.scrollIntoView({ block: 'center' });
    }
    handleAutoCompleteKeyDown(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.currentHighlightedIndex = (this.currentHighlightedIndex + 1 + this.filteredCountries.length) % this.filteredCountries.length;
            this.synchroniseSuggestionsBox();
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.currentHighlightedIndex = (this.currentHighlightedIndex - 1 + this.filteredCountries.length) % this.filteredCountries.length;
            this.synchroniseSuggestionsBox();
        }
        else if (e.key === 'Enter') {
            this.selectItem(this.currentHighlightedIndex);
        }
    }
    selectItem(index) {
        this.currentHighlightedIndex = index;
        this.selectedItem = this.filteredCountries[index];
        this.filteredCountries = phone_store.phone_input_store.countries;
        this.phoneInput.focus();
        this.toggleVisibility();
        this.textChange.emit({
            phone_prefix: this.selectedItem.phone_prefix.toString(),
            mobile: this.mobile_number,
        });
    }
    filterData(str) {
        if (str === '') {
            return (this.filteredCountries = [...phone_store.phone_input_store.countries]);
        }
        this.filteredCountries = [...phone_store.phone_input_store.countries.filter(d => d.name.toLowerCase().startsWith(str.trim()))];
    }
    handleFilterInputChange(e) {
        e.stopPropagation();
        const value = e.target.value;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.filterData(value);
        }, 300);
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id.toString(), mobile: this.inputValue });
    }
    render() {
        var _a, _b, _c;
        return (index.h("div", { key: 'bf29b835fa70f853a9b1e2010c3f27b0d8d63abd', ref: el => (this.triggerElement = el), class: "phone-input-container" }, index.h("div", { key: 'f152280a122e99dba96cabca44d160c6a6c1dbb2', class: `input-trigger ${this.error ? 'error' : ''}` }, index.h("div", { key: '3a111b03e4ee2b2c8f0dd606704f066bb8197df9', class: "input-section" }, index.h("label", { key: '2866b992ca11b91beb7193c17ec8d9e13958dbc3', htmlFor: "country_picker" }, localization_store.localizedWords.entries.Lcz_Country), index.h("div", { key: 'c2eab6db7f968f388604cddc982e63115bbdfe53', id: "country_picker", onClick: () => {
                this.toggleVisibility();
            }, class: "input-subtrigger" }, this.selectedItem ? (index.h(index.Fragment, null, index.h("img", { src: (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.flag, alt: (_b = this.selectedItem) === null || _b === void 0 ? void 0 : _b.name, class: "flag-icon" }), index.h("span", null, (_c = this.selectedItem) === null || _c === void 0 ? void 0 : _c.phone_prefix))) : (index.h("span", null, "Select")), index.h("svg", { key: 'd5beae048c9ef4dbf8ff7b34ab74a6a059302ec7', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { key: 'c251bf59487a3aa3275f4abfa6613be47e880848', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))), index.h("div", { key: '7b6ee9a7be879b2ad7e568372002db77874256e2', class: "input-section" }, index.h("label", { key: '396016c70e41eee58d333c8f1121470b7e90a80e', htmlFor: "phone_number" }, localization_store.localizedWords.entries.Lcz_MobileNumber), index.h("input", { key: '1a589cc4abc83b7d3c4919f134e9d9732548d7d8', type: "phone", ref: el => (this.phoneInput = el), onBlur: e => this.phoneInputBlur.emit(e), onFocus: e => this.phoneInputFocus.emit(e), onInput: e => this.handleInputChange(e), id: "phone_number", value: this.inputValue, class: "input-subtrigger" }))), index.h("div", { key: 'dbb8d9727f8d381b8ac2e97638a5011231f2e702', ref: el => (this.contentElement = el), class: "dropdown-container" }, this.isVisible && (index.h("ul", { key: '3fd645583cea983d8022106c122c108e7abeb470', class: "dropdown-content" }, index.h("li", { key: 'd607d4a32a6be38cff20dddb24de5f240d80baf6', class: "filter-container" }, index.h("ir-icons", { key: '33dd26dff873b8a734317c6fc02b2aebba701307', name: "search", svgClassName: "filter-icon" }), index.h("input", { key: '7423fc18baaf5915eebe429737e6adadc823d142', placeholder: localization_store.localizedWords.entries.Lcz_Search, ref: el => (this.searchInput = el), type: "text", onInput: this.handleFilterInputChange.bind(this), class: "filter-input", onKeyDown: this.handleAutoCompleteKeyDown.bind(this) })), this.filteredCountries.map((value, index$1) => (index.h("li", { "data-state": this.currentHighlightedIndex === index$1 ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index$1 ? 'true' : 'false', class: "combobox-item", key: index$1, role: "option", onClick: () => {
                this.selectItem(index$1);
            }, onMouseOver: () => {
                this.currentHighlightedIndex = index$1;
            } }, index.h("div", { class: "combobox-item-content" }, index.h("img", { src: value.flag, alt: value.name, class: "flag-icon" }), index.h("span", null, value.name), index.h("span", null, "(", value.phone_prefix, ")")), this.selectedItem && this.selectedItem.id === value.id && index.h("ir-icons", { name: "check", svgClassName: "check-icon" })))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "country_code": ["handleCountryCodeChange"],
        "country_phone_prefix": ["handleCountryPhonePrefixChange"],
        "mobile_number": ["handleMobileNumberChange"]
    }; }
};
IrPhoneInput.style = IrPhoneInputStyle0;

exports.ir_checkbox = IrCheckbox;
exports.ir_phone_input = IrPhoneInput;

//# sourceMappingURL=ir-checkbox_2.cjs.entry.js.map