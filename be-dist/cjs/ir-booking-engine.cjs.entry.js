'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad166e1c.js');
const common_service = require('./common.service-5eba3d54.js');
const property_service = require('./property.service-12989372.js');
const app_store = require('./app.store-de3ea06b.js');
const utils = require('./utils-383cd8d2.js');
require('./localization.store-a096e7c5.js');
require('./index-08156e03.js');

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

const irBookingEngineCss = "*.sc-ir-booking-engine,.sc-ir-booking-engine:after,.sc-ir-booking-engine:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-booking-engine:after,.sc-ir-booking-engine:before{--tw-content:\"\"}.sc-ir-booking-engine-h,html.sc-ir-booking-engine{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-booking-engine{line-height:inherit;margin:0}hr.sc-ir-booking-engine{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-booking-engine:where([title]){text-decoration:underline dotted}h1.sc-ir-booking-engine,h2.sc-ir-booking-engine,h3.sc-ir-booking-engine,h4.sc-ir-booking-engine,h5.sc-ir-booking-engine,h6.sc-ir-booking-engine{font-size:inherit;font-weight:inherit}a.sc-ir-booking-engine{color:inherit;text-decoration:inherit}b.sc-ir-booking-engine,strong.sc-ir-booking-engine{font-weight:bolder}code.sc-ir-booking-engine,kbd.sc-ir-booking-engine,pre.sc-ir-booking-engine,samp.sc-ir-booking-engine{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-booking-engine{font-size:80%}sub.sc-ir-booking-engine,sup.sc-ir-booking-engine{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-booking-engine{bottom:-.25em}sup.sc-ir-booking-engine{top:-.5em}table.sc-ir-booking-engine{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-booking-engine,input.sc-ir-booking-engine,optgroup.sc-ir-booking-engine,select.sc-ir-booking-engine,textarea.sc-ir-booking-engine{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-booking-engine,select.sc-ir-booking-engine{text-transform:none}[type=button].sc-ir-booking-engine,[type=reset].sc-ir-booking-engine,[type=submit].sc-ir-booking-engine,button.sc-ir-booking-engine{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-booking-engine:-moz-focusring{outline:auto}.sc-ir-booking-engine:-moz-ui-invalid{box-shadow:none}progress.sc-ir-booking-engine{vertical-align:baseline}.sc-ir-booking-engine::-webkit-inner-spin-button,.sc-ir-booking-engine::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-booking-engine{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-booking-engine::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-booking-engine::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-booking-engine{display:list-item}blockquote.sc-ir-booking-engine,dd.sc-ir-booking-engine,dl.sc-ir-booking-engine,fieldset.sc-ir-booking-engine,figure.sc-ir-booking-engine,h1.sc-ir-booking-engine,h2.sc-ir-booking-engine,h3.sc-ir-booking-engine,h4.sc-ir-booking-engine,h5.sc-ir-booking-engine,h6.sc-ir-booking-engine,hr.sc-ir-booking-engine,p.sc-ir-booking-engine,pre.sc-ir-booking-engine{margin:0}fieldset.sc-ir-booking-engine,legend.sc-ir-booking-engine{padding:0}menu.sc-ir-booking-engine,ol.sc-ir-booking-engine,ul.sc-ir-booking-engine{list-style:none;margin:0;padding:0}dialog.sc-ir-booking-engine{padding:0}textarea.sc-ir-booking-engine{resize:vertical}input.sc-ir-booking-engine::placeholder,textarea.sc-ir-booking-engine::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-booking-engine,button.sc-ir-booking-engine{cursor:pointer}.sc-ir-booking-engine:disabled{cursor:default}audio.sc-ir-booking-engine,canvas.sc-ir-booking-engine,embed.sc-ir-booking-engine,iframe.sc-ir-booking-engine,img.sc-ir-booking-engine,object.sc-ir-booking-engine,svg.sc-ir-booking-engine,video.sc-ir-booking-engine{display:block;vertical-align:middle}img.sc-ir-booking-engine,video.sc-ir-booking-engine{height:auto;max-width:100%}[hidden].sc-ir-booking-engine{display:none}.sc-ir-booking-engine::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-booking-engine{display:block}.sc-ir-booking-engine-h{display:block;margin:0;padding:0}.static.sc-ir-booking-engine{position:static}.relative.sc-ir-booking-engine{position:relative}.sticky.sc-ir-booking-engine{position:sticky}.top-0.sc-ir-booking-engine{top:0}.z-50.sc-ir-booking-engine{z-index:50}.m-0.sc-ir-booking-engine{margin:0}.mx-auto.sc-ir-booking-engine{margin-left:auto;margin-right:auto}.flex.sc-ir-booking-engine{display:flex}.w-full.sc-ir-booking-engine{width:100%}.max-w-6xl.sc-ir-booking-engine{max-width:72rem}.flex-1.sc-ir-booking-engine{flex:1 1 0%}.flex-col.sc-ir-booking-engine{flex-direction:column}.space-y-5.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-booking-engine{padding:0}.px-4.sc-ir-booking-engine{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-booking-engine{padding-left:1.5rem;padding-right:1.5rem}}.h-full.sc-ir-booking-engine{height:100%}.shadow.sc-ir-booking-engine{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.top-\\[20\\%\\].sc-ir-booking-engine{top:20%}.aspect-\\[1\\/1\\].sc-ir-booking-engine{aspect-ratio:1/1}.max-h-32.sc-ir-booking-engine{max-height:8rem}.flex-wrap.sc-ir-booking-engine{flex-wrap:wrap}.items-center.sc-ir-booking-engine{align-items:center}.justify-center.sc-ir-booking-engine{justify-content:center}.justify-between.sc-ir-booking-engine{justify-content:space-between}.gap-1.sc-ir-booking-engine{gap:.25rem}.gap-16.sc-ir-booking-engine{gap:4rem}.gap-4.sc-ir-booking-engine{gap:1rem}.space-y-2.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-booking-engine{object-fit:cover}.text-center.sc-ir-booking-engine{text-align:center}.text-lg.sc-ir-booking-engine{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-booking-engine{font-weight:500}.text-green-500.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.outline.sc-ir-booking-engine{outline-style:solid}@media (min-width:768px){.md\\:text-right.sc-ir-booking-engine{text-align:right}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-booking-engine{aspect-ratio:16/9}}.h-5.sc-ir-booking-engine{height:1.25rem}.w-5.sc-ir-booking-engine{width:1.25rem}.absolute.sc-ir-booking-engine{position:absolute}.right-3.sc-ir-booking-engine{right:.75rem}.top-3.sc-ir-booking-engine{top:.75rem}.mb-4.sc-ir-booking-engine{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-booking-engine{max-height:83vh}.overflow-y-auto.sc-ir-booking-engine{overflow-y:auto}.p-4.sc-ir-booking-engine{padding:1rem}.text-sm.sc-ir-booking-engine{font-size:.875rem;line-height:1.25rem}.text-xl.sc-ir-booking-engine{font-size:1.25rem;line-height:1.75rem}.font-semibold.sc-ir-booking-engine{font-weight:600}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-booking-engine{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-booking-engine{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-booking-engine{padding:1.5rem}}.sr-only.sc-ir-booking-engine{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.mx-1.sc-ir-booking-engine{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-booking-engine{justify-content:flex-start}.pointer-events-none.sc-ir-booking-engine{pointer-events:none}.inset-y-0.sc-ir-booking-engine{bottom:0;top:0}.end-1.sc-ir-booking-engine{inset-inline-end:.25rem}.start-2.sc-ir-booking-engine{inset-inline-start:.5rem}.rounded-md.sc-ir-booking-engine{border-radius:.375rem}.bg-white.sc-ir-booking-engine{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-booking-engine{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-booking-engine{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-booking-engine{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-booking-engine{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-booking-engine{padding-inline-end:1.75rem}.ps-9.sc-ir-booking-engine{padding-inline-start:2.25rem}.pt-1.sc-ir-booking-engine{padding-top:.25rem}.text-\\[1rem\\].sc-ir-booking-engine{font-size:1rem}.text-xs.sc-ir-booking-engine{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\].sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed.sc-ir-booking-engine{position:fixed}.right-0.sc-ir-booking-engine{right:0}.right-4.sc-ir-booking-engine{right:1rem}.top-4.sc-ir-booking-engine{top:1rem}.mt-8.sc-ir-booking-engine{margin-top:2rem}.h-screen.sc-ir-booking-engine{height:100vh}.min-w-\\[70\\%\\].sc-ir-booking-engine{min-width:70%}.max-w-full.sc-ir-booking-engine{max-width:100%}.translate-x-0.sc-ir-booking-engine{--tw-translate-x:0px}.translate-x-0.sc-ir-booking-engine,.translate-x-\\[100\\%\\].sc-ir-booking-engine{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-booking-engine{--tw-translate-x:100%}.shadow.sc-ir-booking-engine,.shadow-md.sc-ir-booking-engine{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-booking-engine{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-booking-engine{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-booking-engine{transition-duration:.3s}.ease-in-out.sc-ir-booking-engine{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-booking-engine{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-booking-engine,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-booking-engine{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-booking-engine{--tw-translate-x:0px}.gap-2.sc-ir-booking-engine{gap:.5rem}.gap-2\\.5.sc-ir-booking-engine{gap:.625rem}.space-y-4.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-booking-engine{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-booking-engine{position:sticky}.md\\:top-20.sc-ir-booking-engine{top:5rem}.md\\:flex.sc-ir-booking-engine{display:flex}.md\\:max-w-4xl.sc-ir-booking-engine{max-width:56rem}.md\\:max-w-md.sc-ir-booking-engine{max-width:28rem}.md\\:flex-row.sc-ir-booking-engine{flex-direction:row}.md\\:items-start.sc-ir-booking-engine{align-items:flex-start}.md\\:justify-end.sc-ir-booking-engine{justify-content:flex-end}}.bottom-2.sc-ir-booking-engine{bottom:.5rem}.z-40.sc-ir-booking-engine{z-index:40}.mb-5.sc-ir-booking-engine{margin-bottom:1.25rem}.mt-14.sc-ir-booking-engine{margin-top:3.5rem}.w-auto.sc-ir-booking-engine{width:auto}.justify-end.sc-ir-booking-engine{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-booking-engine{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-booking-engine{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-booking-engine{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-booking-engine{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-booking-engine{padding-bottom:1.25rem}.text-base.sc-ir-booking-engine{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-booking-engine{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-booking-engine{width:15rem}.lg\\:gap-10.sc-ir-booking-engine{gap:2.5rem}.lg\\:text-2xl.sc-ir-booking-engine{font-size:1.5rem;line-height:2rem}}.table.sc-ir-booking-engine{display:table}.grid.sc-ir-booking-engine{display:grid}@media (min-width:1024px){.lg\\:size-7.sc-ir-booking-engine{height:1.75rem;width:1.75rem}}.visible.sc-ir-booking-engine{visibility:visible}.hidden.sc-ir-booking-engine{display:none}.filter.sc-ir-booking-engine{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.max-w-xs.sc-ir-booking-engine{max-width:20rem}.rounded-lg.sc-ir-booking-engine{border-radius:.5rem}.px-3.sc-ir-booking-engine{padding-left:.75rem;padding-right:.75rem}.resize.sc-ir-booking-engine{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-booking-engine{display:block}}@media (min-width:768px){.md\\:hidden.sc-ir-booking-engine{display:none}}.text-red-500.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6.sc-ir-booking-engine{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-booking-engine{width:fit-content}.md\\:flex-row-reverse.sc-ir-booking-engine{flex-direction:row-reverse}}.transform.sc-ir-booking-engine{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.size-\\[18px\\].sc-ir-booking-engine{height:18px;width:18px}.h-\\[14px\\].sc-ir-booking-engine{height:14px}.h-\\[3rem\\].sc-ir-booking-engine{height:3rem}.w-\\[12\\.25px\\].sc-ir-booking-engine{width:12.25px}.gap-0.sc-ir-booking-engine{gap:0}.gap-0\\.5.sc-ir-booking-engine{gap:.125rem}.border-0.sc-ir-booking-engine{border-width:0}.pt-14.sc-ir-booking-engine{padding-top:3.5rem}.shadow.sc-ir-booking-engine,.shadow-none.sc-ir-booking-engine{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-booking-engine{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-booking-engine{width:auto}.sm\\:w-fit.sc-ir-booking-engine{width:fit-content}.sm\\:border.sc-ir-booking-engine{border-width:1px}.sm\\:pt-4.sc-ir-booking-engine{padding-top:1rem}.sm\\:shadow-sm.sc-ir-booking-engine{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.w-fit.sc-ir-booking-engine{width:fit-content}.bg-gray-100.sc-ir-booking-engine{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-booking-engine{padding:1.5rem}.text-start.sc-ir-booking-engine{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-booking-engine{justify-content:space-between}.md\\:gap-8.sc-ir-booking-engine{gap:2rem}}.space-y-1.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.text-slate-900.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block.sc-ir-booking-engine{display:block}}.mt-4.sc-ir-booking-engine{margin-top:1rem}.h-\\[1px\\].sc-ir-booking-engine{height:1px}.w-56.sc-ir-booking-engine{width:14rem}.min-w-\\[1rem\\].sc-ir-booking-engine{min-width:1rem}.rounded-t-md.sc-ir-booking-engine{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-booking-engine{border-width:1px}.border-gray-300.sc-ir-booking-engine{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-booking-engine{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2.sc-ir-booking-engine{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm.sc-ir-booking-engine{max-width:24rem}}@media (min-width:1024px){.lg\\:p-6.sc-ir-booking-engine{padding:1.5rem}}.-bottom-0.sc-ir-booking-engine{bottom:0}.-bottom-1.sc-ir-booking-engine{bottom:-.25rem}.z-0.sc-ir-booking-engine{z-index:0}.mb-1.sc-ir-booking-engine{margin-bottom:.25rem}.mb-2.sc-ir-booking-engine{margin-bottom:.5rem}.size-10.sc-ir-booking-engine{height:2.5rem;width:2.5rem}.size-3.sc-ir-booking-engine{height:.75rem;width:.75rem}.h-48.sc-ir-booking-engine{height:12rem}.max-h-\\[80vh\\].sc-ir-booking-engine{max-height:80vh}.cursor-pointer.sc-ir-booking-engine{cursor:pointer}.items-end.sc-ir-booking-engine{align-items:flex-end}.overflow-hidden.sc-ir-booking-engine{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-booking-engine{border-radius:var(--radius,8px)}.bg-white\\/80.sc-ir-booking-engine{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-booking-engine{padding-left:.5rem;padding-right:.5rem}.py-4.sc-ir-booking-engine{padding-bottom:1rem;padding-top:1rem}.pb-2.sc-ir-booking-engine{padding-bottom:.5rem}.pb-4.sc-ir-booking-engine{padding-bottom:1rem}.pt-0.sc-ir-booking-engine{padding-top:0}.font-normal.sc-ir-booking-engine{font-weight:400}.ordinal.sc-ir-booking-engine{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-booking-engine:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-booking-engine{max-height:200px}.md\\:w-auto.sc-ir-booking-engine{width:auto}.md\\:p-4.sc-ir-booking-engine{padding:1rem}.md\\:pt-0.sc-ir-booking-engine{padding-top:0}.md\\:pt-4.sc-ir-booking-engine{padding-top:1rem}.md\\:text-xl.sc-ir-booking-engine{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-booking-engine{max-height:250px}}.ml-1.sc-ir-booking-engine{margin-left:.25rem}.line-clamp-3.sc-ir-booking-engine{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-booking-engine{display:inline-flex}.size-4.sc-ir-booking-engine{height:1rem;width:1rem}.h-6.sc-ir-booking-engine{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-booking-engine{max-width:60%}.flex-row.sc-ir-booking-engine{flex-direction:row}.gap-3.sc-ir-booking-engine{gap:.75rem}.space-y-14.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-booking-engine{padding-left:0}.pt-0\\.5.sc-ir-booking-engine{padding-top:.125rem}.text-right.sc-ir-booking-engine{text-align:right}.text-end.sc-ir-booking-engine{text-align:end}.text-gray-500.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-booking-engine{width:100%}.md\\:max-w-full.sc-ir-booking-engine{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-booking-engine{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-booking-engine{font-size:1.25rem;line-height:1.75rem}}.w-72.sc-ir-booking-engine{width:18rem}.ml-4.sc-ir-booking-engine{margin-left:1rem}.grid-cols-2.sc-ir-booking-engine{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-booking-engine{padding-bottom:1.5rem}.text-gray-800.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-booking-engine{flex-direction:row}.sm\\:items-center.sc-ir-booking-engine{align-items:center}.sm\\:text-sm.sc-ir-booking-engine{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-booking-engine{grid-template-columns:repeat(3,minmax(0,1fr))}}.h-10.sc-ir-booking-engine{height:2.5rem}.h-14.sc-ir-booking-engine{height:3.5rem}.h-24.sc-ir-booking-engine{height:6rem}.h-28.sc-ir-booking-engine{height:7rem}@keyframes pulse{50%{opacity:.5}}.animate-pulse.sc-ir-booking-engine{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.gap-12.sc-ir-booking-engine{gap:3rem}.gap-8.sc-ir-booking-engine{gap:2rem}.bg-gray-200.sc-ir-booking-engine{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-booking-engine{max-width:24rem}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-booking-engine{color:hsl(var(--brand-600))}.text-slate-500.sc-ir-booking-engine{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-booking-engine{padding:1rem}}.space-y-1\\.5.sc-ir-booking-engine>.sc-ir-booking-engine:not([hidden])~.sc-ir-booking-engine:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.border-solid.sc-ir-booking-engine{border-style:solid}.mb-2\\.5.sc-ir-booking-engine{margin-bottom:.625rem}.mb-6.sc-ir-booking-engine{margin-bottom:1.5rem}.w-\\[45\\%\\].sc-ir-booking-engine{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-booking-engine{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-booking-engine{color:var(--gray-500)}";
const IrBookingEngineStyle0 = irBookingEngineCss;

const IrBookingEngine = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.commonService = new common_service.CommonService();
        this.propertyService = new property_service.PropertyService();
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1NTQ5OTIsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY0ExSGU2MXl2YlhuIiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSJ9.ySJjLhWwUDeP4X8LIJcbsjO74y_UgMHwRDpNrCClndc';
        this.propertyId = undefined;
        this.baseUrl = undefined;
        this.injected = undefined;
        this.roomtype_id = null;
        this.redirect_url = null;
        this.perma_link = null;
        this.aName = null;
        this.fromDate = undefined;
        this.language = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.cur = undefined;
        this.aff = undefined;
        this.stag = undefined;
        this.selectedLocale = undefined;
        this.currencies = undefined;
        this.languages = undefined;
        this.isLoading = false;
        this.router = new Stack();
    }
    async componentWillLoad() {
        property_service.axios.defaults.withCredentials = true;
        property_service.axios.defaults.baseURL = this.baseUrl;
        utils.getUserPrefernce(this.language);
        {
            this.token = await this.commonService.getBEToken();
        }
    }
    handleTokenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.initializeApp();
        }
    }
    // @Watch('language')
    // handleLanguageChange(newValue: string, oldValue: string) {
    //   if (!this.languages) {
    //     return;
    //   }
    //   if (newValue !== oldValue) {
    //     this.modifyLanguage(newValue);
    //   }
    // }
    modifyLanguage(code) {
        var _a;
        if (!this.languages) {
            return;
        }
        app_store.changeLocale(((_a = this.languages.find(l => l.code.toLowerCase() === code)) === null || _a === void 0 ? void 0 : _a.direction) || 'LTR', utils.matchLocale(code));
        app_store.updateUserPreference({
            language_id: code,
        });
    }
    handleCurrencyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            app_store.updateUserPreference({
                currency_id: newValue,
            });
        }
    }
    initializeApp() {
        this.commonService.setToken(this.token);
        this.propertyService.setToken(this.token);
        app_store.app_store.app_data = {
            token: this.token,
            property_id: this.propertyId,
            injected: this.injected,
            roomtype_id: this.roomtype_id,
            redirect_url: this.redirect_url,
            affiliate: false,
        };
        this.initRequest();
    }
    async initRequest() {
        var _a;
        this.isLoading = true;
        const p = JSON.parse(localStorage.getItem('user_preference'));
        let requests = [
            this.propertyService.getExposedProperty({ id: this.propertyId, language: ((_a = app_store.app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.aName, perma_link: this.perma_link }),
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
            this.commonService.getExposedCountryByIp(),
            this.commonService.getExposedLanguage(),
            // ,
        ];
        if (app_store.app_store.is_signed_in) {
            requests.push(this.propertyService.getExposedGuest());
        }
        const [_, currencies, languages] = await Promise.all(requests);
        this.currencies = currencies;
        this.languages = languages;
        if (!p) {
            if (this.language) {
                this.modifyLanguage(this.language);
            }
            utils.setDefaultLocale({ currency: app_store.app_store.userDefaultCountry.currency });
        }
        app_store.app_store.app_data = Object.assign(Object.assign({}, app_store.app_store.app_data), { affiliate: this.checkAffiliate() });
        // booking_store.roomTypes = [...roomtypes];
        this.isLoading = false;
    }
    checkAffiliate() {
        var _a;
        return (_a = app_store.app_store === null || app_store.app_store === void 0 ? void 0 : app_store.app_store.property) === null || _a === void 0 ? void 0 : _a.affiliates.includes(window.location.href);
    }
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        console.log(selectedVariation);
        property_service.updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    handleNavigation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log(e.detail);
        app_store.app_store.currentPage = e.detail;
    }
    async handleResetBooking(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log('reset Booking fetched', e.detail);
        await this.resetBooking((_a = e.detail) !== null && _a !== void 0 ? _a : 'completeReset');
    }
    async resetBooking(resetType = 'completeReset') {
        var _a;
        let queries = [];
        if (resetType === 'discountOnly' && app_store.app_store.fetchedBooking) {
            queries.push(this.checkAvailability());
        }
        else if (resetType === 'completeReset') {
            queries = [
                ...queries,
                ...[
                    this.commonService.getExposedLanguage(),
                    this.propertyService.getExposedProperty({ id: app_store.app_store.app_data.property_id, language: ((_a = app_store.app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.aName, perma_link: this.perma_link }, false),
                ],
            ];
            if (app_store.app_store.fetchedBooking) {
                queries.push(this.checkAvailability());
            }
        }
        await Promise.all(queries);
    }
    async checkAvailability() {
        console.log('booking availability', property_service.booking_store.bookingAvailabilityParams);
        await this.propertyService.getExposedBookingAvailability({
            propertyid: app_store.app_store.app_data.property_id,
            from_date: utils.dateFns.format(property_service.booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
            to_date: utils.dateFns.format(property_service.booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
            room_type_ids: [],
            adult_nbr: property_service.booking_store.bookingAvailabilityParams.adult_nbr,
            child_nbr: property_service.booking_store.bookingAvailabilityParams.child_nbr,
            language: app_store.app_store.userPreferences.language_id,
            currency_ref: app_store.app_store.userPreferences.currency_id,
            is_in_loyalty_mode: property_service.booking_store.bookingAvailabilityParams.loyalty ? true : !!property_service.booking_store.bookingAvailabilityParams.coupon,
            promo_key: property_service.booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!property_service.booking_store.bookingAvailabilityParams.agent || false,
            agent_id: property_service.booking_store.bookingAvailabilityParams.agent || 0,
        });
    }
    renderScreens() {
        switch (app_store.app_store.currentPage) {
            case 'booking':
                return index.h("ir-booking-page", { adultCount: this.adultCount, childrenCount: this.childrenCount, fromDate: this.fromDate, toDate: this.toDate });
            case 'checkout':
                return index.h("ir-checkout-page", null);
            case 'invoice':
                return (index.h("ir-invoice", { baseUrl: this.baseUrl, lang: app_store.app_store.userPreferences.language_id, email: app_store.app_store.invoice.email, bookingNbr: app_store.app_store.invoice.booking_number, status: 1 }));
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return null;
        }
        return (index.h("main", { class: "relative  flex w-full flex-col space-y-5 " }, index.h("ir-interceptor", null), index.h("section", { class: "sticky top-0 z-50 m-0 w-full p-0 " }, index.h("ir-nav", { class: 'm-0 p-0', website: (_a = app_store.app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), index.h("section", { class: "flex-1 px-4 lg:px-6" }, index.h("div", { class: "mx-auto max-w-6xl" }, this.renderScreens())), !this.injected && index.h("ir-footer", null)));
    }
    static get watchers() { return {
        "token": ["handleTokenChange"],
        "cur": ["handleCurrencyChange"]
    }; }
};
IrBookingEngine.style = IrBookingEngineStyle0;

exports.ir_booking_engine = IrBookingEngine;

//# sourceMappingURL=ir-booking-engine.cjs.entry.js.map