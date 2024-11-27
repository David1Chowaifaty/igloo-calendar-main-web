import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { C as CommonService } from './common.service.js';
import { P as PropertyService } from './property.service.js';
import { B as BookingListingAppService } from './booking-listing.service.js';
import { z as runScriptAndRemove, d as dateFns, x as formatFullLocation, w as formatAmount, c as cn } from './utils.js';
import { a as app_store } from './app.store.js';
import { P as PaymentService } from './payment.service.js';
import { l as localizedWords } from './localization.store.js';
import { d as defineCustomElement$a } from './ir-alert-dialog2.js';
import { d as defineCustomElement$9 } from './ir-badge2.js';
import { d as defineCustomElement$8 } from './ir-booking-cancelation2.js';
import { d as defineCustomElement$7 } from './ir-booking-card2.js';
import { d as defineCustomElement$6 } from './ir-booking-header2.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-menu2.js';
import { d as defineCustomElement$2 } from './ir-pagination2.js';
import { d as defineCustomElement$1 } from './ir-skeleton2.js';

class BookingListingService {
    async getExposedGuestBookings(params) {
        const { data } = await axios.post(`/Get_Exposed_Guest_Bookings`, Object.assign(Object.assign({}, params), { extras: [
                {
                    key: 'payment_code',
                    value: '',
                },
                {
                    key: 'prepayment_amount',
                    value: '',
                },
            ] }));
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        return { bookings: data['My_Result'], total_count: data['My_Params_Get_Exposed_Guest_Bookings'].total_count };
    }
}

const irBookingOverviewCss = "*.sc-ir-booking-overview,.sc-ir-booking-overview:after,.sc-ir-booking-overview:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-booking-overview:after,.sc-ir-booking-overview:before{--tw-content:\"\"}.sc-ir-booking-overview-h,html.sc-ir-booking-overview{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-booking-overview{line-height:inherit;margin:0}hr.sc-ir-booking-overview{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-booking-overview:where([title]){text-decoration:underline dotted}h1.sc-ir-booking-overview,h2.sc-ir-booking-overview,h3.sc-ir-booking-overview,h4.sc-ir-booking-overview,h5.sc-ir-booking-overview,h6.sc-ir-booking-overview{font-size:inherit;font-weight:inherit}a.sc-ir-booking-overview{color:inherit;text-decoration:inherit}b.sc-ir-booking-overview,strong.sc-ir-booking-overview{font-weight:bolder}code.sc-ir-booking-overview,kbd.sc-ir-booking-overview,pre.sc-ir-booking-overview,samp.sc-ir-booking-overview{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-booking-overview{font-size:80%}sub.sc-ir-booking-overview,sup.sc-ir-booking-overview{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-booking-overview{bottom:-.25em}sup.sc-ir-booking-overview{top:-.5em}table.sc-ir-booking-overview{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-booking-overview,input.sc-ir-booking-overview,optgroup.sc-ir-booking-overview,select.sc-ir-booking-overview,textarea.sc-ir-booking-overview{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-booking-overview,select.sc-ir-booking-overview{text-transform:none}button.sc-ir-booking-overview,input.sc-ir-booking-overview:where([type=button]),input.sc-ir-booking-overview:where([type=reset]),input.sc-ir-booking-overview:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-booking-overview:-moz-focusring{outline:auto}.sc-ir-booking-overview:-moz-ui-invalid{box-shadow:none}progress.sc-ir-booking-overview{vertical-align:baseline}.sc-ir-booking-overview::-webkit-inner-spin-button,.sc-ir-booking-overview::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-booking-overview{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-booking-overview::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-booking-overview::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-booking-overview{display:list-item}blockquote.sc-ir-booking-overview,dd.sc-ir-booking-overview,dl.sc-ir-booking-overview,fieldset.sc-ir-booking-overview,figure.sc-ir-booking-overview,h1.sc-ir-booking-overview,h2.sc-ir-booking-overview,h3.sc-ir-booking-overview,h4.sc-ir-booking-overview,h5.sc-ir-booking-overview,h6.sc-ir-booking-overview,hr.sc-ir-booking-overview,p.sc-ir-booking-overview,pre.sc-ir-booking-overview{margin:0}fieldset.sc-ir-booking-overview,legend.sc-ir-booking-overview{padding:0}menu.sc-ir-booking-overview,ol.sc-ir-booking-overview,ul.sc-ir-booking-overview{list-style:none;margin:0;padding:0}dialog.sc-ir-booking-overview{padding:0}textarea.sc-ir-booking-overview{resize:vertical}input.sc-ir-booking-overview::placeholder,textarea.sc-ir-booking-overview::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-booking-overview,button.sc-ir-booking-overview{cursor:pointer}.sc-ir-booking-overview:disabled{cursor:default}audio.sc-ir-booking-overview,canvas.sc-ir-booking-overview,embed.sc-ir-booking-overview,iframe.sc-ir-booking-overview,img.sc-ir-booking-overview,object.sc-ir-booking-overview,svg.sc-ir-booking-overview,video.sc-ir-booking-overview{display:block;vertical-align:middle}img.sc-ir-booking-overview,video.sc-ir-booking-overview{height:auto;max-width:100%}[hidden].sc-ir-booking-overview{display:none}.sc-ir-booking-overview::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-booking-overview{display:block}.flex.sc-ir-booking-overview{display:flex}.border.sc-ir-booking-overview{border-width:1px}.sc-ir-booking-overview-h{display:block}.ct-menu-container.sc-ir-booking-overview{align-items:center;border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);display:flex;padding:0;width:-moz-fit-content;width:fit-content}.ct-menu-trigger.sc-ir-booking-overview{align-items:center;display:flex;justify-content:center}.ct-menu-button.sc-ir-booking-overview,.ct-menu-trigger.sc-ir-booking-overview{padding:.25rem .5rem}.ct-menu-button.sc-ir-booking-overview:dir(rtl){border-left:1px solid var(--gray-300,#d0d5dd)}.ct-menu-button.sc-ir-booking-overview:dir(ltr){border-right:1px solid var(--gray-300,#d0d5dd)}.booking-details-btn.sc-ir-booking-overview{border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);padding:.25rem .5rem}.group-hover[data-state=hovered].sc-ir-booking-overview{background:var(--gray-100,#f2f4f7)!important}.ir-table-cell[data-state=affiliate].sc-ir-booking-overview{padding-bottom:0}.ir-table-cell[data-state=booking-affiliate].sc-ir-booking-overview{padding-top:.5rem}.property-location.sc-ir-booking-overview{color:#475467;font-size:small;font-weight:500}.static.sc-ir-booking-overview{position:static}.relative.sc-ir-booking-overview{position:relative}.sticky.sc-ir-booking-overview{position:sticky}.top-0.sc-ir-booking-overview{top:0}.z-20.sc-ir-booking-overview{z-index:20}.m-0.sc-ir-booking-overview{margin:0}.mx-auto.sc-ir-booking-overview{margin-left:auto;margin-right:auto}.w-full.sc-ir-booking-overview{width:100%}.max-w-6xl.sc-ir-booking-overview{max-width:72rem}.flex-1.sc-ir-booking-overview{flex:1 1 0%}.flex-col.sc-ir-booking-overview{flex-direction:column}.space-y-5.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-booking-overview{padding:0}.px-4.sc-ir-booking-overview{padding-left:1rem;padding-right:1rem}.shadow.sc-ir-booking-overview{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6.sc-ir-booking-overview{padding-left:1.5rem;padding-right:1.5rem}}.absolute.sc-ir-booking-overview{position:absolute}.mb-2.sc-ir-booking-overview{margin-bottom:.5rem}.grid.sc-ir-booking-overview{display:grid}.h-10.sc-ir-booking-overview{height:2.5rem}.h-12.sc-ir-booking-overview{height:3rem}.h-14.sc-ir-booking-overview{height:3.5rem}.h-6.sc-ir-booking-overview{height:1.5rem}.h-64.sc-ir-booking-overview{height:16rem}.h-full.sc-ir-booking-overview{height:100%}.h-screen.sc-ir-booking-overview{height:100vh}.min-h-screen.sc-ir-booking-overview{min-height:100vh}.w-56.sc-ir-booking-overview{width:14rem}.w-80.sc-ir-booking-overview{width:20rem}.max-w-md.sc-ir-booking-overview{max-width:28rem}.animate-pulse.sc-ir-booking-overview{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center.sc-ir-booking-overview{place-content:center}.items-center.sc-ir-booking-overview{align-items:center}.justify-center.sc-ir-booking-overview{justify-content:center}.gap-4.sc-ir-booking-overview{gap:1rem}.self-center.sc-ir-booking-overview{align-self:center}.rounded-full.sc-ir-booking-overview{border-radius:9999px}.rounded-md.sc-ir-booking-overview{border-radius:.375rem}.bg-gray-200.sc-ir-booking-overview{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.p-4.sc-ir-booking-overview{padding:1rem}.py-4.sc-ir-booking-overview{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden.sc-ir-booking-overview{display:none}}.bottom-2.sc-ir-booking-overview{bottom:.5rem}.z-40.sc-ir-booking-overview{z-index:40}.mb-5.sc-ir-booking-overview{margin-bottom:1.25rem}.mt-14.sc-ir-booking-overview{margin-top:3.5rem}.w-auto.sc-ir-booking-overview{width:auto}.justify-end.sc-ir-booking-overview{justify-content:flex-end}.justify-between.sc-ir-booking-overview{justify-content:space-between}.bg-gray-700\\/80.sc-ir-booking-overview{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-booking-overview{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-booking-overview{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-booking-overview{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-booking-overview{padding-bottom:1.25rem}.text-base.sc-ir-booking-overview{font-size:1rem;line-height:1.5rem}.text-lg.sc-ir-booking-overview{font-size:1.125rem;line-height:1.75rem}.text-sm.sc-ir-booking-overview{font-size:.875rem;line-height:1.25rem}.font-medium.sc-ir-booking-overview{font-weight:500}.text-gray-200.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.filter.sc-ir-booking-overview{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg.sc-ir-booking-overview{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-booking-overview{width:15rem}.lg\\:gap-10.sc-ir-booking-overview{gap:2.5rem}.lg\\:text-2xl.sc-ir-booking-overview{font-size:1.5rem;line-height:2rem}}.sr-only.sc-ir-booking-overview{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}@media (min-width:1024px){.lg\\:size-7.sc-ir-booking-overview{height:1.75rem;width:1.75rem}}.table.sc-ir-booking-overview{display:table}.gap-2\\.5.sc-ir-booking-overview{gap:.625rem}.space-y-4.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-booking-overview{font-size:1.5rem;line-height:2rem}.font-semibold.sc-ir-booking-overview{font-weight:600}@media (min-width:768px){.md\\:sticky.sc-ir-booking-overview{position:sticky}.md\\:top-20.sc-ir-booking-overview{top:5rem}.md\\:flex.sc-ir-booking-overview{display:flex}.md\\:max-w-4xl.sc-ir-booking-overview{max-width:56rem}.md\\:max-w-md.sc-ir-booking-overview{max-width:28rem}.md\\:flex-row.sc-ir-booking-overview{flex-direction:row}.md\\:items-start.sc-ir-booking-overview{align-items:flex-start}.md\\:justify-end.sc-ir-booking-overview{justify-content:flex-end}}.capitalize.sc-ir-booking-overview{text-transform:capitalize}.text-end.sc-ir-booking-overview{text-align:end}.text-xs.sc-ir-booking-overview{font-size:.75rem;line-height:1rem}.text-gray-400.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5.sc-ir-booking-overview{height:1.25rem}.w-5.sc-ir-booking-overview{width:1.25rem}.mx-1.sc-ir-booking-overview{margin-left:.25rem;margin-right:.25rem}.hidden.sc-ir-booking-overview{display:none}.justify-start.sc-ir-booking-overview{justify-content:flex-start}.gap-1\\.5.sc-ir-booking-overview{gap:.375rem}@media (min-width:768px){.md\\:block.sc-ir-booking-overview{display:block}}.fixed.sc-ir-booking-overview{position:fixed}.resize.sc-ir-booking-overview{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-booking-overview{display:block}}.visible.sc-ir-booking-overview{visibility:visible}.mb-4.sc-ir-booking-overview{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-booking-overview{max-height:83vh}.overflow-y-auto.sc-ir-booking-overview{overflow-y:auto}.text-xl.sc-ir-booking-overview{font-size:1.25rem;line-height:1.75rem}.font-normal.sc-ir-booking-overview{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-booking-overview{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-booking-overview{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-booking-overview{padding:1.5rem}}.right-0.sc-ir-booking-overview{right:0}.right-4.sc-ir-booking-overview{right:1rem}.top-4.sc-ir-booking-overview{top:1rem}.z-50.sc-ir-booking-overview{z-index:50}.mt-8.sc-ir-booking-overview{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-booking-overview{min-width:70%}.max-w-full.sc-ir-booking-overview{max-width:100%}.translate-x-0.sc-ir-booking-overview{--tw-translate-x:0px}.translate-x-0.sc-ir-booking-overview,.translate-x-\\[100\\%\\].sc-ir-booking-overview{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-booking-overview{--tw-translate-x:100%}.bg-white.sc-ir-booking-overview{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-booking-overview,.shadow-md.sc-ir-booking-overview{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-booking-overview{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-booking-overview{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-booking-overview{transition-duration:.3s}.ease-in-out.sc-ir-booking-overview{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-booking-overview{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-booking-overview,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-booking-overview{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-booking-overview{--tw-translate-x:0px}.pointer-events-none.sc-ir-booking-overview{pointer-events:none}.inset-y-0.sc-ir-booking-overview{bottom:0;top:0}.end-1.sc-ir-booking-overview{inset-inline-end:.25rem}.start-2.sc-ir-booking-overview{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-booking-overview{padding-left:.3rem;padding-right:.3rem}.ps-9.sc-ir-booking-overview{padding-inline-start:2.25rem}.pt-1.sc-ir-booking-overview{padding-top:.25rem}.text-\\[\\#667085\\].sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.max-w-xs.sc-ir-booking-overview{max-width:20rem}.rounded-lg.sc-ir-booking-overview{border-radius:.5rem}.px-3.sc-ir-booking-overview{padding-left:.75rem;padding-right:.75rem}.size-\\[1\\.125rem\\].sc-ir-booking-overview{height:1.125rem;width:1.125rem}.h-\\[14px\\].sc-ir-booking-overview{height:14px}.h-\\[3rem\\].sc-ir-booking-overview{height:3rem}.w-\\[12\\.25px\\].sc-ir-booking-overview{width:12.25px}.gap-0\\.5.sc-ir-booking-overview{gap:.125rem}.border-0.sc-ir-booking-overview{border-width:0}.pt-14.sc-ir-booking-overview{padding-top:3.5rem}.lowercase.sc-ir-booking-overview{text-transform:lowercase}.text-red-500.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.shadow.sc-ir-booking-overview,.shadow-none.sc-ir-booking-overview{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-booking-overview{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-booking-overview{width:auto}.sm\\:w-fit.sc-ir-booking-overview{width:fit-content}.sm\\:border.sc-ir-booking-overview{border-width:1px}.sm\\:pt-4.sc-ir-booking-overview{padding-top:1rem}.sm\\:shadow-sm.sc-ir-booking-overview{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.size-4.sc-ir-booking-overview{height:1rem;width:1rem}.flex-wrap.sc-ir-booking-overview{flex-wrap:wrap}.gap-1.sc-ir-booking-overview{gap:.25rem}.gap-3.sc-ir-booking-overview{gap:.75rem}.space-y-2.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.pb-2.sc-ir-booking-overview{padding-bottom:.5rem}.text-gray-700.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.transform.sc-ir-booking-overview{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.outline.sc-ir-booking-overview{outline-style:solid}@media (min-width:640px){.sm\\:hidden.sc-ir-booking-overview{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.mx-2.sc-ir-booking-overview{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5.sc-ir-booking-overview{margin-top:.625rem}.space-y-1\\.5.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl.sc-ir-booking-overview{border-radius:.75rem}.bg-gray-100.sc-ir-booking-overview{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-booking-overview{padding:1.5rem}.pt-2.sc-ir-booking-overview{padding-top:.5rem}.leading-none.sc-ir-booking-overview{line-height:1}.tracking-tight.sc-ir-booking-overview{letter-spacing:-.025em}@media (min-width:640px){.sm\\:p-6.sc-ir-booking-overview{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-booking-overview{width:fit-content}.md\\:flex-row-reverse.sc-ir-booking-overview{flex-direction:row-reverse}}.ml-1.sc-ir-booking-overview{margin-left:.25rem}.line-clamp-3.sc-ir-booking-overview{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-booking-overview{display:inline-flex}.h-16.sc-ir-booking-overview{height:4rem}.w-16.sc-ir-booking-overview{width:4rem}.max-w-\\[60\\%\\].sc-ir-booking-overview{max-width:60%}.flex-row.sc-ir-booking-overview{flex-direction:row}.gap-2.sc-ir-booking-overview{gap:.5rem}.space-y-14.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-booking-overview{padding-left:0}.pt-0\\.5.sc-ir-booking-overview{padding-top:.125rem}.text-right.sc-ir-booking-overview{text-align:right}.text-\\[var\\(--ir-green\\)\\].sc-ir-booking-overview{color:var(--ir-green)}.text-gray-500.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-booking-overview{width:100%}.md\\:max-w-full.sc-ir-booking-overview{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-booking-overview{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-booking-overview{font-size:1.25rem;line-height:1.75rem}}.mt-4.sc-ir-booking-overview{margin-top:1rem}.aspect-\\[1\\/1\\].sc-ir-booking-overview{aspect-ratio:1/1}.h-\\[1px\\].sc-ir-booking-overview{height:1px}.max-h-32.sc-ir-booking-overview{max-height:8rem}.min-w-\\[1rem\\].sc-ir-booking-overview{min-width:1rem}.cursor-pointer.sc-ir-booking-overview{cursor:pointer}.space-y-1.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-booking-overview{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300.sc-ir-booking-overview{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-booking-overview{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-booking-overview,.bg-white.sc-ir-booking-overview{--tw-bg-opacity:1}.object-cover.sc-ir-booking-overview{object-fit:cover}.p-2.sc-ir-booking-overview{padding:.5rem}.text-center.sc-ir-booking-overview{text-align:center}.underline.sc-ir-booking-overview{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm.sc-ir-booking-overview{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-booking-overview{aspect-ratio:16/9}.lg\\:p-6.sc-ir-booking-overview{padding:1.5rem}}.h-80.sc-ir-booking-overview{height:20rem}.h-\\[80vh\\].sc-ir-booking-overview{height:80vh}.overflow-x-auto.sc-ir-booking-overview{overflow-x:auto}.overflow-x-hidden.sc-ir-booking-overview{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-booking-overview{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-booking-overview{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell.sc-ir-booking-overview{display:table-cell}}.h-24.sc-ir-booking-overview{height:6rem}.h-28.sc-ir-booking-overview{height:7rem}.gap-12.sc-ir-booking-overview{gap:3rem}.gap-8.sc-ir-booking-overview{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-booking-overview{max-width:24rem}}.text-start.sc-ir-booking-overview{text-align:start}.size-3.sc-ir-booking-overview{height:.75rem;width:.75rem}.w-72.sc-ir-booking-overview{width:18rem}.w-fit.sc-ir-booking-overview{width:fit-content}@media (min-width:640px){.sm\\:w-full.sc-ir-booking-overview{width:100%}}@media (min-width:768px){.md\\:p-4.sc-ir-booking-overview{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit.sc-ir-booking-overview{width:fit-content}}.ml-4.sc-ir-booking-overview{margin-left:1rem}.grid-cols-2.sc-ir-booking-overview{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end.sc-ir-booking-overview{align-items:flex-end}.gap-6.sc-ir-booking-overview{gap:1.5rem}.space-y-3.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-booking-overview{padding-bottom:1.5rem}.text-gray-800.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-booking-overview{flex-direction:row}.sm\\:items-center.sc-ir-booking-overview{align-items:center}.sm\\:text-sm.sc-ir-booking-overview{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-booking-overview{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-6.sc-ir-booking-overview{grid-column:span 6/span 6}.h-4.sc-ir-booking-overview{height:1rem}.w-12.sc-ir-booking-overview{width:3rem}.place-items-center.sc-ir-booking-overview{place-items:center}.pt-2.sc-ir-booking-overview,.py-2.sc-ir-booking-overview{padding-top:.5rem}.pt-4.sc-ir-booking-overview{padding-top:1rem}.text-slate-900.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2.sc-ir-booking-overview>.sc-ir-booking-overview:not([hidden])~.sc-ir-booking-overview:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0.sc-ir-booking-overview{padding:0}}.h-72.sc-ir-booking-overview{height:18rem}.col-span-2.sc-ir-booking-overview{grid-column:span 2/span 2}.mb-6.sc-ir-booking-overview{margin-bottom:1.5rem}.mt-6.sc-ir-booking-overview{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-booking-overview{min-height:80vh}.max-w-xl.sc-ir-booking-overview{max-width:36rem}@media (min-width:768px){.md\\:grid.sc-ir-booking-overview{display:grid}.md\\:grid-cols-2.sc-ir-booking-overview{grid-template-columns:repeat(2,minmax(0,1fr))}}.-bottom-0.sc-ir-booking-overview{bottom:0}.z-0.sc-ir-booking-overview{z-index:0}.z-10.sc-ir-booking-overview{z-index:10}.mb-1.sc-ir-booking-overview{margin-bottom:.25rem}.aspect-\\[16\\/9\\].sc-ir-booking-overview{aspect-ratio:16/9}.size-10.sc-ir-booking-overview{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\].sc-ir-booking-overview{max-height:80vh}.overflow-hidden.sc-ir-booking-overview{overflow:hidden}.bg-white\\/80.sc-ir-booking-overview{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-booking-overview{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-booking-overview,.py-4.sc-ir-booking-overview{padding-bottom:1rem}.pt-0.sc-ir-booking-overview{padding-top:0}.ordinal.sc-ir-booking-overview{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-booking-overview:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-booking-overview{max-height:200px}.md\\:w-auto.sc-ir-booking-overview{width:auto}.md\\:pt-0.sc-ir-booking-overview{padding-top:0}.md\\:pt-4.sc-ir-booking-overview{padding-top:1rem}.md\\:text-xl.sc-ir-booking-overview{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-booking-overview{max-height:250px}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-booking-overview{color:hsl(var(--brand-600))}.size-\\[18px\\].sc-ir-booking-overview{height:18px;width:18px}.text-slate-500.sc-ir-booking-overview{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-booking-overview{padding:1rem}}.border-solid.sc-ir-booking-overview{border-style:solid}.mb-2\\.5.sc-ir-booking-overview{margin-bottom:.625rem}.w-\\[45\\%\\].sc-ir-booking-overview{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-booking-overview{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-booking-overview{color:var(--gray-500)}";
const IrBookingOverviewStyle0 = irBookingOverviewCss;

const IrBookingOverview = /*@__PURE__*/ proxyCustomElement(class IrBookingOverview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bl_routing = createEvent(this, "bl_routing", 7);
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.bookingListingAppService = new BookingListingAppService();
        this.paymentService = new PaymentService();
        this.propertyid = undefined;
        this.language = undefined;
        this.maxPages = 10;
        this.showAllBookings = true;
        this.be = false;
        this.aff = false;
        this.isLoading = false;
        this.bookings = [];
        this.currentPage = 1;
        this.total_count = 1;
        this.bookingNumber = null;
        this.page_mode = 'multi';
        this.activeLink = 'single_booking';
        this.selectedBooking = undefined;
        this.selectedMenuIds = {};
        this.hoveredBooking = null;
        this.cancelationMessage = undefined;
        this.amountToBePayed = undefined;
    }
    async componentWillLoad() {
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        this.initializeServices();
        this.initializeApp();
    }
    initializeServices() {
        if (!this.showAllBookings) {
            this.page_mode = 'multi';
        }
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let requests = [];
            if (this.bookingNumber && this.page_mode === 'single') {
                requests.unshift(this.propertyService.getExposedBooking({ booking_nbr: this.bookingNumber, language: this.language, currency: null }, false));
            }
            else if (this.page_mode === 'multi') {
                requests.unshift(this.getBookings());
            }
            const [bookings] = await Promise.all(requests);
            this.booking = this.page_mode === 'single' ? bookings : undefined;
            this.bookings = this.page_mode === 'single' ? [bookings] : bookings;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async getBookings() {
        try {
            this.isLoading = true;
            const start_row = (this.currentPage - 1) * this.maxPages;
            const end_row = start_row + this.maxPages;
            const { bookings, total_count } = await this.bookingListingService.getExposedGuestBookings({
                property_id: this.propertyid,
                start_row,
                end_row,
                total_count: 0,
                language: app_store.userPreferences.language_id,
            });
            this.total_count = total_count;
            const newIds = {};
            bookings.forEach(b => {
                newIds[b.booking_nbr] = 1;
            });
            this.selectedMenuIds = Object.assign({}, newIds);
            return bookings;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    modifyCancelBooking(booking_nbr) {
        const bookings = [...this.bookings];
        const selectedBookingIdx = bookings.findIndex(b => b.booking_nbr === booking_nbr);
        if (selectedBookingIdx === -1) {
            return;
        }
        bookings[selectedBookingIdx] = Object.assign(Object.assign({}, bookings[selectedBookingIdx]), { status: {
                code: '003',
                description: 'Cancelled',
            } });
        this.bookings = [...bookings];
    }
    getBadgeVariant(code) {
        if (code === '001') {
            return 'pending';
        }
        else if (code === '002') {
            return 'success';
        }
        return 'error';
    }
    async handlePageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentPage = e.detail;
        this.bookings = await this.getBookings();
    }
    async handleLinkChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeLink = e.detail;
        if (this.activeLink === 'all_booking') {
            this.page_mode = 'multi';
            this.bookings = await this.getBookings();
        }
        else {
            if (this.booking) {
                this.page_mode = 'single';
                this.bookings = [this.booking];
            }
        }
    }
    async handleLanguageChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const [bookings] = await Promise.all([
            this.getBookings(),
            this.commonService.getExposedLanguage(),
            this.propertyService.getExposedProperty({
                id: app_store.app_data.property_id,
                language: e.detail,
                aname: app_store.app_data.aName,
                perma_link: app_store.app_data.perma_link,
            }),
        ]);
        this.bookings = bookings;
    }
    async fetchCancelationMessage(id, roomTypeId) {
        var _a;
        const { data, message } = await this.paymentService.fetchCancelationMessage({ id, roomTypeId, bookingNbr: this.selectedBooking.booking_nbr, showCancelation: false });
        const cancelationBrackets = data.find(d => d.type === 'cancelation' && d.brackets);
        if (cancelationBrackets === null || cancelationBrackets === void 0 ? void 0 : cancelationBrackets.brackets) {
            this.amountToBePayed = ((_a = this.paymentService.findClosestDate(cancelationBrackets === null || cancelationBrackets === void 0 ? void 0 : cancelationBrackets.brackets)) === null || _a === void 0 ? void 0 : _a.gross_amount) || null;
        }
        this.cancelationMessage = message;
    }
    async handleBookingCancelation() {
        await this.fetchCancelationMessage(0, 0);
        this.bookingCancelation.openDialog();
    }
    handleMenuItemChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const v = e.detail;
        this.handleBlEvents(v);
        this.selectedMenuIds[this.selectedBooking.booking_nbr] = v;
    }
    handleBlEvents(id) {
        switch (id) {
            case 1:
                return this.bl_routing.emit({ route: 'booking-details', params: { booking: this.selectedBooking } });
            case 2:
                return this.processPayment();
            case 3:
                return this.handleBookingCancelation();
            default:
                return null;
        }
    }
    async processPayment() {
        var _a;
        const paymentCode = this.selectedBooking.extras.find(e => e.key === 'payment_code');
        if (!paymentCode) {
            console.error('missing paymentcode');
            return;
        }
        const prePaymentAmount = this.selectedBooking.extras.find(e => e.key === 'prepayment_amount');
        if (!prePaymentAmount) {
            console.error('missing prepayment amount');
            return;
        }
        const paymentMethod = app_store.property.allowed_payment_methods.find(apm => apm.code === paymentCode.value);
        if (!paymentMethod) {
            console.error('Invalid payment method');
            return;
        }
        // const { amount } = await this.paymentService.GetExposedApplicablePolicies({
        //   book_date: new Date(this.selectedBooking.booked_on.date),
        //   token: app_store.app_data.token,
        //   params: {
        //     booking_nbr: this.selectedBooking.booking_nbr,
        //     property_id: app_store.app_data.property_id,
        //     room_type_id: 0,
        //     rate_plan_id: 0,
        //     currency_id: this.selectedBooking.currency.id,
        //     language: app_store.userPreferences.language_id,
        //   },
        // });
        const { amount } = await this.paymentService.getBookingPrepaymentAmount(this.selectedBooking);
        if (amount || Number(prePaymentAmount.value) > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token: app_store.app_data.token,
                params: {
                    booking_nbr: this.selectedBooking.booking_nbr,
                    amount: (_a = Number(amount || prePaymentAmount.value)) !== null && _a !== void 0 ? _a : 0,
                    currency_id: this.selectedBooking.currency.id,
                    email: this.selectedBooking.guest.email,
                    pgw_id: paymentMethod.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => runScriptAndRemove(script),
            });
        }
    }
    renderMenuTrigger() {
        return (h("div", { slot: "menu-trigger", class: "ct-menu-trigger" }, ' ', h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))));
    }
    // private handlePayment() {
    // }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (this.isLoading) {
            return (h("div", { class: "flex h-screen w-full flex-col place-content-center" }, h("div", { class: " flex h-screen flex-col gap-4 md:hidden" }, [...Array(5)].map((_, idx) => (h("ir-skeleton", { key: idx, class: "h-80 w-full" })))), h("div", { class: "hidden h-screen flex-col md:flex" }, h("ir-skeleton", { class: "h-[80vh] w-full" }))));
        }
        const totalPages = Math.round(this.total_count / this.maxPages);
        return (h(Host, null, h("section", { class: `main-container ${!this.be ? 'main-container-padding' : ''}` }, h("div", { class: "ir-table-container mx-auto hidden max-w-6xl flex-1 overflow-x-hidden p-4 shadow-md md:block" }, this.showAllBookings && (h("ir-booking-header", { bookingNumber: this.bookingNumber, activeLink: this.activeLink, mode: this.bookingNumber ? 'multi' : 'single' })), h("div", { class: "max-w-full overflow-x-auto" }, h("table", { class: "ir-table" }, h("thead", null, h("tr", { class: "ir-table-header" }, h("th", { class: "ir-table-head capitalize" }, localizedWords.entries.Lcz_status), h("th", { class: "ir-table-head" }, localizedWords.entries.Lcz_BookingReference), h("th", { class: "ir-table-head md:hidden lg:table-cell" }, localizedWords.entries.Lcz_BookingDate), h("th", { class: "ir-table-head" }, localizedWords.entries.Lcz_CheckIn), h("th", { class: "ir-table-head" }, localizedWords.entries.Lcz_Duration), h("th", { class: "ir-table-head" }, localizedWords.entries.Lcz_Totalprice), h("th", { class: "ir-table-head sr-only" }, "pay now"))), h("tbody", { class: " " }, (_a = this.bookings) === null || _a === void 0 ? void 0 : _a.map(booking => {
            var _a, _b;
            const totalNights = dateFns.differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(booking);
            const menuItems = [];
            if (payment.show) {
                const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
                if (prepayment_amount) {
                    menuItems.push({ id: 2, item: payment.label });
                }
            }
            if (cancel.show) {
                menuItems.push({ id: 3, item: cancel.label });
            }
            if (view.show) {
                menuItems.push({ id: 1, item: view.label });
            }
            this.selectedMenuIds[booking.booking_nbr] = (_a = menuItems[0]) === null || _a === void 0 ? void 0 : _a.id;
            return (h(Fragment, null, this.aff && (h("tr", { class: "ir-table-row group-hover", onMouseEnter: () => {
                    this.hoveredBooking = booking.booking_nbr;
                }, onMouseLeave: () => (this.hoveredBooking = null), key: booking.booking_nbr, "data-state": this.hoveredBooking === booking.booking_nbr ? 'hovered' : '' }, h("th", { class: "ir-table-cell", "data-state": "affiliate", colSpan: 7 }, booking.property.name, " ", h("span", { class: 'property-location' }, formatFullLocation(booking.property))))), h("tr", { class: "ir-table-row group-hover", onMouseEnter: () => {
                    this.hoveredBooking = booking.booking_nbr;
                }, onMouseLeave: () => (this.hoveredBooking = null), key: booking.booking_nbr, "data-state": this.hoveredBooking === booking.booking_nbr ? 'hovered' : '' }, h("td", { class: "ir-table-cell", "data-state": this.aff ? 'booking-affiliate' : '' }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "ir-table-cell", "data-state": this.aff ? 'booking-affiliate' : '' }, booking.booking_nbr), h("td", { class: "ir-table-cell  md:hidden lg:table-cell", "data-state": this.aff ? 'booking-affiliate' : '' }, dateFns.format(new Date(booking.booked_on.date), 'dd-MMM-yyyy', { locale: app_store.selectedLocale })), h("td", { class: "ir-table-cell", "data-state": this.aff ? 'booking-affiliate' : '' }, dateFns.format(new Date(booking.from_date), 'dd-MMM-yyyy', { locale: app_store.selectedLocale })), h("td", { class: "ir-table-cell lowercase", "data-state": this.aff ? 'booking-affiliate' : '' }, totalNights, " ", totalNights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("td", { class: "ir-table-cell", "data-state": this.aff ? 'booking-affiliate' : '' }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "ir-table-cell", "data-state": this.aff ? 'booking-affiliate' : '' }, payment.show || cancel.show ? (h("div", { class: 'ct-menu-container' }, h("button", { onClick: () => {
                    var _a;
                    this.selectedBooking = booking;
                    this.handleBlEvents((_a = this.selectedMenuIds[booking.booking_nbr]) !== null && _a !== void 0 ? _a : menuItems[0].id);
                }, class: "ct-menu-button" }, (_b = menuItems.find(p => p.id === this.selectedMenuIds[booking.booking_nbr])) === null || _b === void 0 ? void 0 : _b.item), h("ir-menu", { onMenuItemClick: e => {
                    this.selectedBooking = booking;
                    this.handleMenuItemChange(e);
                }, data: menuItems }, this.renderMenuTrigger()))) : (view.show && (h("button", { class: "booking-details-btn", onClick: () => {
                    this.bl_routing.emit({
                        route: 'booking-details',
                        params: {
                            booking,
                        },
                    });
                } }, localizedWords.entries.Lcz_BookingDetails)))))));
        })))), this.page_mode === 'multi' && (h("div", { class: "px-[1.25rem] pt-[1rem] " }, h("ir-pagination", { total: totalPages, current: this.currentPage })))), h("section", { class: cn('flex-1 space-y-4  md:hidden', {
                'px-4': !this.be,
            }) }, this.showAllBookings && h("ir-booking-header", { bookingNumber: this.bookingNumber, mode: this.bookingNumber ? 'multi' : 'single' }), (_b = this.bookings) === null || _b === void 0 ? void 0 :
            _b.map(booking => (h("ir-booking-card", { aff: this.aff, booking: booking, key: booking.booking_nbr, onOptionClicked: (e) => {
                    this.selectedBooking = booking;
                    const { id } = e.detail;
                    this.handleBlEvents(id);
                } }))), this.page_mode === 'multi' && h("ir-pagination", { total: totalPages, current: this.currentPage })), h("ir-booking-cancelation", { ref: el => (this.bookingCancelation = el), booking: this.selectedBooking, booking_nbr: (_c = this.selectedBooking) === null || _c === void 0 ? void 0 : _c.booking_nbr, currency: { code: (_d = this.selectedBooking) === null || _d === void 0 ? void 0 : _d.currency.code, id: (_e = this.selectedBooking) === null || _e === void 0 ? void 0 : _e.currency.id }, cancelation: this.cancelationMessage || ((_f = this.selectedBooking) === null || _f === void 0 ? void 0 : _f.rooms[0].rateplan.cancelation), onCancelationResult: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { state, booking_nbr } = e.detail;
                if (state === 'success') {
                    this.modifyCancelBooking(booking_nbr);
                }
            } }))));
    }
    static get style() { return IrBookingOverviewStyle0; }
}, [2, "ir-booking-overview", {
        "propertyid": [2],
        "language": [1],
        "maxPages": [2, "max-pages"],
        "showAllBookings": [4, "show-all-bookings"],
        "be": [4],
        "aff": [4],
        "isLoading": [32],
        "bookings": [32],
        "currentPage": [32],
        "total_count": [32],
        "bookingNumber": [32],
        "page_mode": [32],
        "activeLink": [32],
        "selectedBooking": [32],
        "selectedMenuIds": [32],
        "hoveredBooking": [32],
        "cancelationMessage": [32],
        "amountToBePayed": [32]
    }, [[0, "pageChange", "handlePageChange"], [0, "linkChanged", "handleLinkChanged"], [16, "languageChanged", "handleLanguageChanged"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-overview", "ir-alert-dialog", "ir-badge", "ir-booking-cancelation", "ir-booking-card", "ir-booking-header", "ir-button", "ir-icons", "ir-menu", "ir-pagination", "ir-skeleton"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-overview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingOverview);
            }
            break;
        case "ir-alert-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-booking-cancelation":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-booking-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingOverview as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-overview2.js.map