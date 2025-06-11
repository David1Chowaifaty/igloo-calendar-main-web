import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { m as moment } from './app.store.js';
import { g as getAbbreviatedWeekdays, l as localizedWords } from './utils.js';

const irCalendarCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;box-sizing:border-box;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.collapse{visibility:collapse}.absolute{position:absolute}.relative{position:relative}.flex{display:flex}.table{display:table}.border-collapse{border-collapse:collapse}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.date-picker{background:var(--backgroud,#fff);box-sizing:border-box;color:var(--gray-800,#1d2939);display:flex;flex-direction:column;gap:10px;padding:0;position:relative;width:100%;z-index:999}.navigation-buttons:dir(rtl) svg{transform:rotate(180deg)}.month-navigation span{color:var(--gray-800,#1d2939);font-size:16px;line-height:0;margin-left:auto;margin-right:auto;padding:0}.current-date{color:hsl(var(--brand-600,215,87%,51%))}.day-button:hover:after{background:var(--gray-200,#eaecf0);border-radius:8px;content:\"\";inset:0;position:absolute;z-index:-1}.navigation-buttons{align-items:center;background:var(--backgroud,#fff);border:0;border-radius:8px;box-sizing:border-box;color:var(--gray-800,#1d2939);cursor:pointer;display:flex;height:var(--cal-button-size,35px);justify-content:center;margin:0;padding:0;width:var(--cal-button-size,35px)}.navigation-buttons:hover{background:var(--gray-200,#eaecf0)}.day-button:focus-visible{outline-color:hsl(var(--brand-600,215,87%,51%))}.day-button:disabled{cursor:default;opacity:.3}.day-button:disabled .day{text-decoration:line-through}.day-button:disabled:hover:after{content:none}.day-button .day,.price{margin:0;padding:0}.day-button .price{color:var(--gray-600);font-size:10px}.month-navigation{align-items:center;box-sizing:border-box;display:flex}.margin-right{margin-right:0}.margin-left{margin-left:0}.margin-horizontal:dir(ltr){margin-left:var(--cal-button-size,35px)}.margin-horizontal:dir(rtl){margin-right:var(--cal-button-size,35px)}.weekday-name{color:var(--gray-800,#1d2939);font-size:14px;font-weight:400;text-align:center}.day-button[aria-selected],.day-button[aria-selected] .current-date{color:#fff}.day-button[aria-selected]:after{background:hsl(var(--brand-600,#f2f4f7));border-radius:8px;content:\"\";inset:0;position:absolute;z-index:-1}td,th{border:none;padding:0}th{box-sizing:border-box;font-size:.875rem;height:var(--cal-button-size,35px);line-height:1.25rem;margin:0!important;width:var(--cal-button-size,35px)}td{text-align:center}.day-button,td{box-sizing:border-box;margin:0}.day-button{background:none;border:0;border-radius:8px;color:var(--gray-800);cursor:pointer;font-size:.875rem;height:var(--cal-button-size,35px);padding:0;position:relative;width:var(--cal-button-size,35px)}.month-container{align-items:center;box-sizing:border-box;display:flex;font-size:.875rem;line-height:1.25rem}.month-container span{flex:1;text-align:center}.day-range-end .price,.day-range-start .price{color:var(--gray-200,#eaecf0)}.day-button:hover.highlight:after{border-radius:0}.highlight:after{background:var(--gray-100,#f2f4f7);border-radius:0;content:\"\";inset:0;position:absolute;z-index:-1}.button-next-main{display:none}@media only screen and (min-width:640px){.date-picker{flex-direction:row}.button-next-main{display:flex}.button-next{display:none}}.static{position:static}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5{margin-bottom:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-4{height:1rem}.w-60{width:15rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md{border-radius:.375rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.outline{outline-style:solid}.h-full{height:100%}.grid{display:grid}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.flex-wrap{flex-wrap:wrap}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.mb-2{margin-bottom:.5rem}.block{display:block}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.capitalize{text-transform:capitalize}.h-5{height:1.25rem}.w-5{width:1.25rem}.visible{visibility:visible}.fixed{position:fixed}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}@media (min-width:640px){.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity,1))}}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.p-6{padding:1.5rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.w-16{width:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-9>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.25rem*var(--tw-space-y-reverse));margin-top:calc(2.25rem*(1 - var(--tw-space-y-reverse)))}.pb-1\\.5{padding-bottom:.375rem}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}.text-start{text-align:start}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.size-3{height:.75rem;width:.75rem}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.-bottom-0{bottom:0}.left-8{left:2rem}.top-8{top:2rem}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.max-h-\\[90vh\\]{max-height:90vh}.w-72{width:18rem}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity,1))}@media (min-width:768px){.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.pt-2,.py-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.h-72{height:18rem}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrCalendarStyle0 = irCalendarCss;

const IrCalendar = /*@__PURE__*/ proxyCustomElement(class IrCalendar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateChange = createEvent(this, "dateChange", 7);
        this.fromDate = null;
        this.toDate = null;
        this.minDate = moment().add(-24, 'years');
        this.maxDate = moment().add(24, 'years');
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = 'en';
        this.date = moment();
        this.selectedDate = null;
        this.hoveredDate = null;
        this.weekdays = [];
        this.handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                this.decrementDate();
            }
            else if (e.key === 'ArrowRight') {
                this.incrementDate();
            }
            else if (e.key === 'ArrowUp') {
                this.selectedDate = this.selectedDate.clone().add(-7, 'days');
            }
            else if (e.key === 'ArrowDown') {
                this.selectedDate = this.selectedDate.clone().add(7, 'days');
            }
            else if (e.key === ' ' || e.key === 'Enter') {
                this.selectDay(this.selectedDate);
            }
        };
    }
    componentWillLoad() {
        var _a;
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        const currentMonth = (_a = this.fromDate) !== null && _a !== void 0 ? _a : moment();
        this.displayedDays = Object.assign({}, this.getMonthDays(currentMonth));
        this.selectedDate = this.date;
        moment.locale(this.locale);
    }
    handleDateChange(newDate, oldDate) {
        if (!newDate.isSame(oldDate, 'day')) {
            this.selectedDate = newDate;
        }
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            moment.locale(this.locale);
            this.weekdays = getAbbreviatedWeekdays(newValue);
        }
    }
    getMonthDays(month) {
        const startDate = month.clone().startOf('month').startOf('week').add(1, 'day');
        const endDate = month.clone().endOf('month').endOf('week').add(1, 'day');
        const days = [];
        let day = startDate.clone();
        while (day.isBefore(endDate)) {
            days.push(day.clone());
            day = day.clone().add(1, 'day');
        }
        return {
            month,
            days,
        };
    }
    decrementDate() {
        if (this.selectedDate) {
            this.selectedDate = this.selectedDate.clone().add(-1, 'days');
        }
    }
    incrementDate() {
        if (this.selectedDate) {
            this.selectedDate = this.selectedDate.clone().add(1, 'days');
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentMonth = this.displayedDays.month;
        const newMonth = currentMonth.clone().add(1, 'month');
        if (newMonth.endOf('month').isBefore(this.minDate) || newMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newMonth));
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentMonth = this.displayedDays.month;
        const newMonth = currentMonth.clone().add(-1, 'month');
        if (newMonth.endOf('month').isBefore(this.minDate) || newMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newMonth));
    }
    selectDay(day) {
        this.selectedDate = day;
        this.dateChange.emit(this.selectedDate);
    }
    resetHours() {
        this.minDate = this.minDate.clone().startOf('day');
        this.maxDate = this.maxDate.clone().startOf('day');
        if (this.fromDate) {
            this.fromDate = this.fromDate.clone().startOf('day');
        }
        if (this.toDate) {
            this.toDate = this.toDate.clone().startOf('day');
        }
    }
    handleMouseEnter(day) {
        this.hoveredDate = day;
    }
    handleMouseLeave() {
        this.hoveredDate = null;
    }
    isDaySelected(day) {
        return day.isSame(this.selectedDate, 'day');
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        const formatedDate = day.format('YYYY-MM-DD');
        const result = this.dateModifiers[formatedDate];
        if (result) {
            return result;
        }
        return;
    }
    render() {
        const { month, days } = this.displayedDays;
        return (h("div", { key: '4a659759c7435bc4cd4ee898196c413144235c90', class: 'date-picker' }, h("table", { key: '4959628a244b9b50b684064e3882d8b51148926a', class: "calendar ", role: "grid" }, h("thead", { key: '21b33c028c6a095313af9148fef0112c8e2285f3' }, h("tr", { key: 'd7ffcb09b0a3324ab13b8027e0928065bdd931ea', class: "calendar-header" }, h("th", { key: 'fff1b230efdb03ab868d19049867b4228c51ee3f', colSpan: 7 }, h("div", { key: 'b04dcbe30b3b1c0fd1100242fd5d9747a0d35034', class: "month-navigation" }, h("button", { key: 'ffa6add975f289b9e8c6c2a5e98250b7963b8c5c', name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { key: '0ce10c919bc15b78f7879bfc824a03e5e3c34d64', class: "sr-only" }, "previous month"), h("svg", { key: 'ee96fe291081e4f0c5c7bda622ad3dfb164ba1a3', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '2626dba948a1f6de2fbec5b1a4a8529aa8407b2f', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("span", { key: 'a538f1aa527dd9c13bb1af1f23ec033ffa431a1c' }, month.locale(this.locale).format('MMMM YYYY')), h("button", { key: 'b541942ca230c1882598c5e4001a6daad3aa6bed', name: "next month", class: "navigation-buttons", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { key: '39544a24024618827dfd39ed2b38c1c590a8f3d9', class: "sr-only " }, "next month"), h("svg", { key: 'de3c39b83e3b604385561628f44df3b4ad79fe6d', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '034c015b1df4601160cfb9bc47ea74b3d1508602', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))), h("tr", { key: 'fb15456b730fc3958fe98b84bf27a699fbe19799', class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { key: '31f25a61cb9c255094294c80236f7575edbf42dc', class: "days-grid" }, days
            .reduce((acc, day, index) => {
            const weekIndex = Math.floor(index / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { class: "week-row", role: "row" }, week.map((day) => {
            const checkedDate = this.checkDatePresence(day);
            return (h("td", { class: "day-cell", key: day.format('YYYY-MM-DD'), role: "gridcell" }, day.isSame(month, 'month') && (h("button", { disabled: day.isBefore(this.minDate) || day.isAfter(this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, "aria-label": `${day.locale(this.locale).format('dddd, MMMM Do YYYY')} ${day.isBefore(this.minDate) || day.isAfter(this.maxDate) ? localizedWords.entries.Lcz_NotAvailable : ''}`, "aria-disabled": day.isBefore(this.minDate) || day.isAfter(this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": this.isDaySelected(day), class: `day-button` }, h("p", { class: `day ${day.isSame(moment(), 'day') ? 'current-date' : ''}` }, day.format('D')), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
        }))))))));
    }
    static get watchers() { return {
        "date": ["handleDateChange"],
        "locale": ["handleLocale"]
    }; }
    static get style() { return IrCalendarStyle0; }
}, [1, "ir-calendar", {
        "fromDate": [1040],
        "toDate": [1040],
        "minDate": [1040],
        "maxDate": [1040],
        "dateModifiers": [16],
        "maxSpanDays": [2, "max-span-days"],
        "showPrice": [4, "show-price"],
        "locale": [513],
        "date": [16],
        "selectedDate": [32],
        "displayedDays": [32],
        "hoveredDate": [32],
        "weekdays": [32]
    }, undefined, {
        "date": ["handleDateChange"],
        "locale": ["handleLocale"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-calendar"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-calendar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCalendar);
            }
            break;
    } });
}

export { IrCalendar as I, defineCustomElement as d };

//# sourceMappingURL=ir-calendar2.js.map