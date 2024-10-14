import { h, proxyCustomElement, HTMLElement, Host } from '@stencil/core/internal/client';
import { l as getUserPrefernce, d as dateFns, g as getDateDifference, u as formatAmount, x as runScriptAndRemove, c as cn } from './utils.js';
import { l as localizedWords } from './localization.store.js';
import { a as app_store } from './app.store.js';
import { P as PropertyService } from './property.service.js';
import { C as CommonService } from './common.service.js';
import { a as axios } from './axios.js';
import { A as AuthService } from './auth.service.js';
import { P as PaymentService } from './payment.service.js';
import { B as BookingListingAppService } from './booking-listing.service.js';
import { d as defineCustomElement$q } from './ir-alert-dialog2.js';
import { d as defineCustomElement$p } from './ir-auth2.js';
import { d as defineCustomElement$o } from './ir-badge-group2.js';
import { d as defineCustomElement$n } from './ir-booking-cancelation2.js';
import { d as defineCustomElement$m } from './ir-booking-code2.js';
import { d as defineCustomElement$l } from './ir-button2.js';
import { d as defineCustomElement$k } from './ir-checkbox2.js';
import { d as defineCustomElement$j } from './ir-dialog2.js';
import { d as defineCustomElement$i } from './ir-footer2.js';
import { d as defineCustomElement$h } from './ir-google-maps2.js';
import { d as defineCustomElement$g } from './ir-icons2.js';
import { d as defineCustomElement$f } from './ir-input2.js';
import { d as defineCustomElement$e } from './ir-interceptor2.js';
import { d as defineCustomElement$d } from './ir-language-picker2.js';
import { d as defineCustomElement$c } from './ir-menu2.js';
import { d as defineCustomElement$b } from './ir-modal2.js';
import { d as defineCustomElement$a } from './ir-nav2.js';
import { d as defineCustomElement$9 } from './ir-phone-input2.js';
import { d as defineCustomElement$8 } from './ir-privacy-policy2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-sheet2.js';
import { d as defineCustomElement$5 } from './ir-signin2.js';
import { d as defineCustomElement$4 } from './ir-signup2.js';
import { d as defineCustomElement$3 } from './ir-skeleton2.js';
import { d as defineCustomElement$2 } from './ir-user-avatar2.js';
import { d as defineCustomElement$1 } from './ir-user-profile2.js';

function InvoiceSkeleton() {
    return (h("div", { class: "flex flex-col gap-4 p-4" },
        h("div", { class: "flex gap-2" },
            h("ir-skeleton", { class: "h-8 w-32 rounded-full" }),
            h("ir-skeleton", { class: "h-8 w-32 rounded-full" })),
        h("div", { class: "flex flex-col gap-2" },
            h("ir-skeleton", { class: "h-4 w-48" }),
            h("ir-skeleton", { class: "h-4 w-40" }),
            h("ir-skeleton", { class: "h-4 w-56" }),
            h("ir-skeleton", { class: "h-4 w-52" }),
            h("ir-skeleton", { class: "h-4 w-44" })),
        h("ir-skeleton", { class: "h-px w-full" }),
        h("div", { class: "flex items-center justify-between" },
            h("div", { class: "flex items-center space-x-2" },
                h("ir-skeleton", { class: "h-6 w-64" })),
            h("ir-skeleton", { class: "h-4 w-40" })),
        h("div", { class: "flex flex-col gap-2" },
            h("ir-skeleton", { class: "h-4 w-32" }),
            h("ir-skeleton", { class: "h-4 w-48" }),
            h("ir-skeleton", { class: "h-4 w-64" }),
            h("ir-skeleton", { class: "h-4 w-72" }),
            h("ir-skeleton", { class: "h-4 w-80" })),
        h("ir-skeleton", { class: "h-8 w-24 text-right " }),
        h("div", { class: "flex flex-col gap-2" },
            h("ir-skeleton", { class: "h-4 w-32" }),
            h("ir-skeleton", { class: "h-4 w-48" }),
            h("ir-skeleton", { class: "h-4 w-64" }),
            h("ir-skeleton", { class: "h-4 w-72" }),
            h("ir-skeleton", { class: "h-4 w-80" })),
        h("ir-skeleton", { class: "h-8 w-24 text-right " }),
        h("div", { class: "flex items-center space-x-2" },
            h("ir-skeleton", { class: "h-6 w-48" })),
        h("ir-skeleton", { class: "h-8 w-24 text-right" })));
}

const irInvoiceCss = "*.sc-ir-invoice,.sc-ir-invoice:after,.sc-ir-invoice:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-invoice:after,.sc-ir-invoice:before{--tw-content:\"\"}.sc-ir-invoice-h,html.sc-ir-invoice{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-invoice{line-height:inherit;margin:0}hr.sc-ir-invoice{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-invoice:where([title]){text-decoration:underline dotted}h1.sc-ir-invoice,h2.sc-ir-invoice,h3.sc-ir-invoice,h4.sc-ir-invoice,h5.sc-ir-invoice,h6.sc-ir-invoice{font-size:inherit;font-weight:inherit}a.sc-ir-invoice{color:inherit;text-decoration:inherit}b.sc-ir-invoice,strong.sc-ir-invoice{font-weight:bolder}code.sc-ir-invoice,kbd.sc-ir-invoice,pre.sc-ir-invoice,samp.sc-ir-invoice{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-invoice{font-size:80%}sub.sc-ir-invoice,sup.sc-ir-invoice{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-invoice{bottom:-.25em}sup.sc-ir-invoice{top:-.5em}table.sc-ir-invoice{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-invoice,input.sc-ir-invoice,optgroup.sc-ir-invoice,select.sc-ir-invoice,textarea.sc-ir-invoice{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-invoice,select.sc-ir-invoice{text-transform:none}button.sc-ir-invoice,input.sc-ir-invoice:where([type=button]),input.sc-ir-invoice:where([type=reset]),input.sc-ir-invoice:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-invoice:-moz-focusring{outline:auto}.sc-ir-invoice:-moz-ui-invalid{box-shadow:none}progress.sc-ir-invoice{vertical-align:baseline}.sc-ir-invoice::-webkit-inner-spin-button,.sc-ir-invoice::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-invoice{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-invoice::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-invoice::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-invoice{display:list-item}blockquote.sc-ir-invoice,dd.sc-ir-invoice,dl.sc-ir-invoice,fieldset.sc-ir-invoice,figure.sc-ir-invoice,h1.sc-ir-invoice,h2.sc-ir-invoice,h3.sc-ir-invoice,h4.sc-ir-invoice,h5.sc-ir-invoice,h6.sc-ir-invoice,hr.sc-ir-invoice,p.sc-ir-invoice,pre.sc-ir-invoice{margin:0}fieldset.sc-ir-invoice,legend.sc-ir-invoice{padding:0}menu.sc-ir-invoice,ol.sc-ir-invoice,ul.sc-ir-invoice{list-style:none;margin:0;padding:0}dialog.sc-ir-invoice{padding:0}textarea.sc-ir-invoice{resize:vertical}input.sc-ir-invoice::placeholder,textarea.sc-ir-invoice::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-invoice,button.sc-ir-invoice{cursor:pointer}.sc-ir-invoice:disabled{cursor:default}audio.sc-ir-invoice,canvas.sc-ir-invoice,embed.sc-ir-invoice,iframe.sc-ir-invoice,img.sc-ir-invoice,object.sc-ir-invoice,svg.sc-ir-invoice,video.sc-ir-invoice{display:block;vertical-align:middle}img.sc-ir-invoice,video.sc-ir-invoice{height:auto;max-width:100%}[hidden].sc-ir-invoice{display:none}.sc-ir-invoice::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.relative.sc-ir-invoice{position:relative}.block.sc-ir-invoice{display:block}.flex.sc-ir-invoice{display:flex}.hidden.sc-ir-invoice{display:none}.transform.sc-ir-invoice{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border.sc-ir-invoice{border-width:1px}.underline.sc-ir-invoice{text-decoration-line:underline}.filter.sc-ir-invoice{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition.sc-ir-invoice{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.sc-ir-invoice-h{box-sizing:border-box;display:block}[class^=button].sc-ir-invoice{all:unset;border-radius:min(var(--radius,.5rem),30rem);box-sizing:border-box;color:#fff;cursor:pointer;font-weight:500;gap:.5rem;transition:all .3s ease-in-out;width:var(--ir-btn-width,inherit)}[class^=button].sc-ir-invoice:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}[class^=button].sc-ir-invoice:active,[class^=button].sc-ir-invoice:focus-visible{box-shadow:0 .0625rem .125rem rgba(0,0,0,.1),0 0 0 .25rem hsla(var(--brand-100,209,100%,91%),.2)}.button-default.sc-ir-invoice,.button-icon-primary.sc-ir-invoice{background:hsla(var(--brand-600,215,87%,51%),1)}.button-default.sc-ir-invoice:hover,.button-icon-primary.sc-ir-invoice:hover{background:hsl(var(--brand-800,218,80%,46%))}.button-default.sc-ir-invoice:disabled,.button-icon-primary.sc-ir-invoice:disabled{background:hsl(var(--brand-200,206,100%,85%))}.button-secondary.sc-ir-invoice,.button-secondary.sc-ir-invoice:active,.button-secondary.sc-ir-invoice:focus{background:hsl(var(--brand-50,206,100%,97%));color:hsl(var(--brand-700,218,80%,46%))}.button-secondary.sc-ir-invoice .loader.sc-ir-invoice{background-color:hsl(var(--brand-700,218,80%,46%))}.button-secondary.sc-ir-invoice:hover{background:hsl(var(--brand-100,209,100%,91%))}.button-secondary.sc-ir-invoice:disabled{color:hsl(var(--brand-300,206,100%,76%))}.button-outline.sc-ir-invoice{align-items:center;background:#fff;border:.0625rem solid var(--gray-300,#d0d5dd);color:var(--gray-700,#344054);text-align:center}.button-outline.sc-ir-invoice .loader.sc-ir-invoice{background-color:var(--gray-700,#344054)}.button-outline.sc-ir-invoice:hover{background:var(--gray-100,#f9fafb);color:var(--gray-800,#1d2939)}.button-outline.sc-ir-invoice:disabled{background:var(--gray-50,#f9fafb);border-color:var(--gray-300,#d0d5dd);color:var(--gray-300,#d0d5dd)}.button-outline.sc-ir-invoice:active,.button-outline.sc-ir-invoice:focus-visible{box-shadow:0 .0625rem .125rem rgba(0,0,0,.1),0 0 0 .25rem var(--gray-100,#f2f4f7)}.button-outline-primary.sc-ir-invoice{background:#fff;border:.0625rem solid hsl(var(--brand-600,#d0d5dd));color:hsl(var(--brand-700,#344054))}.button-outline-primary.sc-ir-invoice .loader.sc-ir-invoice{background-color:hsl(var(--gray-700,#344054))}.button-outline-primary.sc-ir-invoice:hover{background:hsla(var(--brand-100,#f9fafb),.05);color:hsl(var(--brand-800,#1d2939))}.button-outline-primary.sc-ir-invoice:disabled{background:hsl(var(--brand-200,#eaecf0));color:hsl(var(--brand-300,#d0d5dd))}.button-outline-primary.sc-ir-invoice:active,.button-outline-primary.sc-ir-invoice:focus-visible{box-shadow:0 .0625rem .125rem rgba(0,0,0,.1),0 0 0 .25rem hsl(var(--brand-100,#f2f4f7),.1)}.button-ghost.sc-ir-invoice,.button-icon.sc-ir-invoice{color:var(--gray-600,#475467)}.button-ghost.sc-ir-invoice:hover,.button-icon.sc-ir-invoice:hover{background:var(--gray-200,#eaecf0);color:var(--gray-700,#344054)}.button-ghost.sc-ir-invoice:active,.button-icon.sc-ir-invoice:active{box-shadow:none}.button-ghost.sc-ir-invoice:disabled,.button-icon.sc-ir-invoice:disabled{color:var(--gray-300,#d0d5dd)}.button-ghost-primary.sc-ir-invoice{background:#fff;color:hsl(var(--brand-600,215,87%,51%))}.button-ghost-primary.sc-ir-invoice:hover{background:hsla(var(--brand-100,206,100%,97%),.2);color:hsl(var(--brand-700,218,80%,46%))}.button-ghost-primary.sc-ir-invoice:disabled{background:#fff;color:var(--brand-300,#d0d5dd)}.button-link.sc-ir-invoice{background:#fff;color:var(--gray-600,#475467)}.button-link.sc-ir-invoice:hover{text-decoration:underline}.button-link.sc-ir-invoice:disabled{background:#fff;color:var(--gray-300,#d0d5dd)}.button-destructive.sc-ir-invoice{background:var(--error-600,#d92d20)}.button-destructive.sc-ir-invoice:hover{background:var(--error-800,#b42318)}.button-destructive.sc-ir-invoice:disabled{background:var(--error-200,#fecdca)}.button-destructive.sc-ir-invoice:active,.button-destructive.sc-ir-invoice:focus-visible{box-shadow:0 .0625rem .125rem rgba(0,0,0,.1),0 0 0 .25rem var(--error-100,#fee4e2)}[class^=button][data-size=sm].sc-ir-invoice{font-size:.875rem;line-height:.875rem;padding:.5rem 1rem}[class^=button][data-size=md].sc-ir-invoice{font-size:1rem;line-height:1.5rem;padding:.5rem 1.2rem}[class^=button][data-size=lg].sc-ir-invoice{font-size:1rem;line-height:1.5rem;padding:.6875rem 1.35rem}.button-icon-primary[data-size=sm].sc-ir-invoice,.button-icon[data-size=sm].sc-ir-invoice{padding:.5rem}.button-icon-primary[data-size=md].sc-ir-invoice,.button-icon[data-size=md].sc-ir-invoice{height:3rem;padding:.625rem}.button-icon-primary[data-size=lg].sc-ir-invoice,.button-icon[data-size=lg].sc-ir-invoice{padding:.75rem}.button-icon-primary[data-size=pill].sc-ir-invoice{height:2.5rem;width:2.5rem}.loader.sc-ir-invoice{--_m:conic-gradient(#0000 10%,#000),linear-gradient(#000 0 0) content-box;animation:l3 1s linear infinite;aspect-ratio:1;background:#fff;border-radius:50%;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;padding:.125rem;width:.75rem}@keyframes l3{to{transform:rotate(1turn)}}button.is-loading.sc-ir-invoice slot[name=btn-icon].sc-ir-invoice{display:none}.booking-info.sc-ir-invoice{border-bottom:1px solid var(--gray-300,#d0d5dd)}.booking-info-text.sc-ir-invoice,.room-info-text.sc-ir-invoice{color:var(--gray-800,#1d293a);font-size:.875rem;font-weight:500}.booking-info-text.sc-ir-invoice span.sc-ir-invoice,.room-info-text.sc-ir-invoice span.sc-ir-invoice{color:var(--gray-600,#344055);font-weight:400}.room-info.sc-ir-invoice,section.sc-ir-invoice{padding:1rem 0}.booking-details-header.sc-ir-invoice{font-size:1.1rem;font-weight:600}.room-type.sc-ir-invoice{font-size:1rem;font-weight:600;margin-bottom:.3rem}p.sc-ir-invoice{font-size:.875rem}.payment_amount.sc-ir-invoice{font-size:1rem;font-weight:500}.mapLink.sc-ir-invoice{background:#000;overflow:hidden;position:relative;width:100%}.mapLink.sc-ir-invoice img.sc-ir-invoice{-o-object-fit:cover;object-fit:cover}.mapLink.sc-ir-invoice:hover img.sc-ir-invoice{filter:brightness(.9)}.invoice-container.sc-ir-invoice{padding-left:1rem;padding-right:1rem;text-align:start}.property_info.sc-ir-invoice{background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),1rem);display:none;height:-moz-fit-content;height:fit-content;width:500px}.property_img.sc-ir-invoice{border-top-left-radius:min(var(--radius,.5rem),1rem);border-top-right-radius:min(var(--radius,.5rem),1rem)}.contact-info.sc-ir-invoice{align-items:center;display:flex;font-size:.875rem;gap:.25rem;justify-content:center;padding:1rem}.contact-link.sc-ir-invoice{color:inherit;text-decoration:none;transition:color .2s}.contact-link.sc-ir-invoice:hover{color:#334155;text-decoration:underline}a.sc-ir-invoice:hover{text-decoration:none}@media (min-width:768px){.mapLink.sc-ir-invoice img.sc-ir-invoice{height:200px;width:100%}.property_info.sc-ir-invoice{display:flex;flex-direction:column}}@media (min-width:1280px){.invoice-container.sc-ir-invoice{padding-left:0;padding-right:0}}.static.sc-ir-invoice{position:static}.sticky.sc-ir-invoice{position:sticky}.top-0.sc-ir-invoice{top:0}.z-20.sc-ir-invoice{z-index:20}.m-0.sc-ir-invoice{margin:0}.mx-auto.sc-ir-invoice{margin-left:auto;margin-right:auto}.w-full.sc-ir-invoice{width:100%}.max-w-6xl.sc-ir-invoice{max-width:72rem}.flex-1.sc-ir-invoice{flex:1 1 0%}.flex-col.sc-ir-invoice{flex-direction:column}.space-y-5.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-invoice{padding:0}.px-4.sc-ir-invoice{padding-left:1rem;padding-right:1rem}.shadow.sc-ir-invoice{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6.sc-ir-invoice{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5.sc-ir-invoice{margin-bottom:.625rem}.h-24.sc-ir-invoice{height:6rem}.h-3.sc-ir-invoice{height:.75rem}.h-4.sc-ir-invoice{height:1rem}.w-60.sc-ir-invoice{width:15rem}.items-center.sc-ir-invoice{align-items:center}.justify-between.sc-ir-invoice{justify-content:space-between}.space-y-1\\.5.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md.sc-ir-invoice{border-radius:.375rem}.py-1.sc-ir-invoice{padding-bottom:.25rem;padding-top:.25rem}.py-2.sc-ir-invoice{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5.sc-ir-invoice{padding-bottom:.625rem;padding-top:.625rem}.py-3.sc-ir-invoice{padding-bottom:.75rem;padding-top:.75rem}.text-lg.sc-ir-invoice{font-size:1.125rem;line-height:1.75rem}.text-xs.sc-ir-invoice{font-size:.75rem;line-height:1rem}.font-medium.sc-ir-invoice{font-weight:500}.font-semibold.sc-ir-invoice{font-weight:600}.text-gray-500.sc-ir-invoice{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.outline.sc-ir-invoice{outline-style:solid}.h-full.sc-ir-invoice{height:100%}.grid.sc-ir-invoice{display:grid}.aspect-\\[16\\/9\\].sc-ir-invoice{aspect-ratio:16/9}.h-28.sc-ir-invoice{height:7rem}.h-44.sc-ir-invoice{height:11rem}.h-6.sc-ir-invoice{height:1.5rem}.h-60.sc-ir-invoice{height:15rem}.h-8.sc-ir-invoice{height:2rem}.w-1\\/2.sc-ir-invoice{width:50%}.w-24.sc-ir-invoice{width:6rem}.w-3\\/4.sc-ir-invoice{width:75%}.w-3\\/5.sc-ir-invoice{width:60%}.w-40.sc-ir-invoice{width:10rem}.w-48.sc-ir-invoice{width:12rem}.w-80.sc-ir-invoice{width:20rem}.gap-2.sc-ir-invoice{gap:.5rem}.gap-4.sc-ir-invoice{gap:1rem}.space-x-2.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4.sc-ir-invoice{padding:1rem}@media (min-width:768px){.md\\:col-span-2.sc-ir-invoice{grid-column:span 2/span 2}.md\\:grid.sc-ir-invoice{display:grid}.md\\:h-20.sc-ir-invoice{height:5rem}.md\\:grid-cols-3.sc-ir-invoice{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row.sc-ir-invoice{flex-direction:row}}@media (min-width:1024px){.lg\\:block.sc-ir-invoice{display:block}.lg\\:grid-cols-2.sc-ir-invoice{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6.sc-ir-invoice{padding:1.5rem}}.size-6.sc-ir-invoice{height:1.5rem;width:1.5rem}.pb-2.sc-ir-invoice{padding-bottom:.5rem}.text-red-500.sc-ir-invoice{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.top-\\[20\\%\\].sc-ir-invoice{top:20%}.z-50.sc-ir-invoice{z-index:50}.mt-1\\.5.sc-ir-invoice{margin-top:.375rem}.aspect-\\[1\\/1\\].sc-ir-invoice{aspect-ratio:1/1}.max-h-32.sc-ir-invoice{max-height:8rem}.flex-wrap.sc-ir-invoice{flex-wrap:wrap}.justify-center.sc-ir-invoice{justify-content:center}.gap-1.sc-ir-invoice{gap:.25rem}.gap-16.sc-ir-invoice{gap:4rem}.space-y-2.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-invoice{object-fit:cover}.text-center.sc-ir-invoice{text-align:center}.text-sm.sc-ir-invoice{font-size:.875rem;line-height:1.25rem}.text-xl.sc-ir-invoice{font-size:1.25rem;line-height:1.75rem}.text-gray-700.sc-ir-invoice{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-600.sc-ir-invoice{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit.sc-ir-invoice{width:fit-content}.md\\:items-center.sc-ir-invoice{align-items:center}.md\\:text-right.sc-ir-invoice{text-align:right}}.absolute.sc-ir-invoice{position:absolute}.mb-2.sc-ir-invoice{margin-bottom:.5rem}.h-10.sc-ir-invoice{height:2.5rem}.h-12.sc-ir-invoice{height:3rem}.h-14.sc-ir-invoice{height:3.5rem}.h-64.sc-ir-invoice{height:16rem}.h-screen.sc-ir-invoice{height:100vh}.min-h-screen.sc-ir-invoice{min-height:100vh}.w-56.sc-ir-invoice{width:14rem}.max-w-md.sc-ir-invoice{max-width:28rem}.animate-pulse.sc-ir-invoice{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center.sc-ir-invoice{place-content:center}.self-center.sc-ir-invoice{align-self:center}.rounded-full.sc-ir-invoice{border-radius:9999px}.bg-gray-200.sc-ir-invoice{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.py-4.sc-ir-invoice{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden.sc-ir-invoice{display:none}}.sr-only.sc-ir-invoice{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}@media (min-width:1024px){.lg\\:size-7.sc-ir-invoice{height:1.75rem;width:1.75rem}}.table.sc-ir-invoice{display:table}.capitalize.sc-ir-invoice{text-transform:capitalize}.text-end.sc-ir-invoice{text-align:end}.text-gray-400.sc-ir-invoice{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.bottom-2.sc-ir-invoice{bottom:.5rem}.z-40.sc-ir-invoice{z-index:40}.mb-5.sc-ir-invoice{margin-bottom:1.25rem}.mt-14.sc-ir-invoice{margin-top:3.5rem}.w-auto.sc-ir-invoice{width:auto}.justify-end.sc-ir-invoice{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-invoice{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-invoice{padding-left:1.5rem;padding-right:1.5rem}.py-8.sc-ir-invoice{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-invoice{padding-bottom:1.25rem}.text-base.sc-ir-invoice{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-invoice{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-invoice{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-invoice{width:15rem}.lg\\:gap-10.sc-ir-invoice{gap:2.5rem}.lg\\:text-2xl.sc-ir-invoice{font-size:1.5rem;line-height:2rem}}.gap-2\\.5.sc-ir-invoice{gap:.625rem}.space-y-8.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-invoice{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-invoice{position:sticky}.md\\:top-20.sc-ir-invoice{top:5rem}.md\\:flex.sc-ir-invoice{display:flex}.md\\:max-w-4xl.sc-ir-invoice{max-width:56rem}.md\\:max-w-md.sc-ir-invoice{max-width:28rem}.md\\:items-start.sc-ir-invoice{align-items:flex-start}.md\\:justify-end.sc-ir-invoice{justify-content:flex-end}}.h-5.sc-ir-invoice{height:1.25rem}.w-5.sc-ir-invoice{width:1.25rem}.fixed.sc-ir-invoice{position:fixed}.mx-1.sc-ir-invoice{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-invoice{justify-content:flex-start}.gap-1\\.5.sc-ir-invoice{gap:.375rem}@media (min-width:768px){.md\\:block.sc-ir-invoice{display:block}}.visible.sc-ir-invoice{visibility:visible}.mb-4.sc-ir-invoice{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-invoice{max-height:83vh}.overflow-y-auto.sc-ir-invoice{overflow-y:auto}.font-normal.sc-ir-invoice{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-invoice{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-invoice{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-invoice{padding:1.5rem}}.right-0.sc-ir-invoice{right:0}.right-4.sc-ir-invoice{right:1rem}.top-4.sc-ir-invoice{top:1rem}.mt-8.sc-ir-invoice{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-invoice{min-width:70%}.max-w-full.sc-ir-invoice{max-width:100%}.translate-x-0.sc-ir-invoice{--tw-translate-x:0px}.translate-x-0.sc-ir-invoice,.translate-x-\\[100\\%\\].sc-ir-invoice{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-invoice{--tw-translate-x:100%}.bg-white.sc-ir-invoice{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-invoice,.shadow-md.sc-ir-invoice{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-invoice{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-invoice{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-invoice{transition-duration:.3s}.ease-in-out.sc-ir-invoice{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-invoice{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-invoice,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-invoice{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-invoice{--tw-translate-x:0px}.pointer-events-none.sc-ir-invoice{pointer-events:none}.inset-y-0.sc-ir-invoice{bottom:0;top:0}.end-1.sc-ir-invoice{inset-inline-end:.25rem}.start-2.sc-ir-invoice{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-invoice{padding-left:.3rem;padding-right:.3rem}.ps-9.sc-ir-invoice{padding-inline-start:2.25rem}.pt-1.sc-ir-invoice{padding-top:.25rem}.text-\\[\\#667085\\].sc-ir-invoice{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.resize.sc-ir-invoice{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-invoice{display:block}}.max-w-xs.sc-ir-invoice{max-width:20rem}.rounded-lg.sc-ir-invoice{border-radius:.5rem}.px-3.sc-ir-invoice{padding-left:.75rem;padding-right:.75rem}.size-4.sc-ir-invoice{height:1rem;width:1rem}.gap-3.sc-ir-invoice{gap:.75rem}@media (min-width:640px){.sm\\:hidden.sc-ir-invoice{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50.sc-ir-invoice{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.size-\\[1\\.125rem\\].sc-ir-invoice{height:1.125rem;width:1.125rem}.h-\\[14px\\].sc-ir-invoice{height:14px}.h-\\[3rem\\].sc-ir-invoice{height:3rem}.w-\\[12\\.25px\\].sc-ir-invoice{width:12.25px}.gap-0\\.5.sc-ir-invoice{gap:.125rem}.border-0.sc-ir-invoice{border-width:0}.pt-14.sc-ir-invoice{padding-top:3.5rem}.lowercase.sc-ir-invoice{text-transform:lowercase}.shadow.sc-ir-invoice,.shadow-none.sc-ir-invoice{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-invoice{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-invoice{width:auto}.sm\\:w-fit.sc-ir-invoice{width:fit-content}.sm\\:border.sc-ir-invoice{border-width:1px}.sm\\:pt-4.sc-ir-invoice{padding-top:1rem}.sm\\:shadow-sm.sc-ir-invoice{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.ml-1.sc-ir-invoice{margin-left:.25rem}.line-clamp-3.sc-ir-invoice{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-invoice{display:inline-flex}.h-16.sc-ir-invoice{height:4rem}.max-w-\\[60\\%\\].sc-ir-invoice{max-width:60%}.flex-row.sc-ir-invoice{flex-direction:row}.space-y-14.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100.sc-ir-invoice{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-invoice{padding:1.5rem}.pl-0.sc-ir-invoice{padding-left:0}.pt-0\\.5.sc-ir-invoice{padding-top:.125rem}.text-right.sc-ir-invoice{text-align:right}.text-\\[var\\(--ir-green\\)\\].sc-ir-invoice{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full.sc-ir-invoice{width:100%}.md\\:max-w-full.sc-ir-invoice{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-invoice{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-invoice{font-size:1.25rem;line-height:1.75rem}}.mx-2.sc-ir-invoice{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5.sc-ir-invoice{margin-top:.625rem}.rounded-xl.sc-ir-invoice{border-radius:.75rem}.pt-2.sc-ir-invoice{padding-top:.5rem}.leading-none.sc-ir-invoice{line-height:1}.tracking-tight.sc-ir-invoice{letter-spacing:-.025em}.h-80.sc-ir-invoice{height:20rem}.h-\\[80vh\\].sc-ir-invoice{height:80vh}.overflow-x-auto.sc-ir-invoice{overflow-x:auto}.overflow-x-hidden.sc-ir-invoice{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-invoice{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-invoice{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell.sc-ir-invoice{display:table-cell}}@media (min-width:640px){.sm\\:p-6.sc-ir-invoice{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-invoice{flex-direction:row-reverse}}.mt-4.sc-ir-invoice{margin-top:1rem}.h-\\[1px\\].sc-ir-invoice{height:1px}.min-w-\\[1rem\\].sc-ir-invoice{min-width:1rem}.cursor-pointer.sc-ir-invoice{cursor:pointer}.space-y-1.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-invoice{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300.sc-ir-invoice{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-invoice{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-invoice,.bg-white.sc-ir-invoice{--tw-bg-opacity:1}.p-2.sc-ir-invoice{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm.sc-ir-invoice{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-invoice{aspect-ratio:16/9}}.gap-12.sc-ir-invoice{gap:3rem}.gap-8.sc-ir-invoice{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-invoice{max-width:24rem}}.text-start.sc-ir-invoice{text-align:start}.size-3.sc-ir-invoice{height:.75rem;width:.75rem}.w-72.sc-ir-invoice{width:18rem}.w-fit.sc-ir-invoice{width:fit-content}@media (min-width:640px){.sm\\:w-full.sc-ir-invoice{width:100%}}@media (min-width:768px){.md\\:p-4.sc-ir-invoice{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit.sc-ir-invoice{width:fit-content}}.col-span-6.sc-ir-invoice{grid-column:span 6/span 6}.w-12.sc-ir-invoice{width:3rem}.place-items-center.sc-ir-invoice{place-items:center}.pt-2.sc-ir-invoice,.py-2.sc-ir-invoice{padding-top:.5rem}.pt-4.sc-ir-invoice{padding-top:1rem}.text-slate-900.sc-ir-invoice{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0.sc-ir-invoice{padding:0}}.-bottom-0.sc-ir-invoice{bottom:0}.z-0.sc-ir-invoice{z-index:0}.z-10.sc-ir-invoice{z-index:10}.mb-1.sc-ir-invoice{margin-bottom:.25rem}.size-10.sc-ir-invoice{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\].sc-ir-invoice{max-height:80vh}.items-end.sc-ir-invoice{align-items:flex-end}.overflow-hidden.sc-ir-invoice{overflow:hidden}.bg-white\\/80.sc-ir-invoice{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-invoice{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-invoice,.py-4.sc-ir-invoice{padding-bottom:1rem}.pt-0.sc-ir-invoice{padding-top:0}.ordinal.sc-ir-invoice{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-invoice{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-invoice:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-invoice{max-height:200px}.md\\:w-auto.sc-ir-invoice{width:auto}.md\\:pt-0.sc-ir-invoice{padding-top:0}.md\\:pt-4.sc-ir-invoice{padding-top:1rem}.md\\:text-xl.sc-ir-invoice{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-invoice{max-height:250px}}.ml-4.sc-ir-invoice{margin-left:1rem}.grid-cols-2.sc-ir-invoice{grid-template-columns:repeat(2,minmax(0,1fr))}.gap-6.sc-ir-invoice{gap:1.5rem}.space-y-3.sc-ir-invoice>.sc-ir-invoice:not([hidden])~.sc-ir-invoice:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-invoice{padding-bottom:1.5rem}.text-gray-800.sc-ir-invoice{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-invoice{flex-direction:row}.sm\\:items-center.sc-ir-invoice{align-items:center}.sm\\:text-sm.sc-ir-invoice{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-invoice{grid-template-columns:repeat(3,minmax(0,1fr))}}.h-72.sc-ir-invoice{height:18rem}.col-span-2.sc-ir-invoice{grid-column:span 2/span 2}.mb-6.sc-ir-invoice{margin-bottom:1.5rem}.mt-6.sc-ir-invoice{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-invoice{min-height:80vh}.max-w-xl.sc-ir-invoice{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2.sc-ir-invoice{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-invoice{color:hsl(var(--brand-600))}.size-\\[18px\\].sc-ir-invoice{height:18px;width:18px}.text-slate-500.sc-ir-invoice{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-invoice{padding:1rem}}.border-solid.sc-ir-invoice{border-style:solid}.w-\\[45\\%\\].sc-ir-invoice{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-invoice{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-invoice{color:var(--gray-500)}.h-px.sc-ir-invoice{height:1px}.w-32.sc-ir-invoice{width:8rem}.w-44.sc-ir-invoice{width:11rem}.w-52.sc-ir-invoice{width:13rem}.w-64.sc-ir-invoice{width:16rem}";
const IrInvoiceStyle0 = irInvoiceCss;

const IrInvoice = /*@__PURE__*/ proxyCustomElement(class IrInvoice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.propertyService = new PropertyService();
        this.commonService = new CommonService();
        this.authService = new AuthService();
        this.paymentService = new PaymentService();
        this.bookingListingAppService = new BookingListingAppService();
        this.payment_option = null;
        this.amount = null;
        this.email = undefined;
        this.propertyId = undefined;
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.language = undefined;
        this.bookingNbr = undefined;
        this.status = 1;
        this.perma_link = null;
        this.aName = null;
        this.headerShown = true;
        this.footerShown = true;
        this.headerMessageShown = true;
        this.locationShown = true;
        this.be = false;
        this.version = '2.0';
        this.booking = undefined;
        this.token = undefined;
        this.isAuthenticated = false;
        this.isLoading = false;
        this.cancelation_message = null;
        this.guarantee_message = null;
        this.cancelationMessage = undefined;
        this.amountToBePayed = undefined;
        this.cancelation_policies = [];
    }
    async componentWillLoad() {
        if (!this.baseUrl) {
            throw new Error('Missing base url');
        }
        axios.defaults.baseURL = this.baseUrl;
        axios.defaults.withCredentials = true;
        this.isLoading = true;
        if (!this.be) {
            getUserPrefernce(this.language);
        }
        const isAuthenticated = this.commonService.checkUserAuthState();
        console.log(isAuthenticated);
        if (isAuthenticated) {
            this.token = isAuthenticated.token;
            this.isAuthenticated = true;
        }
        else {
            this.token = await this.commonService.getBEToken();
        }
        this.init();
        this.fetchData();
    }
    detectPaymentOrigin() {
        var _a, _b;
        if (!this.booking.extras) {
            return null;
        }
        const code = (_a = this.booking.extras.find(e => e.key === 'payment_code')) === null || _a === void 0 ? void 0 : _a.value;
        if (!code) {
            return null;
        }
        return (_b = app_store.property.allowed_payment_methods.find(apm => apm.code === code)) !== null && _b !== void 0 ? _b : null;
    }
    async handleBookingNumberChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.booking = await this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language: this.language || app_store.userPreferences.language_id, currency: null }, true);
        }
    }
    async init() {
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
        this.authService.setToken(this.token);
        this.paymentService.setToken(this.token);
        app_store.app_data.token = this.token;
    }
    async fetchData(language, resetLanguage) {
        var _a;
        if (language === void 0) {
            language = ((_a = this.language) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || app_store.userPreferences.language_id;
        }
        if (resetLanguage === void 0) {
            resetLanguage = false;
        }
        if (!this.isAuthenticated) {
            this.token = await this.authService.login({ option: 'direct', params: { email: this.email, booking_nbr: this.bookingNbr } }, false);
            this.init();
        }
        const requests = [this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language, currency: null })];
        if (!this.be || resetLanguage) {
            requests.push(this.commonService.getExposedLanguage());
            requests.push(this.propertyService.getExposedProperty({
                id: this.propertyId,
                language,
                aname: this.aName,
                perma_link: this.perma_link,
            }));
        }
        const results = await Promise.all(requests);
        this.booking = results[0];
        this.payment_option = this.detectPaymentOrigin();
        const book_date = new Date(this.booking.booked_on.date);
        book_date.setHours(this.booking.booked_on.hour + 1);
        book_date.setMinutes(this.booking.booked_on.minute);
        await this.setAmountAndCancelationPolicy();
        this.isLoading = false;
    }
    async openPrivacyPolicy(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.privacyPolicyRef) {
            this.privacyPolicyRef.openModal();
        }
    }
    async handleLanguageChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.warn('request fetchData');
        this.fetchData(e.detail, true);
    }
    async setAmountAndCancelationPolicy() {
        if (this.amount || dateFns.isBefore(new Date(this.booking.to_date), new Date())) {
            return;
        }
        const [bookings_by_amount, newPrepayment] = await Promise.all([
            this.paymentService.getBookingPrepaymentAmount(this.booking),
            await this.paymentService.GetExposedApplicablePolicies({
                book_date: new Date(this.booking.booked_on.date),
                token: this.token,
                params: {
                    booking_nbr: this.bookingNbr,
                    property_id: this.booking.property.id,
                    room_type_id: 0,
                    rate_plan_id: 0,
                    currency_id: this.booking.currency.id,
                    language: this.language || app_store.userPreferences.language_id,
                },
            }),
        ]);
        const { amount, cancelation_message, guarantee_message, cancelation_policies } = bookings_by_amount;
        this.cancelation_policies = cancelation_policies;
        this.cancelation_message = cancelation_message;
        this.guarantee_message = guarantee_message;
        this.amount = amount;
        let cancelation = null;
        let guarantee = null;
        const { message } = await this.paymentService.fetchCancelationMessage({ data: newPrepayment.data });
        this.cancelationMessage = message;
        const cancelationBrackets = newPrepayment.data.find(t => t.type === 'cancelation');
        if (cancelationBrackets === null || cancelationBrackets === void 0 ? void 0 : cancelationBrackets.brackets) {
            cancelation = this.paymentService.findClosestDate(cancelationBrackets === null || cancelationBrackets === void 0 ? void 0 : cancelationBrackets.brackets);
        }
        const guaranteeBrackets = newPrepayment.data.find(t => t.type === 'guarantee');
        if (guaranteeBrackets === null || guaranteeBrackets === void 0 ? void 0 : guaranteeBrackets.brackets) {
            guarantee = this.paymentService.findClosestDate(guaranteeBrackets === null || guaranteeBrackets === void 0 ? void 0 : guaranteeBrackets.brackets);
        }
        if (guarantee && cancelation) {
            console.log(guarantee, cancelation);
            if (dateFns.isBefore(new Date(guarantee.due_on), new Date(cancelation.due_on))) {
                this.amountToBePayed = cancelation.gross_amount;
            }
        }
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(this.booking.from_date), new Date(this.booking.to_date));
        const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
        const total_rooms = this.booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    getPropertyEmail() {
        var _a, _b;
        const { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        if (!email) {
            return null;
        }
        const subject = `Ref Booking#${this.bookingNbr}`;
        const encodedSubject = encodeURIComponent(subject);
        return `mailto:${email}?subject=${encodedSubject}`;
    }
    renderPaymentText(paymentOption) {
        var _a, _b, _c, _d;
        if (paymentOption.is_payment_gateway) {
            return (h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_YouHavePaid, " ", h("span", null, formatAmount(this.amount, this.booking.currency.code))));
        }
        if (paymentOption.code === '005') {
            return (h("div", null, h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_DueAmountNow, " ", h("span", null, formatAmount(this.booking.financial.due_amount, this.booking.currency.code))), h("p", { class: "mt-1.5 text-xs text-gray-700", innerHTML: ((_b = (_a = paymentOption.localizables) === null || _a === void 0 ? void 0 : _a.find(d => d.language.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase())) === null || _b === void 0 ? void 0 : _b.description) ||
                    ((_d = (_c = paymentOption.localizables) === null || _c === void 0 ? void 0 : _c.find(d => d.language.code.toLowerCase() === 'en')) === null || _d === void 0 ? void 0 : _d.description) })));
        }
        return (h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_YourCardWillBeCharged, " ", h("span", null, formatAmount(this.booking.financial.gross_total, this.booking.currency.code))));
    }
    async processPayment() {
        var _a;
        const paymentCode = this.booking.extras.find(e => e.key === 'payment_code');
        if (!paymentCode) {
            console.error('missing paymentcode');
            return;
        }
        const prePaymentAmount = this.booking.extras.find(e => e.key === 'prepayment_amount');
        if (!prePaymentAmount) {
            console.error('missing prepayment amount');
            return;
        }
        const paymentMethod = app_store.property.allowed_payment_methods.find(apm => apm.code === paymentCode.value);
        if (!paymentMethod) {
            console.error('Invalid payment method');
            return;
        }
        if (this.amount || Number(prePaymentAmount.value) > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token: app_store.app_data.token,
                params: {
                    booking_nbr: this.booking.booking_nbr,
                    amount: (_a = Number(this.amount || prePaymentAmount.value)) !== null && _a !== void 0 ? _a : 0,
                    currency_id: this.booking.currency.id,
                    email: this.booking.guest.email,
                    pgw_id: paymentMethod.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => runScriptAndRemove(script),
            });
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        if (!this.booking && !this.isLoading) {
            return null;
        }
        if (this.isLoading) {
            return (h("div", { class: "flex  flex-col gap-4 " }, h(InvoiceSkeleton, null)));
        }
        const google_maps_url = `http://maps.google.com/maps?q=${app_store.property.location.latitude},${app_store.property.location.longitude}`;
        const { cancel } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h(Host, null, h("ir-interceptor", null), h("main", { class: "relative flex w-full flex-col space-y-5" }, this.headerShown && (h("section", { class: "sticky top-0 z-50 m-0  w-full  p-0" }, h("ir-nav", { class: 'm-0 p-0', showBookingCode: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, menuShown: this.be }))), h("section", { class: `flex-1 ${this.be ? '' : 'invoice-container mx-auto w-full max-w-6xl'}` }, this.headerMessageShown && dateFns.isBefore(new Date(), new Date(this.booking.to_date)) ? (h("div", { class: 'invoice-container' }, h("p", { class: `flex items-center gap-4 text-xl font-medium ${this.status === 1 ? 'text-green-600' : 'text-red-500'} ${this.be ? '' : ''}` }, h("ir-icons", { name: this.status === 1 ? 'check' : 'xmark' }), h("span", null, " ", this.status === 1 ? localizedWords.entries.Lcz_YourBookingIsConfirmed : localizedWords.entries.Lcz_YourPaymentIsUnsuccesful)), this.status === 1 && h("p", null, localizedWords.entries.Lcz_AnEmailHasBeenSent.replace('%1', this.booking.guest.email)))) : (h("div", { class: 'invoice-container' }, h("p", { class: 'text-xl font-medium ' }, localizedWords.entries.Lcz_ThisBookingIs.replace('%1', this.booking.status.description)))), h("div", { class: `flex  ${this.locationShown ? 'w-full' : 'w-full'} gap-16 ` }, h("div", { class: `invoice-container ${this.locationShown ? 'w-full' : 'w-full'}` }, h("section", { class: "flex flex-col gap-4 md:flex-row md:items-center" }, this.status === 1 ? (h("a", { href: google_maps_url, target: "_blank", class: cn(`button-outline`, 'flex items-center justify-center'), "data-size": "sm" }, localizedWords.entries.Lcz_GetDirections)) : (this.payment_option.is_payment_gateway && (h("ir-button", { variants: "outline", label: localizedWords.entries.Lcz_RetryPayment, onButtonClick: () => this.processPayment() }))), h("a", { href: this.getPropertyEmail(), target: "_blank", class: cn(`button-outline`, 'flex items-center justify-center'), "data-size": "sm" }, localizedWords.entries.Lcz_MessageProperty), cancel.show && (h("ir-button", { class: 'w-full md:w-fit', variants: "outline", label: localizedWords.entries.Lcz_CancelBooking, onButtonClick: async () => {
                this.bookingCancelation.openDialog();
            } }))), h("section", { class: "booking-info" }, h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookingReference, " ", h("span", null, this.booking.booking_nbr)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookedBy, ' ', h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckIn, ": ", h("span", null, dateFns.format(this.booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_From, " ", (_d = app_store.property) === null || _d === void 0 ? void 0 :
            _d.time_constraints.check_in_from)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckOut, ": ", h("span", null, dateFns.format(this.booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_Before, " ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_out_till)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_ArrivalTime, " ", h("span", null, this.booking.arrival.description)), this.booking.remark && (h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_SpecialRequest, ": ", h("span", null, this.booking.remark)))), h("section", { class: "booking-details space-y-2" }, h("div", { class: "flex flex-wrap items-center justify-between gap-1 text-center md:text-right" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "bed" }), h("h3", { class: "booking-details-header" }, this.renderBookingDetailHeader())), h("p", { class: "text-xs" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.tax_statement)), h("div", null, (_g = this.booking.rooms) === null || _g === void 0 ? void 0 : _g.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "flex w-full items-center justify-between" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "text-lg font-medium text-green-600" }, " ", formatAmount(room.gross_total, this.booking.currency.code))), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_GuestName, ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_MealPlan, ' ', h("span", null, room.rateplan.name)), this.cancelation_message && h("p", { class: "room-info-text", innerHTML: `${localizedWords.entries.Lcz_Cancelation}: ${this.cancelation_message}` }), this.guarantee_message && h("p", { class: "room-info-text", innerHTML: `${localizedWords.entries.Lcz_Guarantee}: ${this.guarantee_message}` })))))), this.booking.pickup_info && (h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "taxi" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_Pickup)), h("div", { class: "room-info" }, h("div", { class: "flex w-full items-center justify-between" }, h("p", { class: "flex items-center gap-4" }, h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_Date}:`, " ", h("span", null, dateFns.format(new Date(this.booking.pickup_info.date), 'eee, dd MMM yyyy'))), h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_Time}:`, ' ', h("span", null, this.booking.pickup_info.hour, ":", this.booking.pickup_info.minute))), h("p", { class: "text-lg font-medium text-green-600" }, formatAmount(this.booking.pickup_info.total, this.booking.pickup_info.currency.code))), h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_FlightDetails}:`, " ", h("span", null, this.booking.pickup_info.details)), h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_NoOfVehicles}:`, " ", h("span", null, this.booking.pickup_info.nbr_of_units)), h("p", { class: 'room-info-text text-xs' }, app_store.property.pickup_service.pickup_instruction.description, app_store.property.pickup_service.pickup_cancelation_prepayment.description)))), h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "credit_card" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_PaymentDetails)), h("p", { class: "total-payment" }, localizedWords.entries.Lcz_Total, ' ', h("span", { class: "payment_amount text-green-600" }, formatAmount(this.booking.financial.gross_total, this.booking.currency.code))), this.payment_option && this.renderPaymentText(this.payment_option)), h("section", { class: "space-y-2" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_ImportantInformation)), h("p", { innerHTML: app_store.property.description.important_info })), h("section", { class: 'space-y-2' }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "car" }), h("p", null, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "pets" }), h("p", null, (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title)), h("div", { class: "flex items-center gap-4 " }, h("ir-icons", { name: "bed" }), h("p", null, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.baby_cot_offering.title)))), this.locationShown && (h("div", { class: "property_info sticky top-[20%]" }, ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.space_theme.background_image) && (h("div", { class: "lg:aspect9-[16/9] aspect-[1/1] max-h-32 w-full" }, h("img", { loading: "lazy", class: "property_img h-full w-full object-cover", src: ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.images.length) === 0 ? app_store.property.space_theme.background_image : (_p = app_store.property) === null || _p === void 0 ? void 0 : _p.images[0].url, alt: ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.images.length) === 0 ? app_store.property.name : app_store.property.images[0].tooltip }))), h("a", { class: "mapLink", target: "_blank", href: google_maps_url }, h("img", { src: `https://maps.googleapis.com/maps/api/staticmap?center=${((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.location.latitude) || 34.022},${((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.location.longitude) || 35.628}&zoom=15&size=1024x768&maptype=roadmap&markers=color:red%7Clabel:${app_store.property.name}%7C34.022,35.628&key=AIzaSyCJ5P4SraJdZzcBi9Ue16hyg_iWJv-aHpk`, loading: "lazy" })), h("div", { class: "contact-info" }, h("span", null, h("label", { class: "m-0 p-0", htmlFor: "phone" }, localizedWords.entries.Lcz_Phone)), h("a", { id: "phone", class: "contact-link p-0", href: `tel:${(_t = app_store.property) === null || _t === void 0 ? void 0 : _t.phone}` }, ((_v = (_u = app_store.property) === null || _u === void 0 ? void 0 : _u.country) === null || _v === void 0 ? void 0 : _v.phone_prefix) || '', " ", (_w = app_store.property) === null || _w === void 0 ? void 0 :
            _w.phone)))))), this.footerShown && h("ir-footer", { version: this.version }), this.footerShown && h("ir-privacy-policy", { hideTrigger: true, ref: el => (this.privacyPolicyRef = el) }), h("ir-booking-cancelation", { cancelation_policies: this.cancelation_policies, ref: el => (this.bookingCancelation = el), booking_nbr: (_x = this.booking) === null || _x === void 0 ? void 0 : _x.booking_nbr, currency: { code: this.booking.currency.code, id: this.booking.currency.id }, cancelation: this.cancelationMessage || ((_y = this.booking) === null || _y === void 0 ? void 0 : _y.rooms[0].rateplan.cancelation) }))));
    }
    static get watchers() { return {
        "bookingNbr": ["handleBookingNumberChange"]
    }; }
    static get style() { return IrInvoiceStyle0; }
}, [2, "ir-invoice", {
        "email": [1025],
        "propertyId": [2, "property-id"],
        "baseUrl": [1, "base-url"],
        "language": [1],
        "bookingNbr": [1, "booking-nbr"],
        "status": [2],
        "perma_link": [1],
        "aName": [1, "a-name"],
        "headerShown": [4, "header-shown"],
        "footerShown": [4, "footer-shown"],
        "headerMessageShown": [4, "header-message-shown"],
        "locationShown": [4, "location-shown"],
        "be": [4],
        "version": [1],
        "booking": [32],
        "token": [32],
        "isAuthenticated": [32],
        "isLoading": [32],
        "cancelation_message": [32],
        "guarantee_message": [32],
        "cancelationMessage": [32],
        "amountToBePayed": [32],
        "cancelation_policies": [32]
    }, [[0, "openPrivacyPolicy", "openPrivacyPolicy"], [16, "languageChanged", "handleLanguageChanged"]], {
        "bookingNbr": ["handleBookingNumberChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-invoice", "ir-alert-dialog", "ir-auth", "ir-badge-group", "ir-booking-cancelation", "ir-booking-code", "ir-button", "ir-checkbox", "ir-dialog", "ir-footer", "ir-google-maps", "ir-icons", "ir-input", "ir-interceptor", "ir-language-picker", "ir-menu", "ir-modal", "ir-nav", "ir-phone-input", "ir-privacy-policy", "ir-select", "ir-sheet", "ir-signin", "ir-signup", "ir-skeleton", "ir-user-avatar", "ir-user-profile"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInvoice);
            }
            break;
        case "ir-alert-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-booking-cancelation":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-google-maps":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-nav":
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

export { IrInvoice as I, defineCustomElement as d };

//# sourceMappingURL=ir-invoice2.js.map