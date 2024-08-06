import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-3ddfa666.js';
import { C as CommonService } from './common.service-ac1789c0.js';
import { P as PropertyService, c as checkout_store } from './property.service-50142fc7.js';
import { a as app_store, o as onAppDataChange } from './app.store-8e486326.js';
import { j as getUserPrefernce, l as checkAffiliate, g as getDateDifference, d as booking_store, h as calculateTotalCost, f as formatAmount, c as cn, n as validateBooking, a as runScriptAndRemove } from './utils-5755d37e.js';
import { a as axios, P as PaymentService } from './payment.service-f303f1be.js';
import { l as localizedWords } from './localization.store-f417f370.js';
import { P as PickupFormData } from './pickup-505e9198.js';
import { A as AuthService, a as IrUserFormData } from './user_form-0cb9f87b.js';
import { a as isRequestPending } from './ir-interceptor.store-f43b4ace.js';
import { Z as ZCreditCardSchemaWithCvc } from './checkout.validator-3cb8a0c7.js';
import { Z as ZodError } from './index-1e9e0a3e.js';
import './index-ea8ec4f0.js';
import './index-6014a5e7.js';

const irBookingListingCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.app_container{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container{min-block-size:3rem}.ir-table{caption-side:bottom;color:var(--gray-900,#101828);font-size:.875rem;line-height:1.25rem;width:100%}.ir-table-header{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px;width:100%}.ir-table-header:hover,.ir-table-row:hover{background:var(--gray-100,#f2f4f7)}.ir-table-header tr{border-bottom:1px solid var(--gray-200,#eaecf0)}.ir-table-footer{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.ir-table-footer tr:last-child{border-bottom-width:0}.ir-table-row{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ir-table-head{font-weight:500;height:2.5rem;text-align:left}.ir-table-cell,.ir-table-head{padding:.75rem .2rem;vertical-align:middle;width:-moz-max-content!important;width:max-content!important}.ir-table-cell{font-size:.875rem}.ir-table-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}:host{display:block}.page-loader{animation:l13 1s linear infinite;aspect-ratio:1;background:radial-gradient(farthest-side,#000 94%,#0000) top/4px 4px no-repeat,conic-gradient(#0000 30%,#000);border-radius:50%;mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);width:30px}.main-container{display:flex;flex-direction:column;gap:1rem;min-height:100vh}.header-left{align-items:center;display:flex;gap:.625rem}.header-title{font-size:1.125rem;font-weight:600;margin:0;padding:0}@media (min-width:768px){.main-container.main-container-padding{padding-left:1rem;padding-right:1rem}}@media (min-width:1024px){.main-container.main-container-padding{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:1280px){.main-container.main-container-padding{padding-left:0;padding-right:0}}@keyframes l13{to{transform:rotate(1turn)}}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.h-full{height:100%}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[80vh\\]{height:80vh}.max-h-32{max-height:8rem}.max-h-52{max-height:13rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.visible{visibility:visible}.hidden{display:none}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-screen{height:100vh}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.grid{display:grid}.h-64{height:16rem}.max-w-md{max-width:28rem}.place-content-center{place-content:center}@media (min-width:768px){.md\\:hidden{display:none}}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.table{display:table}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid{display:grid}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.-bottom-0{bottom:0}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.size-4{height:1rem;width:1rem}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.w-72{width:18rem}.w-fit{width:fit-content}.p-2{padding:.5rem}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.h-\\[50vh\\]{height:50vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.perma_link = null;
        this.aName = null;
        this.showAllBookings = true;
        this.be = false;
        this.startScreen = { screen: 'bookings', params: null };
        this.aff = null;
        this.version = '2.0';
        this.hideGoogleSignIn = true;
        this.isLoading = false;
        this.token = undefined;
        this.bookingNumber = null;
        this.currentPage = 'bookings';
        this.selectedBooking = null;
        this.isAffiliate = false;
    }
    async componentWillLoad() {
        var _a;
        axios.defaults.baseURL = this.baseUrl;
        app_store.app_data.hideGoogleSignIn = this.hideGoogleSignIn;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        this.currentPage = this.startScreen.screen;
        this.selectedBooking = (_a = this.startScreen.params) !== null && _a !== void 0 ? _a : null;
        getUserPrefernce();
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            this.bookingNumber = isAuthenticated.params ? isAuthenticated.params.booking_nbr : null;
            this.token = isAuthenticated.token;
            app_store.app_data.token = this.token;
        }
        else {
            const token = await this.commonService.getBEToken();
            if (token) {
                app_store.app_data.token = token;
            }
        }
        this.initializeServices();
        this.initializeApp();
    }
    handleAffiliateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isAffiliate = checkAffiliate(this.aff.toLowerCase().trim()) !== null;
        }
    }
    handleScreenChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const screen = e.detail;
        if (!['booking-listing', 'user-profile'].includes(screen) || (this.currentPage === 'bookings' && screen === 'booking-listing')) {
            return;
        }
        this.currentPage = screen === 'booking-listing' ? 'bookings' : 'user-profile';
    }
    async initializeApp() {
        var _a, _b;
        try {
            this.isLoading = true;
            let requests = [this.propertyService.getExposedGuest()];
            if (!this.be) {
                requests = [
                    ...requests,
                    this.commonService.getExposedLanguage(),
                    this.propertyService.getExposedProperty({
                        id: this.propertyid,
                        language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en',
                        aname: this.aName,
                        perma_link: this.perma_link,
                    }),
                ];
            }
            await Promise.all(requests);
            this.isAffiliate = checkAffiliate((_b = this.aff) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim()) !== null;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initializeServices() {
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { token, state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.selectedBooking = { email: payload.email, booking_nbr: payload.booking_nbr };
                this.bookingNumber = payload.booking_nbr;
                this.currentPage = 'booking-details';
            }
            this.token = token;
            this.initializeServices();
            this.initializeApp();
        }
    }
    handleSignout() {
        if (this.be) {
            return;
        }
        this.token = null;
    }
    handleRouting(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const { params, route } = e.detail;
        this.currentPage = route;
        this.selectedBooking = params.booking ? { email: params === null || params === void 0 ? void 0 : params.booking.guest.email, booking_nbr: params.booking.booking_nbr } : null;
    }
    renderPages() {
        switch (this.currentPage) {
            case 'bookings':
                return (h("ir-booking-overview", { aff: this.isAffiliate, token: this.token, propertyid: this.propertyid, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
            case 'booking-details':
                return (h("div", { class: this.be ? '' : 'mx-auto px-4 lg:px-6' }, h("div", { class: "header-left" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        this.currentPage = 'bookings';
                        this.selectedBooking = null;
                        // this.bl_routing.emit({ route: 'booking' });
                    }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "header-title" }, "My bookings")), h("ir-invoice", { locationShown: false, headerShown: false, footerShown: false, propertyId: this.propertyid, perma_link: this.perma_link, aName: this.aName, language: this.language, baseUrl: this.baseUrl, email: this.selectedBooking.email, bookingNbr: this.selectedBooking.booking_nbr, status: 1, be: true })));
            case 'user-profile':
                if (this.be) {
                    return;
                }
                return (h("ir-user-profile", { be: this.be, user_data: {
                        id: checkout_store.userFormData.id,
                        email: checkout_store.userFormData.email,
                        first_name: checkout_store.userFormData.firstName,
                        last_name: checkout_store.userFormData.lastName,
                        country_id: checkout_store.userFormData.country_id,
                        mobile: checkout_store.userFormData.mobile_number,
                        country_phone_prefix: checkout_store.userFormData.country_phone_prefix.toString(),
                    } }));
            default:
                return (h("ir-booking-overview", { aff: this.isAffiliate, token: this.token, propertyid: this.propertyid, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
        }
    }
    renderAuthScreen() {
        return (h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false }))));
    }
    renderBookingsScreen() {
        var _a, _b, _c;
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, !this.be && h("ir-interceptor", null), h("div", { class: " flex h-screen flex-col gap-4 md:hidden" }, [...Array(5)].map(p => (h("div", { key: p, class: "block h-64 w-full animate-pulse rounded-md bg-gray-200" }))))));
        }
        return (h(Fragment, null, this.headerShown && (h("ir-nav", { isBookingListing: true, showBookingCode: false, showCurrency: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), h("div", { class: `mx-auto max-w-6xl ` }, this.renderPages()), this.footerShown && h("ir-footer", { version: this.version })));
    }
    render() {
        return (h(Host, { key: '6cbbdffa51b16b0217fe392a8f2de4b28e2d2527' }, !this.be && h("ir-interceptor", { key: '92f2249144ddc952c0c135a1f5ca3ae168a6ead9' }), !this.token ? this.renderAuthScreen() : this.renderBookingsScreen()));
    }
    static get watchers() { return {
        "aff": ["handleAffiliateChange"]
    }; }
};
IrBookingListing.style = IrBookingListingStyle0;

const irBookingPageCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.m-0{margin:0}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.border{border-width:1px}.p-0{padding:0}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.app_container{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container{min-block-size:3rem}.ir-table{caption-side:bottom;color:var(--gray-900,#101828);font-size:.875rem;line-height:1.25rem;width:100%}.ir-table-header{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px;width:100%}.ir-table-header:hover,.ir-table-row:hover{background:var(--gray-100,#f2f4f7)}.ir-table-header tr{border-bottom:1px solid var(--gray-200,#eaecf0)}.ir-table-footer{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.ir-table-footer tr:last-child{border-bottom-width:0}.ir-table-row{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ir-table-head{font-weight:500;height:2.5rem;text-align:left}.ir-table-cell,.ir-table-head{padding:.75rem 1.5rem;vertical-align:middle}.ir-table-cell{font-size:.875rem}.ir-table-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}.carousel-container{aspect-ratio:4/3}.bounce-twice{animation:bounce .5s ease-in-out 2}.flex-wrap p{overflow-wrap:break-word;word-break:break-word}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.h-full{height:100%}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[80vh\\]{height:80vh}.max-h-32{max-height:8rem}.max-h-52{max-height:13rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.visible{visibility:visible}.hidden{display:none}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-screen{height:100vh}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.grid{display:grid}.h-64{height:16rem}.max-w-md{max-width:28rem}.place-content-center{place-content:center}@media (min-width:768px){.md\\:hidden{display:none}}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.table{display:table}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid{display:grid}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.-bottom-0{bottom:0}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.size-4{height:1rem;width:1rem}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.w-72{width:18rem}.w-fit{width:fit-content}.p-2{padding:.5rem}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.h-\\[50vh\\]{height:50vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}";
const IrBookingPageStyle0 = irBookingPageCss;

const IrBookingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.routing = createEvent(this, "routing", 7);
        this.fromDate = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.selectedLocale = undefined;
        this.property = undefined;
        this.currencies = undefined;
        this.languages = undefined;
    }
    componentWillLoad() {
        this.property = Object.assign({}, app_store.property);
        onAppDataChange('property', (newValue) => {
            this.property = Object.assign({}, newValue);
        });
    }
    handleBookingAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.checkoutContainerRef) {
            this.checkoutContainerRef.classList.add('bounce-twice');
            this.checkoutContainerRef.addEventListener('animationend', () => {
                this.checkoutContainerRef.classList.remove('bounce-twice');
            });
        }
    }
    handleScrolling(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.roomTypeSectionRef.scrollIntoView({ behavior: 'smooth' });
        window.setTimeout(() => {
            window.scrollBy(0, -30);
        }, 500);
    }
    renderTotalNights() {
        var _a, _b;
        const diff = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        return `${diff} ${diff > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night}`;
    }
    render() {
        var _a, _b, _c;
        if (!this.property) {
            return null;
        }
        const { totalAmount } = calculateTotalCost();
        const isInjected = app_store.app_data.injected;
        return (h(Host, null, h("div", { class: "space-y-5 " }, !isInjected && (h("div", null, h("ir-property-gallery", null))), h("div", null, h("ir-availibility-header", { fromDate: this.fromDate, toDate: this.toDate, adultCount: this.adultCount, childrenCount: this.childrenCount })), h("section", { class: "relative justify-between gap-4 rounded-md ", ref: el => (this.roomTypeSectionRef = el) }, h("div", { class: " flex-1 py-2" }, (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => {
            if (!roomType.is_active ||
                (app_store.app_data.roomtype_id && roomType.id !== app_store.app_data.roomtype_id) ||
                !roomType.rateplans.some(rp => rp.is_booking_engine_enabled)) {
                return null;
            }
            return h("ir-roomtype", { roomtype: roomType, key: roomType.id });
        }))), h("section", { class: cn('text-sm', { 'pb-5': isInjected }) }, h("h2", { class: "mb-5 text-lg font-medium" }, localizedWords.entries.Lcz_FacilitiesAndServices), h("ir-facilities", null), !isInjected && h("p", { innerHTML: (_c = (_b = this.property) === null || _b === void 0 ? void 0 : _b.description) === null || _c === void 0 ? void 0 : _c.location_and_intro, class: "px-6 py-8" }))), booking_store.enableBooking && totalAmount > 0 && (h("div", { ref: el => (this.checkoutContainerRef = el), class: "sticky bottom-2 z-40 mt-14 flex w-full items-center justify-end gap-4 rounded-md bg-gray-700/80 text-base text-gray-200 md:text-lg lg:gap-10  lg:text-2xl" }, h("p", null, this.renderTotalNights()), totalAmount > 0 && h("div", null, formatAmount(totalAmount, app_store.userPreferences.currency_id, 0)), h("ir-button", { onButtonClick: () => this.routing.emit('checkout'), label: localizedWords.entries.Lcz_BookNow, size: "lg", class: "w-auto lg:w-60", buttonStyles: {
                height: '64px',
                borderRadius: '0',
                borderTopRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderBottomRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderTopLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
                borderBottomLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
            } })))));
    }
};
IrBookingPage.style = IrBookingPageStyle0;

const irCheckoutPageCss = "*.sc-ir-checkout-page,.sc-ir-checkout-page:after,.sc-ir-checkout-page:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-checkout-page:after,.sc-ir-checkout-page:before{--tw-content:\"\"}.sc-ir-checkout-page-h,html.sc-ir-checkout-page{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-checkout-page{line-height:inherit;margin:0}hr.sc-ir-checkout-page{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-checkout-page:where([title]){text-decoration:underline dotted}h1.sc-ir-checkout-page,h2.sc-ir-checkout-page,h3.sc-ir-checkout-page,h4.sc-ir-checkout-page,h5.sc-ir-checkout-page,h6.sc-ir-checkout-page{font-size:inherit;font-weight:inherit}a.sc-ir-checkout-page{color:inherit;text-decoration:inherit}b.sc-ir-checkout-page,strong.sc-ir-checkout-page{font-weight:bolder}code.sc-ir-checkout-page,kbd.sc-ir-checkout-page,pre.sc-ir-checkout-page,samp.sc-ir-checkout-page{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-checkout-page{font-size:80%}sub.sc-ir-checkout-page,sup.sc-ir-checkout-page{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-checkout-page{bottom:-.25em}sup.sc-ir-checkout-page{top:-.5em}table.sc-ir-checkout-page{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-checkout-page,input.sc-ir-checkout-page,optgroup.sc-ir-checkout-page,select.sc-ir-checkout-page,textarea.sc-ir-checkout-page{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-checkout-page,select.sc-ir-checkout-page{text-transform:none}[type=button].sc-ir-checkout-page,[type=reset].sc-ir-checkout-page,[type=submit].sc-ir-checkout-page,button.sc-ir-checkout-page{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-checkout-page:-moz-focusring{outline:auto}.sc-ir-checkout-page:-moz-ui-invalid{box-shadow:none}progress.sc-ir-checkout-page{vertical-align:baseline}.sc-ir-checkout-page::-webkit-inner-spin-button,.sc-ir-checkout-page::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-checkout-page{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-checkout-page::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-checkout-page::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-checkout-page{display:list-item}blockquote.sc-ir-checkout-page,dd.sc-ir-checkout-page,dl.sc-ir-checkout-page,fieldset.sc-ir-checkout-page,figure.sc-ir-checkout-page,h1.sc-ir-checkout-page,h2.sc-ir-checkout-page,h3.sc-ir-checkout-page,h4.sc-ir-checkout-page,h5.sc-ir-checkout-page,h6.sc-ir-checkout-page,hr.sc-ir-checkout-page,p.sc-ir-checkout-page,pre.sc-ir-checkout-page{margin:0}fieldset.sc-ir-checkout-page,legend.sc-ir-checkout-page{padding:0}menu.sc-ir-checkout-page,ol.sc-ir-checkout-page,ul.sc-ir-checkout-page{list-style:none;margin:0;padding:0}dialog.sc-ir-checkout-page{padding:0}textarea.sc-ir-checkout-page{resize:vertical}input.sc-ir-checkout-page::placeholder,textarea.sc-ir-checkout-page::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-checkout-page,button.sc-ir-checkout-page{cursor:pointer}.sc-ir-checkout-page:disabled{cursor:default}audio.sc-ir-checkout-page,canvas.sc-ir-checkout-page,embed.sc-ir-checkout-page,iframe.sc-ir-checkout-page,img.sc-ir-checkout-page,object.sc-ir-checkout-page,svg.sc-ir-checkout-page,video.sc-ir-checkout-page{display:block;vertical-align:middle}img.sc-ir-checkout-page,video.sc-ir-checkout-page{height:auto;max-width:100%}[hidden].sc-ir-checkout-page{display:none}.sc-ir-checkout-page::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-checkout-page{display:block}.sc-ir-checkout-page-h{display:block}.static.sc-ir-checkout-page{position:static}.relative.sc-ir-checkout-page{position:relative}.sticky.sc-ir-checkout-page{position:sticky}.top-0.sc-ir-checkout-page{top:0}.z-50.sc-ir-checkout-page{z-index:50}.m-0.sc-ir-checkout-page{margin:0}.mx-auto.sc-ir-checkout-page{margin-left:auto;margin-right:auto}.flex.sc-ir-checkout-page{display:flex}.w-full.sc-ir-checkout-page{width:100%}.max-w-6xl.sc-ir-checkout-page{max-width:72rem}.flex-1.sc-ir-checkout-page{flex:1 1 0%}.flex-col.sc-ir-checkout-page{flex-direction:column}.space-y-5.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-checkout-page{padding:0}.px-4.sc-ir-checkout-page{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-checkout-page{padding-left:1.5rem;padding-right:1.5rem}}.py-3.sc-ir-checkout-page{padding-bottom:.75rem;padding-top:.75rem}.text-lg.sc-ir-checkout-page{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-checkout-page{font-weight:500}.shadow.sc-ir-checkout-page{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline.sc-ir-checkout-page{outline-style:solid}.h-full.sc-ir-checkout-page{height:100%}.top-\\[20\\%\\].sc-ir-checkout-page{top:20%}.aspect-\\[1\\/1\\].sc-ir-checkout-page{aspect-ratio:1/1}.h-\\[80vh\\].sc-ir-checkout-page{height:80vh}.max-h-32.sc-ir-checkout-page{max-height:8rem}.max-h-52.sc-ir-checkout-page{max-height:13rem}.animate-pulse.sc-ir-checkout-page{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap.sc-ir-checkout-page{flex-wrap:wrap}.items-center.sc-ir-checkout-page{align-items:center}.justify-center.sc-ir-checkout-page{justify-content:center}.justify-between.sc-ir-checkout-page{justify-content:space-between}.gap-1.sc-ir-checkout-page{gap:.25rem}.gap-16.sc-ir-checkout-page{gap:4rem}.gap-4.sc-ir-checkout-page{gap:1rem}.space-y-2.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover.sc-ir-checkout-page{object-fit:cover}.pt-2.sc-ir-checkout-page{padding-top:.5rem}.text-center.sc-ir-checkout-page{text-align:center}.text-sm.sc-ir-checkout-page{font-size:.875rem;line-height:1.25rem}.text-xs.sc-ir-checkout-page{font-size:.75rem;line-height:1rem}.text-green-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit.sc-ir-checkout-page{width:fit-content}.md\\:flex-row.sc-ir-checkout-page{flex-direction:row}.md\\:items-center.sc-ir-checkout-page{align-items:center}.md\\:text-right.sc-ir-checkout-page{text-align:right}}.size-6.sc-ir-checkout-page{height:1.5rem;width:1.5rem}.pb-2.sc-ir-checkout-page{padding-bottom:.5rem}.font-semibold.sc-ir-checkout-page{font-weight:600}.text-red-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.sr-only.sc-ir-checkout-page{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute.sc-ir-checkout-page,.sr-only.sc-ir-checkout-page{position:absolute}.right-3.sc-ir-checkout-page{right:.75rem}.top-3.sc-ir-checkout-page{top:.75rem}.text-end.sc-ir-checkout-page{text-align:end}.text-gray-400.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5.sc-ir-checkout-page{height:1.25rem}.w-5.sc-ir-checkout-page{width:1.25rem}.fixed.sc-ir-checkout-page{position:fixed}.visible.sc-ir-checkout-page{visibility:visible}.hidden.sc-ir-checkout-page{display:none}.filter.sc-ir-checkout-page{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.pointer-events-none.sc-ir-checkout-page{pointer-events:none}.inset-y-0.sc-ir-checkout-page{bottom:0;top:0}.end-1.sc-ir-checkout-page{inset-inline-end:.25rem}.start-2.sc-ir-checkout-page{inset-inline-start:.5rem}.rounded-md.sc-ir-checkout-page{border-radius:.375rem}.bg-white.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-checkout-page{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-checkout-page{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-checkout-page{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-checkout-page{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-checkout-page{padding-inline-end:1.75rem}.ps-9.sc-ir-checkout-page{padding-inline-start:2.25rem}.pt-1.sc-ir-checkout-page{padding-top:.25rem}.text-\\[1rem\\].sc-ir-checkout-page{font-size:1rem}.text-\\[\\#667085\\].sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.mx-1.sc-ir-checkout-page{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-checkout-page{justify-content:flex-start}.mb-4.sc-ir-checkout-page{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-checkout-page{max-height:83vh}.overflow-y-auto.sc-ir-checkout-page{overflow-y:auto}.p-4.sc-ir-checkout-page{padding:1rem}.text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-checkout-page{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-checkout-page{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-checkout-page{padding:1.5rem}}.right-0.sc-ir-checkout-page{right:0}.right-4.sc-ir-checkout-page{right:1rem}.top-4.sc-ir-checkout-page{top:1rem}.mt-8.sc-ir-checkout-page{margin-top:2rem}.h-screen.sc-ir-checkout-page{height:100vh}.min-w-\\[70\\%\\].sc-ir-checkout-page{min-width:70%}.max-w-full.sc-ir-checkout-page{max-width:100%}.translate-x-0.sc-ir-checkout-page{--tw-translate-x:0px}.translate-x-0.sc-ir-checkout-page,.translate-x-\\[100\\%\\].sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-checkout-page{--tw-translate-x:100%}.shadow.sc-ir-checkout-page,.shadow-md.sc-ir-checkout-page{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-checkout-page{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-checkout-page{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-checkout-page{transition-duration:.3s}.ease-in-out.sc-ir-checkout-page{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-checkout-page{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-checkout-page,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-checkout-page{--tw-translate-x:0px}.bottom-2.sc-ir-checkout-page{bottom:.5rem}.z-40.sc-ir-checkout-page{z-index:40}.mb-5.sc-ir-checkout-page{margin-bottom:1.25rem}.mt-14.sc-ir-checkout-page{margin-top:3.5rem}.w-auto.sc-ir-checkout-page{width:auto}.justify-end.sc-ir-checkout-page{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-checkout-page{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-checkout-page{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-checkout-page{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-checkout-page{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-checkout-page{padding-bottom:1.25rem}.text-base.sc-ir-checkout-page{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-checkout-page{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-checkout-page{width:15rem}.lg\\:gap-10.sc-ir-checkout-page{gap:2.5rem}.lg\\:text-2xl.sc-ir-checkout-page{font-size:1.5rem;line-height:2rem}}.grid.sc-ir-checkout-page{display:grid}.h-64.sc-ir-checkout-page{height:16rem}.max-w-md.sc-ir-checkout-page{max-width:28rem}.place-content-center.sc-ir-checkout-page{place-content:center}@media (min-width:768px){.md\\:hidden.sc-ir-checkout-page{display:none}}.gap-2.sc-ir-checkout-page{gap:.5rem}.gap-2\\.5.sc-ir-checkout-page{gap:.625rem}.space-y-4.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-checkout-page{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-checkout-page{position:sticky}.md\\:top-20.sc-ir-checkout-page{top:5rem}.md\\:flex.sc-ir-checkout-page{display:flex}.md\\:max-w-4xl.sc-ir-checkout-page{max-width:56rem}.md\\:max-w-md.sc-ir-checkout-page{max-width:28rem}.md\\:items-start.sc-ir-checkout-page{align-items:flex-start}.md\\:justify-end.sc-ir-checkout-page{justify-content:flex-end}}.table.sc-ir-checkout-page{display:table}.max-w-xs.sc-ir-checkout-page{max-width:20rem}.rounded-lg.sc-ir-checkout-page{border-radius:.5rem}.px-3.sc-ir-checkout-page{padding-left:.75rem;padding-right:.75rem}.resize.sc-ir-checkout-page{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-checkout-page{display:block}}@media (min-width:1024px){.lg\\:size-7.sc-ir-checkout-page{height:1.75rem;width:1.75rem}}.transform.sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:640px){.sm\\:p-6.sc-ir-checkout-page{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-checkout-page{flex-direction:row-reverse}}.col-span-2.sc-ir-checkout-page{grid-column:span 2/span 2}.mb-6.sc-ir-checkout-page{margin-bottom:1.5rem}.mt-4.sc-ir-checkout-page{margin-top:1rem}.mt-6.sc-ir-checkout-page{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-checkout-page{min-height:80vh}.max-w-xl.sc-ir-checkout-page{max-width:36rem}@media (min-width:768px){.md\\:grid.sc-ir-checkout-page{display:grid}.md\\:grid-cols-2.sc-ir-checkout-page{grid-template-columns:repeat(2,minmax(0,1fr))}}.size-\\[18px\\].sc-ir-checkout-page{height:18px;width:18px}.h-\\[14px\\].sc-ir-checkout-page{height:14px}.h-\\[3rem\\].sc-ir-checkout-page{height:3rem}.w-\\[12\\.25px\\].sc-ir-checkout-page{width:12.25px}.gap-0.sc-ir-checkout-page{gap:0}.gap-0\\.5.sc-ir-checkout-page{gap:.125rem}.border-0.sc-ir-checkout-page{border-width:0}.pt-14.sc-ir-checkout-page{padding-top:3.5rem}.shadow.sc-ir-checkout-page,.shadow-none.sc-ir-checkout-page{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-checkout-page{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-checkout-page{width:auto}.sm\\:w-fit.sc-ir-checkout-page{width:fit-content}.sm\\:border.sc-ir-checkout-page{border-width:1px}.sm\\:pt-4.sc-ir-checkout-page{padding-top:1rem}.sm\\:shadow-sm.sc-ir-checkout-page{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.-bottom-0.sc-ir-checkout-page{bottom:0}.z-0.sc-ir-checkout-page{z-index:0}.mb-1.sc-ir-checkout-page{margin-bottom:.25rem}.mb-2.sc-ir-checkout-page{margin-bottom:.5rem}.size-10.sc-ir-checkout-page{height:2.5rem;width:2.5rem}.size-3.sc-ir-checkout-page{height:.75rem;width:.75rem}.h-48.sc-ir-checkout-page{height:12rem}.max-h-\\[80vh\\].sc-ir-checkout-page{max-height:80vh}.cursor-pointer.sc-ir-checkout-page{cursor:pointer}.items-end.sc-ir-checkout-page{align-items:flex-end}.overflow-hidden.sc-ir-checkout-page{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-checkout-page{border-radius:var(--radius,8px)}.bg-gray-300.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80.sc-ir-checkout-page{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-checkout-page{padding-left:.5rem;padding-right:.5rem}.py-4.sc-ir-checkout-page{padding-top:1rem}.pb-4.sc-ir-checkout-page,.py-4.sc-ir-checkout-page{padding-bottom:1rem}.pt-0.sc-ir-checkout-page{padding-top:0}.font-normal.sc-ir-checkout-page{font-weight:400}.ordinal.sc-ir-checkout-page{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-checkout-page:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:block.sc-ir-checkout-page{display:block}.md\\:max-h-\\[200px\\].sc-ir-checkout-page{max-height:200px}.md\\:w-auto.sc-ir-checkout-page{width:auto}.md\\:p-4.sc-ir-checkout-page{padding:1rem}.md\\:pt-0.sc-ir-checkout-page{padding-top:0}.md\\:pt-4.sc-ir-checkout-page{padding-top:1rem}.md\\:text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-checkout-page{max-height:250px}}.bg-gray-100.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-checkout-page{padding:1.5rem}.text-start.sc-ir-checkout-page{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-checkout-page{justify-content:space-between}.md\\:gap-8.sc-ir-checkout-page{gap:2rem}}.ml-1.sc-ir-checkout-page{margin-left:.25rem}.line-clamp-3.sc-ir-checkout-page{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-checkout-page{display:inline-flex}.size-4.sc-ir-checkout-page{height:1rem;width:1rem}.h-16.sc-ir-checkout-page{height:4rem}.h-6.sc-ir-checkout-page{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-checkout-page{max-width:60%}.flex-row.sc-ir-checkout-page{flex-direction:row}.gap-3.sc-ir-checkout-page{gap:.75rem}.space-y-14.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-checkout-page{padding-left:0}.pt-0\\.5.sc-ir-checkout-page{padding-top:.125rem}.text-right.sc-ir-checkout-page{text-align:right}.text-gray-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-checkout-page{width:100%}.md\\:max-w-full.sc-ir-checkout-page{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-checkout-page{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}}.col-span-6.sc-ir-checkout-page{grid-column:span 6/span 6}.h-4.sc-ir-checkout-page{height:1rem}.h-8.sc-ir-checkout-page{height:2rem}.w-12.sc-ir-checkout-page{width:3rem}.place-items-center.sc-ir-checkout-page{place-items:center}.gap-\\[2px\\].sc-ir-checkout-page{gap:2px}.w-72.sc-ir-checkout-page{width:18rem}.w-fit.sc-ir-checkout-page{width:fit-content}.p-2.sc-ir-checkout-page{padding:.5rem}.h-10.sc-ir-checkout-page{height:2.5rem}.h-14.sc-ir-checkout-page{height:3.5rem}.h-24.sc-ir-checkout-page{height:6rem}.h-28.sc-ir-checkout-page{height:7rem}.gap-12.sc-ir-checkout-page{gap:3rem}.gap-8.sc-ir-checkout-page{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-checkout-page{max-width:24rem}}.h-\\[1px\\].sc-ir-checkout-page{height:1px}.w-56.sc-ir-checkout-page{width:14rem}.min-w-\\[1rem\\].sc-ir-checkout-page{min-width:1rem}.space-y-1.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-checkout-page{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-checkout-page{border-width:1px}.border-gray-300.sc-ir-checkout-page{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.underline.sc-ir-checkout-page{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm.sc-ir-checkout-page{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-checkout-page{aspect-ratio:16/9}.lg\\:p-6.sc-ir-checkout-page{padding:1.5rem}}.text-slate-900.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.leading-none.sc-ir-checkout-page{line-height:1}.tracking-tight.sc-ir-checkout-page{letter-spacing:-.025em}.h-\\[50vh\\].sc-ir-checkout-page{height:50vh}.overflow-x-auto.sc-ir-checkout-page{overflow-x:auto}.overflow-x-hidden.sc-ir-checkout-page{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-checkout-page{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-checkout-page{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell.sc-ir-checkout-page{display:table-cell}}.mx-2.sc-ir-checkout-page{margin-left:.5rem;margin-right:.5rem}.mt-2.sc-ir-checkout-page{margin-top:.5rem}.mt-2\\.5.sc-ir-checkout-page{margin-top:.625rem}.space-y-1\\.5.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl.sc-ir-checkout-page{border-radius:.75rem}.ml-4.sc-ir-checkout-page{margin-left:1rem}.grid-cols-2.sc-ir-checkout-page{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-checkout-page{padding-bottom:1.5rem}.text-gray-800.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-checkout-page{flex-direction:row}.sm\\:items-center.sc-ir-checkout-page{align-items:center}.sm\\:text-sm.sc-ir-checkout-page{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-checkout-page{grid-template-columns:repeat(3,minmax(0,1fr))}}.mb-2\\.5.sc-ir-checkout-page{margin-bottom:.625rem}.w-\\[45\\%\\].sc-ir-checkout-page{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-checkout-page{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-checkout-page{color:var(--gray-500)}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-checkout-page{color:hsl(var(--brand-600))}.text-slate-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-checkout-page{padding:1rem}}.border-solid.sc-ir-checkout-page{border-style:solid}";
const IrCheckoutPageStyle0 = irCheckoutPageCss;

const IrCheckoutPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.routing = createEvent(this, "routing", 7);
        this.propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.authService = new AuthService();
        this.isLoading = false;
        this.error = undefined;
        this.selectedPaymentMethod = null;
    }
    componentWillLoad() {
        const token = app_store.app_data.token;
        this.propertyService.setToken(token);
        this.paymentService.setToken(token);
        this.authService.setToken(token);
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.resetErrorState();
        if (!this.validateUserForm() || !this.validateBookingDetails() || !this.validatePickupForm() || !this.validatePayment() || this.validatePolicyAcceptance()) {
            this.isLoading = false;
            return;
        }
        await this.processBooking();
    }
    validatePolicyAcceptance() {
        if (checkout_store.agreed_to_services) {
            return false;
        }
        this.error = { cause: 'booking-summary', issues: 'unchecked aggreement' };
        return true;
    }
    validatePayment() {
        var _a, _b, _c, _d;
        const currentPayment = app_store.property.allowed_payment_methods.find(p => { var _a; return p.code === ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code); });
        this.selectedPaymentMethod = currentPayment;
        console.log(currentPayment);
        if (!currentPayment) {
            console.log('no current payment');
            return false;
        }
        if (currentPayment.is_payment_gateway) {
            return true;
        }
        try {
            ZCreditCardSchemaWithCvc.parse({
                cardNumber: (_b = (_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.cardNumber) === null || _b === void 0 ? void 0 : _b.replace(/ /g, ''),
                cardHolderName: checkout_store.payment.cardHolderName,
                expiryDate: (_c = checkout_store.payment) === null || _c === void 0 ? void 0 : _c.expiry_month,
                cvc: (_d = checkout_store.payment) === null || _d === void 0 ? void 0 : _d.cvc,
            });
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.issues);
                this.handleError('payment', error);
            }
            return false;
        }
    }
    resetErrorState() {
        this.error = undefined;
        this.isLoading = true;
    }
    validateUserForm() {
        try {
            IrUserFormData.parse(checkout_store.userFormData);
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.errors);
                this.handleError('user', error);
            }
            return false;
        }
    }
    validateBookingDetails() {
        const isValid = validateBooking();
        if (!isValid) {
            this.error = {
                cause: 'booking-details',
                issues: 'missing guestname',
            };
            this.errorElement = this.bookingDetails;
            this.scrollToError();
            return false;
        }
        return true;
    }
    validatePickupForm() {
        if (checkout_store.pickup.location) {
            try {
                PickupFormData.parse(checkout_store.pickup);
                return true;
            }
            catch (error) {
                if (error instanceof ZodError) {
                    this.handleError('pickup', error);
                }
                return false;
            }
        }
        return true;
    }
    handleError(cause, error) {
        let issues = {};
        error.issues.map(issue => (issues[issue.path[0]] = issue));
        this.error = {
            cause,
            issues,
        };
        this.errorElement = cause === 'pickup' ? this.pickupForm : cause === 'user' ? this.userForm : null;
        if (cause !== 'payment') {
            this.scrollToError();
        }
    }
    async processBooking() {
        var _a, _b;
        try {
            const result = await this.propertyService.bookUser();
            booking_store.booking = result;
            const conversionTag = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.tags.find(t => t.key === 'conversion');
            if (conversionTag && conversionTag.value) {
                this.modifyConversionTag(conversionTag.value);
            }
            if (!this.selectedPaymentMethod || !((_b = this.selectedPaymentMethod) === null || _b === void 0 ? void 0 : _b.is_payment_gateway)) {
                app_store.invoice = {
                    email: booking_store.booking.guest.email,
                    booking_number: booking_store.booking.booking_nbr,
                };
                this.routing.emit('invoice');
            }
            else {
                let token = app_store.app_data.token;
                if (!app_store.is_signed_in) {
                    token = await this.authService.login({
                        option: 'direct',
                        params: {
                            email: result.guest.email,
                            booking_nbr: result.booking_nbr,
                        },
                    }, false);
                }
                const paymentAmount = await this.checkPaymentOption(result, token);
                await this.processPayment(result, this.selectedPaymentMethod, paymentAmount, token);
            }
        }
        catch (error) {
            console.error('Booking process failed:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async checkPaymentOption(booking, token) {
        const { amount } = await this.paymentService.GetExposedApplicablePolicies({
            token,
            params: {
                booking_nbr: booking.booking_nbr,
                property_id: app_store.app_data.property_id,
                room_type_id: 0,
                rate_plan_id: 0,
                currency_id: booking.currency.id,
                language: app_store.userPreferences.language_id,
            },
            book_date: new Date(),
        });
        return amount;
    }
    modifyConversionTag(tag) {
        const booking = booking_store.booking;
        tag = tag.replace(/\$\$total_price\$\$/g, booking.financial.total_amount.toString());
        tag = tag.replace(/\$\$length_of_stay\$\$/g, getDateDifference(new Date(booking.from_date), new Date(booking.to_date)).toString());
        tag = tag.replace(/\$\$booking_xref\$\$/g, booking.booking_nbr.toString());
        tag = tag.replace(/\$\$curr\$\$/g, booking.currency.code.toString());
        runScriptAndRemove(tag);
    }
    async processPayment(bookingResult, currentPayment, paymentAmount, token) {
        let amountToBePayed = paymentAmount;
        if (amountToBePayed > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token,
                params: {
                    booking_nbr: bookingResult.booking_nbr,
                    amount: amountToBePayed,
                    currency_id: bookingResult.currency.id,
                    email: bookingResult.guest.email,
                    pgw_id: currentPayment.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => runScriptAndRemove(script),
            });
        }
    }
    scrollToError() {
        if (this.errorElement) {
            this.errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.setTimeout(() => {
                window.scrollBy(0, -150);
            }, 500);
        }
    }
    render() {
        if (isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI') || isRequestPending('/Get_Exposed_Countries')) {
            return h("ir-checkout-skeleton", null);
        }
        return (h(Host, null, h("main", { class: "flex w-full  flex-col justify-between gap-4  md:flex-row md:items-start" }, h("section", { class: "w-full space-y-4 md:max-w-4xl" }, h("div", { class: "flex items-center gap-2.5" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "text-2xl font-semibold" }, "Complete your booking")), !app_store.is_signed_in && !app_store.app_data.hideGoogleSignIn && (h("div", null, h("ir-quick-auth", null))), h("div", { class: 'space-y-8' }, h("div", null, h("ir-user-form", { ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", null, h("ir-booking-details", { ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", null, h("ir-pickup", { ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { error: this.error, isLoading: this.isLoading })))));
    }
};
IrCheckoutPage.style = IrCheckoutPageStyle0;

export { IrBookingListing as ir_booking_listing, IrBookingPage as ir_booking_page, IrCheckoutPage as ir_checkout_page };

//# sourceMappingURL=ir-booking-listing_3.entry.js.map