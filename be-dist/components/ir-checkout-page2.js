import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PickupFormData, d as defineCustomElement$6 } from './ir-pickup2.js';
import { I as IrUserFormData } from './user_form.js';
import { A as AuthService } from './auth.service.js';
import { P as PaymentService } from './payment.service.js';
import { P as PropertyService } from './property.service.js';
import { b as app_store } from './app.store.js';
import { p as passedBookingCutoff, b as booking_store, z as detectCardType, A as validateBooking, B as generateCheckoutUrl, u as getDateDifference, t as calculateTotalRooms, C as injectHTMLAndRunScript, y as clearCheckoutRooms, l as localizedWords } from './utils.js';
import { c as checkout_store } from './checkout.store.js';
import { Z as ZCreditCardSchemaWithCvc, d as defineCustomElement$c } from './ir-credit-card-input2.js';
import { h as hooks } from './moment.js';
import { Z as ZodError } from './index4.js';
import { d as defineCustomElement$j } from './ir-alert-dialog2.js';
import { d as defineCustomElement$i } from './ir-booking-details2.js';
import { d as defineCustomElement$h } from './ir-booking-summary2.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-calendar2.js';
import { d as defineCustomElement$e } from './ir-checkbox2.js';
import { d as defineCustomElement$d } from './ir-checkout-skeleton2.js';
import { d as defineCustomElement$b } from './ir-dialog2.js';
import { d as defineCustomElement$a } from './ir-icons2.js';
import { d as defineCustomElement$9 } from './ir-input2.js';
import { d as defineCustomElement$8 } from './ir-payment-view2.js';
import { d as defineCustomElement$7 } from './ir-phone-input2.js';
import { d as defineCustomElement$5 } from './ir-popover2.js';
import { d as defineCustomElement$4 } from './ir-quick-auth2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-textarea2.js';
import { d as defineCustomElement$1 } from './ir-user-form2.js';

const irCheckoutPageCss = "*.sc-ir-checkout-page,.sc-ir-checkout-page:after,.sc-ir-checkout-page:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-checkout-page::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.sc-ir-checkout-page:after,.sc-ir-checkout-page:before{--tw-content:\"\"}.sc-ir-checkout-page-h,html.sc-ir-checkout-page{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-checkout-page{line-height:inherit;margin:0}hr.sc-ir-checkout-page{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-checkout-page:where([title]){text-decoration:underline dotted}h1.sc-ir-checkout-page,h2.sc-ir-checkout-page,h3.sc-ir-checkout-page,h4.sc-ir-checkout-page,h5.sc-ir-checkout-page,h6.sc-ir-checkout-page{font-size:inherit;font-weight:inherit}a.sc-ir-checkout-page{color:inherit;text-decoration:inherit}b.sc-ir-checkout-page,strong.sc-ir-checkout-page{font-weight:bolder}code.sc-ir-checkout-page,kbd.sc-ir-checkout-page,pre.sc-ir-checkout-page,samp.sc-ir-checkout-page{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-checkout-page{font-size:80%}sub.sc-ir-checkout-page,sup.sc-ir-checkout-page{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-checkout-page{bottom:-.25em}sup.sc-ir-checkout-page{top:-.5em}table.sc-ir-checkout-page{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-checkout-page,input.sc-ir-checkout-page,optgroup.sc-ir-checkout-page,select.sc-ir-checkout-page,textarea.sc-ir-checkout-page{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-checkout-page,select.sc-ir-checkout-page{text-transform:none}button.sc-ir-checkout-page,input.sc-ir-checkout-page:where([type=button]),input.sc-ir-checkout-page:where([type=reset]),input.sc-ir-checkout-page:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-checkout-page:-moz-focusring{outline:auto}.sc-ir-checkout-page:-moz-ui-invalid{box-shadow:none}progress.sc-ir-checkout-page{vertical-align:baseline}.sc-ir-checkout-page::-webkit-inner-spin-button,.sc-ir-checkout-page::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-checkout-page{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-checkout-page::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-checkout-page::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-checkout-page{display:list-item}blockquote.sc-ir-checkout-page,dd.sc-ir-checkout-page,dl.sc-ir-checkout-page,fieldset.sc-ir-checkout-page,figure.sc-ir-checkout-page,h1.sc-ir-checkout-page,h2.sc-ir-checkout-page,h3.sc-ir-checkout-page,h4.sc-ir-checkout-page,h5.sc-ir-checkout-page,h6.sc-ir-checkout-page,hr.sc-ir-checkout-page,p.sc-ir-checkout-page,pre.sc-ir-checkout-page{margin:0}fieldset.sc-ir-checkout-page,legend.sc-ir-checkout-page{padding:0}menu.sc-ir-checkout-page,ol.sc-ir-checkout-page,ul.sc-ir-checkout-page{list-style:none;margin:0;padding:0}dialog.sc-ir-checkout-page{padding:0}textarea.sc-ir-checkout-page{resize:vertical}input.sc-ir-checkout-page::placeholder,textarea.sc-ir-checkout-page::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-checkout-page,button.sc-ir-checkout-page{cursor:pointer}.sc-ir-checkout-page:disabled{cursor:default}audio.sc-ir-checkout-page,canvas.sc-ir-checkout-page,embed.sc-ir-checkout-page,iframe.sc-ir-checkout-page,img.sc-ir-checkout-page,object.sc-ir-checkout-page,svg.sc-ir-checkout-page,video.sc-ir-checkout-page{display:block;vertical-align:middle}img.sc-ir-checkout-page,video.sc-ir-checkout-page{height:auto;max-width:100%}[hidden].sc-ir-checkout-page:where(:not([hidden=until-found])){display:none}.block.sc-ir-checkout-page{display:block}.sc-ir-checkout-page-h{display:block}.static.sc-ir-checkout-page{position:static}.relative.sc-ir-checkout-page{position:relative}.sticky.sc-ir-checkout-page{position:sticky}.top-0.sc-ir-checkout-page{top:0}.z-20.sc-ir-checkout-page{z-index:20}.m-0.sc-ir-checkout-page{margin:0}.mx-auto.sc-ir-checkout-page{margin-left:auto;margin-right:auto}.flex.sc-ir-checkout-page{display:flex}.w-full.sc-ir-checkout-page{width:100%}.max-w-6xl.sc-ir-checkout-page{max-width:72rem}.flex-1.sc-ir-checkout-page{flex:1 1 0%}.flex-col.sc-ir-checkout-page{flex-direction:column}.space-y-5.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-checkout-page{padding:0}.px-4.sc-ir-checkout-page{padding-left:1rem;padding-right:1rem}.shadow.sc-ir-checkout-page{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6.sc-ir-checkout-page{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5.sc-ir-checkout-page{margin-bottom:.625rem}.h-20.sc-ir-checkout-page{height:5rem}.h-24.sc-ir-checkout-page{height:6rem}.h-3.sc-ir-checkout-page{height:.75rem}.h-4.sc-ir-checkout-page{height:1rem}.w-60.sc-ir-checkout-page{width:15rem}.items-center.sc-ir-checkout-page{align-items:center}.justify-between.sc-ir-checkout-page{justify-content:space-between}.space-y-1\\.5.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md.sc-ir-checkout-page{border-radius:.375rem}.py-1.sc-ir-checkout-page{padding-bottom:.25rem;padding-top:.25rem}.py-2.sc-ir-checkout-page{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5.sc-ir-checkout-page{padding-bottom:.625rem;padding-top:.625rem}.py-3.sc-ir-checkout-page{padding-bottom:.75rem;padding-top:.75rem}.text-lg.sc-ir-checkout-page{font-size:1.125rem;line-height:1.75rem}.text-xs.sc-ir-checkout-page{font-size:.75rem;line-height:1rem}.font-medium.sc-ir-checkout-page{font-weight:500}.text-gray-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.outline.sc-ir-checkout-page{outline-style:solid}.h-full.sc-ir-checkout-page{height:100%}.grid.sc-ir-checkout-page{display:grid}.hidden.sc-ir-checkout-page{display:none}.aspect-\\[16\\/9\\].sc-ir-checkout-page{aspect-ratio:16/9}.h-28.sc-ir-checkout-page{height:7rem}.h-44.sc-ir-checkout-page{height:11rem}.h-6.sc-ir-checkout-page{height:1.5rem}.h-60.sc-ir-checkout-page{height:15rem}.h-8.sc-ir-checkout-page{height:2rem}.w-1\\/2.sc-ir-checkout-page{width:50%}.w-24.sc-ir-checkout-page{width:6rem}.w-3\\/4.sc-ir-checkout-page{width:75%}.w-3\\/5.sc-ir-checkout-page{width:60%}.w-40.sc-ir-checkout-page{width:10rem}.w-48.sc-ir-checkout-page{width:12rem}.w-80.sc-ir-checkout-page{width:20rem}.gap-2.sc-ir-checkout-page{gap:.5rem}.gap-4.sc-ir-checkout-page{gap:1rem}.space-x-2.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4.sc-ir-checkout-page{padding:1rem}@media (min-width:768px){.md\\:col-span-2.sc-ir-checkout-page{grid-column:span 2/span 2}.md\\:grid.sc-ir-checkout-page{display:grid}.md\\:h-20.sc-ir-checkout-page{height:5rem}.md\\:grid-cols-3.sc-ir-checkout-page{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row.sc-ir-checkout-page{flex-direction:row}}@media (min-width:1024px){.lg\\:block.sc-ir-checkout-page{display:block}.lg\\:grid-cols-2.sc-ir-checkout-page{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6.sc-ir-checkout-page{padding:1.5rem}}.size-6.sc-ir-checkout-page{height:1.5rem;width:1.5rem}.pb-2.sc-ir-checkout-page{padding-bottom:.5rem}.font-semibold.sc-ir-checkout-page{font-weight:600}.text-red-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.top-\\[20\\%\\].sc-ir-checkout-page{top:20%}.z-50.sc-ir-checkout-page{z-index:50}.mt-1\\.5.sc-ir-checkout-page{margin-top:.375rem}.aspect-\\[1\\/1\\].sc-ir-checkout-page{aspect-ratio:1/1}.max-h-32.sc-ir-checkout-page{max-height:8rem}.flex-wrap.sc-ir-checkout-page{flex-wrap:wrap}.justify-center.sc-ir-checkout-page{justify-content:center}.gap-1.sc-ir-checkout-page{gap:.25rem}.gap-16.sc-ir-checkout-page{gap:4rem}.space-y-2.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-checkout-page{object-fit:cover}.text-center.sc-ir-checkout-page{text-align:center}.text-sm.sc-ir-checkout-page{font-size:.875rem;line-height:1.25rem}.text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}.text-gray-700.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-green-600.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:w-fit.sc-ir-checkout-page{width:fit-content}.md\\:items-center.sc-ir-checkout-page{align-items:center}.md\\:text-right.sc-ir-checkout-page{text-align:right}}.absolute.sc-ir-checkout-page{position:absolute}.mb-2.sc-ir-checkout-page{margin-bottom:.5rem}.h-10.sc-ir-checkout-page{height:2.5rem}.h-12.sc-ir-checkout-page{height:3rem}.h-14.sc-ir-checkout-page{height:3.5rem}.h-64.sc-ir-checkout-page{height:16rem}.h-screen.sc-ir-checkout-page{height:100vh}.min-h-screen.sc-ir-checkout-page{min-height:100vh}.w-56.sc-ir-checkout-page{width:14rem}.max-w-md.sc-ir-checkout-page{max-width:28rem}.animate-pulse.sc-ir-checkout-page{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center.sc-ir-checkout-page{place-content:center}.self-center.sc-ir-checkout-page{align-self:center}.rounded-full.sc-ir-checkout-page{border-radius:9999px}.bg-gray-200.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.py-4.sc-ir-checkout-page{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden.sc-ir-checkout-page{display:none}}.bottom-2.sc-ir-checkout-page{bottom:.5rem}.z-40.sc-ir-checkout-page{z-index:40}.mb-5.sc-ir-checkout-page{margin-bottom:1.25rem}.mt-14.sc-ir-checkout-page{margin-top:3.5rem}.w-auto.sc-ir-checkout-page{width:auto}.justify-end.sc-ir-checkout-page{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-checkout-page{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-checkout-page{padding-left:1.5rem;padding-right:1.5rem}.py-8.sc-ir-checkout-page{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-checkout-page{padding-bottom:1.25rem}.text-base.sc-ir-checkout-page{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.filter.sc-ir-checkout-page{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg.sc-ir-checkout-page{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-checkout-page{width:15rem}.lg\\:gap-10.sc-ir-checkout-page{gap:2.5rem}.lg\\:text-2xl.sc-ir-checkout-page{font-size:1.5rem;line-height:2rem}.lg\\:size-7.sc-ir-checkout-page{height:1.75rem;width:1.75rem}}.sr-only.sc-ir-checkout-page{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.gap-2\\.5.sc-ir-checkout-page{gap:.625rem}.space-y-8.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-checkout-page{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-checkout-page{position:sticky}.md\\:top-20.sc-ir-checkout-page{top:5rem}.md\\:flex.sc-ir-checkout-page{display:flex}.md\\:max-w-4xl.sc-ir-checkout-page{max-width:56rem}.md\\:max-w-md.sc-ir-checkout-page{max-width:28rem}.md\\:items-start.sc-ir-checkout-page{align-items:flex-start}.md\\:justify-end.sc-ir-checkout-page{justify-content:flex-end}}.table.sc-ir-checkout-page{display:table}.text-end.sc-ir-checkout-page{text-align:end}.text-gray-400.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.capitalize.sc-ir-checkout-page{text-transform:capitalize}.h-5.sc-ir-checkout-page{height:1.25rem}.w-5.sc-ir-checkout-page{width:1.25rem}.visible.sc-ir-checkout-page{visibility:visible}.fixed.sc-ir-checkout-page{position:fixed}.resize.sc-ir-checkout-page{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-checkout-page{display:block}}.mx-1.sc-ir-checkout-page{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-checkout-page{justify-content:flex-start}.gap-1\\.5.sc-ir-checkout-page{gap:.375rem}@media (min-width:768px){.md\\:block.sc-ir-checkout-page{display:block}}.pointer-events-none.sc-ir-checkout-page{pointer-events:none}.inset-y-0.sc-ir-checkout-page{bottom:0;top:0}.end-1.sc-ir-checkout-page{inset-inline-end:.25rem}.start-2.sc-ir-checkout-page{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-checkout-page{padding-left:.3rem;padding-right:.3rem}.ps-9.sc-ir-checkout-page{padding-inline-start:2.25rem}.pt-1.sc-ir-checkout-page{padding-top:.25rem}.text-\\[\\#667085\\].sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.mb-4.sc-ir-checkout-page{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-checkout-page{max-height:83vh}.overflow-y-auto.sc-ir-checkout-page{overflow-y:auto}.font-normal.sc-ir-checkout-page{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-checkout-page{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-checkout-page{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-checkout-page{padding:1.5rem}}.max-w-xs.sc-ir-checkout-page{max-width:20rem}.rounded-lg.sc-ir-checkout-page{border-radius:.5rem}.px-3.sc-ir-checkout-page{padding-left:.75rem;padding-right:.75rem}.right-0.sc-ir-checkout-page{right:0}.right-4.sc-ir-checkout-page{right:1rem}.top-4.sc-ir-checkout-page{top:1rem}.mt-8.sc-ir-checkout-page{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-checkout-page{min-width:70%}.max-w-full.sc-ir-checkout-page{max-width:100%}.translate-x-0.sc-ir-checkout-page{--tw-translate-x:0px}.translate-x-0.sc-ir-checkout-page,.translate-x-\\[100\\%\\].sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-checkout-page{--tw-translate-x:100%}.bg-white.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.shadow.sc-ir-checkout-page,.shadow-md.sc-ir-checkout-page{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-checkout-page{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-checkout-page{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-checkout-page{transition-duration:.3s}.ease-in-out.sc-ir-checkout-page{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-checkout-page{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-checkout-page,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-checkout-page{--tw-translate-x:0px}.size-4.sc-ir-checkout-page{height:1rem;width:1rem}.gap-3.sc-ir-checkout-page{gap:.75rem}.transform.sc-ir-checkout-page{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:640px){.sm\\:hidden.sc-ir-checkout-page{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity,1))}}.size-\\[1\\.125rem\\].sc-ir-checkout-page{height:1.125rem;width:1.125rem}.h-\\[14px\\].sc-ir-checkout-page{height:14px}.h-\\[3rem\\].sc-ir-checkout-page{height:3rem}.w-\\[12\\.25px\\].sc-ir-checkout-page{width:12.25px}.gap-0\\.5.sc-ir-checkout-page{gap:.125rem}.border-0.sc-ir-checkout-page{border-width:0}.pt-14.sc-ir-checkout-page{padding-top:3.5rem}.lowercase.sc-ir-checkout-page{text-transform:lowercase}.shadow.sc-ir-checkout-page,.shadow-none.sc-ir-checkout-page{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-checkout-page{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-checkout-page{width:auto}.sm\\:w-fit.sc-ir-checkout-page{width:fit-content}.sm\\:border.sc-ir-checkout-page{border-width:1px}.sm\\:pt-4.sc-ir-checkout-page{padding-top:1rem}.sm\\:shadow-sm.sc-ir-checkout-page{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.mx-2.sc-ir-checkout-page{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5.sc-ir-checkout-page{margin-top:.625rem}.rounded-xl.sc-ir-checkout-page{border-radius:.75rem}.bg-gray-100.sc-ir-checkout-page{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.p-6.sc-ir-checkout-page{padding:1.5rem}.pt-2.sc-ir-checkout-page{padding-top:.5rem}.leading-none.sc-ir-checkout-page{line-height:1}.tracking-tight.sc-ir-checkout-page{letter-spacing:-.025em}.ml-1.sc-ir-checkout-page{margin-left:.25rem}.line-clamp-3.sc-ir-checkout-page{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-checkout-page{display:inline-flex}.h-16.sc-ir-checkout-page{height:4rem}.w-16.sc-ir-checkout-page{width:4rem}.max-w-\\[60\\%\\].sc-ir-checkout-page{max-width:60%}.flex-row.sc-ir-checkout-page{flex-direction:row}.space-y-9.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.25rem*var(--tw-space-y-reverse));margin-top:calc(2.25rem*(1 - var(--tw-space-y-reverse)))}.pb-1\\.5.sc-ir-checkout-page{padding-bottom:.375rem}.pl-0.sc-ir-checkout-page{padding-left:0}.pt-0\\.5.sc-ir-checkout-page{padding-top:.125rem}.text-right.sc-ir-checkout-page{text-align:right}.text-\\[var\\(--ir-green\\)\\].sc-ir-checkout-page{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full.sc-ir-checkout-page{width:100%}.md\\:max-w-full.sc-ir-checkout-page{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-checkout-page{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6.sc-ir-checkout-page{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-checkout-page{flex-direction:row-reverse}}.mt-4.sc-ir-checkout-page{margin-top:1rem}.h-\\[1px\\].sc-ir-checkout-page{height:1px}.min-w-\\[1rem\\].sc-ir-checkout-page{min-width:1rem}.cursor-pointer.sc-ir-checkout-page{cursor:pointer}.space-y-1.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-checkout-page{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-checkout-page{border-width:1px}.border-gray-300.sc-ir-checkout-page{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.bg-gray-300.sc-ir-checkout-page{background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-300.sc-ir-checkout-page,.bg-white.sc-ir-checkout-page{--tw-bg-opacity:1}.p-2.sc-ir-checkout-page{padding:.5rem}.underline.sc-ir-checkout-page{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm.sc-ir-checkout-page{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-checkout-page{aspect-ratio:16/9}}.h-80.sc-ir-checkout-page{height:20rem}.h-\\[80vh\\].sc-ir-checkout-page{height:80vh}.overflow-x-auto.sc-ir-checkout-page{overflow-x:auto}.overflow-x-hidden.sc-ir-checkout-page{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-checkout-page{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-checkout-page{padding-top:1rem}.text-start.sc-ir-checkout-page{text-align:start}@media (min-width:1024px){.lg\\:table-cell.sc-ir-checkout-page{display:table-cell}}.gap-12.sc-ir-checkout-page{gap:3rem}.gap-8.sc-ir-checkout-page{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-checkout-page{max-width:24rem}}.size-3.sc-ir-checkout-page{height:.75rem;width:.75rem}.col-span-6.sc-ir-checkout-page{grid-column:span 6/span 6}.w-12.sc-ir-checkout-page{width:3rem}.place-items-center.sc-ir-checkout-page{place-items:center}.-bottom-0.sc-ir-checkout-page{bottom:0}.left-8.sc-ir-checkout-page{left:2rem}.top-8.sc-ir-checkout-page{top:2rem}.z-0.sc-ir-checkout-page{z-index:0}.z-10.sc-ir-checkout-page{z-index:10}.mb-1.sc-ir-checkout-page{margin-bottom:.25rem}.size-10.sc-ir-checkout-page{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\].sc-ir-checkout-page{max-height:80vh}.max-h-\\[90vh\\].sc-ir-checkout-page{max-height:90vh}.w-72.sc-ir-checkout-page{width:18rem}.items-end.sc-ir-checkout-page{align-items:flex-end}.overflow-hidden.sc-ir-checkout-page{overflow:hidden}.bg-white\\/80.sc-ir-checkout-page{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-checkout-page{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-checkout-page,.py-4.sc-ir-checkout-page{padding-bottom:1rem}.pt-0.sc-ir-checkout-page{padding-top:0}.ordinal.sc-ir-checkout-page{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.hover\\:bg-gray-400.sc-ir-checkout-page:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity,1))}@media (min-width:768px){.md\\:w-auto.sc-ir-checkout-page{width:auto}.md\\:p-4.sc-ir-checkout-page{padding:1rem}.md\\:pt-0.sc-ir-checkout-page{padding-top:0}.md\\:pt-4.sc-ir-checkout-page{padding-top:1rem}.md\\:text-xl.sc-ir-checkout-page{font-size:1.25rem;line-height:1.75rem}}.w-fit.sc-ir-checkout-page{width:fit-content}@media (min-width:640px){.sm\\:w-full.sc-ir-checkout-page{width:100%}}@media (min-width:1024px){.lg\\:w-fit.sc-ir-checkout-page{width:fit-content}}.pt-2.sc-ir-checkout-page,.py-2.sc-ir-checkout-page{padding-top:.5rem}.pt-4.sc-ir-checkout-page{padding-top:1rem}.text-slate-900.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity,1))}@media (min-width:768px){.md\\:space-y-2.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0.sc-ir-checkout-page{padding:0}}.h-72.sc-ir-checkout-page{height:18rem}.ml-4.sc-ir-checkout-page{margin-left:1rem}.grid-cols-2.sc-ir-checkout-page{grid-template-columns:repeat(2,minmax(0,1fr))}.gap-6.sc-ir-checkout-page{gap:1.5rem}.space-y-3.sc-ir-checkout-page>.sc-ir-checkout-page:not([hidden])~.sc-ir-checkout-page:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-checkout-page{padding-bottom:1.5rem}.text-gray-800.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:flex-row.sc-ir-checkout-page{flex-direction:row}.sm\\:items-center.sc-ir-checkout-page{align-items:center}.sm\\:text-sm.sc-ir-checkout-page{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-checkout-page{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-2.sc-ir-checkout-page{grid-column:span 2/span 2}.mb-6.sc-ir-checkout-page{margin-bottom:1.5rem}.mt-6.sc-ir-checkout-page{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-checkout-page{min-height:80vh}.max-w-xl.sc-ir-checkout-page{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2.sc-ir-checkout-page{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-checkout-page{color:hsl(var(--brand-600))}.size-\\[18px\\].sc-ir-checkout-page{height:18px;width:18px}.text-slate-500.sc-ir-checkout-page{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}@media (min-width:640px){.sm\\:p-4.sc-ir-checkout-page{padding:1rem}}.border-solid.sc-ir-checkout-page{border-style:solid}.w-\\[45\\%\\].sc-ir-checkout-page{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-checkout-page{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-checkout-page{color:var(--gray-500)}";
const IrCheckoutPageStyle0 = irCheckoutPageCss;

const IrCheckoutPage = /*@__PURE__*/ proxyCustomElement(class IrCheckoutPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.routing = createEvent(this, "routing", 7);
        this.isLoading = false;
        this.selectedPaymentMethod = null;
        this.isBookingConfirmed = false;
        this.propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.authService = new AuthService();
    }
    async componentWillLoad() {
        this.calculateTotalPrepaymentAmount();
    }
    async calculateTotalPrepaymentAmount() {
        try {
            this.isLoading = true;
            checkout_store.prepaymentAmount = this.prepaymentAmount;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handlePrepaymentAmountChange(e) {
        this.prepaymentAmount = e.detail;
        checkout_store.prepaymentAmount = this.prepaymentAmount;
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.resetErrorState();
        if (passedBookingCutoff()) {
            this.alertRef.openModal();
            return;
        }
        if (!this.validateUserForm() || !this.validateBookingDetails() || !this.validatePickupForm() || !this.validatePayment() || this.validatePolicyAcceptance()) {
            return;
        }
        // alert('do booking');
        await this.processBooking();
    }
    validatePolicyAcceptance() {
        if (checkout_store.agreed_to_services) {
            return false;
        }
        this.error = { cause: 'booking-summary', issues: 'unchecked agreement' };
        return true;
    }
    validatePayment() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (booking_store.bookingAvailabilityParams.agent && ((_b = (_a = booking_store.bookingAvailabilityParams) === null || _a === void 0 ? void 0 : _a.agent) === null || _b === void 0 ? void 0 : _b.payment_mode.code) === '001') {
            return true;
        }
        if (!app_store.property.allowed_payment_methods.some(p => p.is_active)) {
            return true;
        }
        const currentPayment = app_store.property.allowed_payment_methods.find(p => { var _a; return p.code === ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code); });
        this.selectedPaymentMethod = currentPayment;
        if (!currentPayment && this.prepaymentAmount > 0) {
            return false;
        }
        if (!currentPayment && this.prepaymentAmount === 0) {
            return true;
        }
        if ((currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.is_payment_gateway) || (currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.code) === '000' || (currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.code) === '005') {
            return true;
        }
        try {
            ZCreditCardSchemaWithCvc.parse({
                cardNumber: (_d = (_c = checkout_store.payment) === null || _c === void 0 ? void 0 : _c.cardNumber) === null || _d === void 0 ? void 0 : _d.replace(/ /g, ''),
                cardHolderName: checkout_store.payment.cardHolderName,
                expiryDate: (_e = checkout_store.payment) === null || _e === void 0 ? void 0 : _e.expiry_month,
                // cvc: (checkout_store.payment as any)?.cvc,
            });
            const cardType = detectCardType((_g = (_f = checkout_store.payment) === null || _f === void 0 ? void 0 : _f.cardNumber) === null || _g === void 0 ? void 0 : _g.replace(/ /g, ''));
            if (cardType !== 'AMEX') {
                return true;
            }
            if (!app_store.property.allowed_cards.find(c => { var _a; return c.name.toLowerCase().includes((_a = (cardType === 'AMEX' ? 'American Express' : cardType)) === null || _a === void 0 ? void 0 : _a.toLowerCase()); })) {
                return false;
            }
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                // console.log(error.issues);
                // if (error.issues.length === 4 && this.prepaymentAmount === 0) {
                //   return true;
                // }
                this.handleError('payment', error);
            }
            return false;
        }
    }
    resetErrorState() {
        this.error = undefined;
    }
    validateUserForm() {
        try {
            IrUserFormData.parse(checkout_store.userFormData);
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.error(error.errors);
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
            this.isBookingConfirmed = true;
            booking_store.booking = result;
            // if (app_store.app_data.isFromGhs) {
            //   destroyBookingCookie();
            // }
            const conversionTag = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.tags.find(t => t.key === 'conversion');
            if (conversionTag && conversionTag.value) {
                this.modifyConversionTag(conversionTag.value);
            }
            if (!this.selectedPaymentMethod || !((_b = this.selectedPaymentMethod) === null || _b === void 0 ? void 0 : _b.is_payment_gateway) || this.prepaymentAmount === 0) {
                app_store.invoice = {
                    email: booking_store.booking.guest.email,
                    booking_number: booking_store.booking.booking_nbr,
                };
                return (window.location.href = generateCheckoutUrl(app_store.property.perma_link, {
                    e: result.guest.email,
                    b: result.booking_nbr,
                    lang: app_store.userPreferences.language_id,
                    s: '1',
                }));
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
                const paymentAmount = this.prepaymentAmount;
                await this.processPayment(result, this.selectedPaymentMethod, paymentAmount, token);
            }
        }
        catch (error) {
            console.error('Booking process failed:', error);
        }
    }
    modifyConversionTag(tag) {
        var _a, _b, _c, _d;
        const booking = booking_store.booking;
        tag = tag.replace(/\$\$total_price\$\$/g, booking.financial.total_amount.toString());
        tag = tag.replace(/\$\$total_roomnights\$\$/g, (getDateDifference(hooks(booking.from_date, 'YYYY-MM-DD'), hooks(booking.to_date, 'YYYY-MM-DD')) * calculateTotalRooms()).toString());
        tag = tag.replace(/\$\$booking_xref\$\$/g, booking.booking_nbr.toString());
        tag = tag.replace(/\$\$curr\$\$/g, (_b = (_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.currency_id) === null || _b === void 0 ? void 0 : _b.toString());
        tag = tag.replace(/\$\$cur_code\$\$/g, (_d = (_c = app_store.userPreferences) === null || _c === void 0 ? void 0 : _c.currency_id) === null || _d === void 0 ? void 0 : _d.toString());
        injectHTMLAndRunScript(tag, 'conversion_tag');
    }
    async processPayment(bookingResult, currentPayment, paymentAmount, token) {
        let amountToBePayed = paymentAmount;
        if (amountToBePayed > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token,
                params: {
                    booking_nbr: bookingResult.booking_nbr,
                    amount: amountToBePayed,
                    currency_id: app_store.currencies.find(a => a.code.toLowerCase() === (app_store.userPreferences.currency_id.toLowerCase() || 'usd')).id,
                    email: bookingResult.guest.email,
                    pgw_id: currentPayment.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => injectHTMLAndRunScript(script, 'conversion_tag'),
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
        var _a, _b, _c, _d;
        if (this.isLoading) {
            return (h("div", { class: 'flex min-h-screen flex-col' }, h("ir-checkout-skeleton", null)));
        }
        return (h(Host, null, h("main", { class: "flex  w-full  flex-col justify-between gap-4   md:flex-row md:items-start" }, h("section", { class: "w-full space-y-4 md:max-w-4xl" }, h("div", { class: "flex items-center gap-2.5" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
                clearCheckoutRooms();
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "text-2xl font-semibold" }, localizedWords.entries.Lcz_CompleteYourBooking)), !app_store.is_signed_in && !app_store.app_data.hideGoogleSignIn && (h("div", null, h("ir-quick-auth", null))), h("div", { class: 'space-y-8' }, h("div", null, h("ir-user-form", { ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", null, h("ir-booking-details", { ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", null, h("ir-pickup", { ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { isBookingConfirmed: this.isBookingConfirmed, prepaymentAmount: this.prepaymentAmount, error: this.error }))), h("ir-alert-dialog", { ref: el => (this.alertRef = el) }, h("div", { slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("h1", { class: 'text-lg font-semibold' }, (_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SomethingWentWrong) !== null && _b !== void 0 ? _b : 'Something went wrong', "!")), h("p", { slot: "modal-body" }, (_c = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _c === void 0 ? void 0 : _c.Lcz_BookingIsNotAvailable), h("div", { slot: "modal-footer" }, h("ir-button", { label: (_d = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _d === void 0 ? void 0 : _d.Lcz_GoBack, onButtonClick: () => {
                this.routing.emit('booking');
                clearCheckoutRooms();
            } })))));
    }
    static get style() { return IrCheckoutPageStyle0; }
}, [2, "ir-checkout-page", {
        "isLoading": [32],
        "error": [32],
        "selectedPaymentMethod": [32],
        "prepaymentAmount": [32],
        "isBookingConfirmed": [32]
    }, [[0, "prepaymentChange", "handlePrepaymentAmountChange"], [0, "bookingClicked", "handleBooking"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-checkout-page", "ir-alert-dialog", "ir-booking-details", "ir-booking-summary", "ir-button", "ir-calendar", "ir-checkbox", "ir-checkout-skeleton", "ir-credit-card-input", "ir-dialog", "ir-icons", "ir-input", "ir-payment-view", "ir-phone-input", "ir-pickup", "ir-popover", "ir-quick-auth", "ir-select", "ir-textarea", "ir-user-form"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-checkout-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCheckoutPage);
            }
            break;
        case "ir-alert-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
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
        case "ir-checkout-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-credit-card-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-payment-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-popover":
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