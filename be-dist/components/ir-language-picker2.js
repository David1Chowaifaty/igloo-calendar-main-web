import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { o as onAppDataChange, a as app_store, c as changeLocale, u as updateUserPreference } from './app.store.js';
import { j as modifyQueryParam, q as matchLocale, l as localizedWords, c as cn } from './utils.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irLanguagePickerCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}.grid{display:grid}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{display:block}.picker-container{padding:1rem 1.5rem}.picker-title{color:#101828;font-size:1.25rem;font-weight:600;margin-bottom:1.25rem}.language-grid{display:grid;gap:.625rem;grid-template-columns:repeat(3,1fr);margin-bottom:1.5rem;outline:none}@media (min-width:640px){.language-grid{grid-template-columns:repeat(4,1fr)}}.language-button{align-items:center;border-radius:.375rem;display:flex;gap:.75rem;padding:.5rem 1rem .5rem .5rem;transition:background-color .3s ease-in-out}.language-button:hover{background-color:hsla(var(--brand-100),13%)}.language-button-selected{background-color:hsla(var(--brand-100),8%)}.language-flag{border-radius:50%;height:1rem;width:1rem}.hidden-radio{display:none}.actions-container{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}.cancel-button,.confirm-button{width:100%}@media (min-width:768px){.actions-container{flex-direction:row-reverse}.cancel-button,.confirm-button{width:auto}}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.h-full{height:100%}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-4{height:1rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.flex-wrap{flex-wrap:wrap}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.absolute{position:absolute}.mb-2{margin-bottom:.5rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.capitalize{text-transform:capitalize}.fixed{position:fixed}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.h-5{height:1.25rem}.w-5{width:1.25rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.visible{visibility:visible}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}@media (min-width:640px){.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.w-16{width:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.text-start{text-align:start}.h-24{height:6rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.size-3{height:.75rem;width:.75rem}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:768px){.md\\:p-4{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end{align-items:flex-end}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.-bottom-0{bottom:0}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.overflow-hidden{overflow:hidden}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.pt-2,.py-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.h-72{height:18rem}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.h-px{height:1px}.w-32{width:8rem}.w-44{width:11rem}.w-52{width:13rem}.w-64{width:16rem}";
const IrLanguagePickerStyle0 = irLanguagePickerCss;

const IrLanguagePicker = /*@__PURE__*/ proxyCustomElement(class IrLanguagePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeDialog = createEvent(this, "closeDialog", 7);
        this.resetBooking = createEvent(this, "resetBooking", 7);
        this.languageChanged = createEvent(this, "languageChanged", 7);
        this.langEl = [];
        this.selectedIndex = 0;
        this.currencies = undefined;
        this.languages = undefined;
        this.selectedCurrency = undefined;
        this.selectedLanguage = undefined;
    }
    async componentWillLoad() {
        this.init();
        onAppDataChange('userPreferences', newValue => {
            this.selectedLanguage = this.languages.find(l => l.code.toLowerCase() === newValue.language_id.toLowerCase());
            this.selectedCurrency = this.currencies.find(c => c.code.toLowerCase() === newValue.currency_id.toLowerCase());
            modifyQueryParam('lang', newValue.language_id.toLowerCase());
            modifyQueryParam('cur', newValue.currency_id.toLowerCase());
        });
    }
    componentDidLoad() {
        var _a;
        const index = this.languages.findIndex(l => l.code === this.selectedLanguage.code);
        if (index !== -1) {
            (_a = this.langEl[index]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    init() {
        var _a, _b;
        if (this.languages && this.currencies) {
            this.selectedLanguage = (_a = this.languages) === null || _a === void 0 ? void 0 : _a.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
            this.selectedCurrency = (_b = this.currencies) === null || _b === void 0 ? void 0 : _b.find(c => c.code.toLowerCase() === app_store.userPreferences.currency_id.toLowerCase());
        }
    }
    handleLanguageChange(id) {
        const selectedLanguage = this.languages.find(l => l.code === id);
        if (selectedLanguage) {
            this.selectedLanguage = selectedLanguage;
        }
    }
    handleCurrencyChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        const selectedCurrency = this.currencies.find(c => c.code === id);
        if (selectedCurrency) {
            this.selectedCurrency = selectedCurrency;
        }
    }
    handleConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        changeLocale(this.selectedLanguage.direction, matchLocale(this.selectedLanguage.code));
        updateUserPreference({
            currency_id: this.selectedCurrency.code,
            language_id: this.selectedLanguage.code,
        });
        localStorage.setItem('user_preference', JSON.stringify({
            currency_id: this.selectedCurrency.code,
            language_id: this.selectedLanguage.code,
            direction: this.selectedLanguage.direction,
        }));
        this.languageChanged.emit(this.selectedLanguage.code);
        if (app_store.currentPage === 'checkout') {
            this.resetBooking.emit(null);
        }
        this.closeDialog.emit(null);
    }
    handleKeyDown(e) {
        const index = this.selectedIndex;
        const lastIndex = this.languages.length - 1;
        let itemsPerRow = 4;
        if (window.innerWidth < 640) {
            itemsPerRow = 3;
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = index === lastIndex ? 0 : index + 1;
            this.selectedIndex = nextIndex;
            this.langEl[nextIndex].focus();
        }
        else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = index === 0 ? lastIndex : index - 1;
            this.selectedIndex = prevIndex;
            this.langEl[prevIndex].focus();
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = index < itemsPerRow ? lastIndex - (itemsPerRow - 1 - index) : index - itemsPerRow;
            if (prevIndex >= 0 && prevIndex <= lastIndex) {
                this.selectedIndex = prevIndex;
                this.langEl[prevIndex].focus();
            }
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = index + itemsPerRow > lastIndex ? (index + itemsPerRow) % itemsPerRow : index + itemsPerRow;
            if (nextIndex >= 0 && nextIndex <= lastIndex) {
                this.selectedIndex = nextIndex;
                this.langEl[nextIndex].focus();
            }
        }
    }
    render() {
        var _a;
        return (h("div", { key: '18b36213bbd6baf9d72860e117f99e36478f958f', class: "picker-container" }, h("p", { key: 'e8fcfbce53c243e398dba5b8addc285da643be7b', class: "picker-title" }, localizedWords.entries.Lcz_DisplaSettings), h("div", { key: 'efaee25c409c03355925e14d1d1ed71bb51ecb2e', role: "radiogroup", "aria-required": "false", "aria-label": "booking engine language", onKeyDown: e => this.handleKeyDown(e), class: "language-grid", tabIndex: 0 }, this.languages.map((language, i) => {
            var _a, _b, _c;
            return (h("button", { ref: el => (this.langEl[i] = el), type: "button", role: "radio", tabIndex: 0, value: language.code, "aria-labelledby": language.description, "aria-checked": ((_a = this.selectedLanguage) === null || _a === void 0 ? void 0 : _a.code) === language.code ? 'true' : 'false', onClick: () => this.handleLanguageChange(language.code), class: cn('language-button', {
                    'language-button-selected': ((_b = this.selectedLanguage) === null || _b === void 0 ? void 0 : _b.code) === language.code,
                }) }, h("img", { loading: "lazy", src: language['flag'], alt: language.code, class: "language-flag" }), h("span", null, language.description), h("input", { type: "radio", "aria-hidden": "true", tabIndex: -1, checked: ((_c = this.selectedLanguage) === null || _c === void 0 ? void 0 : _c.code) === language.code, value: language.code, class: "hidden-radio" })));
        })), h("ir-select", { key: '16bf32cb1159ef7dca592cc1805fb71aa7674881', variant: "double-line", value: (_a = this.selectedCurrency) === null || _a === void 0 ? void 0 : _a.code, onValueChange: this.handleCurrencyChange.bind(this), label: localizedWords.entries.Lcz_Currency, select_id: "currency_selector", data: this.currencies.map(currency => ({
                id: currency.code,
                value: `${currency.code} ${(0).toLocaleString('en-US', { style: 'currency', currency: currency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim().replace(currency.code, '')}`,
            })) }), h("div", { key: '89f52c7c332dde10d5282bf683f9b1ffe9e20b2a', class: "actions-container" }, h("ir-button", { key: '93f4da4d714f25c8332644c6807754ffe313c080', size: "md", label: localizedWords.entries['Lcz_Confirm'], class: "confirm-button", onClick: this.handleConfirm.bind(this) }), h("ir-button", { key: 'd8244ebb01855469e5dddffba941b56b766b5756', onButtonClick: () => this.closeDialog.emit(null), size: "md", label: localizedWords.entries.Lcz_Cancel, variants: "outline", class: "cancel-button" }))));
    }
    static get style() { return IrLanguagePickerStyle0; }
}, [1, "ir-language-picker", {
        "currencies": [16],
        "languages": [16],
        "selectedCurrency": [32],
        "selectedLanguage": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-language-picker", "ir-button", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLanguagePicker);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
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

export { IrLanguagePicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-language-picker2.js.map