import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { a as app_store } from './app.store.js';
import { c as cn } from './utils.js';
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

const irNavCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}.underline{text-decoration-line:underline}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{--ir-dialog-max-width:32rem;display:block}.logo{height:20px;width:10px!important}.button-link{background:#fff;color:var(--gray-600,#475467);font-size:14px;line-height:14px;padding:8px 14px}.button-link:hover{text-decoration:underline}.button-link:disabled{background:#fff;color:var(--gray-300,#d0d5dd)}.button-outline{all:unset;align-items:center;background:#fff;border-radius:var(--radius,8px);box-sizing:border-box;color:#fff;color:var(--gray-700,#344054);cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;line-height:14px;padding:8px 14px;transition:all .3s ease-in-out;width:var(--ir-btn-width,inherit)}.button-outline .loader{background-color:var(--gray-700,#344054)}.button-outline:hover{background:var(--gray-100,#fcfcfd);color:var(--gray-700,#344054)}.button-outline:disabled{background:var(--gray-200,#eaecf0);color:var(--gray-300,#d0d5dd)}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-5{padding-top:1.25rem}.pb-5,.py-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.justify-center{justify-content:center}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3rem*var(--tw-space-y-reverse));margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}.font-semibold{font-weight:600}@media (min-width:768px){.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:sticky{position:sticky}.lg\\:top-20{top:5rem}.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:justify-end{justify-content:flex-end}}.ml-3{margin-left:.75rem}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.overflow-y-auto{overflow-y:auto}.border-t{border-top-width:1px}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:justify-between{justify-content:space-between}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:p-6{padding:1.5rem}}.inline-flex{display:inline-flex}.hidden{display:none}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-4{height:1rem}.w-4{width:1rem}.justify-start{justify-content:flex-start}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-fill{object-fit:fill}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:inline-flex{display:inline-flex}.md\\:hidden{display:none}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:1280px){.xl\\:px-0{padding-left:0;padding-right:0}}.absolute{position:absolute}.h-5{height:1.25rem}.w-5{width:1.25rem}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.visible{visibility:visible}.size-4{height:1rem;width:1rem}.rounded{border-radius:.25rem}.border{border-width:1px}.border-\\[var\\(--gray-300\\2c \\#D0D5DD\\)\\]{border-color:var(--gray-300,#d0d5dd)}.text-\\[var\\(--gray-600\\)\\]{color:var(--gray-600)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-\\[3rem\\]{height:3rem}.h-full{height:100%}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.outline{outline-style:solid}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}.flex-wrap{flex-wrap:wrap}.pb-2{padding-bottom:.5rem}.font-normal{font-weight:400}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.flex-col-reverse{flex-direction:column-reverse}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}}.mt-4{margin-top:1rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[1px\\]{height:1px}.max-h-32{max-height:8rem}.w-56{width:14rem}.min-w-\\[50px\\]{min-width:50px}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.p-2{padding:.5rem}.text-center{text-align:center}@media (min-width:640px){.sm\\:items-center{align-items:center}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:max-w-sm{max-width:24rem}.lg\\:pb-6{padding-bottom:1.5rem}}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.px-5{padding-left:1.25rem;padding-right:1.25rem}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:justify-center{justify-content:center}}@media (min-width:768px){.md\\:justify-start{justify-content:flex-start}}@media (min-width:1024px){.lg\\:mr-10{margin-right:2.5rem}}.ml-1{margin-left:.25rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}.md\\:justify-end{justify-content:flex-end}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:items-start{align-items:flex-start}.md\\:gap-8{gap:2rem}}.mb-6{margin-bottom:1.5rem}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.bg-\\[hsla\\(var\\(--brand-100\\)\\2c 8\\%\\)\\]{background-color:hsla(var(--brand-100),8%)}.px-2{padding-left:.5rem;padding-right:.5rem}.pr-4{padding-right:1rem}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-\\[hsla\\(var\\(--brand-100\\)\\2c 13\\%\\)\\]:hover{background-color:hsla(var(--brand-100),13%)}@media (min-width:640px){.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.w-72{width:18rem}.w-fit{width:fit-content}.border-0{border-width:0}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:p-4{padding:1rem}}.col-span-2{grid-column:span 2/span 2}.col-span-5{grid-column:span 5/span 5}.col-span-6{grid-column:span 6/span 6}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.items-start{align-items:flex-start}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:line-clamp-none{-webkit-box-orient:horizontal;-webkit-line-clamp:none;display:block;overflow:visible}.md\\:inline{display:inline}.md\\:w-auto{width:auto}.md\\:flex-col{flex-direction:column}.md\\:gap-1{gap:.25rem}}@media (min-width:1024px){.lg\\:col-span-1{grid-column:span 1/span 1}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:col-span-5{grid-column:span 5/span 5}.lg\\:col-span-6{grid-column:span 6/span 6}.lg\\:grid{display:grid}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.lg\\:gap-4{gap:1rem}}@media (min-width:1280px){.xl\\:col-span-2{grid-column:span 2/span 2}.xl\\:col-span-5{grid-column:span 5/span 5}}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.mt-3{margin-top:.75rem}.mt-6{margin-top:1.5rem}.size-\\[18px\\]{height:18px;width:18px}.pt-3{padding-top:.75rem}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-8{margin-bottom:2rem}.w-\\[45\\%\\]{width:45%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.mb-2\\.5{margin-bottom:.625rem}";
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
    handleButtonClick(e = undefined, page) {
        if (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
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
    renderLanguageTrigger() {
        const currency = app_store.currencies.find(currency => currency.code.toString() === app_store.userPreferences.currency_id);
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        if (!currency || !country) {
            return null;
        }
        return (h("button", { type: "button", class: "button-outline w-full", onClick: () => this.handleButtonClick(undefined, 'language') }, h("ir-icons", { name: "globe" }), h("p", null, country === null || country === void 0 ? void 0 : country.description)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: 'cd0a57d25149dea9ee0aa707eb695311279404ea' }, h("nav", { key: '8b9bf9caf59ce68df7bcd691cfdd039a433a193e', class: "w-full bg-white" }, h("div", { key: 'fb0c8693b82dd41c6862dcadb08a713145f72fc1', class: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6 xl:px-0" }, !isInjected && (h("div", { class: "flex items-center space-x-4 " }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: "logo", class: "h-10 w-auto  object-fill" })), h("div", { class: "hidden md:block" }, h("h3", { class: "text-lg font-medium" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name), h("p", { class: "flex items-center text-sm text-slate-700" }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.city.name), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.postal))))), h("div", { key: '5e695af6280cc52e14a3b0f51d646421ccaad7e0', class: cn('md:hidden', {
                'hidden ': isInjected,
            }) }, h("ir-button", { key: 'b1002eed012153408cfbfc56806f3556310bca87', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: 'bed9685d5a4d4f5b964b55f715375ebdf6c3a022', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: '8b32bbdb2821cd5fdb1c681d1c62585e45b63284', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: '2c6d26a3cf38889c6ee45c56610ae3856f0dee1b', class: cn('items-center gap-2 md:inline-flex', {
                'hidden md:inline-flex': !isInjected,
                'flex flex-1 justify-end': isInjected,
            }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "h-4 w-4" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: '1fd3b004462e874c126a094d7fe999329ab2f79e' }, this.renderLanguageTrigger()), h("li", { key: 'bb3bdce7eab3019b7876a37c8d6f5531a8539d93' }, h("ir-button", { key: 'ca78b38b8243b908f35f3875398092b2a259e547', variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') }))))), h("ir-sheet", { key: 'f9bc9ba66800efdacbc45941fc1ce21148ad8d54', ref: el => (this.sheetRef = el) }, h("ul", { key: 'cc58788123b8dc36711655bf4436e3c931b12c68', slot: "sheet-content", class: "hidden flex-col gap-2 p-4 py-6" }, h("li", { key: '86e22dd1586c909d97a5c45156216f9bd873a22d' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'a6f8ba696d857a798b4b2d1d6855aa1b08684e21' }, h("ir-button", { key: '0edb53819ebe723c07783c79651b7f9f64d0e83c', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: 'ed983b743a40a8783daad471109a1a023c8179c7' }, h("ir-button", { key: 'a9072c5d50ebc3a4b8371df41c460ab2bd56e5d7', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-dialog", { key: '9d1443d50b4cece0ba2a1a93385e9d989c20fcba', ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
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