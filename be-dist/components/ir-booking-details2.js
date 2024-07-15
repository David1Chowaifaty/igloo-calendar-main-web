import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService } from './property.service.js';
import { a as app_store } from './app.store.js';
import { b as booking_store } from './booking.js';
import { o as onCheckoutDataChange, c as checkout_store } from './checkout.store.js';
import { l as localizedWords } from './localization.store.js';
import { d as dateFns, g as getDateDifference, j as formatAmount } from './utils.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';
import { v as v4 } from './v4.js';

const irBookingDetailsCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.flex{display:flex}.flex-wrap{flex-wrap:wrap}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.section-header{background-color:#f3f4f6;border-radius:6px;flex-direction:column;flex-wrap:wrap;margin-bottom:20px;padding:10px 16px}.section-header,.section-header-row{align-items:center;display:flex;gap:8px}.section-header-row{flex:1}.section-header-text{font-size:.875rem}.section-header-note{color:#6b7280;font-size:.75rem;text-align:right}.section-content{margin-bottom:24px;margin-top:24px;width:100%}.section-item{gap:8px;justify-content:space-between;margin-bottom:20px}.section-item,.section-item-header{align-items:center;display:flex;width:100%}.section-item-header{flex-direction:row;gap:12px}.section-item-header h3{font-weight:600}.section-item-header-right{align-items:center;display:flex;flex:1;justify-content:flex-end}.section-item-header-amount{font-size:1rem;font-weight:500;text-align:right}.section-item-header-note{color:#6b7280;font-size:.75rem;max-width:60%;text-align:right}.section-item-details{display:flex;flex-direction:column;gap:10px;width:100%}.section-item-input-group{display:flex;flex-wrap:wrap;gap:10px}.section-item-footer{align-items:center;display:flex;gap:16px}.section-item-footer-text{align-items:center;display:flex;font-size:.875rem;gap:4px}.ir-dialog-body{padding:16px 24px}.ir-dialog-title{font-size:1.25rem;font-weight:500;margin-bottom:16px}.ir-button-link{font-size:12px;padding-bottom:0;padding-left:0;padding-top:0}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.items-center{align-items:center}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[80vh\\]{height:80vh}.h-full{height:100%}.max-h-32{max-height:8rem}.max-h-52{max-height:13rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.py-3{padding-bottom:.75rem;padding-top:.75rem}.block{display:block}.grid{display:grid}.h-64{height:16rem}.h-screen{height:100vh}.max-w-md{max-width:28rem}.place-content-center{place-content:center}.rounded-md{border-radius:.375rem}@media (min-width:768px){.md\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}.font-semibold{font-weight:600}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.fixed{position:fixed}.visible{visibility:visible}.hidden{display:none}.h-5{height:1.25rem}.w-5{width:1.25rem}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.size-4{height:1rem;width:1rem}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.pl-0{padding-left:0}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.p-6{padding:1.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.pb-2{padding-bottom:.5rem}.font-normal{font-weight:400}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.py-4{padding-bottom:1rem;padding-top:1rem}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.h-\\[50vh\\]{height:50vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.size-3{height:.75rem;width:.75rem}.-bottom-0{bottom:0}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4{padding-bottom:1rem}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.w-72{width:18rem}.w-fit{width:fit-content}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid{display:grid}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = /*@__PURE__*/ proxyCustomElement(class IrBookingDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.propertyService = new PropertyService();
        this.errors = undefined;
        this.currentRatePlan = null;
        this.isLoading = null;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        this.modifyBookings();
        onCheckoutDataChange('userFormData', newValue => {
            if (!checkout_store.modifiedGuestName) {
                this.updateGuestNames(newValue.bookingForSomeoneElse, newValue === null || newValue === void 0 ? void 0 : newValue.firstName, newValue === null || newValue === void 0 ? void 0 : newValue.lastName);
            }
        });
    }
    modifyBookings() {
        const result = {};
        Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            result[roomTypeId] = {};
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                var _a;
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    result[roomTypeId][ratePlanId] = r;
                }
                else {
                    if (!this.firstRoom) {
                        this.firstRoom = {
                            roomtypeId: roomTypeId,
                            ratePlanId,
                        };
                    }
                    result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, r), { checkoutVariations: Array(r.reserved).fill(r.selected_variation.variation), checkoutBedSelection: r.is_bed_configuration_enabled ? Array(r.reserved).fill(r.roomtype.bedding_setup[0].code) : [], checkoutSmokingSelection: Array(r.reserved).fill(r.roomtype.smoking_option[0]) });
                    if (!checkout_store.modifiedGuestName && ((_a = r.guestName) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                        const name = [...new Array(r.reserved)].map((_, i) => {
                            var _a, _b, _c;
                            if (i === 0 && !checkout_store.userFormData.bookingForSomeoneElse && this.firstRoom.roomtypeId === roomTypeId && this.firstRoom.ratePlanId === ratePlanId) {
                                return (_c = (((_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName) || '') + ' ' + (((_b = checkout_store.userFormData) === null || _b === void 0 ? void 0 : _b.lastName) || '')) !== null && _c !== void 0 ? _c : '';
                            }
                            return '';
                        });
                        result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, result[roomTypeId][ratePlanId]), { guestName: name });
                    }
                }
            });
        });
        booking_store.ratePlanSelections = Object.assign({}, result);
    }
    updateGuestNames(isBookingForSomeoneElse, firstName, lastName) {
        const result = {};
        Object.keys(booking_store.ratePlanSelections).forEach(roomTypeId => {
            result[roomTypeId] = {};
            Object.keys(booking_store.ratePlanSelections[roomTypeId]).forEach(ratePlanId => {
                const ratePlanSelection = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (this.firstRoom && this.firstRoom.ratePlanId === ratePlanId && this.firstRoom.roomtypeId === roomTypeId) {
                    let updatedGuestNames = [...ratePlanSelection.guestName];
                    updatedGuestNames[0] = isBookingForSomeoneElse ? '' : `${firstName || ''} ${lastName || ''}`.trim();
                    result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, ratePlanSelection), { guestName: updatedGuestNames });
                }
                else {
                    result[roomTypeId][ratePlanId] = ratePlanSelection;
                }
            });
        });
        booking_store.ratePlanSelections = Object.assign({}, result);
    }
    calculateTotalRooms() {
        return Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
            return (total +
                Object.values(value).reduce((innerTotal, ratePlan) => {
                    if (ratePlan.reserved === 0) {
                        return innerTotal;
                    }
                    return innerTotal + ratePlan.reserved;
                }, 0));
        }, 0);
    }
    handleGuestNameChange(index, e, rateplanId, roomTypeId) {
        var _a;
        const oldVariations = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.guestName];
        oldVariations[index] = e.target.value;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { guestName: oldVariations }) }) });
    }
    async handleVariationChange(index, e, variations, rateplanId, roomTypeId) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        let selectedVariation = variations[value];
        if (!selectedVariation) {
            return;
        }
        if (!selectedVariation.amount) {
            this.isLoading = rateplanId;
            const res = await this.updateVariation({
                adult_nbr: selectedVariation.adult_nbr,
                child_nbr: selectedVariation.child_nbr,
                rp_id: rateplanId,
                rt_id: roomTypeId,
                adultChildConstraint: selectedVariation.adult_child_offering,
            });
            selectedVariation = this.getNewSelectedVariation(res.roomtypes, selectedVariation, roomTypeId, rateplanId);
            this.isLoading = null;
        }
        const oldVariations = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.checkoutVariations];
        oldVariations[index] = selectedVariation;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { selected_variation: { state: 'modified', variation: selectedVariation }, checkoutVariations: oldVariations }) }) });
        console.log(booking_store.ratePlanSelections);
    }
    getNewSelectedVariation(roomtypes, oldVariation, roomTypeId, rateplanId) {
        const roomType = roomtypes.find(rt => rt.id === roomTypeId);
        if (!roomType) {
            throw new Error('Invalid room type');
        }
        const rateplan = roomType.rateplans.find(rp => rp.id === rateplanId);
        if (!rateplan) {
            throw new Error('Invalid room type');
        }
        return rateplan.variations.find(v => v.adult_child_offering === oldVariation.adult_child_offering);
    }
    async updateVariation(params) {
        const identifier = v4();
        const res = await this.propertyService.getExposedBookingAvailability({
            params: {
                propertyid: app_store.app_data.property_id,
                from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                room_type_ids: [],
                adult_nbr: params.adult_nbr,
                child_nbr: params.child_nbr,
                language: app_store.userPreferences.language_id,
                currency_ref: app_store.userPreferences.currency_id,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
                promo_key: booking_store.bookingAvailabilityParams.coupon || '',
                is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
                agent_id: booking_store.bookingAvailabilityParams.agent || 0,
            },
            identifier,
            mode: 'modify_rt',
            rp_id: params.rp_id,
            rt_id: params.rt_id,
            adultChildConstraint: params.adultChildConstraint,
        });
        return res.My_Result;
    }
    handleBedConfiguration(roomTypeId, rateplanId, detail, index) {
        var _a, _b;
        let oldBedConfiguration = [];
        if ((_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.bed_configuration) {
            oldBedConfiguration = [...(_b = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _b === void 0 ? void 0 : _b.checkoutBedSelection];
        }
        oldBedConfiguration[index] = detail;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { checkoutBedSelection: oldBedConfiguration }) }) });
    }
    handleSmokeConfiguration(roomTypeId, rateplanId, detail, index) {
        var _a;
        let oldSmokingConfiguration = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.checkoutSmokingSelection];
        oldSmokingConfiguration[index] = detail;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { checkoutSmokingSelection: oldSmokingConfiguration }) }) });
    }
    renderSmokingView(smoking_option, index, ratePlanId, roomTypeId, checkoutSmokingSelection) {
        if (smoking_option.code === '002') {
            return null;
        }
        if (smoking_option.code === '003') {
            return (h("div", { class: "section-item-footer-text" }, h("ir-icons", { name: 'ban_smoking', svgClassName: "size-4" }), h("p", null, smoking_option.description)));
        }
        return (h("ir-select", { icon: true, onValueChange: e => this.handleSmokeConfiguration(roomTypeId, ratePlanId, e.detail, index), value: checkoutSmokingSelection[index], data: smoking_option.allowed_smoking_options.map(s => ({ id: s.code, value: s.description })), class: "hidden md:block" }, h("ir-icons", { name: checkoutSmokingSelection[index] !== '002' ? 'smoking' : 'ban_smoking', slot: "icon" })));
    }
    render() {
        var _a, _b, _c, _d, _e;
        console.log(this.firstRoom);
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const total_rooms = this.calculateTotalRooms();
        return (h(Host, { key: '599bad5cc3f32de5fe2e1cfb4cb130e57e433dd7' }, h("div", { key: '8292c33882dfeb8d46546b9683d5c86c265e3e28', class: "w-full" }, h("section", { key: 'd4229389888d053a9d2ac093e08c6ddb7af7078c', class: "mb-5 flex flex-col flex-wrap items-center gap-2 rounded-md bg-gray-100 px-4 py-2 lg:flex-row" }, h("div", { key: 'e238faebe594f4bb9c3f14a93ca437f735e9f403', class: "flex flex-1 items-center gap-2" }, h("ir-icons", { key: '15122b4090759ec2f2bbe518ca32222de2a28592', name: "bed" }), h("p", { key: 'b8cdc1fbc0ff94085c4cfc06da3c03240681eacb' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night, " - ", booking_store.bookingAvailabilityParams.adult_nbr, ' ', booking_store.bookingAvailabilityParams.adult_nbr > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person, " - ", total_rooms, ' ', total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room)), h("p", { key: 'c7a55b9efb67c63db2e786613d8429b643bd02d0', class: " text-right text-xs text-gray-500" }, (_c = booking_store.tax_statement) === null || _c === void 0 ? void 0 : _c.message)), h("section", { key: 'a99389955cb9e1302f190de676e249f6d1f66623', class: 'space-y-14' }, Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    return null;
                }
                return [...new Array(r.reserved)].map((_, index) => {
                    if (this.isLoading === r.ratePlan.id) {
                        return h("div", { class: "h-16 animate-pulse rounded-md bg-gray-200" });
                    }
                    return (h("div", { class: "flex items-center justify-between" }, h("div", { class: "flex-1 space-y-2" }, h("div", null, h("div", { class: "flex items-center gap-3" }, h("div", { class: "flex flex-row items-center gap-3 " }, h("h3", { class: "font-semibold" }, r.roomtype.name), r.ratePlan.is_non_refundable ? (h("p", { class: "text-xs text-green-500" }, "Non refundable")) : (h("div", { class: 'inline-flex  h-6 items-center justify-center pt-0.5' }, h("ir-button", { haveRightIcon: true, variants: "link", class: "text-sm", buttonClassName: "pl-0", buttonStyles: { paddingLeft: '0', fontSize: '12px', paddingTop: '0', paddingBottom: '0' }, onButtonClick: () => {
                            this.currentRatePlan = r.ratePlan;
                            this.dialogRef.openModal();
                        }, label: localizedWords.entries.Lcz_IfICancel }, h("ir-icons", { svgClassName: "size-4", slot: "right-icon", name: "circle_info" }))))), h("div", { class: "ml-1 flex-1 " }, h("p", { class: "text-end text-base font-medium xl:text-xl" }, formatAmount(r.checkoutVariations[index].amount, app_store.userPreferences.currency_id))))), h("div", { class: "flex items-center gap-2.5" }, h("ir-input", { onInput: e => {
                            if (index === 0 && !checkout_store.modifiedGuestName && this.firstRoom.ratePlanId === ratePlanId && this.firstRoom.roomtypeId === roomTypeId) {
                                checkout_store.modifiedGuestName = true;
                            }
                            this.handleGuestNameChange(index, e, Number(ratePlanId), Number(roomTypeId));
                        }, value: r.guestName[index], label: localizedWords.entries.Lcz_GuestFullName, leftIcon: true, class: "w-full", placeholder: "", maxlength: 50, error: this.errors && r.guestName[index] === '', onInputBlur: e => {
                            if (!checkout_store.modifiedGuestName) {
                                return;
                            }
                            const target = e.target;
                            if (r.guestName[index].length < 2) {
                                target.setAttribute('data-state', 'error');
                                target.setAttribute('aria-invalid', 'true');
                            }
                            else {
                                if (target.hasAttribute('aria-invalid')) {
                                    target.setAttribute('aria-invalid', 'false');
                                }
                            }
                        }, onInputFocus: e => {
                            const target = e.target;
                            if (target.hasAttribute('data-state')) {
                                target.removeAttribute('data-state');
                            }
                        } }, h("ir-icons", { name: "user", slot: "left-icon", svgClassName: "size-4" })), h("ir-select", { variant: "double-line", value: r.ratePlan.variations.findIndex(v => v.adult_child_offering === r.checkoutVariations[index].adult_child_offering).toString(), label: localizedWords.entries.Lcz_RequiredCapacity, data: r.ratePlan.variations.map((v, i) => ({
                            id: i.toString(),
                            value: v.adult_child_offering,
                        })), class: "hidden w-full sm:block", onValueChange: e => this.handleVariationChange(index, e, r.ratePlan.variations, Number(ratePlanId), Number(roomTypeId)) })), h("div", { class: "flex items-center gap-4" }, h("div", { class: "flex items-center gap-1 text-xs" }, h("ir-icons", { name: "utencils", svgClassName: "size-4" }), h("p", { class: "line-clamp-3" }, h("span", null, r.ratePlan.short_name), r.ratePlan.custom_text && h("span", { class: "mx-1 max-w-[60%] text-right text-xs text-gray-500 md:w-full md:max-w-full" }, r.ratePlan.custom_text))), this.renderSmokingView(r.roomtype.smoking_option, index, ratePlanId, roomTypeId, r.checkoutSmokingSelection), r.is_bed_configuration_enabled && (h("ir-select", { value: r.checkoutBedSelection[index], onValueChange: e => this.handleBedConfiguration(roomTypeId, ratePlanId, e.detail, index), data: r.roomtype.bedding_setup.map(b => ({ id: b.code, value: b.name })), icon: true }, h("ir-icons", { name: r.checkoutBedSelection[index] === 'kingsizebed' ? 'double_bed' : 'bed', slot: "icon" })))))));
                });
            });
        }))), h("ir-dialog", { key: '32047e7426cbf2c8b7b4b05e1162a303f927c11b', ref: el => (this.dialogRef = el), onOpenChange: e => {
                if (!e.detail) {
                    this.currentRatePlan = null;
                }
            } }, h("div", { key: 'c18e235db46c7b5ce0e8c83a5d86f302110d012d', slot: "modal-body", class: "p-4 md:p-6" }, h("p", { key: '9ea125dd06d97471c9785b01289e3feeccdff638', innerHTML: (_d = this.currentRatePlan) === null || _d === void 0 ? void 0 : _d.cancelation }), h("p", { key: '5c5e7a788c82256a1aa3c118713cebd5ea4f0139', innerHTML: (_e = this.currentRatePlan) === null || _e === void 0 ? void 0 : _e.guarantee })))));
    }
    static get style() { return IrBookingDetailsStyle0; }
}, [1, "ir-booking-details", {
        "errors": [1],
        "currentRatePlan": [32],
        "isLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-details", "ir-button", "ir-dialog", "ir-icons", "ir-input", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingDetails);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
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

export { IrBookingDetails as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-details2.js.map