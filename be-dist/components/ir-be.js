import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as CommonService } from './common.service.js';
import { P as PropertyService } from './property.service.js';
import { h as getUserPreference, v as validateCoupon, j as validateAgentCode, k as matchLocale, n as checkGhs, d as dateFns, s as setDefaultLocale, o as checkAffiliate, f as modifyBookingStore, b as booking_store } from './utils.js';
import { b as app_store, u as updateUserPreference, d as changeLocale } from './app.store.js';
import { c as checkout_store } from './checkout.store.js';
import { T as Token } from './Token.js';
import { d as defineCustomElement$10 } from './ir-accomodations2.js';
import { d as defineCustomElement$$ } from './ir-adult-child-counter2.js';
import { d as defineCustomElement$_ } from './ir-alert-dialog2.js';
import { d as defineCustomElement$Z } from './ir-auth2.js';
import { d as defineCustomElement$Y } from './ir-availability-header2.js';
import { d as defineCustomElement$X } from './ir-badge2.js';
import { d as defineCustomElement$W } from './ir-badge-group2.js';
import { d as defineCustomElement$V } from './ir-booking-cancellation2.js';
import { d as defineCustomElement$U } from './ir-booking-card2.js';
import { d as defineCustomElement$T } from './ir-booking-code2.js';
import { d as defineCustomElement$S } from './ir-booking-details2.js';
import { d as defineCustomElement$R } from './ir-booking-header2.js';
import { d as defineCustomElement$Q } from './ir-booking-listing2.js';
import { d as defineCustomElement$P } from './ir-booking-overview2.js';
import { d as defineCustomElement$O } from './ir-booking-page2.js';
import { d as defineCustomElement$N } from './ir-booking-summary2.js';
import { d as defineCustomElement$M } from './ir-button2.js';
import { d as defineCustomElement$L } from './ir-calendar2.js';
import { d as defineCustomElement$K } from './ir-carousel2.js';
import { d as defineCustomElement$J } from './ir-checkbox2.js';
import { d as defineCustomElement$I } from './ir-checkout-page2.js';
import { d as defineCustomElement$H } from './ir-checkout-skeleton2.js';
import { d as defineCustomElement$G } from './ir-coupon-dialog2.js';
import { d as defineCustomElement$F } from './ir-credit-card-input2.js';
import { d as defineCustomElement$E } from './ir-date-popup2.js';
import { d as defineCustomElement$D } from './ir-date-range2.js';
import { d as defineCustomElement$C } from './ir-dialog2.js';
import { d as defineCustomElement$B } from './ir-facilities2.js';
import { d as defineCustomElement$A } from './ir-footer2.js';
import { d as defineCustomElement$z } from './ir-gallery2.js';
import { d as defineCustomElement$y } from './ir-google-maps2.js';
import { d as defineCustomElement$x } from './ir-home-loader2.js';
import { d as defineCustomElement$w } from './ir-icons2.js';
import { d as defineCustomElement$v } from './ir-image2.js';
import { d as defineCustomElement$u } from './ir-input2.js';
import { d as defineCustomElement$t } from './ir-interceptor2.js';
import { d as defineCustomElement$s } from './ir-invoice2.js';
import { d as defineCustomElement$r } from './ir-language-picker2.js';
import { d as defineCustomElement$q } from './ir-loyalty2.js';
import { d as defineCustomElement$p } from './ir-menu2.js';
import { d as defineCustomElement$o } from './ir-modal2.js';
import { d as defineCustomElement$n } from './ir-nav2.js';
import { d as defineCustomElement$m } from './ir-pagination2.js';
import { d as defineCustomElement$l } from './ir-payment-view2.js';
import { d as defineCustomElement$k } from './ir-phone-input2.js';
import { d as defineCustomElement$j } from './ir-pickup2.js';
import { d as defineCustomElement$i } from './ir-popover2.js';
import { d as defineCustomElement$h } from './ir-privacy-policy2.js';
import { d as defineCustomElement$g } from './ir-property-gallery2.js';
import { d as defineCustomElement$f } from './ir-quick-auth2.js';
import { d as defineCustomElement$e } from './ir-rateplan2.js';
import { d as defineCustomElement$d } from './ir-room-type-amenities2.js';
import { d as defineCustomElement$c } from './ir-roomtype2.js';
import { d as defineCustomElement$b } from './ir-select2.js';
import { d as defineCustomElement$a } from './ir-sheet2.js';
import { d as defineCustomElement$9 } from './ir-signin2.js';
import { d as defineCustomElement$8 } from './ir-signup2.js';
import { d as defineCustomElement$7 } from './ir-skeleton2.js';
import { d as defineCustomElement$6 } from './ir-textarea2.js';
import { d as defineCustomElement$5 } from './ir-tooltip2.js';
import { d as defineCustomElement$4 } from './ir-user-avatar2.js';
import { d as defineCustomElement$3 } from './ir-user-form2.js';
import { d as defineCustomElement$2 } from './ir-user-profile2.js';

class Stack {
    constructor() {
        this._topNode = undefined;
        this._count = 0;
    }
    count() {
        return this._count;
    }
    isEmpty() {
        return this._topNode === undefined;
    }
    push(value) {
        console.log(value);
        let node = new Node(value, this._topNode);
        this._topNode = node;
        this._count++;
    }
    pop() {
        let poppedNode = this._topNode;
        this._topNode = poppedNode.previous;
        this._count--;
        return poppedNode.data;
    }
    peek() {
        return this._topNode.data;
    }
}
class Node {
    constructor(data, previous) {
        this.previous = previous;
        this.data = data;
    }
}

const irBookingEngineCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.block{display:block}:host{display:block;margin:0;padding:0;text-align:start!important}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5{margin-bottom:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-4{height:1rem}.w-60{width:15rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md{border-radius:.375rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.outline{outline-style:solid}.h-full{height:100%}.grid{display:grid}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.h-28{height:7rem}.h-44{height:11rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-8{height:2rem}.w-1\\/2{width:50%}.w-24{width:6rem}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-40{width:10rem}.w-48{width:12rem}.w-80{width:20rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid{display:grid}.md\\:h-20{height:5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6{padding:1.5rem}}.size-6{height:1.5rem;width:1.5rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.top-\\[20\\%\\]{top:20%}.z-50{z-index:50}.mt-1\\.5{margin-top:.375rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.max-h-32{max-height:8rem}.flex-wrap{flex-wrap:wrap}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover{object-fit:cover}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.absolute{position:absolute}.mb-2{margin-bottom:.5rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-64{height:16rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-56{width:14rem}.max-w-md{max-width:28rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center{place-content:center}.self-center{align-self:center}.rounded-full{border-radius:9999px}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.py-4{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden{display:none}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.gap-2\\.5{gap:.625rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.table{display:table}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.capitalize{text-transform:capitalize}.h-5{height:1.25rem}.w-5{width:1.25rem}.visible{visibility:visible}.fixed{position:fixed}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.gap-1\\.5{gap:.375rem}@media (min-width:768px){.md\\:block{display:block}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.font-normal{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.size-4{height:1rem;width:1rem}.gap-3{gap:.75rem}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:640px){.sm\\:hidden{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity,1))}}.size-\\[1\\.125rem\\]{height:1.125rem;width:1.125rem}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5{margin-top:.625rem}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.p-6{padding:1.5rem}.pt-2{padding-top:.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.w-16{width:4rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.space-y-9>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.25rem*var(--tw-space-y-reverse));margin-top:calc(2.25rem*(1 - var(--tw-space-y-reverse)))}.pb-1\\.5{padding-bottom:.375rem}.pl-0{padding-left:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.min-w-\\[1rem\\]{min-width:1rem}.cursor-pointer{cursor:pointer}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.bg-gray-300{background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-300,.bg-white{--tw-bg-opacity:1}.p-2{padding:.5rem}.underline{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}}.h-80{height:20rem}.h-\\[80vh\\]{height:80vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}.text-start{text-align:start}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.size-3{height:.75rem;width:.75rem}.col-span-6{grid-column:span 6/span 6}.w-12{width:3rem}.place-items-center{place-items:center}.-bottom-0{bottom:0}.left-8{left:2rem}.top-8{top:2rem}.z-0{z-index:0}.z-10{z-index:10}.mb-1{margin-bottom:.25rem}.size-10{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\]{max-height:80vh}.max-h-\\[90vh\\]{max-height:90vh}.w-72{width:18rem}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4,.py-4{padding-bottom:1rem}.pt-0{padding-top:0}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity,1))}@media (min-width:768px){.md\\:w-auto{width:auto}.md\\:p-4{padding:1rem}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.w-fit{width:fit-content}@media (min-width:640px){.sm\\:w-full{width:100%}}@media (min-width:1024px){.lg\\:w-fit{width:fit-content}}.pt-2,.py-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}}.h-72{height:18rem}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.size-\\[18px\\]{height:18px;width:18px}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrBeStyle0 = irBookingEngineCss;

const IrBookingEngine = /*@__PURE__*/ proxyCustomElement(class IrBookingEngine extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rt_id = null;
        this.rp_id = null;
        //extra props
        this.perma_link = null;
        this.p = null;
        this.adults = '2';
        this.property = null;
        this.source = null;
        this.hideGoogleSignIn = true;
        this.origin = null;
        this.view = 'default';
        this.isLoading = false;
        this.router = new Stack();
        this.bookingListingScreenOptions = { params: null, screen: 'bookings' };
        this.version = '2.71';
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.token = new Token();
    }
    async componentWillLoad() {
        console.log(`version:${this.version}`);
        getUserPreference(this.language);
        if (this.property) {
            app_store.property = Object.assign({}, this.property);
        }
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            app_store.is_signed_in = true;
            this.token.setToken(isAuthenticated.token);
        }
        else {
            const token = await this.commonService.getBEToken();
            this.token.setToken(token);
        }
        this.initializeApp();
    }
    handleSourceChange(newSource, oldSource) {
        if (newSource && (!oldSource || oldSource.code !== newSource.code)) {
            this.setSource(newSource);
        }
    }
    handleCurrencyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            updateUserPreference({ currency_id: newValue });
        }
    }
    handleCouponChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            validateCoupon(newValue);
        }
    }
    handleLoyaltyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.modifyLoyalty();
        }
    }
    handleAgentCodeChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            validateAgentCode(newValue);
        }
    }
    handleAppViewChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            app_store.app_data.view = newValue;
        }
    }
    setSource(newSource) {
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { source: newSource });
    }
    modifyLanguage(code) {
        var _a;
        if (!this.languages) {
            return;
        }
        changeLocale(((_a = this.languages.find(l => l.code.toLowerCase() === code)) === null || _a === void 0 ? void 0 : _a.direction) || 'LTR', matchLocale(code));
        updateUserPreference({ language_id: code });
    }
    initializeApp() {
        var _a;
        app_store.app_data = {
            view: this.view,
            aName: this.p,
            origin: this.origin,
            perma_link: this.perma_link,
            displayMode: 'default',
            isFromGhs: checkGhs((_a = this.source) === null || _a === void 0 ? void 0 : _a.code, this.stag),
            token: '',
            property_id: this.propertyId,
            injected: this.injected,
            roomtype_id: this.rt_id,
            affiliate: null,
            tag: this.stag,
            source: this.source,
            hideGoogleSignIn: this.hideGoogleSignIn,
            stag: this.stag,
        };
        this.initRequest();
    }
    async initRequest() {
        var _a, _b, _c;
        this.isLoading = true;
        const p = JSON.parse(localStorage.getItem('user_preference'));
        let requests = [
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
            this.commonService.getExposedCountryByIp({ id: (_a = this.propertyId) === null || _a === void 0 ? void 0 : _a.toString(), perma_link: this.perma_link, aname: this.p }),
            this.commonService.getExposedLanguage(),
            this.propertyService.getExposedProperty({ id: this.propertyId, language: ((_b = app_store.userPreferences) === null || _b === void 0 ? void 0 : _b.language_id) || 'en', aname: this.p, perma_link: this.perma_link }),
            this.propertyService.getExposedNonBookableNights({
                porperty_id: this.propertyId,
                from_date: dateFns.format(new Date(), 'yyyy-MM-dd'),
                to_date: dateFns.format(dateFns.addYears(new Date(), 1), 'yyyy-MM-dd'),
                perma_link: this.perma_link,
                aname: this.p,
            }),
        ];
        if (app_store.is_signed_in) {
            requests.push(this.propertyService.getExposedGuest());
        }
        const [currencies, languages] = await Promise.all(requests);
        this.currencies = currencies;
        this.languages = languages;
        if (!p) {
            if (this.language) {
                this.modifyLanguage(this.language.toLowerCase());
            }
            let currency = app_store.userDefaultCountry.currency;
            if (this.cur) {
                const newCurr = this.currencies.find(c => c.code.toLowerCase() === this.cur.toLowerCase());
                if (newCurr) {
                    currency = newCurr;
                }
            }
            setDefaultLocale({ currency });
        }
        this.checkAndApplyDiscounts();
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { affiliate: checkAffiliate((_c = this.aff) === null || _c === void 0 ? void 0 : _c.toLowerCase().trim()) });
        this.isLoading = false;
    }
    checkAndApplyDiscounts() {
        if (this.coupon) {
            validateCoupon(this.coupon);
        }
        if (this.loyalty) {
            this.modifyLoyalty();
        }
        if (this.agent_code) {
            validateAgentCode(this.agent_code);
        }
    }
    // private handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   const value = e.detail;
    //   const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
    //   if (!selectedVariation) {
    //     return;
    //   }
    //   updateRoomParams({ params: { selected_variation: { variation: selectedVariation, state: 'modified' } }, ratePlanId: rateplanId, roomTypeId });
    // }
    modifyLoyalty() {
        modifyBookingStore('bookingAvailabilityParams', Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { coupon: null, loyalty: this.loyalty }));
    }
    handleNavigation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        app_store.currentPage = e.detail;
    }
    async handleResetBooking(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.resetBooking((_a = e.detail) !== null && _a !== void 0 ? _a : 'completeReset');
    }
    async openPrivacyPolicy(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.privacyPolicyRef.openModal();
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.bookingListingScreenOptions = { screen: 'booking-details', params: { booking_nbr: payload.booking_nbr, email: payload.email } };
                app_store.currentPage = 'booking-listing';
            }
        }
    }
    async resetBooking(resetType = 'completeReset') {
        var _a;
        let queries = [];
        if (resetType === 'partialReset' && app_store.fetchedBooking) {
            queries.push(this.checkAvailability());
        }
        else if (resetType === 'completeReset') {
            queries = [
                ...queries,
                ...[
                    this.commonService.getExposedLanguage(),
                    this.propertyService.getExposedProperty({ id: app_store.app_data.property_id, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.p, perma_link: this.perma_link }, false),
                ],
            ];
            if (app_store.fetchedBooking) {
                queries.push(this.checkAvailability());
            }
        }
        await Promise.all(queries);
    }
    async checkAvailability() {
        var _a;
        console.warn('here');
        booking_store.resetBooking = false;
        await this.propertyService.getExposedBookingAvailability({
            propertyid: app_store.app_data.property_id,
            from_date: booking_store.bookingAvailabilityParams.from_date,
            to_date: booking_store.bookingAvailabilityParams.to_date,
            room_type_ids: [],
            adult_nbr: booking_store.bookingAvailabilityParams.adult_nbr,
            child_nbr: booking_store.bookingAvailabilityParams.child_nbr,
            language: app_store.userPreferences.language_id,
            currency_ref: app_store.userPreferences.currency_id,
            is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0,
            is_in_affiliate_mode: !!app_store.app_data.affiliate,
            affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null,
        });
    }
    renderScreens() {
        var _a;
        switch (app_store.currentPage) {
            case 'booking':
                return h("ir-booking-page", { adultCount: this.adults, childrenCount: this.child, ages: this.ages, fromDate: this.checkin, toDate: this.checkout });
            case 'checkout':
                return h("ir-checkout-page", null);
            case 'invoice':
                return (h("ir-invoice", { version: this.version, headerShown: false, footerShown: false, propertyId: this.propertyId, perma_link: this.perma_link, aName: this.p, language: (_a = this.language) === null || _a === void 0 ? void 0 : _a.toLowerCase(), baseUrl: this.baseUrl, email: app_store.invoice.email, bookingNbr: app_store.invoice.booking_number, status: 1, be: true }));
            case 'booking-listing':
                return (h("ir-booking-listing", { version: this.version, startScreen: this.bookingListingScreenOptions, showAllBookings: false, headerShown: false, footerShown: false, propertyid: app_store.app_data.property_id, perma_link: this.perma_link, aName: this.p, be: true, baseUrl: this.baseUrl, aff: this.aff }));
            case 'user-profile':
                return (h("ir-user-profile", { user_data: {
                        id: checkout_store.userFormData.id,
                        email: checkout_store.userFormData.email,
                        first_name: checkout_store.userFormData.firstName,
                        last_name: checkout_store.userFormData.lastName,
                        country_id: checkout_store.userFormData.country_id,
                        mobile: checkout_store.userFormData.mobile_number,
                        country_phone_prefix: checkout_store.userFormData.country_phone_prefix.toString(),
                    } }));
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return h("ir-home-loader", null);
        }
        return (h("main", { class: "relative  flex w-full flex-col space-y-5 " }, h("ir-interceptor", null), h("section", { class: `${this.injected ? '' : 'sticky top-0 z-20'}  m-0 w-full p-0 ` }, h("ir-nav", { class: 'm-0 p-0', website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), h("section", { class: "flex-1 px-4 lg:px-6" }, h("div", { class: "mx-auto max-w-6xl" }, this.renderScreens())), h("ir-privacy-policy", { ref: el => (this.privacyPolicyRef = el), hideTrigger: true }), !this.injected && h("ir-footer", { version: this.version })));
    }
    static get watchers() { return {
        "source": ["handleSourceChange"],
        "cur": ["handleCurrencyChange"],
        "coupon": ["handleCouponChange"],
        "loyalty": ["handleLoyaltyChange"],
        "agent_code": ["handleAgentCodeChange"],
        "view": ["handleAppViewChange"]
    }; }
    static get style() { return IrBeStyle0; }
}, [1, "ir-be", {
        "propertyId": [2, "property-id"],
        "injected": [4],
        "rt_id": [2],
        "rp_id": [2],
        "perma_link": [1],
        "p": [1],
        "checkin": [1],
        "checkout": [1],
        "language": [1],
        "adults": [1],
        "child": [1],
        "ages": [1],
        "cur": [1],
        "aff": [1],
        "stag": [1],
        "property": [16],
        "source": [16],
        "hideGoogleSignIn": [4, "hide-google-sign-in"],
        "origin": [1],
        "view": [1],
        "coupon": [1],
        "loyalty": [4],
        "agent_code": [1],
        "selectedLocale": [32],
        "currencies": [32],
        "languages": [32],
        "isLoading": [32],
        "router": [32],
        "bookingListingScreenOptions": [32]
    }, [[0, "routing", "handleNavigation"], [0, "resetBooking", "handleResetBooking"], [0, "openPrivacyPolicy", "openPrivacyPolicy"], [0, "authStatus", "handleAuthFinish"]], {
        "source": ["handleSourceChange"],
        "cur": ["handleCurrencyChange"],
        "coupon": ["handleCouponChange"],
        "loyalty": ["handleLoyaltyChange"],
        "agent_code": ["handleAgentCodeChange"],
        "view": ["handleAppViewChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-be", "ir-accomodations", "ir-adult-child-counter", "ir-alert-dialog", "ir-auth", "ir-availability-header", "ir-badge", "ir-badge-group", "ir-booking-cancellation", "ir-booking-card", "ir-booking-code", "ir-booking-details", "ir-booking-header", "ir-booking-listing", "ir-booking-overview", "ir-booking-page", "ir-booking-summary", "ir-button", "ir-calendar", "ir-carousel", "ir-checkbox", "ir-checkout-page", "ir-checkout-skeleton", "ir-coupon-dialog", "ir-credit-card-input", "ir-date-popup", "ir-date-range", "ir-dialog", "ir-facilities", "ir-footer", "ir-gallery", "ir-google-maps", "ir-home-loader", "ir-icons", "ir-image", "ir-input", "ir-interceptor", "ir-invoice", "ir-language-picker", "ir-loyalty", "ir-menu", "ir-modal", "ir-nav", "ir-pagination", "ir-payment-view", "ir-phone-input", "ir-pickup", "ir-popover", "ir-privacy-policy", "ir-property-gallery", "ir-quick-auth", "ir-rateplan", "ir-room-type-amenities", "ir-roomtype", "ir-select", "ir-sheet", "ir-signin", "ir-signup", "ir-skeleton", "ir-textarea", "ir-tooltip", "ir-user-avatar", "ir-user-form", "ir-user-profile"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-be":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEngine);
            }
            break;
        case "ir-accomodations":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-adult-child-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-alert-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-availability-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-booking-cancellation":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-booking-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-booking-overview":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-booking-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-booking-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-calendar":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-checkout-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-checkout-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-coupon-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-credit-card-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-date-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-facilities":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-google-maps":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-home-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-loyalty":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-nav":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-payment-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-privacy-policy":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-property-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-quick-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-rateplan":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-room-type-amenities":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-roomtype":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-sheet":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-user-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-user-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-user-profile":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrBe = IrBookingEngine;
const defineCustomElement = defineCustomElement$1;

export { IrBe, defineCustomElement };

//# sourceMappingURL=ir-be.js.map