import { proxyCustomElement, HTMLElement, h, Fragment, Host } from '@stencil/core/internal/client';
import { C as CommonService } from './common.service.js';
import { P as PropertyService } from './property.service.js';
import { a as app_store } from './app.store.js';
import { c as checkout_store } from './checkout.store.js';
import { l as localizedWords } from './localization.store.js';
import { l as getUserPrefernce, r as checkAffiliate } from './utils.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$w } from './ir-alert-dialog2.js';
import { d as defineCustomElement$v } from './ir-auth2.js';
import { d as defineCustomElement$u } from './ir-badge2.js';
import { d as defineCustomElement$t } from './ir-badge-group2.js';
import { d as defineCustomElement$s } from './ir-booking-cancelation2.js';
import { d as defineCustomElement$r } from './ir-booking-card2.js';
import { d as defineCustomElement$q } from './ir-booking-code2.js';
import { d as defineCustomElement$p } from './ir-booking-header2.js';
import { d as defineCustomElement$o } from './ir-booking-overview2.js';
import { d as defineCustomElement$n } from './ir-button2.js';
import { d as defineCustomElement$m } from './ir-checkbox2.js';
import { d as defineCustomElement$l } from './ir-dialog2.js';
import { d as defineCustomElement$k } from './ir-footer2.js';
import { d as defineCustomElement$j } from './ir-google-maps2.js';
import { d as defineCustomElement$i } from './ir-icons2.js';
import { d as defineCustomElement$h } from './ir-input2.js';
import { d as defineCustomElement$g } from './ir-interceptor2.js';
import { d as defineCustomElement$f } from './ir-invoice2.js';
import { d as defineCustomElement$e } from './ir-language-picker2.js';
import { d as defineCustomElement$d } from './ir-menu2.js';
import { d as defineCustomElement$c } from './ir-modal2.js';
import { d as defineCustomElement$b } from './ir-nav2.js';
import { d as defineCustomElement$a } from './ir-pagination2.js';
import { d as defineCustomElement$9 } from './ir-phone-input2.js';
import { d as defineCustomElement$8 } from './ir-privacy-policy2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-sheet2.js';
import { d as defineCustomElement$5 } from './ir-signin2.js';
import { d as defineCustomElement$4 } from './ir-signup2.js';
import { d as defineCustomElement$3 } from './ir-skeleton2.js';
import { d as defineCustomElement$2 } from './ir-user-avatar2.js';
import { d as defineCustomElement$1 } from './ir-user-profile2.js';

const irBookingListingCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}:host{--ir-green:#227950;display:block}.app_container{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container{min-block-size:3rem}.ir-table{caption-side:bottom;color:var(--gray-900,#101828);font-size:.875rem;line-height:1.25rem;width:100%}.ir-table-header{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px;width:100%}.ir-table-header:hover,.ir-table-row:hover{background:var(--gray-100,#f2f4f7)}.ir-table-header tr{border-bottom:1px solid var(--gray-200,#eaecf0)}.ir-table-footer{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.ir-table-footer tr:last-child{border-bottom-width:0}.ir-table-row{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ir-table-head{font-weight:500;height:2.5rem;text-align:left}.ir-table-cell,.ir-table-head{padding:.75rem .2rem;vertical-align:middle;width:-moz-max-content!important;width:max-content!important}.ir-table-cell{font-size:.875rem}.ir-table-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}.page-loader{animation:l13 1s linear infinite;aspect-ratio:1;background:radial-gradient(farthest-side,#000 94%,#0000) top/4px 4px no-repeat,conic-gradient(#0000 30%,#000);border-radius:50%;mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);width:30px}.ir-auth-nav{background-color:#fff;width:100%}.ir-auth-nav-container{align-items:center;display:flex;justify-content:space-between;margin:0 auto;max-width:72rem;min-height:3.5rem;padding:0 1rem}.bl-back-btn:dir(rtl){transform:rotate(180deg)}.ir-nav-logo{max-height:4.2rem;-o-object-fit:contain;object-fit:contain;padding:.5rem}.main-container{display:flex;flex-direction:column;gap:1rem;min-height:100vh}.header-left{align-items:center;display:flex;gap:.625rem}.header-title{font-size:1.125rem;font-weight:600;margin:0;padding:0}@media (min-width:768px){.main-container.main-container-padding{padding-left:1rem;padding-right:1rem}}@media (min-width:1024px){.main-container.main-container-padding{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:1280px){.main-container.main-container-padding{padding-left:0;padding-right:0}}@keyframes l13{to{transform:rotate(1turn)}}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5{margin-bottom:.625rem}.h-24{height:6rem}.h-3{height:.75rem}.h-4{height:1rem}.w-60{width:15rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md{border-radius:.375rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.outline{outline-style:solid}.h-full{height:100%}.grid{display:grid}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.flex-wrap{flex-wrap:wrap}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.absolute{position:absolute}.mb-2{margin-bottom:.5rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.table{display:table}.capitalize{text-transform:capitalize}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.inline{display:inline}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5{height:1.25rem}.w-5{width:1.25rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.visible{visibility:visible}.fixed{position:fixed}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.rounded-xl{border-radius:.75rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.text-start{text-align:start}.size-3{height:.75rem;width:.75rem}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:768px){.md\\:p-4{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end{align-items:flex-end}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.-bottom-0{bottom:0}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4{padding-bottom:1rem}.pt-0{padding-top:0}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:h-\\[200px\\]{height:200px}.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:h-\\[250px\\]{height:250px}.xl\\:max-h-\\[250px\\]{max-height:250px}}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.pt-2,.py-2{padding-top:.5rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.h-72{height:18rem}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.border-solid{border-style:solid}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = /*@__PURE__*/ proxyCustomElement(class IrBookingListing extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
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
        this.currentPage = this.startScreen.screen;
        this.selectedBooking = (_a = this.startScreen.params) !== null && _a !== void 0 ? _a : null;
        getUserPrefernce(this.language);
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
        if (!this.be) {
            this.initializeApp();
        }
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
    async fetchGuest() {
        try {
            this.isLoading = true;
            await this.propertyService.getExposedGuest();
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    async initializeApp() {
        var _a, _b;
        try {
            this.isLoading = true;
            let requests = [];
            app_store.app_data.aName = this.aName;
            app_store.app_data.perma_link = this.perma_link;
            app_store.app_data.property_id = this.propertyid;
            if (!this.be) {
                requests = [
                    ...requests,
                    this.commonService.getExposedLanguage(),
                    this.commonService.getCurrencies(),
                    this.propertyService.getExposedProperty({
                        id: this.propertyid,
                        language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || this.language || 'en',
                        aname: this.aName,
                        perma_link: this.perma_link,
                    }),
                ];
            }
            if (this.token) {
                requests = [...requests, this.propertyService.getExposedGuest()];
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
        var _a, _b;
        console.log(this.token);
        this.propertyService.setToken((_a = this.token) !== null && _a !== void 0 ? _a : app_store.app_data.token);
        this.commonService.setToken((_b = this.token) !== null && _b !== void 0 ? _b : app_store.app_data.token);
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.be) {
            return;
        }
        const { token, state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.selectedBooking = { email: payload.email, booking_nbr: payload.booking_nbr };
                this.bookingNumber = payload.booking_nbr;
                this.currentPage = 'booking-details';
            }
            this.token = token;
            this.initializeServices();
            this.fetchGuest();
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
    async openPrivacyPolicy(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.privacyPolicyRef) {
            this.privacyPolicyRef.openModal();
        }
    }
    renderPages() {
        switch (this.currentPage) {
            case 'bookings':
                return (h("ir-booking-overview", { aff: this.isAffiliate, token: this.token, propertyid: app_store.app_data.property_id, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
            case 'booking-details':
                return (h("div", { class: this.be ? '' : 'mx-auto px-4 lg:px-6' }, h("div", { class: "header-left" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        this.currentPage = 'bookings';
                        this.selectedBooking = null;
                        // this.bl_routing.emit({ route: 'booking' });
                    }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "header-title" }, localizedWords.entries.Lcz_MyBookings)), h("ir-invoice", { locationShown: false, headerShown: false, headerMessageShown: false, footerShown: false, propertyId: app_store.app_data.property_id, perma_link: this.perma_link, aName: this.aName, language: this.language, baseUrl: this.baseUrl, email: this.selectedBooking.email, bookingNbr: this.selectedBooking.booking_nbr, status: 1, be: true })));
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
                return (h("ir-booking-overview", { aff: this.isAffiliate, token: this.token, propertyid: app_store.app_data.property_id, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
        }
    }
    renderAuthScreen() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (this.isLoading) {
            return (h("main", { class: "flex min-h-screen flex-col" }, h("div", { class: "flex h-14 p-4" }, h("ir-skeleton", { class: " mx-auto h-10 w-80 " })), h("div", { class: "mx-auto flex h-full w-full max-w-md flex-1 flex-col gap-4 px-4 py-4 " }, h("ir-skeleton", { class: "mb-2 h-6 w-56 self-center" }), h("ir-skeleton", { class: "h-12 w-full" }), h("ir-skeleton", { class: "h-12 w-full" }), h("ir-skeleton", { class: "h-10 w-full rounded-full" }))));
        }
        return (h("main", { class: "flex min-h-screen flex-col" }, h("nav", { class: "ir-auth-nav" }, h("div", { class: "ir-auth-nav-container relative" }, h("div", { class: 'flex w-full items-center gap-4' }, h("ir-button", { class: 'bl-back-btn absolute', variants: "icon", iconName: "angle_left", onButtonClick: () => (window.location.href = `https://${app_store.property.perma_link}.bookingmystay.com`) }), h("div", { class: 'flex w-full flex-1 justify-center ' }, h("a", { "aria-label": "home", target: "_blank", href: `https://${app_store.app_data.affiliate ? (_a = app_store.app_data.affiliate.sites[0]) === null || _a === void 0 ? void 0 : _a.url : (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme.website}` }, h("img", { loading: "lazy", src: ((_c = app_store.app_data) === null || _c === void 0 ? void 0 : _c.affiliate) ? (_e = (_d = app_store.app_data) === null || _d === void 0 ? void 0 : _d.affiliate.sites[0]) === null || _e === void 0 ? void 0 : _e.logo : (_g = (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.space_theme) === null || _g === void 0 ? void 0 : _g.logo, alt: `${(_h = app_store.property) === null || _h === void 0 ? void 0 : _h.name}, ${(_j = app_store.property) === null || _j === void 0 ? void 0 : _j.country.name}`, class: "ir-nav-logo aspect-1" })))))), h("div", { class: "mx-auto flex h-full  w-full max-w-md flex-1 flex-col px-4 py-4 " }, h("ir-auth", { enableSignUp: false }))));
    }
    renderBookingsScreen() {
        var _a, _b, _c;
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, !this.be && h("ir-interceptor", null), h("div", { class: " flex h-screen flex-col gap-4 md:hidden" }, [...Array(5)].map(p => (h("div", { key: p, class: "block h-64 w-full animate-pulse rounded-md bg-gray-200" }))))));
        }
        return (h(Fragment, null, this.headerShown && (h("ir-nav", { isBookingListing: true, showBookingCode: false, showCurrency: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), h("div", { class: `mx-auto max-w-6xl ` }, this.renderPages()), this.footerShown && h("ir-footer", { version: this.version }), this.footerShown && h("ir-privacy-policy", { hideTrigger: true, ref: el => (this.privacyPolicyRef = el) })));
    }
    render() {
        return (h(Host, { key: '702d455caf124fa47e0e8917447057b0a8705381' }, !this.be && h("ir-interceptor", { key: '4e4586784daa34cc3d8c62f45ca48c98f3483936' }), !this.token ? this.renderAuthScreen() : this.renderBookingsScreen()));
    }
    static get watchers() { return {
        "aff": ["handleAffiliateChange"]
    }; }
    static get style() { return IrBookingListingStyle0; }
}, [0, "ir-booking-listing", {
        "propertyid": [2],
        "baseUrl": [1, "base-url"],
        "language": [1],
        "headerShown": [4, "header-shown"],
        "footerShown": [4, "footer-shown"],
        "maxPages": [2, "max-pages"],
        "perma_link": [1],
        "aName": [1, "a-name"],
        "showAllBookings": [4, "show-all-bookings"],
        "be": [4],
        "startScreen": [16],
        "aff": [1],
        "version": [1],
        "hideGoogleSignIn": [4, "hide-google-sign-in"],
        "isLoading": [32],
        "token": [32],
        "bookingNumber": [32],
        "currentPage": [32],
        "selectedBooking": [32],
        "isAffiliate": [32]
    }, [[16, "screenChanged", "handleScreenChanged"], [0, "authFinish", "handleAuthFinish"], [0, "signOut", "handleSignout"], [0, "bl_routing", "handleRouting"], [0, "openPrivacyPolicy", "openPrivacyPolicy"]], {
        "aff": ["handleAffiliateChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-listing", "ir-alert-dialog", "ir-auth", "ir-badge", "ir-badge-group", "ir-booking-cancelation", "ir-booking-card", "ir-booking-code", "ir-booking-header", "ir-booking-overview", "ir-button", "ir-checkbox", "ir-dialog", "ir-footer", "ir-google-maps", "ir-icons", "ir-input", "ir-interceptor", "ir-invoice", "ir-language-picker", "ir-menu", "ir-modal", "ir-nav", "ir-pagination", "ir-phone-input", "ir-privacy-policy", "ir-select", "ir-sheet", "ir-signin", "ir-signup", "ir-skeleton", "ir-user-avatar", "ir-user-profile"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingListing);
            }
            break;
        case "ir-alert-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-booking-cancelation":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-booking-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-booking-overview":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-google-maps":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-nav":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-privacy-policy":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-sheet":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-user-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-user-profile":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingListing as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-listing2.js.map