import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PickupFormData, d as defineCustomElement$7 } from './ir-pickup2.js';
import { I as IrUserFormData, d as defineCustomElement$1 } from './ir-user-form2.js';
import { A as AuthService } from './auth.service.js';
import { P as PaymentService } from './payment.service.js';
import { P as PropertyService } from './property.service.js';
import { a as app_store } from './app.store.js';
import { v as validateBooking, b as booking_store, c as calculateTotalCost } from './booking.js';
import { c as checkout_store } from './checkout.store.js';
import { Z as ZodError } from './index4.js';
import { d as defineCustomElement$i } from './ir-booking-details2.js';
import { d as defineCustomElement$h } from './ir-booking-summary2.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-calendar2.js';
import { d as defineCustomElement$e } from './ir-checkbox2.js';
import { d as defineCustomElement$d } from './ir-credit-card-input2.js';
import { d as defineCustomElement$c } from './ir-dialog2.js';
import { d as defineCustomElement$b } from './ir-icons2.js';
import { d as defineCustomElement$a } from './ir-input2.js';
import { d as defineCustomElement$9 } from './ir-payment-view2.js';
import { d as defineCustomElement$8 } from './ir-phone-input2.js';
import { d as defineCustomElement$6 } from './ir-popover2.js';
import { d as defineCustomElement$5 } from './ir-privacy-policy2.js';
import { d as defineCustomElement$4 } from './ir-quick-auth2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-textarea2.js';

const irCheckoutPageCss = "*.sc-ir-checkout-page,.sc-ir-checkout-page:after,.sc-ir-checkout-page:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-checkout-page:after,.sc-ir-checkout-page:before{--tw-content:\"\"}.sc-ir-checkout-page-h,html.sc-ir-checkout-page{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-checkout-page{line-height:inherit;margin:0}hr.sc-ir-checkout-page{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-checkout-page:where([title]){text-decoration:underline dotted}h1.sc-ir-checkout-page,h2.sc-ir-checkout-page,h3.sc-ir-checkout-page,h4.sc-ir-checkout-page,h5.sc-ir-checkout-page,h6.sc-ir-checkout-page{font-size:inherit;font-weight:inherit}a.sc-ir-checkout-page{color:inherit;text-decoration:inherit}b.sc-ir-checkout-page,strong.sc-ir-checkout-page{font-weight:bolder}code.sc-ir-checkout-page,kbd.sc-ir-checkout-page,pre.sc-ir-checkout-page,samp.sc-ir-checkout-page{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-checkout-page{font-size:80%}sub.sc-ir-checkout-page,sup.sc-ir-checkout-page{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-checkout-page{bottom:-.25em}sup.sc-ir-checkout-page{top:-.5em}table.sc-ir-checkout-page{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-checkout-page,input.sc-ir-checkout-page,optgroup.sc-ir-checkout-page,select.sc-ir-checkout-page,textarea.sc-ir-checkout-page{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-checkout-page,select.sc-ir-checkout-page{text-transform:none}[type=button].sc-ir-checkout-page,[type=reset].sc-ir-checkout-page,[type=submit].sc-ir-checkout-page,button.sc-ir-checkout-page{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-checkout-page:-moz-focusring{outline:auto}.sc-ir-checkout-page:-moz-ui-invalid{box-shadow:none}progress.sc-ir-checkout-page{vertical-align:baseline}.sc-ir-checkout-page::-webkit-inner-spin-button,.sc-ir-checkout-page::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-checkout-page{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-checkout-page::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-checkout-page::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-checkout-page{display:list-item}blockquote.sc-ir-checkout-page,dd.sc-ir-checkout-page,dl.sc-ir-checkout-page,fieldset.sc-ir-checkout-page,figure.sc-ir-checkout-page,h1.sc-ir-checkout-page,h2.sc-ir-checkout-page,h3.sc-ir-checkout-page,h4.sc-ir-checkout-page,h5.sc-ir-checkout-page,h6.sc-ir-checkout-page,hr.sc-ir-checkout-page,p.sc-ir-checkout-page,pre.sc-ir-checkout-page{margin:0}fieldset.sc-ir-checkout-page,legend.sc-ir-checkout-page{padding:0}menu.sc-ir-checkout-page,ol.sc-ir-checkout-page,ul.sc-ir-checkout-page{list-style:none;margin:0;padding:0}dialog.sc-ir-checkout-page{padding:0}textarea.sc-ir-checkout-page{resize:vertical}input.sc-ir-checkout-page::placeholder,textarea.sc-ir-checkout-page::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-checkout-page,button.sc-ir-checkout-page{cursor:pointer}.sc-ir-checkout-page:disabled{cursor:default}audio.sc-ir-checkout-page,canvas.sc-ir-checkout-page,embed.sc-ir-checkout-page,iframe.sc-ir-checkout-page,img.sc-ir-checkout-page,object.sc-ir-checkout-page,svg.sc-ir-checkout-page,video.sc-ir-checkout-page{display:block;vertical-align:middle}img.sc-ir-checkout-page,video.sc-ir-checkout-page{height:auto;max-width:100%}[hidden].sc-ir-checkout-page{display:none}.sc-ir-checkout-page::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-checkout-page{display:block}.sc-ir-checkout-page-h{display:block}.static.sc-ir-checkout-page{position:static}.relative.sc-ir-checkout-page{position:relative}.sticky.sc-ir-checkout-page{position:sticky}.top-0.sc-ir-checkout-page{top:0}.z-50.sc-ir-checkout-page{z-index:50}.m-0.sc-ir-checkout-page{margin:0}.mx-auto.sc-ir-checkout-page{margin-left:auto;margin-right:auto}.flex.sc-ir-checkout-page{display:flex}.w-full.sc-ir-checkout-page{width:100%}.max-w-6xl.sc-ir-checkout-page{max-width:72rem}.flex-1.sc-ir-checkout-page{flex:1 1 0%}.flex-col.sc-ir-checkout-page{flex-direction:column}.space-y-5.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-checkout-page{padding:0}.px-4.sc-ir-checkout-page{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-checkout-page{padding-left:1.5rem;padding-right:1.5rem}}.h-full.sc-ir-checkout-page{height:100%}.shadow.sc-ir-checkout-page{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.top-\\[20\\%\\].sc-ir-checkout-page{top:20%}.aspect-\\[1\\/1\\].sc-ir-checkout-page{aspect-ratio:1/1}.max-h-32.sc-ir-checkout-page{max-height:8rem}.flex-wrap.sc-ir-checkout-page{flex-wrap:wrap}.items-center.sc-ir-checkout-page{align-items:center}.justify-center.sc-ir-checkout-page{justify-content:center}.justify-between.sc-ir-checkout-page{justify-content:space-between}.gap-1.sc-ir-checkout-page{gap:.25rem}.gap-16.sc-ir-checkout-page{gap:4rem}.gap-4.sc-ir-checkout-page{gap:1rem}.space-y-2.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-checkout-page{object-fit:cover}.pt-2.sc-ir-checkout-page{padding-top:.5rem}.text-center.sc-ir-checkout-page{text-align:center}.text-lg.sc-ir-checkout-page{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-checkout-page{font-weight:500}.text-green-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.outline.sc-ir-checkout-page{outline-style:solid}@media (min-width:768px){.md\\:text-right.sc-ir-checkout-page{text-align:right}}.size-4.sc-ir-checkout-page{height:1rem;width:1rem}.bottom-2.sc-ir-checkout-page{bottom:.5rem}.z-40.sc-ir-checkout-page{z-index:40}.mb-5.sc-ir-checkout-page{margin-bottom:1.25rem}.mt-14.sc-ir-checkout-page{margin-top:3.5rem}.w-auto.sc-ir-checkout-page{width:auto}.justify-end.sc-ir-checkout-page{justify-content:flex-end}.rounded-md.sc-ir-checkout-page{border-radius:.375rem}.bg-gray-700\\/80.sc-ir-checkout-page{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-checkout-page{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-checkout-page{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-checkout-page{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-checkout-page{padding-bottom:1.25rem}.text-base.sc-ir-checkout-page{font-size:1rem;line-height:1.5rem}.text-sm.sc-ir-checkout-page{font-size:.875rem;line-height:1.25rem}.text-gray-200.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-checkout-page{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-checkout-page{width:15rem}.lg\\:gap-10.sc-ir-checkout-page{gap:2.5rem}.lg\\:text-2xl.sc-ir-checkout-page{font-size:1.5rem;line-height:2rem}}.sr-only.sc-ir-checkout-page{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table.sc-ir-checkout-page{display:table}.grid.sc-ir-checkout-page{display:grid}.gap-2.sc-ir-checkout-page{gap:.5rem}.gap-2\\.5.sc-ir-checkout-page{gap:.625rem}.space-y-4.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-checkout-page{font-size:1.5rem;line-height:2rem}.font-semibold.sc-ir-checkout-page{font-weight:600}@media (min-width:768px){.md\\:sticky.sc-ir-checkout-page{position:sticky}.md\\:top-20.sc-ir-checkout-page{top:5rem}.md\\:flex.sc-ir-checkout-page{display:flex}.md\\:max-w-4xl.sc-ir-checkout-page{max-width:56rem}.md\\:max-w-md.sc-ir-checkout-page{max-width:28rem}.md\\:flex-row.sc-ir-checkout-page{flex-direction:row}.md\\:items-start.sc-ir-checkout-page{align-items:flex-start}.md\\:justify-end.sc-ir-checkout-page{justify-content:flex-end}}.absolute.sc-ir-checkout-page{position:absolute}.right-3.sc-ir-checkout-page{right:.75rem}.top-3.sc-ir-checkout-page{top:.75rem}@media (min-width:1024px){.lg\\:size-7.sc-ir-checkout-page{height:1.75rem;width:1.75rem}}.h-5.sc-ir-checkout-page{height:1.25rem}.w-5.sc-ir-checkout-page{width:1.25rem}.visible.sc-ir-checkout-page{visibility:visible}.hidden.sc-ir-checkout-page{display:none}.filter.sc-ir-checkout-page{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.mx-1.sc-ir-checkout-page{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-checkout-page{justify-content:flex-start}.resize.sc-ir-checkout-page{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-checkout-page{display:block}}@media (min-width:768px){.md\\:hidden.sc-ir-checkout-page{display:none}}.mb-4.sc-ir-checkout-page{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-checkout-page{max-height:83vh}.overflow-y-auto.sc-ir-checkout-page{overflow-y:auto}.p-4.sc-ir-checkout-page{padding:1rem}.text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-checkout-page{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-checkout-page{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-checkout-page{padding:1.5rem}}.pointer-events-none.sc-ir-checkout-page{pointer-events:none}.inset-y-0.sc-ir-checkout-page{bottom:0;top:0}.end-1.sc-ir-checkout-page{inset-inline-end:.25rem}.start-2.sc-ir-checkout-page{inset-inline-start:.5rem}.bg-white.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-checkout-page{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-checkout-page{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-checkout-page{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-checkout-page{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-checkout-page{padding-inline-end:1.75rem}.ps-9.sc-ir-checkout-page{padding-inline-start:2.25rem}.pt-1.sc-ir-checkout-page{padding-top:.25rem}.text-\\[1rem\\].sc-ir-checkout-page{font-size:1rem}.text-xs.sc-ir-checkout-page{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\].sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed.sc-ir-checkout-page{position:fixed}.right-0.sc-ir-checkout-page{right:0}.right-4.sc-ir-checkout-page{right:1rem}.top-4.sc-ir-checkout-page{top:1rem}.mt-8.sc-ir-checkout-page{margin-top:2rem}.h-screen.sc-ir-checkout-page{height:100vh}.min-w-\\[70\\%\\].sc-ir-checkout-page{min-width:70%}.max-w-full.sc-ir-checkout-page{max-width:100%}.translate-x-0.sc-ir-checkout-page{--tw-translate-x:0px}.translate-x-0.sc-ir-checkout-page,.translate-x-\\[100\\%\\].sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-checkout-page{--tw-translate-x:100%}.shadow.sc-ir-checkout-page,.shadow-md.sc-ir-checkout-page{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-checkout-page{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-checkout-page{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-checkout-page{transition-duration:.3s}.ease-in-out.sc-ir-checkout-page{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-checkout-page{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-checkout-page,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-checkout-page{--tw-translate-x:0px}.max-w-xs.sc-ir-checkout-page{max-width:20rem}.rounded-lg.sc-ir-checkout-page{border-radius:.5rem}.px-3.sc-ir-checkout-page{padding-left:.75rem;padding-right:.75rem}.size-\\[18px\\].sc-ir-checkout-page{height:18px;width:18px}.h-\\[14px\\].sc-ir-checkout-page{height:14px}.h-\\[3rem\\].sc-ir-checkout-page{height:3rem}.w-\\[12\\.25px\\].sc-ir-checkout-page{width:12.25px}.gap-0.sc-ir-checkout-page{gap:0}.gap-0\\.5.sc-ir-checkout-page{gap:.125rem}.border-0.sc-ir-checkout-page{border-width:0}.pt-14.sc-ir-checkout-page{padding-top:3.5rem}.shadow.sc-ir-checkout-page,.shadow-none.sc-ir-checkout-page{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-checkout-page{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-checkout-page{width:auto}.sm\\:w-fit.sc-ir-checkout-page{width:fit-content}.sm\\:border.sc-ir-checkout-page{border-width:1px}.sm\\:pt-4.sc-ir-checkout-page{padding-top:1rem}.sm\\:shadow-sm.sc-ir-checkout-page{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.transform.sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mt-4.sc-ir-checkout-page{margin-top:1rem}.h-\\[1px\\].sc-ir-checkout-page{height:1px}.w-56.sc-ir-checkout-page{width:14rem}.min-w-\\[1rem\\].sc-ir-checkout-page{min-width:1rem}.space-y-1.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-checkout-page{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-checkout-page{border-width:1px}.border-gray-300.sc-ir-checkout-page{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-100.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2.sc-ir-checkout-page{padding:.5rem}.text-red-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:768px){.md\\:max-w-sm.sc-ir-checkout-page{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-checkout-page{aspect-ratio:16/9}.lg\\:p-6.sc-ir-checkout-page{padding:1.5rem}}@media (min-width:640px){.sm\\:p-6.sc-ir-checkout-page{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-checkout-page{width:fit-content}.md\\:flex-row-reverse.sc-ir-checkout-page{flex-direction:row-reverse}}.pb-2.sc-ir-checkout-page{padding-bottom:.5rem}.font-normal.sc-ir-checkout-page{font-weight:400}.text-gray-700.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.p-6.sc-ir-checkout-page{padding:1.5rem}.text-start.sc-ir-checkout-page{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-checkout-page{justify-content:space-between}.md\\:gap-8.sc-ir-checkout-page{gap:2rem}}.gap-\\[2px\\].sc-ir-checkout-page{gap:2px}.-bottom-0.sc-ir-checkout-page{bottom:0}.-bottom-1.sc-ir-checkout-page{bottom:-.25rem}.z-0.sc-ir-checkout-page{z-index:0}.mb-1.sc-ir-checkout-page{margin-bottom:.25rem}.mb-2.sc-ir-checkout-page{margin-bottom:.5rem}.size-10.sc-ir-checkout-page{height:2.5rem;width:2.5rem}.size-3.sc-ir-checkout-page{height:.75rem;width:.75rem}.h-48.sc-ir-checkout-page{height:12rem}.max-h-\\[80vh\\].sc-ir-checkout-page{max-height:80vh}.cursor-pointer.sc-ir-checkout-page{cursor:pointer}.items-end.sc-ir-checkout-page{align-items:flex-end}.overflow-hidden.sc-ir-checkout-page{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-checkout-page{border-radius:var(--radius,8px)}.bg-white\\/80.sc-ir-checkout-page{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-checkout-page{padding-left:.5rem;padding-right:.5rem}.py-4.sc-ir-checkout-page{padding-top:1rem}.pb-4.sc-ir-checkout-page,.py-4.sc-ir-checkout-page{padding-bottom:1rem}.pt-0.sc-ir-checkout-page{padding-top:0}.ordinal.sc-ir-checkout-page{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-checkout-page:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:block.sc-ir-checkout-page{display:block}.md\\:max-h-\\[200px\\].sc-ir-checkout-page{max-height:200px}.md\\:w-auto.sc-ir-checkout-page{width:auto}.md\\:p-4.sc-ir-checkout-page{padding:1rem}.md\\:pt-0.sc-ir-checkout-page{padding-top:0}.md\\:pt-4.sc-ir-checkout-page{padding-top:1rem}.md\\:text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-checkout-page{max-height:250px}}.ml-4.sc-ir-checkout-page{margin-left:1rem}.grid-cols-2.sc-ir-checkout-page{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-checkout-page{padding-bottom:1.5rem}.text-gray-800.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-checkout-page{flex-direction:row}.sm\\:items-center.sc-ir-checkout-page{align-items:center}.sm\\:text-sm.sc-ir-checkout-page{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-checkout-page{grid-template-columns:repeat(3,minmax(0,1fr))}}.w-72.sc-ir-checkout-page{width:18rem}.w-fit.sc-ir-checkout-page{width:fit-content}.text-end.sc-ir-checkout-page{text-align:end}@media (min-width:1280px){.xl\\:text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}}.ml-1.sc-ir-checkout-page{margin-left:.25rem}.line-clamp-3.sc-ir-checkout-page{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-checkout-page{display:inline-flex}.h-6.sc-ir-checkout-page{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-checkout-page{max-width:60%}.flex-row.sc-ir-checkout-page{flex-direction:row}.gap-3.sc-ir-checkout-page{gap:.75rem}.space-y-14.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-checkout-page{padding-left:0}.pt-0\\.5.sc-ir-checkout-page{padding-top:.125rem}.text-right.sc-ir-checkout-page{text-align:right}.text-gray-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-checkout-page{width:100%}.md\\:max-w-full.sc-ir-checkout-page{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-checkout-page{flex-direction:row}}.text-slate-900.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-checkout-page{color:hsl(var(--brand-600))}.text-slate-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-checkout-page{padding:1rem}}.space-y-1\\.5.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.border-solid.sc-ir-checkout-page{border-style:solid}.mb-2\\.5.sc-ir-checkout-page{margin-bottom:.625rem}.mb-6.sc-ir-checkout-page{margin-bottom:1.5rem}.w-\\[45\\%\\].sc-ir-checkout-page{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-checkout-page{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-checkout-page{color:var(--gray-500)}";
const IrCheckoutPageStyle0 = irCheckoutPageCss;

const IrCheckoutPage = /*@__PURE__*/ proxyCustomElement(class IrCheckoutPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.routing = createEvent(this, "routing", 7);
        this.propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.authService = new AuthService();
        this.isLoading = false;
        this.error = undefined;
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
        if (!this.validateUserForm() || !this.validateBookingDetails() || !this.validatePickupForm() || this.validatePolicyAcceptance()) {
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
        this.errorElement = cause === 'pickup' ? this.pickupForm : this.userForm;
        this.scrollToError();
    }
    async processBooking() {
        try {
            const result = await this.propertyService.bookUser();
            booking_store.booking = result;
            const currentPayment = app_store.property.allowed_payment_methods.find(p => { var _a; return p.code === ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code); });
            if (!currentPayment || !(currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.is_payment_gateway)) {
                app_store.invoice = {
                    email: booking_store.booking.guest.email,
                    booking_number: booking_store.booking.booking_nbr,
                };
                this.routing.emit('invoice');
            }
            else {
                await this.processPayment(result, currentPayment);
            }
        }
        catch (error) {
            console.error('Booking process failed:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async processPayment(bookingResult, currentPayment) {
        var _a;
        let token = app_store.app_data.token;
        if (!app_store.is_signed_in) {
            token = await this.authService.login({
                option: 'direct',
                params: {
                    email: bookingResult.guest.email,
                    booking_nbr: bookingResult.booking_nbr,
                },
            }, false);
        }
        const { prePaymentAmount } = calculateTotalCost();
        if (prePaymentAmount > 0) {
            const res = await this.paymentService.GeneratePaymentCaller(token, {
                booking_nbr: bookingResult.booking_nbr,
                amount: prePaymentAmount,
                currency_id: bookingResult.currency.id,
                email: bookingResult.guest.email,
                pgw_id: (_a = currentPayment.data.find(d => d.key === 'id')) === null || _a === void 0 ? void 0 : _a.value,
            });
            if (res.type === 1) {
                window.location.href = res.caller;
            }
            else {
                eval(res.caller);
            }
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
        // if (isRequestPending('/Get_Exposed_Booking_Availability') || isRequestPending('/Get_Exposed_Countries') || isRequestPending('/Get_Country_By_IP')) {
        //   return <ir-checkout-skeleton></ir-checkout-skeleton>;
        // }
        return (h(Host, { key: 'a8616340dd1be54d3b9cf728d7b8b77c2d4b6503' }, h("main", { key: 'e8df946b4a30c66b97268c93162976913e5d31c8', class: "flex w-full  flex-col justify-between gap-4  md:flex-row md:items-start" }, h("section", { key: 'd353d9f1646fbfff8495f13705234775f424cdf8', class: "w-full space-y-4 md:max-w-4xl" }, h("div", { key: 'c07e608ebef273a35d9180c497a304172f39a8a8', class: "flex items-center gap-2.5" }, h("ir-button", { key: '92331fc0bf51e2fc41bae0e28bbf094b23a2ef3f', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { key: 'a65ef238cdc90c2b094b0f62ba576cdc1302225c', class: "text-2xl font-semibold" }, "Complete your booking")), !app_store.is_signed_in && (h("div", null, h("ir-quick-auth", null))), h("div", { key: '0c933d491c9c3413cfb514a340e8f36438a404f3', class: 'space-y-8' }, h("div", { key: '65ec056bf9b217a9081097bf3698d596d15c47cb' }, h("ir-user-form", { key: '2492d13b479646cf3f4a18543a554d719579bc28', ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", { key: '478a0377f9208d76b447c10119beabef29b0da1a' }, h("ir-booking-details", { key: 'a18f45073b6b08477a0c981a03568e42d33a54d8', ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", { key: 'd261d269ec010f74760ccd4e3044b0c295390eea' }, h("ir-pickup", { key: 'd57cd6164b367248e56ddea270be3d7449fc251c', ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { key: 'd8c60aca5963b32e7fded81a23a694e1ecd44847', class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { key: 'a7a34d1bf648aa3f8864bf293dbecbd68669d759', error: this.error && this.error.cause === 'booking-summary' ? true : false, isLoading: this.isLoading })))));
    }
    static get style() { return IrCheckoutPageStyle0; }
}, [2, "ir-checkout-page", {
        "isLoading": [32],
        "error": [32]
    }, [[0, "bookingClicked", "handleBooking"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-checkout-page", "ir-booking-details", "ir-booking-summary", "ir-button", "ir-calendar", "ir-checkbox", "ir-credit-card-input", "ir-dialog", "ir-icons", "ir-input", "ir-payment-view", "ir-phone-input", "ir-pickup", "ir-popover", "ir-privacy-policy", "ir-quick-auth", "ir-select", "ir-textarea", "ir-user-form"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-checkout-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCheckoutPage);
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-booking-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-calendar":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-credit-card-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-payment-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-privacy-policy":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-quick-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-user-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCheckoutPage as I, defineCustomElement as d };

//# sourceMappingURL=ir-checkout-page2.js.map