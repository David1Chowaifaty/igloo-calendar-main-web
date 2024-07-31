import { r as registerInstance, h } from './index-3ddfa666.js';
import { C as CommonService } from './common.service-628e0474.js';
import { P as PropertyService } from './property.service-64b0f568.js';
import { a as axios } from './Token-ab346ee1.js';
import { e as getUserPrefernce, v as validateCoupon, f as validateAgentCode, h as matchLocale, s as setDefaultLocale, j as checkAffiliate, u as updateRoomParams, m as modifyBookingStore, b as booking_store } from './utils-377d039e.js';
import { a as app_store, u as updateUserPreference, c as changeLocale } from './app.store-8e486326.js';
import { A as AvailabiltyService } from './availability.service-00b414ce.js';
import { c as checkout_store } from './checkout.store-56c3b68b.js';
import { v as v4 } from './v4-964634d6.js';
import { d as dateFns } from './index-ea8ec4f0.js';
import './localization.store-f417f370.js';
import './index-6014a5e7.js';
import './payment.service-528be289.js';
import './index-11c63a67.js';
import './index-1e9e0a3e.js';

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

const irBookingEngineCss = "*.sc-ir-be,.sc-ir-be:after,.sc-ir-be:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-be:after,.sc-ir-be:before{--tw-content:\"\"}.sc-ir-be-h,html.sc-ir-be{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-be{line-height:inherit;margin:0}hr.sc-ir-be{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-be:where([title]){text-decoration:underline dotted}h1.sc-ir-be,h2.sc-ir-be,h3.sc-ir-be,h4.sc-ir-be,h5.sc-ir-be,h6.sc-ir-be{font-size:inherit;font-weight:inherit}a.sc-ir-be{color:inherit;text-decoration:inherit}b.sc-ir-be,strong.sc-ir-be{font-weight:bolder}code.sc-ir-be,kbd.sc-ir-be,pre.sc-ir-be,samp.sc-ir-be{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-be{font-size:80%}sub.sc-ir-be,sup.sc-ir-be{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-be{bottom:-.25em}sup.sc-ir-be{top:-.5em}table.sc-ir-be{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-be,input.sc-ir-be,optgroup.sc-ir-be,select.sc-ir-be,textarea.sc-ir-be{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-be,select.sc-ir-be{text-transform:none}[type=button].sc-ir-be,[type=reset].sc-ir-be,[type=submit].sc-ir-be,button.sc-ir-be{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-be:-moz-focusring{outline:auto}.sc-ir-be:-moz-ui-invalid{box-shadow:none}progress.sc-ir-be{vertical-align:baseline}.sc-ir-be::-webkit-inner-spin-button,.sc-ir-be::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-be{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-be::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-be::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-be{display:list-item}blockquote.sc-ir-be,dd.sc-ir-be,dl.sc-ir-be,fieldset.sc-ir-be,figure.sc-ir-be,h1.sc-ir-be,h2.sc-ir-be,h3.sc-ir-be,h4.sc-ir-be,h5.sc-ir-be,h6.sc-ir-be,hr.sc-ir-be,p.sc-ir-be,pre.sc-ir-be{margin:0}fieldset.sc-ir-be,legend.sc-ir-be{padding:0}menu.sc-ir-be,ol.sc-ir-be,ul.sc-ir-be{list-style:none;margin:0;padding:0}dialog.sc-ir-be{padding:0}textarea.sc-ir-be{resize:vertical}input.sc-ir-be::placeholder,textarea.sc-ir-be::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-be,button.sc-ir-be{cursor:pointer}.sc-ir-be:disabled{cursor:default}audio.sc-ir-be,canvas.sc-ir-be,embed.sc-ir-be,iframe.sc-ir-be,img.sc-ir-be,object.sc-ir-be,svg.sc-ir-be,video.sc-ir-be{display:block;vertical-align:middle}img.sc-ir-be,video.sc-ir-be{height:auto;max-width:100%}[hidden].sc-ir-be{display:none}.sc-ir-be::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-be{display:block}.sc-ir-be-h{display:block;margin:0;padding:0}.static.sc-ir-be{position:static}.relative.sc-ir-be{position:relative}.sticky.sc-ir-be{position:sticky}.top-0.sc-ir-be{top:0}.z-50.sc-ir-be{z-index:50}.m-0.sc-ir-be{margin:0}.mx-auto.sc-ir-be{margin-left:auto;margin-right:auto}.flex.sc-ir-be{display:flex}.w-full.sc-ir-be{width:100%}.max-w-6xl.sc-ir-be{max-width:72rem}.flex-1.sc-ir-be{flex:1 1 0%}.flex-col.sc-ir-be{flex-direction:column}.space-y-5.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-be{padding:0}.px-4.sc-ir-be{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-be{padding-left:1.5rem;padding-right:1.5rem}}.h-full.sc-ir-be{height:100%}.shadow.sc-ir-be{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.top-\\[20\\%\\].sc-ir-be{top:20%}.aspect-\\[1\\/1\\].sc-ir-be{aspect-ratio:1/1}.h-\\[80vh\\].sc-ir-be{height:80vh}.max-h-32.sc-ir-be{max-height:8rem}.max-h-52.sc-ir-be{max-height:13rem}.animate-pulse.sc-ir-be{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap.sc-ir-be{flex-wrap:wrap}.items-center.sc-ir-be{align-items:center}.justify-center.sc-ir-be{justify-content:center}.justify-between.sc-ir-be{justify-content:space-between}.gap-1.sc-ir-be{gap:.25rem}.gap-16.sc-ir-be{gap:4rem}.gap-4.sc-ir-be{gap:1rem}.space-y-2.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200.sc-ir-be{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover.sc-ir-be{object-fit:cover}.pt-2.sc-ir-be{padding-top:.5rem}.text-center.sc-ir-be{text-align:center}.text-lg.sc-ir-be{font-size:1.125rem;line-height:1.75rem}.text-sm.sc-ir-be{font-size:.875rem;line-height:1.25rem}.text-xs.sc-ir-be{font-size:.75rem;line-height:1rem}.font-medium.sc-ir-be{font-weight:500}.text-green-500.sc-ir-be{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.outline.sc-ir-be{outline-style:solid}@media (min-width:768px){.md\\:w-fit.sc-ir-be{width:fit-content}.md\\:flex-row.sc-ir-be{flex-direction:row}.md\\:items-center.sc-ir-be{align-items:center}.md\\:text-right.sc-ir-be{text-align:right}}.size-6.sc-ir-be{height:1.5rem;width:1.5rem}.pb-2.sc-ir-be{padding-bottom:.5rem}.font-semibold.sc-ir-be{font-weight:600}.text-red-500.sc-ir-be{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.sr-only.sc-ir-be{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table.sc-ir-be{display:table}.grid.sc-ir-be{display:grid}.absolute.sc-ir-be{position:absolute}.right-3.sc-ir-be{right:.75rem}.top-3.sc-ir-be{top:.75rem}.hidden.sc-ir-be{display:none}.resize.sc-ir-be{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-be{display:block}}@media (min-width:768px){.md\\:hidden.sc-ir-be{display:none}}.h-5.sc-ir-be{height:1.25rem}.w-5.sc-ir-be{width:1.25rem}.bottom-2.sc-ir-be{bottom:.5rem}.z-40.sc-ir-be{z-index:40}.mb-5.sc-ir-be{margin-bottom:1.25rem}.mt-14.sc-ir-be{margin-top:3.5rem}.w-auto.sc-ir-be{width:auto}.justify-end.sc-ir-be{justify-content:flex-end}.rounded-md.sc-ir-be{border-radius:.375rem}.bg-gray-700\\/80.sc-ir-be{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-be{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-be{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-be{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-be{padding-bottom:1.25rem}.text-base.sc-ir-be{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-be{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-be{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-be{width:15rem}.lg\\:gap-10.sc-ir-be{gap:2.5rem}.lg\\:text-2xl.sc-ir-be{font-size:1.5rem;line-height:2rem}}.h-64.sc-ir-be{height:16rem}.h-screen.sc-ir-be{height:100vh}.max-w-md.sc-ir-be{max-width:28rem}.place-content-center.sc-ir-be{place-content:center}.gap-2.sc-ir-be{gap:.5rem}.gap-2\\.5.sc-ir-be{gap:.625rem}.space-y-4.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-be{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-be{position:sticky}.md\\:top-20.sc-ir-be{top:5rem}.md\\:flex.sc-ir-be{display:flex}.md\\:max-w-4xl.sc-ir-be{max-width:56rem}.md\\:max-w-md.sc-ir-be{max-width:28rem}.md\\:items-start.sc-ir-be{align-items:flex-start}.md\\:justify-end.sc-ir-be{justify-content:flex-end}}.text-end.sc-ir-be{text-align:end}.text-gray-400.sc-ir-be{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.mx-1.sc-ir-be{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-be{justify-content:flex-start}.filter.sc-ir-be{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:1024px){.lg\\:size-7.sc-ir-be{height:1.75rem;width:1.75rem}}.max-w-xs.sc-ir-be{max-width:20rem}.rounded-lg.sc-ir-be{border-radius:.5rem}.px-3.sc-ir-be{padding-left:.75rem;padding-right:.75rem}.fixed.sc-ir-be{position:fixed}.right-0.sc-ir-be{right:0}.right-4.sc-ir-be{right:1rem}.top-4.sc-ir-be{top:1rem}.mt-8.sc-ir-be{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-be{min-width:70%}.max-w-full.sc-ir-be{max-width:100%}.translate-x-0.sc-ir-be{--tw-translate-x:0px}.translate-x-0.sc-ir-be,.translate-x-\\[100\\%\\].sc-ir-be{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-be{--tw-translate-x:100%}.bg-white.sc-ir-be{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-be,.shadow-md.sc-ir-be{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-be{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-be{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-be{transition-duration:.3s}.ease-in-out.sc-ir-be{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-be{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-be,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-be{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-be{--tw-translate-x:0px}.mb-4.sc-ir-be{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-be{max-height:83vh}.overflow-y-auto.sc-ir-be{overflow-y:auto}.p-4.sc-ir-be{padding:1rem}.text-xl.sc-ir-be{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-be{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-be{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-be{padding:1.5rem}}.visible.sc-ir-be{visibility:visible}.pointer-events-none.sc-ir-be{pointer-events:none}.inset-y-0.sc-ir-be{bottom:0;top:0}.end-1.sc-ir-be{inset-inline-end:.25rem}.start-2.sc-ir-be{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-be{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-be{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-be{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-be{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-be{padding-inline-end:1.75rem}.ps-9.sc-ir-be{padding-inline-start:2.25rem}.pt-1.sc-ir-be{padding-top:.25rem}.text-\\[1rem\\].sc-ir-be{font-size:1rem}.text-\\[\\#667085\\].sc-ir-be{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-be{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.size-\\[18px\\].sc-ir-be{height:18px;width:18px}.h-\\[14px\\].sc-ir-be{height:14px}.h-\\[3rem\\].sc-ir-be{height:3rem}.w-\\[12\\.25px\\].sc-ir-be{width:12.25px}.gap-0.sc-ir-be{gap:0}.gap-0\\.5.sc-ir-be{gap:.125rem}.border-0.sc-ir-be{border-width:0}.pt-14.sc-ir-be{padding-top:3.5rem}.shadow.sc-ir-be,.shadow-none.sc-ir-be{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-be{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-be{width:auto}.sm\\:w-fit.sc-ir-be{width:fit-content}.sm\\:border.sc-ir-be{border-width:1px}.sm\\:pt-4.sc-ir-be{padding-top:1rem}.sm\\:shadow-sm.sc-ir-be{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.-bottom-0.sc-ir-be{bottom:0}.z-0.sc-ir-be{z-index:0}.mb-1.sc-ir-be{margin-bottom:.25rem}.mb-2.sc-ir-be{margin-bottom:.5rem}.size-10.sc-ir-be{height:2.5rem;width:2.5rem}.size-3.sc-ir-be{height:.75rem;width:.75rem}.h-48.sc-ir-be{height:12rem}.max-h-\\[80vh\\].sc-ir-be{max-height:80vh}.cursor-pointer.sc-ir-be{cursor:pointer}.items-end.sc-ir-be{align-items:flex-end}.overflow-hidden.sc-ir-be{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-be{border-radius:var(--radius,8px)}.bg-gray-300.sc-ir-be{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80.sc-ir-be{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-be{padding-left:.5rem;padding-right:.5rem}.py-4.sc-ir-be{padding-top:1rem}.pb-4.sc-ir-be,.py-4.sc-ir-be{padding-bottom:1rem}.pt-0.sc-ir-be{padding-top:0}.font-normal.sc-ir-be{font-weight:400}.ordinal.sc-ir-be{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700.sc-ir-be{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white.sc-ir-be{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-be:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:block.sc-ir-be{display:block}.md\\:max-h-\\[200px\\].sc-ir-be{max-height:200px}.md\\:w-auto.sc-ir-be{width:auto}.md\\:p-4.sc-ir-be{padding:1rem}.md\\:pt-0.sc-ir-be{padding-top:0}.md\\:pt-4.sc-ir-be{padding-top:1rem}.md\\:text-xl.sc-ir-be{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-be{max-height:250px}}.bg-gray-100.sc-ir-be{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-be{padding:1.5rem}.text-start.sc-ir-be{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-be{justify-content:space-between}.md\\:gap-8.sc-ir-be{gap:2rem}}.col-span-6.sc-ir-be{grid-column:span 6/span 6}.h-4.sc-ir-be{height:1rem}.h-8.sc-ir-be{height:2rem}.w-12.sc-ir-be{width:3rem}.place-items-center.sc-ir-be{place-items:center}.gap-\\[2px\\].sc-ir-be{gap:2px}.space-y-1.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.text-slate-900.sc-ir-be{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.h-10.sc-ir-be{height:2.5rem}.h-14.sc-ir-be{height:3.5rem}.h-24.sc-ir-be{height:6rem}.h-28.sc-ir-be{height:7rem}.gap-12.sc-ir-be{gap:3rem}.gap-8.sc-ir-be{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-be{max-width:24rem}.lg\\:flex-row.sc-ir-be{flex-direction:row}}.ml-1.sc-ir-be{margin-left:.25rem}.line-clamp-3.sc-ir-be{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-be{display:inline-flex}.size-4.sc-ir-be{height:1rem;width:1rem}.h-16.sc-ir-be{height:4rem}.h-6.sc-ir-be{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-be{max-width:60%}.flex-row.sc-ir-be{flex-direction:row}.gap-3.sc-ir-be{gap:.75rem}.space-y-14.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-be{padding-left:0}.pt-0\\.5.sc-ir-be{padding-top:.125rem}.text-right.sc-ir-be{text-align:right}.text-gray-500.sc-ir-be{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-be{width:100%}.md\\:max-w-full.sc-ir-be{max-width:100%}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-be{font-size:1.25rem;line-height:1.75rem}}.mt-4.sc-ir-be{margin-top:1rem}.h-\\[1px\\].sc-ir-be{height:1px}.w-56.sc-ir-be{width:14rem}.min-w-\\[1rem\\].sc-ir-be{min-width:1rem}.rounded-t-md.sc-ir-be{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-be{border-width:1px}.border-gray-300.sc-ir-be{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.p-2.sc-ir-be{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm.sc-ir-be{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-be{aspect-ratio:16/9}.lg\\:p-6.sc-ir-be{padding:1.5rem}}.w-72.sc-ir-be{width:18rem}.w-fit.sc-ir-be{width:fit-content}.leading-none.sc-ir-be{line-height:1}.tracking-tight.sc-ir-be{letter-spacing:-.025em}.mx-2.sc-ir-be{margin-left:.5rem;margin-right:.5rem}.mt-2.sc-ir-be{margin-top:.5rem}.mt-2\\.5.sc-ir-be{margin-top:.625rem}.space-y-1\\.5.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl.sc-ir-be{border-radius:.75rem}.h-\\[50vh\\].sc-ir-be{height:50vh}.overflow-x-auto.sc-ir-be{overflow-x:auto}.overflow-x-hidden.sc-ir-be{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-be{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-be{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell.sc-ir-be{display:table-cell}}.ml-4.sc-ir-be{margin-left:1rem}.grid-cols-2.sc-ir-be{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-be>.sc-ir-be:not([hidden])~.sc-ir-be:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-be{padding-bottom:1.5rem}.text-gray-800.sc-ir-be{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-be{flex-direction:row}.sm\\:items-center.sc-ir-be{align-items:center}.sm\\:text-sm.sc-ir-be{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-be{grid-template-columns:repeat(3,minmax(0,1fr))}}.transform.sc-ir-be{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.col-span-2.sc-ir-be{grid-column:span 2/span 2}.mb-6.sc-ir-be{margin-bottom:1.5rem}.mt-6.sc-ir-be{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-be{min-height:80vh}.max-w-xl.sc-ir-be{max-width:36rem}@media (min-width:768px){.md\\:grid.sc-ir-be{display:grid}.md\\:grid-cols-2.sc-ir-be{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:640px){.sm\\:p-6.sc-ir-be{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-be{flex-direction:row-reverse}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-be{color:hsl(var(--brand-600))}.border-solid.sc-ir-be{border-style:solid}.text-slate-500.sc-ir-be{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-be{padding:1rem}}.mb-2\\.5.sc-ir-be{margin-bottom:.625rem}.w-\\[45\\%\\].sc-ir-be{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-be{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-be{color:var(--gray-500)}";
const IrBeStyle0 = irBookingEngineCss;

const IrBookingEngine = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.availabiltyService = new AvailabiltyService();
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1NTQ5OTIsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY0ExSGU2MXl2YlhuIiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSJ9.ySJjLhWwUDeP4X8LIJcbsjO74y_UgMHwRDpNrCClndc';
        this.propertyId = undefined;
        this.injected = undefined;
        this.rt_id = null;
        this.rp_id = null;
        this.perma_link = null;
        this.p = null;
        this.checkin = undefined;
        this.checkout = undefined;
        this.language = undefined;
        this.adults = undefined;
        this.child = undefined;
        this.cur = undefined;
        this.aff = undefined;
        this.stag = undefined;
        this.property = null;
        this.source = null;
        this.version = '2.0';
        this.hideGoogleSignIn = true;
        this.coupon = undefined;
        this.loyalty = undefined;
        this.agent_code = undefined;
        this.selectedLocale = undefined;
        this.currencies = undefined;
        this.languages = undefined;
        this.isLoading = false;
        this.router = new Stack();
        this.bookingListingScreenOptions = { params: null, screen: 'bookings' };
    }
    async componentWillLoad() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
        getUserPrefernce(this.language);
        if (this.property) {
            app_store.property = Object.assign({}, this.property);
        }
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            app_store.is_signed_in = true;
            this.token = isAuthenticated.token;
            app_store.app_data.token = this.token;
        }
        else {
            this.token = await this.commonService.getBEToken();
        }
    }
    handleTokenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.initializeApp();
        }
    }
    handleSourceChange(newSource, oldSource) {
        if (newSource && (!oldSource || oldSource.code !== newSource.code)) {
            this.setSource(newSource);
        }
    }
    handleCurrencyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            updateUserPreference({
                currency_id: newValue,
            });
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
    setSource(newSource) {
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { source: newSource });
    }
    modifyLanguage(code) {
        var _a;
        if (!this.languages) {
            return;
        }
        changeLocale(((_a = this.languages.find(l => l.code.toLowerCase() === code)) === null || _a === void 0 ? void 0 : _a.direction) || 'LTR', matchLocale(code));
        updateUserPreference({
            language_id: code,
        });
    }
    initializeApp() {
        this.commonService.setToken(this.token);
        this.propertyService.setToken(this.token);
        app_store.app_data = {
            token: this.token,
            property_id: this.propertyId,
            injected: this.injected,
            roomtype_id: this.rt_id,
            affiliate: null,
            tag: this.stag,
            source: this.source,
            hideGoogleSignIn: this.hideGoogleSignIn,
        };
        this.initRequest();
    }
    async initRequest() {
        var _a, _b;
        this.isLoading = true;
        const p = JSON.parse(localStorage.getItem('user_preference'));
        let requests = [
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
            this.commonService.getExposedCountryByIp(),
            this.commonService.getExposedLanguage(),
            this.propertyService.getExposedProperty({ id: this.propertyId, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.p, perma_link: this.perma_link }),
        ];
        if (app_store.is_signed_in) {
            requests.push(this.propertyService.getExposedGuest());
        }
        const [currencies, languages] = await Promise.all(requests);
        this.currencies = currencies;
        this.languages = languages;
        if (!p) {
            if (this.language) {
                this.modifyLanguage(this.language);
            }
            let currency = app_store.userDefaultCountry.currency;
            if (this.cur) {
                console.log(this.cur);
                const newCurr = this.currencies.find(c => c.code.toLowerCase() === this.cur.toLowerCase());
                if (newCurr) {
                    currency = newCurr;
                }
            }
            setDefaultLocale({ currency });
        }
        this.checkAndApplyDiscounts();
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { affiliate: checkAffiliate((_b = this.aff) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim()) });
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
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        updateRoomParams({ params: { selected_variation: { variation: selectedVariation, state: 'modified' } }, ratePlanId: rateplanId, roomTypeId });
    }
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
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log('auth finish');
        const { token, state, payload } = e.detail;
        console.log(token, state, payload);
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.bookingListingScreenOptions = {
                    screen: 'booking-details',
                    params: {
                        booking_nbr: payload.booking_nbr,
                        email: payload.email,
                    },
                };
                app_store.currentPage = 'booking-listing';
            }
        }
    }
    async resetBooking(resetType = 'completeReset') {
        var _a;
        let queries = [];
        if (resetType === 'discountOnly' && app_store.fetchedBooking) {
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
        this.identifier = v4();
        this.availabiltyService.initSocket(this.identifier);
        await this.propertyService.getExposedBookingAvailability({
            params: {
                propertyid: app_store.app_data.property_id,
                from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                room_type_ids: [],
                adult_nbr: booking_store.bookingAvailabilityParams.adult_nbr,
                child_nbr: booking_store.bookingAvailabilityParams.child_nbr,
                language: app_store.userPreferences.language_id,
                currency_ref: app_store.userPreferences.currency_id,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
                promo_key: booking_store.bookingAvailabilityParams.coupon || '',
                is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
                agent_id: booking_store.bookingAvailabilityParams.agent || 0,
            },
            identifier: this.identifier,
            mode: 'default',
        });
    }
    renderScreens() {
        switch (app_store.currentPage) {
            case 'booking':
                return h("ir-booking-page", { adultCount: this.adults, childrenCount: this.child, fromDate: this.checkin, toDate: this.checkout });
            case 'checkout':
                return h("ir-checkout-page", null);
            case 'invoice':
                return (h("ir-invoice", { version: this.version, headerShown: false, footerShown: false, propertyId: this.propertyId, perma_link: this.perma_link, aName: this.p, language: this.language, baseUrl: this.baseUrl, email: app_store.invoice.email, bookingNbr: app_store.invoice.booking_number, status: 1, be: true }));
            case 'booking-listing':
                return (h("ir-booking-listing", { version: this.version, startScreen: this.bookingListingScreenOptions, showAllBookings: false, headerShown: false, footerShown: false, propertyid: this.propertyId, perma_link: this.perma_link, aName: this.p, be: true, baseUrl: this.baseUrl, aff: this.aff }));
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
    disconnectedCallback() {
        this.availabiltyService.disconnectSocket();
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return null;
        }
        return (h("main", { class: "relative  flex w-full flex-col space-y-5 " }, h("ir-interceptor", null), h("section", { class: `${this.injected ? '' : 'sticky top-0 z-50'}  m-0 w-full p-0 ` }, h("ir-nav", { class: 'm-0 p-0', website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), h("section", { class: "flex-1 px-4 lg:px-6" }, h("div", { class: "mx-auto max-w-6xl" }, this.renderScreens())), !this.injected && h("ir-footer", { version: this.version })));
    }
    static get watchers() { return {
        "token": ["handleTokenChange"],
        "source": ["handleSourceChange"],
        "cur": ["handleCurrencyChange"],
        "coupon": ["handleCouponChange"],
        "loyalty": ["handleLoyaltyChange"],
        "agent_code": ["handleAgentCodeChange"]
    }; }
};
IrBookingEngine.style = IrBeStyle0;

export { IrBookingEngine as ir_be };

//# sourceMappingURL=ir-be.entry.js.map