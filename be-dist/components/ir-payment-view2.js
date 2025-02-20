import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as app_store } from './app.store.js';
import { l as localizedWords, b as booking_store } from './utils.js';
import { c as checkout_store } from './checkout.store.js';
import { Z as ZCreditCardSchemaWithCvc, d as defineCustomElement$3 } from './ir-credit-card-input2.js';
import { I as IMask } from './index3.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irPaymentViewCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.block{display:block}:host{display:block}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5{margin-bottom:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-4{height:1rem}.w-60{width:15rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md{border-radius:.375rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.outline{outline-style:solid}.h-full{height:100%}.grid{display:grid}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.flex-wrap{flex-wrap:wrap}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.absolute{position:absolute}.mb-2{margin-bottom:.5rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.capitalize{text-transform:capitalize}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.visible{visibility:visible}.h-5{height:1.25rem}.w-5{width:1.25rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.fixed{position:fixed}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:640px){.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity,1))}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.w-16{width:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-9>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.25rem*var(--tw-space-y-reverse));margin-top:calc(2.25rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.p-6{padding:1.5rem}.pb-1\\.5{padding-bottom:.375rem}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.rounded-xl{border-radius:.75rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.text-start{text-align:start}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:768px){.md\\:p-4{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.size-3{height:.75rem;width:.75rem}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end{align-items:flex-end}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.pt-2,.py-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.-bottom-0{bottom:0}.left-8{left:2rem}.top-8{top:2rem}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.max-h-\\[90vh\\]{max-height:90vh}.overflow-hidden{overflow:hidden}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity,1))}@media (min-width:768px){.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.h-72{height:18rem}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.border-solid{border-style:solid}";
const IrPaymentViewStyle0 = irPaymentViewCss;

const IrPaymentView = /*@__PURE__*/ proxyCustomElement(class IrPaymentView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.prepaymentAmount = 0;
        this.cardType = '';
    }
    componentWillLoad() {
        this.setPaymentMethod();
        if (!checkout_store.payment) {
            checkout_store.payment = {
                code: this.selectedPaymentMethod,
            };
        }
    }
    handlePrePaymentAmount(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setPaymentMethod();
        }
    }
    setPaymentMethod() {
        const { paymentMethods } = this.setPaymentDetails();
        let selectedMethodCode = null;
        if ((this.prepaymentAmount === 0 && paymentMethods.length === 1 && paymentMethods[0].is_payment_gateway) ||
            (this.prepaymentAmount === 0 && !paymentMethods.some(pm => !pm.is_payment_gateway))) {
            return null;
        }
        if (paymentMethods.length > 0) {
            const [firstMethod, secondMethod] = paymentMethods;
            selectedMethodCode = firstMethod.code === '000' && secondMethod ? secondMethod.code : firstMethod.code;
        }
        this.selectedPaymentMethod = selectedMethodCode;
    }
    setPaymentDetails() {
        const paymentMethods = app_store.property.allowed_payment_methods.filter(p => p.is_active) || [];
        const filteredMap = paymentMethods
            .filter(apm => !(apm.is_payment_gateway && this.prepaymentAmount === 0)) // Filter out inactive gateways for zero prepayment
            .map(apm => ({
            id: apm.code,
            value: apm.is_payment_gateway
                ? localizedWords.entries[`Lcz_Pay_${apm.code}`] || localizedWords.entries.Lcz_PayByCard
                : ['001', '004'].includes(apm.code)
                    ? localizedWords.entries.Lcz_SecureByCard
                    : apm.description,
        }));
        const paymentDetails = {
            paymentMethods,
            filteredMap,
        };
        this.paymentDetails = paymentDetails;
        return paymentDetails;
    }
    getExpiryMask() {
        const currentYear = new Date().getFullYear() % 100;
        return {
            mask: 'MM/YY',
            blocks: {
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                    placeholderChar: 'M',
                },
                YY: {
                    mask: IMask.MaskedRange,
                    from: currentYear,
                    to: 99,
                    maxLength: 2,
                    placeholderChar: 'Y',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
    }
    handlePaymentSelectionChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const payment_code = e.detail;
        this.selectedPaymentMethod = payment_code;
        checkout_store.payment.code = payment_code;
    }
    renderPaymentMethod() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (app_store.property.allowed_payment_methods.length === 0) {
            return;
        }
        const method = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_payment_methods.find(apm => apm.code === this.selectedPaymentMethod);
        if (this.selectedPaymentMethod === '000') {
            return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        if (this.selectedPaymentMethod === '001' || this.selectedPaymentMethod === '004')
            return (h("form", { class: "flex w-full gap-4", key: method.code }, h("div", { class: 'flex-1 space-y-4' }, h("fieldset", null, h("ir-input", { placeholder: "", onTextChanged: e => {
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { cardHolderName: e.detail });
                }, autocomplete: "cc-name", "data-state": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.cardHolderName) ? 'error' : '', label: localizedWords.entries.Lcz_NameOnCard, class: "w-full", onInputBlur: e => {
                    var _a;
                    const cardHolderNameSchema = ZCreditCardSchemaWithCvc.pick({ cardHolderName: true });
                    const cardHolderNameValidation = cardHolderNameSchema.safeParse({ cardHolderName: (_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.cardHolderName });
                    const target = e.target;
                    if (!cardHolderNameValidation.success) {
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
                    if (target.hasAttribute('data-state'))
                        target.removeAttribute('data-state');
                } })), h("ir-credit-card-input", { "data-state": ((_c = this.errors) === null || _c === void 0 ? void 0 : _c.cardNumber) ? 'error' : '', onCreditCardChange: e => {
                    const { cardType, value } = e.detail;
                    this.cardType = cardType;
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { cardNumber: value });
                } }), h("div", { class: "flex flex-col gap-2.5 sm:flex-row sm:items-center" }, h("fieldset", { class: "w-full" }, h("ir-input", { autocomplete: "cc-exp", "data-state": ((_d = this.errors) === null || _d === void 0 ? void 0 : _d.expiryDate) ? 'error' : '', type: "text", value: "", placeholder: "MM/YY", mask: this.getExpiryMask(), label: localizedWords.entries.Lcz_ExpirationDate, class: "w-full", rightIcon: true, onTextChanged: e => {
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { expiry_month: e.detail, expiry_year: e.detail });
                }, onInputBlur: e => {
                    var _a;
                    const expiryDateSchema = ZCreditCardSchemaWithCvc.pick({ expiryDate: true });
                    const expiryDateValidation = expiryDateSchema.safeParse({ expiryDate: (_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.expiry_month });
                    const target = e.target;
                    if (!expiryDateValidation.success) {
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
                    if (target.hasAttribute('data-state'))
                        target.removeAttribute('data-state');
                } }, h("svg", { slot: "right-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V8H2V7ZM2 10V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V10H2ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12H7Z", fill: "#EAECF0" }), h("rect", { x: "14.5", y: "11.5", width: "6", height: "3", rx: "0.5", stroke: "#FE4F42" })))), h("fieldset", { class: "w-full" }, h("ir-input", { autocomplete: "cc-csc", onInputBlur: e => {
                    var _a;
                    const cvcSchema = ZCreditCardSchemaWithCvc.pick({ cvc: true });
                    const cvcValidation = cvcSchema.safeParse({ cvc: (_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.cvc });
                    const target = e.target;
                    if (!cvcValidation.success) {
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
                    if (target.hasAttribute('data-state'))
                        target.removeAttribute('data-state');
                }, "data-state": ((_e = this.errors) === null || _e === void 0 ? void 0 : _e.cvc) ? 'error' : '', label: localizedWords.entries.Lcz_SecurityCode, maxlength: 4, tooltip: localizedWords.entries.Lcz_SecurityCodeHint, placeholder: "", onTextChanged: e => {
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { cvc: e.detail });
                }, class: "w-full", rightIcon: true }, h("svg", { class: 'cursor-pointer', slot: "right-icon", width: "20", height: "16", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("title", null, localizedWords.entries.Lcz_SecurityCodeHint), h("path", { d: "M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H3C1.34315 16 0 14.6569 0 13V3Z", fill: "#EAECF0" }), h("path", { d: "M2 8C2 7.44772 2.44772 7 3 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H3C2.44772 9 2 8.55228 2 8Z", fill: "#8B8B8B" }), h("path", { d: "M2 4C2 3.44772 2.44772 3 3 3H5C5.55228 3 6 3.44772 6 4C6 4.55228 5.55228 5 5 5H3C2.44772 5 2 4.55228 2 4Z", fill: "white" }), h("path", { d: "M10 11C10 10.4477 10.4477 10 11 10H15C15.5523 10 16 10.4477 16 11V13C16 13.5523 15.5523 14 15 14H11C10.4477 14 10 13.5523 10 13V11Z", fill: "#FE4F42" }), h("path", { d: "M11 11H15V13H11V11Z", fill: "#EAECF0" }))))))));
        if (this.selectedPaymentMethod === '005') {
            return (h("div", { class: "flex w-full gap-4" }, h("div", { class: "flex-1 space-y-1.5" }, ((_g = (_f = this.paymentDetails) === null || _f === void 0 ? void 0 : _f.filteredMap) === null || _g === void 0 ? void 0 : _g.length) === 1 && h("p", null, method.description), h("p", { class: "text-xs text-gray-700", innerHTML: ((_j = (_h = method.localizables) === null || _h === void 0 ? void 0 : _h.find(d => d.language.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase())) === null || _j === void 0 ? void 0 : _j.description) ||
                    ((_l = (_k = method.localizables) === null || _k === void 0 ? void 0 : _k.find(d => d.language.code.toLowerCase() === 'en')) === null || _l === void 0 ? void 0 : _l.description) }))));
        }
    }
    renderPaymentOptions() {
        var _a, _b;
        const { filteredMap, paymentMethods } = this.paymentDetails;
        const paymentLength = paymentMethods.length;
        if ((this.prepaymentAmount === 0 && !paymentMethods.some(pm => !pm.is_payment_gateway)) || paymentLength === 0) {
            return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        if (paymentLength === 1 && paymentMethods[0].is_payment_gateway) {
            return h("p", { class: 'text-center' }, `${(_a = localizedWords.entries[`Lcz_Pay_${paymentMethods[0].code}`]) !== null && _a !== void 0 ? _a : localizedWords.entries.Lcz_PayByCard}`);
        }
        // if (paymentLength === 1 && paymentMethods[0].code === '001') {
        //   return <p>{localizedWords.entries.Lcz_SecureByCard}</p>;
        // }
        if (paymentLength > 1) {
            if (filteredMap.length === 0) {
                return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
            }
            else if (filteredMap.length === 1 && ['001', '005'].includes(filteredMap[0].id)) {
                return null;
            }
            return (h("ir-select", { variant: "double-line", value: this.selectedPaymentMethod.toString(), label: localizedWords.entries.Lcz_SelectYourPaymentMethod, data: filteredMap, onValueChange: this.handlePaymentSelectionChange.bind(this) }));
        }
        const paymentOption = app_store.property.allowed_payment_methods[0];
        if (this.prepaymentAmount === 0 && paymentOption.is_payment_gateway) {
            return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        if (paymentOption.is_payment_gateway) {
            return h("p", { class: "text-center" }, `${(_b = localizedWords.entries[`Lcz_Pay_${paymentOption.code}`]) !== null && _b !== void 0 ? _b : localizedWords.entries.Lcz_PayByCard}`, " ");
        }
        return null;
    }
    render() {
        const hasAgentWithCode001 = booking_store.bookingAvailabilityParams.agent && booking_store.bookingAvailabilityParams.agent.payment_mode.code === '001';
        return (h("div", { key: '2319e132ce3aaae3df7ede918a113a53e004f152', class: "w-full space-y-4 rounded-md border border-solid bg-white  p-4" }, !hasAgentWithCode001 && this.prepaymentAmount === 0 && this.selectedPaymentMethod === '001' && h("p", { key: 'f027a7f819932cab7e2eb276820503636e351f67' }, localizedWords.entries.Lcz_PaymentSecurity), !hasAgentWithCode001 && this.renderPaymentOptions(), !hasAgentWithCode001 && this.renderPaymentMethod(), hasAgentWithCode001 && h("p", { key: '628771deec170da14ce91485ea0a0b6f11d301dd', class: 'text-center' }, localizedWords.entries.Lcz_OnCredit)));
    }
    static get watchers() { return {
        "prepaymentAmount": ["handlePrePaymentAmount"]
    }; }
    static get style() { return IrPaymentViewStyle0; }
}, [1, "ir-payment-view", {
        "prepaymentAmount": [2, "prepayment-amount"],
        "errors": [16],
        "selectedPaymentMethod": [32],
        "cardType": [32],
        "paymentDetails": [32]
    }, undefined, {
        "prepaymentAmount": ["handlePrePaymentAmount"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-view", "ir-credit-card-input", "ir-input", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentView);
            }
            break;
        case "ir-credit-card-input":
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

export { IrPaymentView as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-view2.js.map