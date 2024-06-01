import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { a as app_store } from './app.store.js';
import { c as cn } from './utils.js';
import { l as localizedWords } from './localization.store.js';
import { d as defineCustomElement$f } from './ir-auth2.js';
import { d as defineCustomElement$e } from './ir-badge-group2.js';
import { d as defineCustomElement$d } from './ir-booking-code2.js';
import { d as defineCustomElement$c } from './ir-button2.js';
import { d as defineCustomElement$b } from './ir-dialog2.js';
import { d as defineCustomElement$a } from './ir-google-maps2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-input2.js';
import { d as defineCustomElement$7 } from './ir-language-picker2.js';
import { d as defineCustomElement$6 } from './ir-modal2.js';
import { d as defineCustomElement$5 } from './ir-select2.js';
import { d as defineCustomElement$4 } from './ir-sheet2.js';
import { d as defineCustomElement$3 } from './ir-signin2.js';
import { d as defineCustomElement$2 } from './ir-signup2.js';
import { d as defineCustomElement$1 } from './ir-social-button2.js';

const irNavCss = "*.sc-ir-nav,.sc-ir-nav:after,.sc-ir-nav:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-nav:after,.sc-ir-nav:before{--tw-content:\"\"}.sc-ir-nav-h,html.sc-ir-nav{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-nav{line-height:inherit;margin:0}hr.sc-ir-nav{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-nav:where([title]){text-decoration:underline dotted}h1.sc-ir-nav,h2.sc-ir-nav,h3.sc-ir-nav,h4.sc-ir-nav,h5.sc-ir-nav,h6.sc-ir-nav{font-size:inherit;font-weight:inherit}a.sc-ir-nav{color:inherit;text-decoration:inherit}b.sc-ir-nav,strong.sc-ir-nav{font-weight:bolder}code.sc-ir-nav,kbd.sc-ir-nav,pre.sc-ir-nav,samp.sc-ir-nav{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-nav{font-size:80%}sub.sc-ir-nav,sup.sc-ir-nav{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-nav{bottom:-.25em}sup.sc-ir-nav{top:-.5em}table.sc-ir-nav{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-nav,input.sc-ir-nav,optgroup.sc-ir-nav,select.sc-ir-nav,textarea.sc-ir-nav{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-nav,select.sc-ir-nav{text-transform:none}[type=button].sc-ir-nav,[type=reset].sc-ir-nav,[type=submit].sc-ir-nav,button.sc-ir-nav{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-nav:-moz-focusring{outline:auto}.sc-ir-nav:-moz-ui-invalid{box-shadow:none}progress.sc-ir-nav{vertical-align:baseline}.sc-ir-nav::-webkit-inner-spin-button,.sc-ir-nav::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-nav{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-nav::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-nav::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-nav{display:list-item}blockquote.sc-ir-nav,dd.sc-ir-nav,dl.sc-ir-nav,fieldset.sc-ir-nav,figure.sc-ir-nav,h1.sc-ir-nav,h2.sc-ir-nav,h3.sc-ir-nav,h4.sc-ir-nav,h5.sc-ir-nav,h6.sc-ir-nav,hr.sc-ir-nav,p.sc-ir-nav,pre.sc-ir-nav{margin:0}fieldset.sc-ir-nav,legend.sc-ir-nav{padding:0}menu.sc-ir-nav,ol.sc-ir-nav,ul.sc-ir-nav{list-style:none;margin:0;padding:0}dialog.sc-ir-nav{padding:0}textarea.sc-ir-nav{resize:vertical}input.sc-ir-nav::placeholder,textarea.sc-ir-nav::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-nav,button.sc-ir-nav{cursor:pointer}.sc-ir-nav:disabled{cursor:default}audio.sc-ir-nav,canvas.sc-ir-nav,embed.sc-ir-nav,iframe.sc-ir-nav,img.sc-ir-nav,object.sc-ir-nav,svg.sc-ir-nav,video.sc-ir-nav{display:block;vertical-align:middle}img.sc-ir-nav,video.sc-ir-nav{height:auto;max-width:100%}[hidden].sc-ir-nav{display:none}.sc-ir-nav::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-nav{display:block}.flex.sc-ir-nav{display:flex}.border.sc-ir-nav{border-width:1px}.underline.sc-ir-nav{text-decoration-line:underline}.transition.sc-ir-nav{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.sc-ir-nav-h{--ir-dialog-max-width:32rem;display:block}.ir-logo.sc-ir-nav{height:20px;width:10px!important}.ir-button-link.sc-ir-nav{background:#fff;color:var(--gray-600,#475467);font-size:14px;line-height:14px;padding:8px 14px}.ir-button-link.sc-ir-nav:hover{text-decoration:underline}.ir-button-link.sc-ir-nav:disabled{background:#fff;color:var(--gray-300,#d0d5dd)}.ir-language-trigger.sc-ir-nav{all:unset;align-items:center;background:#fff;border-radius:var(--radius,8px);box-sizing:border-box;color:#fff;color:var(--gray-700,#344054);cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;line-height:14px;padding:8px 14px;transition:all .3s ease-in-out;width:100%}.ir-language-trigger.sc-ir-nav .loader.sc-ir-nav{background-color:var(--gray-700,#344054)}.ir-language-trigger.sc-ir-nav:hover{background:var(--gray-100,#fcfcfd);color:var(--gray-700,#344054)}.ir-language-trigger.sc-ir-nav:disabled{background:var(--gray-200,#eaecf0);color:var(--gray-300,#d0d5dd)}.ir-nav.sc-ir-nav{background-color:#fff;width:100%}.ir-nav-container.sc-ir-nav{height:3.5rem;justify-content:space-between;margin:0 auto;max-width:72rem;padding:0 1rem}.ir-nav-container.sc-ir-nav,.ir-nav-left.sc-ir-nav{align-items:center;display:flex}.ir-nav-left.sc-ir-nav{gap:1rem}.ir-nav-logo.sc-ir-nav{height:2.5rem;-o-object-fit:fill;object-fit:fill;width:auto}.ir-nav-property-details.sc-ir-nav{display:none}.ir-property-name.sc-ir-nav{font-size:1.125rem;font-weight:500}.ir-property-location.sc-ir-nav{align-items:center;color:#475467;display:flex;font-size:.875rem}.ir-burger-menu.sc-ir-nav{align-items:center;display:flex;gap:1rem}.ir-nav-links.sc-ir-nav{align-items:center;display:none;gap:.5rem}.ir-nav-links-injected.sc-ir-nav{display:flex;flex:1;justify-content:flex-end}.ir-nav-injected.sc-ir-nav{display:none}.ir-icon-size.sc-ir-nav{height:1rem;width:1rem}.ir-sheet-content.sc-ir-nav{display:flex;flex-direction:column;gap:.5rem;padding:1rem 1.5rem}.ir-sheet-button.sc-ir-nav{justify-content:start;width:100%}@media only screen and (min-width:640px){.ir-language-trigger.sc-ir-nav{margin-top:0;width:var(--ir-btn-width,inherit)}}@media (min-width:768px){.ir-nav-property-details.sc-ir-nav{display:block}.ir-nav-links.sc-ir-nav{display:inline-flex}.ir-burger-menu.sc-ir-nav{display:none}}@media (min-width:1190px){.ir-nav-container.sc-ir-nav{padding:0}}.static.sc-ir-nav{position:static}.relative.sc-ir-nav{position:relative}.sticky.sc-ir-nav{position:sticky}.top-0.sc-ir-nav{top:0}.z-50.sc-ir-nav{z-index:50}.mx-auto.sc-ir-nav{margin-left:auto;margin-right:auto}.w-full.sc-ir-nav{width:100%}.max-w-6xl.sc-ir-nav{max-width:72rem}.flex-1.sc-ir-nav{flex:1 1 0%}.flex-col.sc-ir-nav{flex-direction:column}.space-y-5.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4.sc-ir-nav{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-nav{padding-left:1.5rem;padding-right:1.5rem}}.h-full.sc-ir-nav{height:100%}.shadow.sc-ir-nav{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.top-\\[20\\%\\].sc-ir-nav{top:20%}.aspect-\\[1\\/1\\].sc-ir-nav{aspect-ratio:1/1}.max-h-32.sc-ir-nav{max-height:8rem}.flex-wrap.sc-ir-nav{flex-wrap:wrap}.items-center.sc-ir-nav{align-items:center}.justify-between.sc-ir-nav{justify-content:space-between}.gap-1.sc-ir-nav{gap:.25rem}.gap-16.sc-ir-nav{gap:4rem}.gap-4.sc-ir-nav{gap:1rem}.space-y-2.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-nav{object-fit:cover}.text-center.sc-ir-nav{text-align:center}.text-lg.sc-ir-nav{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-nav{font-weight:500}.text-green-500.sc-ir-nav{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-right.sc-ir-nav{text-align:right}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-nav{aspect-ratio:16/9}}.justify-center.sc-ir-nav{justify-content:center}@media (min-width:1024px){.lg\\:size-7.sc-ir-nav{height:1.75rem;width:1.75rem}}.gap-2.sc-ir-nav{gap:.5rem}.gap-2\\.5.sc-ir-nav{gap:.625rem}.space-y-4.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-nav{font-size:1.5rem;line-height:2rem}.font-semibold.sc-ir-nav{font-weight:600}@media (min-width:768px){.md\\:sticky.sc-ir-nav{position:sticky}.md\\:top-20.sc-ir-nav{top:5rem}.md\\:flex.sc-ir-nav{display:flex}.md\\:max-w-4xl.sc-ir-nav{max-width:56rem}.md\\:max-w-md.sc-ir-nav{max-width:28rem}.md\\:flex-row.sc-ir-nav{flex-direction:row}.md\\:items-start.sc-ir-nav{align-items:flex-start}.md\\:justify-end.sc-ir-nav{justify-content:flex-end}}.bottom-2.sc-ir-nav{bottom:.5rem}.z-40.sc-ir-nav{z-index:40}.mb-5.sc-ir-nav{margin-bottom:1.25rem}.mt-14.sc-ir-nav{margin-top:3.5rem}.w-auto.sc-ir-nav{width:auto}.justify-end.sc-ir-nav{justify-content:flex-end}.rounded-md.sc-ir-nav{border-radius:.375rem}.bg-gray-700\\/80.sc-ir-nav{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-nav{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-nav{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-nav{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-nav{padding-bottom:1.25rem}.text-base.sc-ir-nav{font-size:1rem;line-height:1.5rem}.text-sm.sc-ir-nav{font-size:.875rem;line-height:1.25rem}.text-gray-200.sc-ir-nav{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-nav{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-nav{width:15rem}.lg\\:gap-10.sc-ir-nav{gap:2.5rem}.lg\\:text-2xl.sc-ir-nav{font-size:1.5rem;line-height:2rem}}.absolute.sc-ir-nav{position:absolute}.right-3.sc-ir-nav{right:.75rem}.top-3.sc-ir-nav{top:.75rem}.sr-only.sc-ir-nav{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table.sc-ir-nav{display:table}.grid.sc-ir-nav{display:grid}.h-5.sc-ir-nav{height:1.25rem}.w-5.sc-ir-nav{width:1.25rem}.visible.sc-ir-nav{visibility:visible}.hidden.sc-ir-nav{display:none}.filter.sc-ir-nav{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.resize.sc-ir-nav{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-nav{display:block}}@media (min-width:768px){.md\\:hidden.sc-ir-nav{display:none}}.mx-1.sc-ir-nav{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-nav{justify-content:flex-start}.mb-4.sc-ir-nav{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-nav{max-height:83vh}.overflow-y-auto.sc-ir-nav{overflow-y:auto}.p-4.sc-ir-nav{padding:1rem}.text-xl.sc-ir-nav{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-nav{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-nav{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-nav{padding:1.5rem}}.pointer-events-none.sc-ir-nav{pointer-events:none}.inset-y-0.sc-ir-nav{bottom:0;top:0}.end-1.sc-ir-nav{inset-inline-end:.25rem}.start-2.sc-ir-nav{inset-inline-start:.5rem}.bg-white.sc-ir-nav{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-nav{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-nav{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-nav{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-nav{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-nav{padding-inline-end:1.75rem}.ps-9.sc-ir-nav{padding-inline-start:2.25rem}.pt-1.sc-ir-nav{padding-top:.25rem}.text-\\[1rem\\].sc-ir-nav{font-size:1rem}.text-xs.sc-ir-nav{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\].sc-ir-nav{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-nav{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed.sc-ir-nav{position:fixed}.right-0.sc-ir-nav{right:0}.right-4.sc-ir-nav{right:1rem}.top-4.sc-ir-nav{top:1rem}.mt-8.sc-ir-nav{margin-top:2rem}.h-screen.sc-ir-nav{height:100vh}.min-w-\\[70\\%\\].sc-ir-nav{min-width:70%}.max-w-full.sc-ir-nav{max-width:100%}.translate-x-0.sc-ir-nav{--tw-translate-x:0px}.translate-x-0.sc-ir-nav,.translate-x-\\[100\\%\\].sc-ir-nav{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-nav{--tw-translate-x:100%}.shadow.sc-ir-nav,.shadow-md.sc-ir-nav{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-nav{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-nav{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-nav{transition-duration:.3s}.ease-in-out.sc-ir-nav{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-nav{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-nav,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-nav{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-nav{--tw-translate-x:0px}.max-w-xs.sc-ir-nav{max-width:20rem}.rounded-lg.sc-ir-nav{border-radius:.5rem}.px-3.sc-ir-nav{padding-left:.75rem;padding-right:.75rem}.size-\\[18px\\].sc-ir-nav{height:18px;width:18px}.h-\\[3rem\\].sc-ir-nav{height:3rem}.gap-0.sc-ir-nav{gap:0}.gap-0\\.5.sc-ir-nav{gap:.125rem}.border-0.sc-ir-nav{border-width:0}.pt-14.sc-ir-nav{padding-top:3.5rem}.shadow.sc-ir-nav,.shadow-none.sc-ir-nav{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-nav{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-nav{width:auto}.sm\\:w-fit.sc-ir-nav{width:fit-content}.sm\\:border.sc-ir-nav{border-width:1px}.sm\\:pt-4.sc-ir-nav{padding-top:1rem}.sm\\:shadow-sm.sc-ir-nav{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.transform.sc-ir-nav{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.text-red-500.sc-ir-nav{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline.sc-ir-nav{outline-style:solid}@media (min-width:640px){.sm\\:p-6.sc-ir-nav{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-nav{width:fit-content}.md\\:flex-row-reverse.sc-ir-nav{flex-direction:row-reverse}}.size-4.sc-ir-nav{height:1rem;width:1rem}.pb-2.sc-ir-nav{padding-bottom:.5rem}.font-normal.sc-ir-nav{font-weight:400}.text-gray-700.sc-ir-nav{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.mt-4.sc-ir-nav{margin-top:1rem}.h-\\[1px\\].sc-ir-nav{height:1px}.w-56.sc-ir-nav{width:14rem}.min-w-\\[1rem\\].sc-ir-nav{min-width:1rem}.space-y-1.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-nav{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300.sc-ir-nav{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-100.sc-ir-nav{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-nav{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2.sc-ir-nav{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm.sc-ir-nav{max-width:24rem}}@media (min-width:1024px){.lg\\:p-6.sc-ir-nav{padding:1.5rem}}.ml-1.sc-ir-nav{margin-left:.25rem}.h-6.sc-ir-nav{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-nav{max-width:60%}.flex-row.sc-ir-nav{flex-direction:row}.gap-3.sc-ir-nav{gap:.75rem}.space-y-14.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-nav{padding-left:0}.pt-0.sc-ir-nav{padding-top:0}.pt-0\\.5.sc-ir-nav{padding-top:.125rem}.text-right.sc-ir-nav{text-align:right}.text-end.sc-ir-nav{text-align:end}.text-gray-500.sc-ir-nav{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block.sc-ir-nav{display:block}.md\\:inline-flex.sc-ir-nav{display:inline-flex}.md\\:w-full.sc-ir-nav{width:100%}.md\\:max-w-full.sc-ir-nav{max-width:100%}.md\\:items-center.sc-ir-nav{align-items:center}.md\\:justify-center.sc-ir-nav{justify-content:center}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-nav{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-nav{font-size:1.25rem;line-height:1.75rem}}.h-10.sc-ir-nav{height:2.5rem}.h-14.sc-ir-nav{height:3.5rem}.h-24.sc-ir-nav{height:6rem}.h-28.sc-ir-nav{height:7rem}@keyframes pulse{50%{opacity:.5}}.animate-pulse.sc-ir-nav{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.gap-12.sc-ir-nav{gap:3rem}.gap-8.sc-ir-nav{gap:2rem}.bg-gray-200.sc-ir-nav{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-nav{max-width:24rem}}.p-6.sc-ir-nav{padding:1.5rem}.text-start.sc-ir-nav{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-nav{justify-content:space-between}.md\\:gap-8.sc-ir-nav{gap:2rem}}.w-72.sc-ir-nav{width:18rem}.w-fit.sc-ir-nav{width:fit-content}@media (min-width:768px){.md\\:p-4.sc-ir-nav{padding:1rem}}.-bottom-0.sc-ir-nav{bottom:0}.-bottom-1.sc-ir-nav{bottom:-.25rem}.z-0.sc-ir-nav{z-index:0}.mb-1.sc-ir-nav{margin-bottom:.25rem}.mb-2.sc-ir-nav{margin-bottom:.5rem}.size-10.sc-ir-nav{height:2.5rem;width:2.5rem}.size-3.sc-ir-nav{height:.75rem;width:.75rem}.h-48.sc-ir-nav{height:12rem}.max-h-\\[80vh\\].sc-ir-nav{max-height:80vh}.cursor-pointer.sc-ir-nav{cursor:pointer}.items-end.sc-ir-nav{align-items:flex-end}.overflow-hidden.sc-ir-nav{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-nav{border-radius:var(--radius,8px)}.bg-white\\/80.sc-ir-nav{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-nav{padding-left:.5rem;padding-right:.5rem}.py-4.sc-ir-nav{padding-top:1rem}.pb-4.sc-ir-nav,.py-4.sc-ir-nav{padding-bottom:1rem}.ordinal.sc-ir-nav{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-nav{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-nav:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-nav{max-height:200px}.md\\:w-auto.sc-ir-nav{width:auto}.md\\:pt-0.sc-ir-nav{padding-top:0}.md\\:pt-4.sc-ir-nav{padding-top:1rem}.md\\:text-xl.sc-ir-nav{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-nav{max-height:250px}}.ml-4.sc-ir-nav{margin-left:1rem}.grid-cols-2.sc-ir-nav{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-nav{padding-bottom:1.5rem}.text-gray-800.sc-ir-nav{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-nav{flex-direction:row}.sm\\:items-center.sc-ir-nav{align-items:center}.sm\\:text-sm.sc-ir-nav{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-nav{grid-template-columns:repeat(3,minmax(0,1fr))}}.text-slate-900.sc-ir-nav{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-nav{color:hsl(var(--brand-600))}.text-slate-500.sc-ir-nav{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-nav{padding:1rem}}.space-y-1\\.5.sc-ir-nav>.sc-ir-nav:not([hidden])~.sc-ir-nav:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.border-solid.sc-ir-nav{border-style:solid}.mb-2\\.5.sc-ir-nav{margin-bottom:.625rem}.mb-6.sc-ir-nav{margin-bottom:1.5rem}.w-\\[45\\%\\].sc-ir-nav{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-nav{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-nav{color:var(--gray-500)}.table-cell.sc-ir-nav{display:table-cell}.table-row.sc-ir-nav{display:table-row}.max-w-md.sc-ir-nav{max-width:28rem}.overflow-x-auto.sc-ir-nav{overflow-x:auto}.overflow-x-hidden.sc-ir-nav{overflow-x:hidden}.px-\\[20px\\].sc-ir-nav{padding-left:20px;padding-right:20px}.py-\\[16px\\].sc-ir-nav{padding-bottom:16px;padding-top:16px}";
const IrNavStyle0 = irNavCss;

const IrNav = /*@__PURE__*/ proxyCustomElement(class IrNav extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.currencies = undefined;
        this.languages = undefined;
        this.logo = undefined;
        this.website = undefined;
        this.isBookingListing = false;
        this.currentPage = null;
    }
    handleButtonClick(e = undefined, page) {
        if (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        this.currentPage = page;
        setTimeout(() => {
            this.dialogRef.openModal();
        }, 50);
    }
    handleCloseDialog(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.dialogRef.closeModal();
    }
    renderDialogBody() {
        switch (this.currentPage) {
            case 'language':
                return h("ir-language-picker", { slot: "modal-body", currencies: this.currencies, languages: this.languages });
            case 'booking_code':
                return h("ir-booking-code", { slot: "modal-body" });
            case 'map':
                return h("ir-google-maps", { slot: "modal-body" });
            default:
                return null;
        }
    }
    renderLocationField(field, withComma = true) {
        if (!field) {
            return '';
        }
        return withComma ? `, ${field}` : field;
    }
    renderLanguageTrigger() {
        if (this.isBookingListing) {
            return;
        }
        const currency = app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase());
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        if (!currency || !country) {
            return null;
        }
        return (h("div", { class: "flex" }, h("button", { type: "button", class: "ir-language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("p", null, (0).toLocaleString('en-US', { style: 'currency', currency: currency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim())), h("button", { type: "button", class: "ir-language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("p", null, country === null || country === void 0 ? void 0 : country.description))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: '801b7f113a9dce02d789b22df35a0a70bdc35217' }, h("nav", { key: '6b1ded29c721ae422b1fae5c93c07f680530b0a2', class: "ir-nav" }, h("div", { key: 'a935a9351371ed023f45e94e6a911fa5bef71800', class: "ir-nav-container" }, !isInjected && (h("div", { class: "ir-nav-left" }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: `${(_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name}, ${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name}`, class: "ir-nav-logo" })), h("div", { class: "ir-nav-property-details" }, h("h3", { class: "ir-property-name" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name), h("button", { onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name, false), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.area), this.renderLocationField((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.city.name), this.renderLocationField((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.postal), h("span", { class: 'mx-1' }), h("svg", { slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", null, "Location")))))), h("div", { key: 'db8681122256b9e1e97df0c910f39e8e80def8bd', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, h("ir-button", { key: 'd4df93b8a49e1e3db3ef1a7030d00837638803de', class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }), h("ir-button", { key: '9fb74e2b18bd9a69f5d3a25d2e6399d09601a2af', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() })), h("ul", { key: 'bd18a4a098002a70f9588838a701966eb5acd77a', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: 'faa83f7340f8f6ce0753acf2597ad9b1cf3c1122' }, this.renderLanguageTrigger()), !this.isBookingListing && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })))))), h("ir-sheet", { key: '07735b506af3ffb0653810d15d8709dba7b19532', ref: el => (this.sheetRef = el) }, h("ul", { key: 'd5be6018193a594d94afae431cbb2bc918d641b8', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: '66a6e83568f441ffcfb603643df0ece96e9b5e5a' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: '8930606a28db73ddc99c84775ca317719701811b' }, h("ir-button", { key: 'c43f832ffb5c6d702980aaa9bd308ef690ac0154', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), h("ir-modal", { key: '167a5b2fe76ef3031d3da685d43eb1ef87b2a20b', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '46869d49834a9cfa5013184ccdf3b777dbd2c033', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
    }
    static get style() { return IrNavStyle0; }
}, [2, "ir-nav", {
        "currencies": [16],
        "languages": [16],
        "logo": [1],
        "website": [1],
        "isBookingListing": [4, "is-booking-listing"],
        "currentPage": [32]
    }, [[0, "closeDialog", "handleCloseDialog"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-nav", "ir-auth", "ir-badge-group", "ir-booking-code", "ir-button", "ir-dialog", "ir-google-maps", "ir-icons", "ir-input", "ir-language-picker", "ir-modal", "ir-select", "ir-sheet", "ir-signin", "ir-signup", "ir-social-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-nav":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrNav);
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-google-maps":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-sheet":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-social-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrNav as I, defineCustomElement as d };

//# sourceMappingURL=ir-nav2.js.map