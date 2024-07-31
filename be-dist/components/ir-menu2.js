import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { c as createPopper } from './popper.js';

const irMenuCss = "*.sc-ir-menu,.sc-ir-menu:after,.sc-ir-menu:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-menu:after,.sc-ir-menu:before{--tw-content:\"\"}.sc-ir-menu-h,html.sc-ir-menu{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-menu{line-height:inherit;margin:0}hr.sc-ir-menu{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-menu:where([title]){text-decoration:underline dotted}h1.sc-ir-menu,h2.sc-ir-menu,h3.sc-ir-menu,h4.sc-ir-menu,h5.sc-ir-menu,h6.sc-ir-menu{font-size:inherit;font-weight:inherit}a.sc-ir-menu{color:inherit;text-decoration:inherit}b.sc-ir-menu,strong.sc-ir-menu{font-weight:bolder}code.sc-ir-menu,kbd.sc-ir-menu,pre.sc-ir-menu,samp.sc-ir-menu{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-menu{font-size:80%}sub.sc-ir-menu,sup.sc-ir-menu{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-menu{bottom:-.25em}sup.sc-ir-menu{top:-.5em}table.sc-ir-menu{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-menu,input.sc-ir-menu,optgroup.sc-ir-menu,select.sc-ir-menu,textarea.sc-ir-menu{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-menu,select.sc-ir-menu{text-transform:none}[type=button].sc-ir-menu,[type=reset].sc-ir-menu,[type=submit].sc-ir-menu,button.sc-ir-menu{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-menu:-moz-focusring{outline:auto}.sc-ir-menu:-moz-ui-invalid{box-shadow:none}progress.sc-ir-menu{vertical-align:baseline}.sc-ir-menu::-webkit-inner-spin-button,.sc-ir-menu::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-menu{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-menu::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-menu::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-menu{display:list-item}blockquote.sc-ir-menu,dd.sc-ir-menu,dl.sc-ir-menu,fieldset.sc-ir-menu,figure.sc-ir-menu,h1.sc-ir-menu,h2.sc-ir-menu,h3.sc-ir-menu,h4.sc-ir-menu,h5.sc-ir-menu,h6.sc-ir-menu,hr.sc-ir-menu,p.sc-ir-menu,pre.sc-ir-menu{margin:0}fieldset.sc-ir-menu,legend.sc-ir-menu{padding:0}menu.sc-ir-menu,ol.sc-ir-menu,ul.sc-ir-menu{list-style:none;margin:0;padding:0}dialog.sc-ir-menu{padding:0}textarea.sc-ir-menu{resize:vertical}input.sc-ir-menu::placeholder,textarea.sc-ir-menu::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-menu,button.sc-ir-menu{cursor:pointer}.sc-ir-menu:disabled{cursor:default}audio.sc-ir-menu,canvas.sc-ir-menu,embed.sc-ir-menu,iframe.sc-ir-menu,img.sc-ir-menu,object.sc-ir-menu,svg.sc-ir-menu,video.sc-ir-menu{display:block;vertical-align:middle}img.sc-ir-menu,video.sc-ir-menu{height:auto;max-width:100%}[hidden].sc-ir-menu{display:none}.sc-ir-menu::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.relative.sc-ir-menu{position:relative}.block.sc-ir-menu{display:block}.flex.sc-ir-menu{display:flex}.border.sc-ir-menu{border-width:1px}.sc-ir-menu-h{display:block;position:relative}button.sc-ir-menu,div.sc-ir-menu,li.sc-ir-menu,ul.sc-ir-menu{all:unset;box-sizing:border-box}.SelectTrigger.sc-ir-menu{align-items:center;border:.0625rem solid var(--gray-300,#d0d5dd);border-radius:.5rem;display:inline-flex;font-size:.875rem;justify-content:space-between;line-height:1;padding:.625rem .875rem;width:100%}.SelectContent.sc-ir-menu{background:#fff;border-radius:.5rem;max-height:15.625rem;min-width:10rem;overflow-y:auto;width:-moz-max-content;width:max-content;z-index:99999}.SelectContent[data-state=open].sc-ir-menu{animation:fadeIn .3s cubic-bezier(.25,.8,.25,1);border:.0625rem solid var(--gray-100,#f2f4f7);box-shadow:0 1rem .75rem -.25rem rgba(16,24,40,.08),0 .375rem .25rem -.125rem rgba(16,24,40,.03);padding:.625rem 0}.menu-item.sc-ir-menu{align-items:center;color:var(--gray-700,#344054);cursor:pointer;display:flex;font-size:.875rem;justify-content:space-between;line-height:1;line-height:1.25rem;padding:.625rem 1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.menu-item[data-highlighted=true].sc-ir-menu{background-color:var(--gray-50,#f9fafb);color:var(--gray-900,#101828)}.menu-item[data-disabled].sc-ir-menu{color:var(--gray-300,#d0d5dd)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.static.sc-ir-menu{position:static}.sticky.sc-ir-menu{position:sticky}.top-0.sc-ir-menu{top:0}.z-50.sc-ir-menu{z-index:50}.m-0.sc-ir-menu{margin:0}.mx-auto.sc-ir-menu{margin-left:auto;margin-right:auto}.w-full.sc-ir-menu{width:100%}.max-w-6xl.sc-ir-menu{max-width:72rem}.flex-1.sc-ir-menu{flex:1 1 0%}.flex-col.sc-ir-menu{flex-direction:column}.space-y-5.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-menu{padding:0}.px-4.sc-ir-menu{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-menu{padding-left:1.5rem;padding-right:1.5rem}}.py-3.sc-ir-menu{padding-bottom:.75rem;padding-top:.75rem}.text-lg.sc-ir-menu{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-menu{font-weight:500}.shadow.sc-ir-menu{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline.sc-ir-menu{outline-style:solid}.size-6.sc-ir-menu{height:1.5rem;width:1.5rem}.items-center.sc-ir-menu{align-items:center}.gap-4.sc-ir-menu{gap:1rem}.pb-2.sc-ir-menu{padding-bottom:.5rem}.font-semibold.sc-ir-menu{font-weight:600}.text-red-500.sc-ir-menu{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.h-full.sc-ir-menu{height:100%}.top-\\[20\\%\\].sc-ir-menu{top:20%}.aspect-\\[1\\/1\\].sc-ir-menu{aspect-ratio:1/1}.h-\\[80vh\\].sc-ir-menu{height:80vh}.max-h-32.sc-ir-menu{max-height:8rem}.max-h-52.sc-ir-menu{max-height:13rem}.animate-pulse.sc-ir-menu{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap.sc-ir-menu{flex-wrap:wrap}.justify-center.sc-ir-menu{justify-content:center}.justify-between.sc-ir-menu{justify-content:space-between}.gap-1.sc-ir-menu{gap:.25rem}.gap-16.sc-ir-menu{gap:4rem}.space-y-2.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200.sc-ir-menu{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover.sc-ir-menu{object-fit:cover}.pt-2.sc-ir-menu{padding-top:.5rem}.text-center.sc-ir-menu{text-align:center}.text-sm.sc-ir-menu{font-size:.875rem;line-height:1.25rem}.text-xs.sc-ir-menu{font-size:.75rem;line-height:1rem}.text-green-500.sc-ir-menu{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit.sc-ir-menu{width:fit-content}.md\\:flex-row.sc-ir-menu{flex-direction:row}.md\\:items-center.sc-ir-menu{align-items:center}.md\\:text-right.sc-ir-menu{text-align:right}}.sr-only.sc-ir-menu{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.hidden.sc-ir-menu{display:none}.resize.sc-ir-menu{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-menu{display:block}}@media (min-width:768px){.md\\:hidden.sc-ir-menu{display:none}}.table.sc-ir-menu{display:table}.grid.sc-ir-menu{display:grid}.h-5.sc-ir-menu{height:1.25rem}.w-5.sc-ir-menu{width:1.25rem}.absolute.sc-ir-menu{position:absolute}.right-3.sc-ir-menu{right:.75rem}.top-3.sc-ir-menu{top:.75rem}.h-64.sc-ir-menu{height:16rem}.h-screen.sc-ir-menu{height:100vh}.max-w-md.sc-ir-menu{max-width:28rem}.place-content-center.sc-ir-menu{place-content:center}.rounded-md.sc-ir-menu{border-radius:.375rem}.bottom-2.sc-ir-menu{bottom:.5rem}.z-40.sc-ir-menu{z-index:40}.mb-5.sc-ir-menu{margin-bottom:1.25rem}.mt-14.sc-ir-menu{margin-top:3.5rem}.w-auto.sc-ir-menu{width:auto}.justify-end.sc-ir-menu{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-menu{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-menu{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-menu{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-menu{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-menu{padding-bottom:1.25rem}.text-base.sc-ir-menu{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-menu{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-menu{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-menu{width:15rem}.lg\\:gap-10.sc-ir-menu{gap:2.5rem}.lg\\:text-2xl.sc-ir-menu{font-size:1.5rem;line-height:2rem}}.gap-2.sc-ir-menu{gap:.5rem}.gap-2\\.5.sc-ir-menu{gap:.625rem}.space-y-4.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-menu{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-menu{position:sticky}.md\\:top-20.sc-ir-menu{top:5rem}.md\\:flex.sc-ir-menu{display:flex}.md\\:max-w-4xl.sc-ir-menu{max-width:56rem}.md\\:max-w-md.sc-ir-menu{max-width:28rem}.md\\:items-start.sc-ir-menu{align-items:flex-start}.md\\:justify-end.sc-ir-menu{justify-content:flex-end}}.text-end.sc-ir-menu{text-align:end}.text-gray-400.sc-ir-menu{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.max-w-xs.sc-ir-menu{max-width:20rem}.rounded-lg.sc-ir-menu{border-radius:.5rem}.px-3.sc-ir-menu{padding-left:.75rem;padding-right:.75rem}.mx-1.sc-ir-menu{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-menu{justify-content:flex-start}.filter.sc-ir-menu{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:1024px){.lg\\:size-7.sc-ir-menu{height:1.75rem;width:1.75rem}}.fixed.sc-ir-menu{position:fixed}.right-0.sc-ir-menu{right:0}.right-4.sc-ir-menu{right:1rem}.top-4.sc-ir-menu{top:1rem}.mt-8.sc-ir-menu{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-menu{min-width:70%}.max-w-full.sc-ir-menu{max-width:100%}.translate-x-0.sc-ir-menu{--tw-translate-x:0px}.translate-x-0.sc-ir-menu,.translate-x-\\[100\\%\\].sc-ir-menu{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-menu{--tw-translate-x:100%}.bg-white.sc-ir-menu{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-menu,.shadow-md.sc-ir-menu{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-menu{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-menu{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-menu{transition-duration:.3s}.ease-in-out.sc-ir-menu{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-menu{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-menu,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-menu{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-menu{--tw-translate-x:0px}.mb-4.sc-ir-menu{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-menu{max-height:83vh}.overflow-y-auto.sc-ir-menu{overflow-y:auto}.p-4.sc-ir-menu{padding:1rem}.text-xl.sc-ir-menu{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-menu{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-menu{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-menu{padding:1.5rem}}.pointer-events-none.sc-ir-menu{pointer-events:none}.inset-y-0.sc-ir-menu{bottom:0;top:0}.end-1.sc-ir-menu{inset-inline-end:.25rem}.start-2.sc-ir-menu{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-menu{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-menu{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-menu{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-menu{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-menu{padding-inline-end:1.75rem}.ps-9.sc-ir-menu{padding-inline-start:2.25rem}.pt-1.sc-ir-menu{padding-top:.25rem}.text-\\[1rem\\].sc-ir-menu{font-size:1rem}.text-\\[\\#667085\\].sc-ir-menu{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-menu{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.visible.sc-ir-menu{visibility:visible}.size-\\[18px\\].sc-ir-menu{height:18px;width:18px}.h-\\[14px\\].sc-ir-menu{height:14px}.h-\\[3rem\\].sc-ir-menu{height:3rem}.w-\\[12\\.25px\\].sc-ir-menu{width:12.25px}.gap-0.sc-ir-menu{gap:0}.gap-0\\.5.sc-ir-menu{gap:.125rem}.border-0.sc-ir-menu{border-width:0}.pt-14.sc-ir-menu{padding-top:3.5rem}.shadow.sc-ir-menu,.shadow-none.sc-ir-menu{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-menu{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-menu{width:auto}.sm\\:w-fit.sc-ir-menu{width:fit-content}.sm\\:border.sc-ir-menu{border-width:1px}.sm\\:pt-4.sc-ir-menu{padding-top:1rem}.sm\\:shadow-sm.sc-ir-menu{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.bg-gray-100.sc-ir-menu{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-menu{padding:1.5rem}.text-start.sc-ir-menu{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-menu{justify-content:space-between}.md\\:gap-8.sc-ir-menu{gap:2rem}}.-bottom-0.sc-ir-menu{bottom:0}.z-0.sc-ir-menu{z-index:0}.mb-1.sc-ir-menu{margin-bottom:.25rem}.mb-2.sc-ir-menu{margin-bottom:.5rem}.size-10.sc-ir-menu{height:2.5rem;width:2.5rem}.size-3.sc-ir-menu{height:.75rem;width:.75rem}.h-48.sc-ir-menu{height:12rem}.max-h-\\[80vh\\].sc-ir-menu{max-height:80vh}.cursor-pointer.sc-ir-menu{cursor:pointer}.items-end.sc-ir-menu{align-items:flex-end}.overflow-hidden.sc-ir-menu{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-menu{border-radius:var(--radius,8px)}.bg-gray-300.sc-ir-menu{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-white\\/80.sc-ir-menu{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-menu{padding-left:.5rem;padding-right:.5rem}.py-4.sc-ir-menu{padding-top:1rem}.pb-4.sc-ir-menu,.py-4.sc-ir-menu{padding-bottom:1rem}.pt-0.sc-ir-menu{padding-top:0}.font-normal.sc-ir-menu{font-weight:400}.ordinal.sc-ir-menu{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700.sc-ir-menu{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white.sc-ir-menu{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-menu:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:block.sc-ir-menu{display:block}.md\\:max-h-\\[200px\\].sc-ir-menu{max-height:200px}.md\\:w-auto.sc-ir-menu{width:auto}.md\\:p-4.sc-ir-menu{padding:1rem}.md\\:pt-0.sc-ir-menu{padding-top:0}.md\\:pt-4.sc-ir-menu{padding-top:1rem}.md\\:text-xl.sc-ir-menu{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-menu{max-height:250px}}.h-\\[50vh\\].sc-ir-menu{height:50vh}.overflow-x-auto.sc-ir-menu{overflow-x:auto}.overflow-x-hidden.sc-ir-menu{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-menu{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-menu{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell.sc-ir-menu{display:table-cell}}.mt-4.sc-ir-menu{margin-top:1rem}.h-\\[1px\\].sc-ir-menu{height:1px}.w-56.sc-ir-menu{width:14rem}.min-w-\\[1rem\\].sc-ir-menu{min-width:1rem}.space-y-1.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-menu{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300.sc-ir-menu{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.p-2.sc-ir-menu{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm.sc-ir-menu{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-menu{aspect-ratio:16/9}.lg\\:p-6.sc-ir-menu{padding:1.5rem}}.leading-none.sc-ir-menu{line-height:1}.tracking-tight.sc-ir-menu{letter-spacing:-.025em}.w-72.sc-ir-menu{width:18rem}.w-fit.sc-ir-menu{width:fit-content}@media (min-width:1280px){.xl\\:text-xl.sc-ir-menu{font-size:1.25rem;line-height:1.75rem}}.col-span-6.sc-ir-menu{grid-column:span 6/span 6}.h-4.sc-ir-menu{height:1rem}.h-8.sc-ir-menu{height:2rem}.w-12.sc-ir-menu{width:3rem}.place-items-center.sc-ir-menu{place-items:center}.gap-\\[2px\\].sc-ir-menu{gap:2px}.ml-1.sc-ir-menu{margin-left:.25rem}.line-clamp-3.sc-ir-menu{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-menu{display:inline-flex}.size-4.sc-ir-menu{height:1rem;width:1rem}.h-16.sc-ir-menu{height:4rem}.h-6.sc-ir-menu{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-menu{max-width:60%}.flex-row.sc-ir-menu{flex-direction:row}.gap-3.sc-ir-menu{gap:.75rem}.space-y-14.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-menu{padding-left:0}.pt-0\\.5.sc-ir-menu{padding-top:.125rem}.text-right.sc-ir-menu{text-align:right}.text-gray-500.sc-ir-menu{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-menu{width:100%}.md\\:max-w-full.sc-ir-menu{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-menu{flex-direction:row}}.text-slate-900.sc-ir-menu{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.h-10.sc-ir-menu{height:2.5rem}.h-14.sc-ir-menu{height:3.5rem}.h-24.sc-ir-menu{height:6rem}.h-28.sc-ir-menu{height:7rem}.gap-12.sc-ir-menu{gap:3rem}.gap-8.sc-ir-menu{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-menu{max-width:24rem}}.mx-2.sc-ir-menu{margin-left:.5rem;margin-right:.5rem}.mt-2.sc-ir-menu{margin-top:.5rem}.mt-2\\.5.sc-ir-menu{margin-top:.625rem}.space-y-1\\.5.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl.sc-ir-menu{border-radius:.75rem}.ml-4.sc-ir-menu{margin-left:1rem}.grid-cols-2.sc-ir-menu{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-menu{padding-bottom:1.5rem}.text-gray-800.sc-ir-menu{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-menu{flex-direction:row}.sm\\:items-center.sc-ir-menu{align-items:center}.sm\\:text-sm.sc-ir-menu{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-menu{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:640px){.sm\\:p-6.sc-ir-menu{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-menu{flex-direction:row-reverse}}.col-span-2.sc-ir-menu{grid-column:span 2/span 2}.mb-6.sc-ir-menu{margin-bottom:1.5rem}.mt-6.sc-ir-menu{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-menu{min-height:80vh}.max-w-xl.sc-ir-menu{max-width:36rem}@media (min-width:768px){.md\\:grid.sc-ir-menu{display:grid}.md\\:grid-cols-2.sc-ir-menu{grid-template-columns:repeat(2,minmax(0,1fr))}}.transform.sc-ir-menu{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.text-slate-500.sc-ir-menu{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-menu{padding:1rem}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-menu{color:hsl(var(--brand-600))}.border-solid.sc-ir-menu{border-style:solid}.mb-2\\.5.sc-ir-menu{margin-bottom:.625rem}.w-\\[45\\%\\].sc-ir-menu{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-menu{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-menu{color:var(--gray-500)}";
const IrMenuStyle0 = irMenuCss;

const IrMenu = /*@__PURE__*/ proxyCustomElement(class IrMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.menuItemClick = createEvent(this, "menuItemClick", 7);
        this.data = [];
        this.menuItem = 'Toggle Menu';
        this.isDropdownVisible = false;
        this.searchQuery = '';
        this.selectedItemName = '';
        this.currentHighlightedIndex = -1;
        this.usingKeyboard = false;
    }
    componentWillLoad() {
        var _a;
        this.selectedItemName = (_a = this.data[0].item) !== null && _a !== void 0 ? _a : '';
    }
    handleKeyDown(event) {
        if (!this.isDropdownVisible) {
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.moveHighlight(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.moveHighlight(-1);
                break;
            case 'Enter':
                event.preventDefault();
                if (this.currentHighlightedIndex !== -1) {
                    this.selectItem(this.currentHighlightedIndex);
                }
                break;
            case 'Escape':
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                this.closeDropdown();
                break;
            case 'Tab':
                this.closeDropdown();
                break;
        }
    }
    componentDidLoad() {
        this.popoverInstance = createPopper(this.buttonRef, this.contentElement, {
            placement: 'bottom-end',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 4],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'viewport',
                        padding: 10,
                    },
                },
            ],
        });
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleMouseMove() {
        if (this.usingKeyboard)
            this.disableKeyboardPriority();
    }
    moveHighlight(delta) {
        let newIndex = this.currentHighlightedIndex;
        do {
            newIndex = (newIndex + delta + this.data.length) % this.data.length;
        } while (this.data[newIndex].disabled);
        this.currentHighlightedIndex = newIndex;
        this.scrollToItem(newIndex);
    }
    selectItem(index) {
        const item = this.data[index];
        if (item && !item.disabled) {
            this.selectedItemName = item.item;
            console.log(item);
            this.menuItemClick.emit(item.id);
            this.closeDropdown();
        }
    }
    closeDropdown() {
        this.isDropdownVisible = false;
        this.buttonRef.focus();
    }
    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
        if (this.isDropdownVisible) {
            this.currentHighlightedIndex = -1;
            this.adjustPopoverPlacement();
        }
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            const rect = this.contentElement.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.popoverInstance.setOptions({
                    placement: 'top-end',
                });
            }
            else if (rect.top < 0) {
                this.popoverInstance.setOptions({
                    placement: 'bottom-end',
                });
            }
            this.popoverInstance.update();
        });
    }
    scrollToItem(index) {
        var _a;
        const item = (_a = this.listRef) === null || _a === void 0 ? void 0 : _a.querySelector(`li:nth-of-type(${index + 1})`);
        item === null || item === void 0 ? void 0 : item.scrollIntoView({ block: 'center' });
    }
    disableKeyboardPriority() {
        this.usingKeyboard = false;
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
    }
    render() {
        return (h(Fragment, { key: 'ee02c1880a69bf9d7d7ef4d84dc7d50c53a2f9c7' }, h("button", { key: '6639fbe47d67230cc78ccb6a5c7c6eae249c486a', ref: el => (this.buttonRef = el), type: "button", "aria-haspopup": "listbox", "aria-expanded": this.isDropdownVisible.toString(), onClick: () => this.toggleDropdown() }, h("slot", { key: '703b82fde45db0719a50d41db8d5525528305c13', name: "menu-trigger" }, h("div", { key: '28352ab252079aea855cdfb84792c18f3a90b2c2', class: "SelectTrigger" }, this.selectedItemName || this.menuItem, h("svg", { key: '3cb4ac104c6ac25d65c230fa84ac7435604fc9ed', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'cdedf81c5ab6ee48cdbc18bd488cfa04802bee5c', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: 'a59484b3f517f4f52fa17fc138545c505607e4e2', ref: el => (this.contentElement = el), class: "SelectContent", "data-state": this.isDropdownVisible ? 'open' : 'closed' }, this.isDropdownVisible && (h("ul", { key: '7d713ecd5e04f3af6251e739c4147f47abd4796b', role: "menu", ref: el => (this.listRef = el), tabindex: "-1" }, this.data.map((item, index) => (h("li", { "data-disabled": item.disabled, "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: 'menu-item', tabindex: -1, role: "menuitem", "aria-disabled": item.disabled ? 'true' : 'false', "aria-selected": this.selectedItemName === item.item ? 'true' : 'false', onClick: () => {
                this.selectItem(index);
                this.disableKeyboardPriority();
            }, onMouseOver: () => {
                if (item.disabled) {
                    return;
                }
                this.currentHighlightedIndex = index;
            } }, item.item, this.selectedItemName === item.item && (h("svg", { width: "20", height: "20", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "var(--brand-600)", "fill-rule": "evenodd", "clip-rule": "evenodd" })))))))))));
    }
    get el() { return this; }
    static get style() { return IrMenuStyle0; }
}, [6, "ir-menu", {
        "data": [16],
        "menuItem": [513, "menu-item"],
        "isDropdownVisible": [32],
        "searchQuery": [32],
        "selectedItemName": [32],
        "currentHighlightedIndex": [32],
        "usingKeyboard": [32]
    }, [[16, "keydown", "handleKeyDown"], [4, "click", "handleDocumentClick"], [1, "mousemove", "handleMouseMove"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenu);
            }
            break;
    } });
}

export { IrMenu as I, defineCustomElement as d };

//# sourceMappingURL=ir-menu2.js.map