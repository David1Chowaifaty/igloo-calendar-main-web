import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as dateFns, a as getAbbreviatedWeekdays } from './utils.js';
import { l as locale } from './app.store.js';

const irCalendarCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;box-sizing:border-box;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.collapse{visibility:collapse}.absolute{position:absolute}.relative{position:relative}.flex{display:flex}.table{display:table}.border-collapse{border-collapse:collapse}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.date-picker{background:var(--backgroud,#fff);box-sizing:border-box;color:var(--gray-800,#1d2939);display:flex;flex-direction:column;gap:10px;padding:0;position:relative;width:100%;z-index:999}.navigation-buttons:dir(rtl) svg{transform:rotate(180deg)}.month-navigation span{color:var(--gray-800,#1d2939);font-size:16px;line-height:0;margin-left:auto;margin-right:auto;padding:0}.current-date{color:hsl(var(--brand-600,215,87%,51%))}.day-button:hover:after{background:var(--gray-200,#eaecf0);border-radius:8px;content:\"\";inset:0;position:absolute;z-index:-1}.navigation-buttons{align-items:center;background:var(--backgroud,#fff);border:0;border-radius:8px;box-sizing:border-box;color:var(--gray-800,#1d2939);cursor:pointer;display:flex;height:var(--cal-button-size,35px);justify-content:center;margin:0;padding:0;width:var(--cal-button-size,35px)}.navigation-buttons:hover{background:var(--gray-200,#eaecf0)}.day-button:focus-visible{outline-color:hsl(var(--brand-600,215,87%,51%))}.day-button:disabled{cursor:default;opacity:.3}.day-button:disabled .day{text-decoration:line-through}.day-button:disabled:hover:after{content:none}.day-button .day,.price{margin:0;padding:0}.day-button .price{color:var(--gray-600);font-size:10px}.month-navigation{align-items:center;box-sizing:border-box;display:flex}.margin-right{margin-right:0}.margin-left{margin-left:0}.margin-horizontal:dir(ltr){margin-left:var(--cal-button-size,35px)}.margin-horizontal:dir(rtl){margin-right:var(--cal-button-size,35px)}.weekday-name{color:var(--gray-800,#1d2939);font-size:14px;font-weight:400;text-align:center}.day-button[aria-selected],.day-button[aria-selected] .current-date{color:#fff}.day-button[aria-selected]:after{background:hsl(var(--brand-600,#f2f4f7));border-radius:8px;content:\"\";inset:0;position:absolute;z-index:-1}td,th{border:none;padding:0}th{box-sizing:border-box;font-size:.875rem;height:var(--cal-button-size,35px);line-height:1.25rem;margin:0!important;width:var(--cal-button-size,35px)}td{text-align:center}.day-button,td{box-sizing:border-box;margin:0}.day-button{background:none;border:0;border-radius:8px;color:var(--gray-800);cursor:pointer;font-size:.875rem;height:var(--cal-button-size,35px);padding:0;position:relative;width:var(--cal-button-size,35px)}.month-container{align-items:center;box-sizing:border-box;display:flex;font-size:.875rem;line-height:1.25rem}.month-container span{flex:1;text-align:center}.day-range-end .price,.day-range-start .price{color:var(--gray-200,#eaecf0)}.day-button:hover.highlight:after{border-radius:0}.highlight:after{background:var(--gray-100,#f2f4f7);border-radius:0;content:\"\";inset:0;position:absolute;z-index:-1}.button-next-main{display:none}@media only screen and (min-width:640px){.date-picker{flex-direction:row}.button-next-main{display:flex}.button-next{display:none}}.static{position:static}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:768px){.md\\:flex-row{flex-direction:row}.md\\:text-right{text-align:right}}.visible{visibility:visible}.justify-center{justify-content:center}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.right-3{right:.75rem}.top-3{top:.75rem}.size-4{height:1rem;width:1rem}.justify-start{justify-content:flex-start}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-full{height:100%}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.block{display:block}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:size-7{height:1.75rem;width:1.75rem}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.hidden{display:none}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.grid{display:grid}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.size-\\[18px\\]{height:18px;width:18px}.h-\\[3rem\\]{height:3rem}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.-bottom-0{bottom:0}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-3{height:.75rem;width:.75rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.object-cover{object-fit:cover}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-2{padding-bottom:.5rem}.pb-4{padding-bottom:1rem}.pt-0{padding-top:0}.font-normal{font-weight:400}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.w-72{width:18rem}.w-fit{width:fit-content}.p-2{padding:.5rem}.text-end{text-align:end}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.mt-4{margin-top:1rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[1px\\]{height:1px}.max-h-32{max-height:8rem}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.ml-1{margin-left:.25rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:inline-flex{display:inline-flex}.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}.md\\:items-center{align-items:center}.md\\:justify-center{justify-content:center}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.gap-12{gap:3rem}.gap-8{gap:2rem}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.pb-0{padding-bottom:0}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}@media (min-width:640px){.sm\\:pb-0{padding-bottom:0}.sm\\:pt-0{padding-top:0}}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.border-solid{border-style:solid}";
const IrCalendarStyle0 = irCalendarCss;

const IrCalendar = /*@__PURE__*/ proxyCustomElement(class IrCalendar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateChange = createEvent(this, "dateChange", 7);
        this.handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                this.decrementDate();
            }
            else if (e.key === 'ArrowRight') {
                this.incrementDate();
            }
            else if (e.key === 'ArrowUp') {
                this.selectedDate = dateFns.addDays(new Date(this.selectedDate), -7);
            }
            else if (e.key === 'ArrowDown') {
                this.selectedDate = dateFns.addDays(new Date(this.selectedDate), 7);
            }
            else if (e.key === ' ' || e.key === 'Enter') {
                this.selectDay(this.selectedDate);
            }
        };
        this.fromDate = null;
        this.toDate = null;
        this.minDate = dateFns.addYears(new Date(), -24);
        this.maxDate = dateFns.addYears(new Date(), 24);
        this.dateModifiers = undefined;
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = locale.enUS;
        this.selectedDate = null;
        this.displayedDays = undefined;
        this.hoveredDate = null;
        this.weekdays = [];
    }
    componentWillLoad() {
        var _a;
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        const currentMonth = (_a = this.fromDate) !== null && _a !== void 0 ? _a : new Date();
        this.displayedDays = Object.assign({}, this.getMonthDays(currentMonth));
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            this.weekdays = getAbbreviatedWeekdays(newValue);
        }
    }
    getMonthDays(month) {
        return {
            month,
            days: dateFns.eachDayOfInterval({
                start: dateFns.startOfWeek(dateFns.startOfMonth(month), { weekStartsOn: 1, locale: this.locale }),
                end: dateFns.endOfWeek(dateFns.endOfMonth(month), { weekStartsOn: 1, locale: this.locale }),
            }),
        };
    }
    decrementDate() {
        if (this.selectedDate) {
            this.selectedDate = dateFns.addDays(new Date(this.selectedDate), -1);
        }
    }
    incrementDate() {
        if (this.selectedDate) {
            this.selectedDate = dateFns.addDays(new Date(this.selectedDate), 1);
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentSecondMonth = this.displayedDays.month;
        const newSecondMonth = dateFns.addMonths(currentSecondMonth, 1);
        if (dateFns.isBefore(dateFns.endOfMonth(newSecondMonth), this.minDate) || dateFns.isAfter(dateFns.startOfMonth(newSecondMonth), this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newSecondMonth));
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentFirstMonth = this.displayedDays.month;
        const newFirstMonth = dateFns.addMonths(currentFirstMonth, -1);
        if (dateFns.isBefore(dateFns.endOfMonth(newFirstMonth), this.minDate) || dateFns.isAfter(dateFns.startOfMonth(newFirstMonth), this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newFirstMonth));
    }
    selectDay(day) {
        this.selectedDate = day;
        this.dateChange.emit(this.selectedDate);
    }
    resetHours() {
        this.minDate.setHours(0, 0, 0, 0);
        this.maxDate.setHours(0, 0, 0, 0);
        if (this.fromDate) {
            this.toDate.setHours(0, 0, 0, 0);
        }
        if (this.toDate) {
            this.fromDate.setHours(0, 0, 0, 0);
        }
    }
    handleMouseEnter(day) {
        this.hoveredDate = day;
    }
    handleMouseLeave() {
        this.hoveredDate = null;
    }
    isDaySelected(day) {
        var _a;
        const date = new Date(day);
        date.setHours(0, 0, 0, 0);
        const start = new Date((_a = this.selectedDate) !== null && _a !== void 0 ? _a : new Date());
        start.setHours(0, 0, 0, 0);
        return dateFns.isSameDay(date, start);
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        const formatedDate = dateFns.format(day, 'yyyy-MM-dd');
        const result = this.dateModifiers[formatedDate];
        if (result) {
            return result;
        }
        return;
    }
    render() {
        const { month, days } = this.displayedDays;
        return (h("div", { key: '13e04f1482f6a07e604266c6e1793c0dbdecd3b1', class: 'date-picker' }, h("table", { key: '94727e5afa76774e863c1a69a6eeb5521721e6fa', class: "calendar ", role: "grid" }, h("thead", { key: '6f3154204a03b97c4648dffe1f3496b182a01e4c' }, h("tr", { key: '215bbea9485a8def9ecbfcae40a0d726bfaa5540', class: "calendar-header" }, h("th", { key: '8e393e876fd36f934f43595dc5ec3b60ac149eba', colSpan: 7 }, h("div", { key: '580186b42689ddb3368af5ae3391e21a5427be08', class: "month-navigation" }, h("button", { key: '45b282c603802cb86144d14a84666e4e7ed76d91', name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { key: '3d0ec668310dbebc4b4ce8e0eaa40fe9d004703c', class: "sr-only" }, "previous month"), h("svg", { key: 'c3f72ead178dbca02370f283b879acea876f3691', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: 'c572f814cd1b20f3cf44bcec139094e3731d614c', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("span", { key: 'ecf36f66639a1a31f4054a06550b2380166db259' }, dateFns.format(month, 'MMMM yyyy', { locale: this.locale })), h("button", { key: '87d1d8e29f3e2abd4acad9903559548307ac1c1c', name: "next month", class: "navigation-buttons", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { key: '9a8dd6efd53316416c693a7dcb5bcb011ab685a7', class: "sr-only " }, "next month"), h("svg", { key: '7467171f7294f02a15879ea87b8b0d2a21b88166', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '81ca4f11e47543c91c775b2d248e50acc5f11d91', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))), h("tr", { key: '59926f3b37b7540c8b7aab7f320852198cabe2de', class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { key: '4de3423b7da4de1a43ef0633b686b6a4ab1a5d32', class: "days-grid" }, days
            .reduce((acc, day, index) => {
            const weekIndex = Math.floor(index / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { class: "week-row", role: "row" }, week.map((day) => {
            day.setHours(0, 0, 0, 0);
            const checkedDate = this.checkDatePresence(day);
            return (h("td", { class: "day-cell", key: dateFns.format(day, 'yyyy-MM-dd'), role: "gridcell" }, dateFns.isSameMonth(day, month) && (h("button", { disabled: dateFns.isBefore(day, this.minDate) || dateFns.isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(),
                // onKeyDown={this.handleKeyDown.bind(this)}
                onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, "aria-label": `${dateFns.format(day, 'EEEE, MMMM do yyyy', { locale: this.locale })} ${dateFns.isBefore(day, this.minDate) || dateFns.isAfter(day, this.maxDate) ? 'Not available' : ''}`, "aria-disabled": dateFns.isBefore(day, this.minDate) || dateFns.isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": this.isDaySelected(day), class: `day-button` }, h("p", { class: `day ${dateFns.isToday(day) ? 'current-date' : ''}` }, dateFns.format(day, 'd', { locale: this.locale })), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
        }))))))));
    }
    static get watchers() { return {
        "locale": ["handleLocale"]
    }; }
    static get style() { return IrCalendarStyle0; }
}, [1, "ir-calendar", {
        "fromDate": [16],
        "toDate": [16],
        "minDate": [16],
        "maxDate": [16],
        "dateModifiers": [16],
        "maxSpanDays": [2, "max-span-days"],
        "showPrice": [4, "show-price"],
        "locale": [16],
        "selectedDate": [32],
        "displayedDays": [32],
        "hoveredDate": [32],
        "weekdays": [32]
    }, undefined, {
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