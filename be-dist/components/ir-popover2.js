import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { b as app_store } from './app.store.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';
import { c as createPopper } from './popper.js';

const irPopoverCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.block{display:block}.border{border-width:1px}:host{display:block;width:100%}.popover-content{z-index:9999}.trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:var(--radius,8px);display:inline-flex;font-size:16px;justify-content:space-between;line-height:1;padding:10px 14px;width:100%;width:200px}.trigger:active,.trigger:focus{border-color:var(--brand-300,#84caff);box-shadow:0 1px 2px 0 rgba(0,0,0,.1),0 0 0 4px var(--brand-100,#d1e9ff)}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.h-full{height:100%}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.outline{outline-style:solid}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.grid{display:grid}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-4{height:1rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.gap-2{gap:.5rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.absolute{position:absolute}.mb-2{margin-bottom:.5rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.capitalize{text-transform:capitalize}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.visible{visibility:visible}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity,1))}}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.p-6{padding:1.5rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}.text-start{text-align:start}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.w-16{width:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-9>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.25rem*var(--tw-space-y-reverse));margin-top:calc(2.25rem*(1 - var(--tw-space-y-reverse)))}.pb-1\\.5{padding-bottom:.375rem}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.h-24{height:6rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.size-3{height:.75rem;width:.75rem}.-bottom-0{bottom:0}.left-8{left:2rem}.top-8{top:2rem}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.max-h-\\[90vh\\]{max-height:90vh}.w-72{width:18rem}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity,1))}@media (min-width:768px){.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.pt-2,.py-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.h-72{height:18rem}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = /*@__PURE__*/ proxyCustomElement(class IrPopover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.openChange = createEvent(this, "openChange", 7);
        this.active = false;
        this.autoAdjust = true;
        this.trigger_label = '';
        this.stopListeningForOutsideClicks = false;
        this.showCloseButton = true;
        this.allowFlip = true;
        this.outsideEvents = 'all';
        this.isVisible = false;
        this.isMobile = window.innerWidth < 640;
        this.previousIsMobile = window.innerWidth < 640;
        this.popoverInstance = null;
        this.handleKeyboardPress = (e) => {
            if (!this.isVisible) {
                return;
            }
            if (e.key === 'Escape') {
                this.toggleVisibility();
            }
            return;
        };
        this.handleOutsideClick = (event) => {
            const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
            if (outsideClick && this.isVisible) {
                if (this.outsideEvents === 'all') {
                    this.isVisible = false;
                }
                this.openChange.emit(false);
            }
        };
    }
    componentDidLoad() {
        this.initializePopover();
        document.addEventListener('click', this.handleOutsideClick, true);
        document.addEventListener('keydown', this.handleKeyboardPress, true);
    }
    handleResize() {
        const currentIsMobile = window.innerWidth < 640;
        if (this.isMobile !== currentIsMobile) {
            this.previousIsMobile = this.isMobile;
            this.isMobile = currentIsMobile;
            if (this.previousIsMobile === false && this.isMobile === true && this.dialogElement) {
                this.dialogElement.closeModal();
                this.isVisible = false;
                this.openChange.emit(this.isVisible);
            }
            if (!this.isMobile && this.isVisible) {
                this.isVisible = false;
                this.popupInitializing = setTimeout(() => {
                    this.initializePopover();
                }, 100);
            }
        }
        if (!currentIsMobile && this.dialogElement) {
            this.dialogElement = undefined;
            this.popupInitializing = setTimeout(() => {
                this.initializePopover();
            }, 100);
        }
    }
    initializePopover() {
        if (this.triggerElement && this.contentElement) {
            this.popoverInstance = createPopper(this.triggerElement, this.contentElement, {
                placement: this.placement ? this.placement : app_store.dir === 'LTR' ? 'bottom-start' : 'bottom-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 3],
                            adaptive: true,
                        },
                    },
                    {
                        name: 'flip',
                        enabled: app_store.app_data.injected ? false : this.allowFlip,
                    },
                ],
            });
        }
    }
    async forceClose() {
        var _a;
        this.isVisible = false;
        if (!this.isVisible) {
            (_a = this.dialogElement) === null || _a === void 0 ? void 0 : _a.closeModal();
        }
    }
    async toggleVisibility() {
        console.log('toggleVisibility', this.outsideEvents, this.isVisible);
        if (this.outsideEvents === 'none' && this.isVisible) {
            return this.openChange.emit(false);
        }
        this.isVisible = !this.isVisible;
        if (this.dialogElement) {
            if (this.isVisible) {
                this.dialogElement.openModal();
            }
            else
                this.dialogElement.closeModal();
        }
        if (this.isVisible && this.popoverInstance) {
            const currentDir = app_store.dir.toLowerCase() || 'ltr';
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
            else if ((this.popoverInstance.state.options.placement === 'top-start' && currentDir === 'rtl') ||
                (this.popoverInstance.state.options.placement === 'top-end' && currentDir === 'ltr')) {
                let newPlacement = this.popoverInstance.state.options.placement;
                if (currentDir === 'rtl') {
                    newPlacement = newPlacement.replace('top-start', 'top-end');
                }
                else {
                    newPlacement = newPlacement.replace('top-end', 'top-start');
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
        if (!app_store.app_data.injected && this.autoAdjust) {
            this.adjustPopoverPlacement();
        }
        this.openChange.emit(this.isVisible);
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            var _a;
            if (!this.contentElement) {
                return;
            }
            const rect = (_a = this.contentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
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
    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick, true);
        document.removeEventListener('keydown', this.handleKeyboardPress, true);
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        if (this.popupInitializing) {
            clearTimeout(this.popupInitializing);
        }
    }
    render() {
        return (h(Fragment, { key: '527ea09e2c571c31e57c479fb1df887dd4ae8a2d' }, this.isMobile && (h("div", { key: 'dc30641bd844c62f4641fca1a40754f9c7c5f18d', class: "w-full md:hidden" }, h("div", { key: '64772ea45c3416d44ac9af7ec0b40d9fbe852598', class: "w-full", onClick: () => {
                this.dialogElement.openModal();
            } }, h("slot", { key: 'cd8d5fdf82f5c5859f55360497f5fb5f00a0e53c', name: "trigger" })), h("ir-dialog", { key: '03f18a52189a818304e95a812f54a79a3f2a0460', closeButton: this.showCloseButton, ref: el => (this.dialogElement = el), onOpenChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDialogOpen = e.detail;
                this.isVisible = e.detail;
                this.openChange.emit(e.detail);
            } }, h("div", { key: 'e43e8aea46173720f5ab9cbb06b6577e395e7f1d', slot: "modal-body" }, h("slot", { key: 'b5a6adacb0a4e75dee80c6aec585e6044ee33dfe', name: "popover-content" }))))), !this.isMobile && (h("div", { key: '83d9e93c7c8e7e30f693b6ca16a5fd1e860cb7bc', class: "hidden sm:block" }, h("div", { key: 'f79fbbd59410c9406748616039071200cbc18e7b', ref: el => (this.triggerElement = el), onClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.toggleVisibility();
            } }, h("slot", { key: '5d742b72ca0d2a2ea81d868b0a0df0098b00547a', name: "trigger" }, h("button", { key: '14bb50f4bebb51e6df433533d41cdc40e66d9663', class: "trigger", type: "button" }, h("span", { key: 'fc083e75e9dc3080a79fb21b80278cb710bdce17' }, this.trigger_label), h("svg", { key: '84e1d9a6fd2f2f87c3d3525bdf95c148fc4396b2', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '6c11e4c4ab19255331cd2ad0222091275d042f58', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: '0862d341f0a22eb4c2f26c087d35feb20a69062a', class: "popover-content", ref: el => (this.contentElement = el) }, this.isVisible && (h("div", { key: 'b274c6ed0885af5284fc43cfac8193ec6632ed7c' }, h("slot", { key: '97d822105cae31d978d49ae136fb97935e45b5c8', name: "popover-content" }))))))));
    }
    get el() { return this; }
    static get style() { return IrPopoverStyle0; }
}, [1, "ir-popover", {
        "active": [4],
        "autoAdjust": [4, "auto-adjust"],
        "trigger_label": [1],
        "placement": [1],
        "stopListeningForOutsideClicks": [4, "stop-listening-for-outside-clicks"],
        "showCloseButton": [4, "show-close-button"],
        "allowFlip": [4, "allow-flip"],
        "outsideEvents": [1, "outside-events"],
        "isVisible": [32],
        "isMobile": [32],
        "previousIsMobile": [32],
        "isDialogOpen": [32],
        "forceClose": [64],
        "toggleVisibility": [64]
    }, [[9, "resize", "handleResize"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-popover", "ir-button", "ir-dialog", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPopover);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPopover as I, defineCustomElement as d };

//# sourceMappingURL=ir-popover2.js.map