import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as cn } from './utils.js';
import { S as Skeleton } from './skeleton.js';

const irHomeLoaderCss = "*.sc-ir-home-loader,.sc-ir-home-loader:after,.sc-ir-home-loader:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-home-loader:after,.sc-ir-home-loader:before{--tw-content:\"\"}.sc-ir-home-loader-h,html.sc-ir-home-loader{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-home-loader{line-height:inherit;margin:0}hr.sc-ir-home-loader{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-home-loader:where([title]){text-decoration:underline dotted}h1.sc-ir-home-loader,h2.sc-ir-home-loader,h3.sc-ir-home-loader,h4.sc-ir-home-loader,h5.sc-ir-home-loader,h6.sc-ir-home-loader{font-size:inherit;font-weight:inherit}a.sc-ir-home-loader{color:inherit;text-decoration:inherit}b.sc-ir-home-loader,strong.sc-ir-home-loader{font-weight:bolder}code.sc-ir-home-loader,kbd.sc-ir-home-loader,pre.sc-ir-home-loader,samp.sc-ir-home-loader{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-home-loader{font-size:80%}sub.sc-ir-home-loader,sup.sc-ir-home-loader{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-home-loader{bottom:-.25em}sup.sc-ir-home-loader{top:-.5em}table.sc-ir-home-loader{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-home-loader,input.sc-ir-home-loader,optgroup.sc-ir-home-loader,select.sc-ir-home-loader,textarea.sc-ir-home-loader{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-home-loader,select.sc-ir-home-loader{text-transform:none}button.sc-ir-home-loader,input.sc-ir-home-loader:where([type=button]),input.sc-ir-home-loader:where([type=reset]),input.sc-ir-home-loader:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-home-loader:-moz-focusring{outline:auto}.sc-ir-home-loader:-moz-ui-invalid{box-shadow:none}progress.sc-ir-home-loader{vertical-align:baseline}.sc-ir-home-loader::-webkit-inner-spin-button,.sc-ir-home-loader::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-home-loader{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-home-loader::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-home-loader::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-home-loader{display:list-item}blockquote.sc-ir-home-loader,dd.sc-ir-home-loader,dl.sc-ir-home-loader,fieldset.sc-ir-home-loader,figure.sc-ir-home-loader,h1.sc-ir-home-loader,h2.sc-ir-home-loader,h3.sc-ir-home-loader,h4.sc-ir-home-loader,h5.sc-ir-home-loader,h6.sc-ir-home-loader,hr.sc-ir-home-loader,p.sc-ir-home-loader,pre.sc-ir-home-loader{margin:0}fieldset.sc-ir-home-loader,legend.sc-ir-home-loader{padding:0}menu.sc-ir-home-loader,ol.sc-ir-home-loader,ul.sc-ir-home-loader{list-style:none;margin:0;padding:0}dialog.sc-ir-home-loader{padding:0}textarea.sc-ir-home-loader{resize:vertical}input.sc-ir-home-loader::placeholder,textarea.sc-ir-home-loader::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-home-loader,button.sc-ir-home-loader{cursor:pointer}.sc-ir-home-loader:disabled{cursor:default}audio.sc-ir-home-loader,canvas.sc-ir-home-loader,embed.sc-ir-home-loader,iframe.sc-ir-home-loader,img.sc-ir-home-loader,object.sc-ir-home-loader,svg.sc-ir-home-loader,video.sc-ir-home-loader{display:block;vertical-align:middle}img.sc-ir-home-loader,video.sc-ir-home-loader{height:auto;max-width:100%}[hidden].sc-ir-home-loader{display:none}.sc-ir-home-loader::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-home-loader{display:block}.sc-ir-home-loader-h{display:block}.static.sc-ir-home-loader{position:static}.relative.sc-ir-home-loader{position:relative}.sticky.sc-ir-home-loader{position:sticky}.top-0.sc-ir-home-loader{top:0}.z-50.sc-ir-home-loader{z-index:50}.m-0.sc-ir-home-loader{margin:0}.mx-auto.sc-ir-home-loader{margin-left:auto;margin-right:auto}.flex.sc-ir-home-loader{display:flex}.w-full.sc-ir-home-loader{width:100%}.max-w-6xl.sc-ir-home-loader{max-width:72rem}.flex-1.sc-ir-home-loader{flex:1 1 0%}.flex-col.sc-ir-home-loader{flex-direction:column}.space-y-5.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-home-loader{padding:0}.px-4.sc-ir-home-loader{padding-left:1rem;padding-right:1rem}.shadow.sc-ir-home-loader{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6.sc-ir-home-loader{padding-left:1.5rem;padding-right:1.5rem}}.mt-2\\.5.sc-ir-home-loader{margin-top:.625rem}.py-3.sc-ir-home-loader{padding-bottom:.75rem;padding-top:.75rem}.text-lg.sc-ir-home-loader{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-home-loader{font-weight:500}.font-semibold.sc-ir-home-loader{font-weight:600}.outline.sc-ir-home-loader{outline-style:solid}.h-full.sc-ir-home-loader{height:100%}.grid.sc-ir-home-loader{display:grid}.hidden.sc-ir-home-loader{display:none}.aspect-\\[16\\/9\\].sc-ir-home-loader{aspect-ratio:16/9}.h-28.sc-ir-home-loader{height:7rem}.h-4.sc-ir-home-loader{height:1rem}.h-44.sc-ir-home-loader{height:11rem}.h-6.sc-ir-home-loader{height:1.5rem}.h-60.sc-ir-home-loader{height:15rem}.h-8.sc-ir-home-loader{height:2rem}.w-1\\/2.sc-ir-home-loader{width:50%}.w-24.sc-ir-home-loader{width:6rem}.w-3\\/4.sc-ir-home-loader{width:75%}.w-3\\/5.sc-ir-home-loader{width:60%}.w-48.sc-ir-home-loader{width:12rem}.animate-pulse.sc-ir-home-loader{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.items-center.sc-ir-home-loader{align-items:center}.justify-between.sc-ir-home-loader{justify-content:space-between}.gap-2.sc-ir-home-loader{gap:.5rem}.space-x-2.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-4.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-y-2.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-4.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.rounded-md.sc-ir-home-loader{border-radius:.375rem}.bg-gray-200.sc-ir-home-loader{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.p-4.sc-ir-home-loader{padding:1rem}@media (min-width:768px){.md\\:col-span-2.sc-ir-home-loader{grid-column:span 2/span 2}.md\\:grid.sc-ir-home-loader{display:grid}.md\\:h-20.sc-ir-home-loader{height:5rem}.md\\:grid-cols-3.sc-ir-home-loader{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:block.sc-ir-home-loader{display:block}.lg\\:grid-cols-2.sc-ir-home-loader{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6.sc-ir-home-loader{padding:1.5rem}}.top-\\[20\\%\\].sc-ir-home-loader{top:20%}.aspect-\\[1\\/1\\].sc-ir-home-loader{aspect-ratio:1/1}.h-72.sc-ir-home-loader{height:18rem}.max-h-32.sc-ir-home-loader{max-height:8rem}.flex-wrap.sc-ir-home-loader{flex-wrap:wrap}.justify-center.sc-ir-home-loader{justify-content:center}.gap-1.sc-ir-home-loader{gap:.25rem}.gap-16.sc-ir-home-loader{gap:4rem}.gap-4.sc-ir-home-loader{gap:1rem}.object-cover.sc-ir-home-loader{object-fit:cover}.text-center.sc-ir-home-loader{text-align:center}.text-sm.sc-ir-home-loader{font-size:.875rem;line-height:1.25rem}.text-xl.sc-ir-home-loader{font-size:1.25rem;line-height:1.75rem}.text-xs.sc-ir-home-loader{font-size:.75rem;line-height:1rem}.text-green-600.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}.text-red-500.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit.sc-ir-home-loader{width:fit-content}.md\\:flex-row.sc-ir-home-loader{flex-direction:row}.md\\:items-center.sc-ir-home-loader{align-items:center}.md\\:text-right.sc-ir-home-loader{text-align:right}}.size-6.sc-ir-home-loader{height:1.5rem;width:1.5rem}.pb-2.sc-ir-home-loader{padding-bottom:.5rem}.h-64.sc-ir-home-loader{height:16rem}.h-screen.sc-ir-home-loader{height:100vh}.max-w-md.sc-ir-home-loader{max-width:28rem}.place-content-center.sc-ir-home-loader{place-content:center}@media (min-width:768px){.md\\:hidden.sc-ir-home-loader{display:none}}@media (min-width:1024px){.lg\\:size-7.sc-ir-home-loader{height:1.75rem;width:1.75rem}}.bottom-2.sc-ir-home-loader{bottom:.5rem}.z-40.sc-ir-home-loader{z-index:40}.mb-5.sc-ir-home-loader{margin-bottom:1.25rem}.mt-14.sc-ir-home-loader{margin-top:3.5rem}.w-auto.sc-ir-home-loader{width:auto}.justify-end.sc-ir-home-loader{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-home-loader{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-home-loader{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-home-loader{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-home-loader{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-home-loader{padding-bottom:1.25rem}.text-base.sc-ir-home-loader{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-home-loader{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-home-loader{width:15rem}.lg\\:gap-10.sc-ir-home-loader{gap:2.5rem}.lg\\:text-2xl.sc-ir-home-loader{font-size:1.5rem;line-height:2rem}}.sr-only.sc-ir-home-loader{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.min-h-screen.sc-ir-home-loader{min-height:100vh}.gap-2\\.5.sc-ir-home-loader{gap:.625rem}.space-y-8.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-home-loader{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-home-loader{position:sticky}.md\\:top-20.sc-ir-home-loader{top:5rem}.md\\:flex.sc-ir-home-loader{display:flex}.md\\:max-w-4xl.sc-ir-home-loader{max-width:56rem}.md\\:max-w-md.sc-ir-home-loader{max-width:28rem}.md\\:items-start.sc-ir-home-loader{align-items:flex-start}.md\\:justify-end.sc-ir-home-loader{justify-content:flex-end}}.table.sc-ir-home-loader{display:table}.text-end.sc-ir-home-loader{text-align:end}.capitalize.sc-ir-home-loader{text-transform:capitalize}.text-gray-400.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.absolute.sc-ir-home-loader{position:absolute}.right-3.sc-ir-home-loader{right:.75rem}.top-3.sc-ir-home-loader{top:.75rem}.fixed.sc-ir-home-loader{position:fixed}.h-5.sc-ir-home-loader{height:1.25rem}.w-5.sc-ir-home-loader{width:1.25rem}.mx-1.sc-ir-home-loader{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-home-loader{justify-content:flex-start}.mb-4.sc-ir-home-loader{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-home-loader{max-height:83vh}.overflow-y-auto.sc-ir-home-loader{overflow-y:auto}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-home-loader{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-home-loader{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-home-loader{padding:1.5rem}}.visible.sc-ir-home-loader{visibility:visible}.filter.sc-ir-home-loader{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.resize.sc-ir-home-loader{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-home-loader{display:block}}.right-0.sc-ir-home-loader{right:0}.right-4.sc-ir-home-loader{right:1rem}.top-4.sc-ir-home-loader{top:1rem}.mt-8.sc-ir-home-loader{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-home-loader{min-width:70%}.max-w-full.sc-ir-home-loader{max-width:100%}.translate-x-0.sc-ir-home-loader{--tw-translate-x:0px}.translate-x-0.sc-ir-home-loader,.translate-x-\\[100\\%\\].sc-ir-home-loader{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-home-loader{--tw-translate-x:100%}.bg-white.sc-ir-home-loader{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-home-loader,.shadow-md.sc-ir-home-loader{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-home-loader{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-home-loader{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-home-loader{transition-duration:.3s}.ease-in-out.sc-ir-home-loader{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-home-loader{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-home-loader,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-home-loader{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-home-loader{--tw-translate-x:0px}.max-w-xs.sc-ir-home-loader{max-width:20rem}.rounded-lg.sc-ir-home-loader{border-radius:.5rem}.px-3.sc-ir-home-loader{padding-left:.75rem;padding-right:.75rem}.pointer-events-none.sc-ir-home-loader{pointer-events:none}.inset-y-0.sc-ir-home-loader{bottom:0;top:0}.end-1.sc-ir-home-loader{inset-inline-end:.25rem}.start-2.sc-ir-home-loader{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-home-loader{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-home-loader{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-home-loader{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-home-loader{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-home-loader{padding-inline-end:1.75rem}.ps-9.sc-ir-home-loader{padding-inline-start:2.25rem}.pt-1.sc-ir-home-loader{padding-top:.25rem}.text-\\[1rem\\].sc-ir-home-loader{font-size:1rem}.text-\\[\\#667085\\].sc-ir-home-loader{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.size-4.sc-ir-home-loader{height:1rem;width:1rem}.gap-3.sc-ir-home-loader{gap:.75rem}.font-normal.sc-ir-home-loader{font-weight:400}.text-gray-700.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.size-\\[18px\\].sc-ir-home-loader{height:18px;width:18px}.h-\\[14px\\].sc-ir-home-loader{height:14px}.h-\\[3rem\\].sc-ir-home-loader{height:3rem}.w-\\[12\\.25px\\].sc-ir-home-loader{width:12.25px}.gap-0\\.5.sc-ir-home-loader{gap:.125rem}.border-0.sc-ir-home-loader{border-width:0}.pt-14.sc-ir-home-loader{padding-top:3.5rem}.shadow.sc-ir-home-loader,.shadow-none.sc-ir-home-loader{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-home-loader{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-home-loader{width:auto}.sm\\:w-fit.sc-ir-home-loader{width:fit-content}.sm\\:border.sc-ir-home-loader{border-width:1px}.sm\\:pt-4.sc-ir-home-loader{padding-top:1rem}.sm\\:shadow-sm.sc-ir-home-loader{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.transform.sc-ir-home-loader{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mx-2.sc-ir-home-loader{margin-left:.5rem;margin-right:.5rem}.space-y-1\\.5.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl.sc-ir-home-loader{border-radius:.75rem}.bg-gray-100.sc-ir-home-loader{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-home-loader{padding:1.5rem}.pt-2.sc-ir-home-loader{padding-top:.5rem}.leading-none.sc-ir-home-loader{line-height:1}.tracking-tight.sc-ir-home-loader{letter-spacing:-.025em}@media (min-width:640px){.sm\\:p-6.sc-ir-home-loader{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-home-loader{flex-direction:row-reverse}}.py-4.sc-ir-home-loader{padding-bottom:1rem;padding-top:1rem}.h-\\[50vh\\].sc-ir-home-loader{height:50vh}.overflow-x-auto.sc-ir-home-loader{overflow-x:auto}.overflow-x-hidden.sc-ir-home-loader{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-home-loader{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-home-loader{padding-top:1rem}@media (min-width:768px){.md\\:block.sc-ir-home-loader{display:block}}@media (min-width:1024px){.lg\\:table-cell.sc-ir-home-loader{display:table-cell}}.ml-1.sc-ir-home-loader{margin-left:.25rem}.line-clamp-3.sc-ir-home-loader{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-home-loader{display:inline-flex}.h-16.sc-ir-home-loader{height:4rem}.max-w-\\[60\\%\\].sc-ir-home-loader{max-width:60%}.flex-row.sc-ir-home-loader{flex-direction:row}.space-y-14.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-home-loader{padding-left:0}.pt-0\\.5.sc-ir-home-loader{padding-top:.125rem}.text-right.sc-ir-home-loader{text-align:right}.text-gray-500.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-home-loader{width:100%}.md\\:max-w-full.sc-ir-home-loader{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-home-loader{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-home-loader{font-size:1.25rem;line-height:1.75rem}}.h-10.sc-ir-home-loader{height:2.5rem}.h-14.sc-ir-home-loader{height:3.5rem}.h-24.sc-ir-home-loader{height:6rem}.gap-12.sc-ir-home-loader{gap:3rem}.gap-8.sc-ir-home-loader{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-home-loader{max-width:24rem}}.mt-4.sc-ir-home-loader{margin-top:1rem}.h-\\[1px\\].sc-ir-home-loader{height:1px}.w-56.sc-ir-home-loader{width:14rem}.min-w-\\[1rem\\].sc-ir-home-loader{min-width:1rem}.space-y-1.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-home-loader{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-home-loader{border-width:1px}.border-gray-300.sc-ir-home-loader{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-home-loader{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-home-loader,.bg-white.sc-ir-home-loader{--tw-bg-opacity:1}.p-2.sc-ir-home-loader{padding:.5rem}.underline.sc-ir-home-loader{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm.sc-ir-home-loader{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-home-loader{aspect-ratio:16/9}}.text-start.sc-ir-home-loader{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-home-loader{justify-content:space-between}.md\\:gap-8.sc-ir-home-loader{gap:2rem}}.w-72.sc-ir-home-loader{width:18rem}.w-fit.sc-ir-home-loader{width:fit-content}@media (min-width:768px){.md\\:p-4.sc-ir-home-loader{padding:1rem}}.size-3.sc-ir-home-loader{height:.75rem;width:.75rem}.-bottom-0.sc-ir-home-loader{bottom:0}.z-0.sc-ir-home-loader{z-index:0}.mb-1.sc-ir-home-loader{margin-bottom:.25rem}.mb-2.sc-ir-home-loader{margin-bottom:.5rem}.size-10.sc-ir-home-loader{height:2.5rem;width:2.5rem}.h-48.sc-ir-home-loader{height:12rem}.max-h-\\[80vh\\].sc-ir-home-loader{max-height:80vh}.cursor-pointer.sc-ir-home-loader{cursor:pointer}.items-end.sc-ir-home-loader{align-items:flex-end}.overflow-hidden.sc-ir-home-loader{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-home-loader{border-radius:var(--radius,8px)}.bg-white\\/80.sc-ir-home-loader{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-home-loader{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-home-loader{padding-bottom:1rem}.pt-0.sc-ir-home-loader{padding-top:0}.ordinal.sc-ir-home-loader{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-700.sc-ir-home-loader,.text-white.sc-ir-home-loader{--tw-text-opacity:1}.text-white.sc-ir-home-loader{color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-home-loader:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-home-loader{max-height:200px}.md\\:w-auto.sc-ir-home-loader{width:auto}.md\\:pt-0.sc-ir-home-loader{padding-top:0}.md\\:pt-4.sc-ir-home-loader{padding-top:1rem}.md\\:text-xl.sc-ir-home-loader{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-home-loader{max-height:250px}}.col-span-6.sc-ir-home-loader{grid-column:span 6/span 6}.w-12.sc-ir-home-loader{width:3rem}.place-items-center.sc-ir-home-loader{place-items:center}.gap-\\[2px\\].sc-ir-home-loader{gap:2px}.ml-4.sc-ir-home-loader{margin-left:1rem}.grid-cols-2.sc-ir-home-loader{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3.sc-ir-home-loader>.sc-ir-home-loader:not([hidden])~.sc-ir-home-loader:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-home-loader{padding-bottom:1.5rem}.text-gray-800.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-home-loader{flex-direction:row}.sm\\:items-center.sc-ir-home-loader{align-items:center}.sm\\:text-sm.sc-ir-home-loader{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-home-loader{grid-template-columns:repeat(3,minmax(0,1fr))}}.text-slate-900.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.col-span-2.sc-ir-home-loader{grid-column:span 2/span 2}.mb-6.sc-ir-home-loader{margin-bottom:1.5rem}.mt-6.sc-ir-home-loader{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-home-loader{min-height:80vh}.max-w-xl.sc-ir-home-loader{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2.sc-ir-home-loader{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-home-loader{color:hsl(var(--brand-600))}.text-slate-500.sc-ir-home-loader{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-home-loader{padding:1rem}}.border-solid.sc-ir-home-loader{border-style:solid}.mb-2\\.5.sc-ir-home-loader{margin-bottom:.625rem}.w-\\[45\\%\\].sc-ir-home-loader{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-home-loader{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-home-loader{color:var(--gray-500)}";
const IrHomeLoaderStyle0 = irHomeLoaderCss;

const IrHomeLoader = /*@__PURE__*/ proxyCustomElement(class IrHomeLoader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.Skeleton = (className) => {
            return h("div", { class: cn('block animate-pulse rounded-md bg-gray-200', className) });
        };
    }
    render() {
        return (h("div", { key: '7df6c1e051238d38f1245c2b94ac8d332fad4d97', class: "mx-auto h-full  max-w-6xl space-y-4 p-4 lg:space-y-10 lg:p-6" }, h("div", { key: 'f192add84cedba5c52155cf994866b19dffc4998', class: "flex items-center justify-between" }, this.Skeleton('h-8 w-48'), h(Skeleton, { key: '35a8c96db2ac039684dfffee39232be25c676591', className: "h-8 w-24" }), " "), h("div", { key: '702193e11f605c79bc643cb9f3629baacaabb85d', class: "grid gap-2 md:grid-cols-3" }, h(Skeleton, { key: '8e65721ae85c9799a47f4f77cb0d2b109ee19d2a', className: "h-60 w-full md:col-span-2" }), " ", h("div", { key: 'e3cc365b3f9fd46c2d7691020da10860e575b037', class: " hidden h-60 gap-2 md:grid lg:grid-cols-2" }, h(Skeleton, { key: '13aa0d8fdf14f2df290b8d744cd0fec718b30e9b', className: "h-full w-full" }), h(Skeleton, { key: 'f3af4187c929e772ac32df19731233cdee12d3d5', className: "h-full w-full" }), h(Skeleton, { key: 'f4b7494fd525b2dd1ffcf464db90393ae985eacf', className: "hidden h-full w-full lg:block" }), h(Skeleton, { key: '26578d945eb4fc9d9d0876276e71e175b8232f97', className: "hidden h-full w-full lg:block" }))), h("div", { key: 'd3cbf4f18ee3c929809c2c503fb6a169ba0f8643', class: "flex space-x-2" }, h(Skeleton, { key: '1f81b9eedab87deb6d82a37f2db5044e35426bee', className: "h-28 w-full md:h-20" }), " "), h("div", { key: 'a015456bd39aab0a265631686c801fd56068306e', class: "space-y-4" }, [...new Array(6)].map((_, idx) => (h("div", { key: idx, class: "flex space-x-4" }, h(Skeleton, { className: "aspect-[16/9] h-44" }), " ", h("div", { class: "flex-1 space-y-2" }, h(Skeleton, { className: "h-6 w-3/4" }), " ", h(Skeleton, { className: "h-4 w-full" }), " ", h(Skeleton, { className: "h-4 w-1/2" }), " "))))), h("div", { key: '63d43274ac5b51cf86084e13ed72b54232c18999', class: "space-y-4" }, h("div", { key: '1dedeb1c22674cd26e73cc90c53d99998476ef0a', class: "flex space-x-4" }, h("div", { key: 'c126288e3cfcc803a9ce1639d51081617904286f', class: "flex-1 space-y-2" }, h(Skeleton, { key: '225e15be2f231e2f25a0322f316c5400188592f4', className: "h-6 w-3/4" }), h(Skeleton, { key: 'cc5dbb80048a6e32fecd061561c5650bd8853184', className: "h-4 w-full" }), h(Skeleton, { key: '1feb409b567cb99d500c46b02ca01142eb5ae893', className: "h-4 w-1/2" }), h(Skeleton, { key: '22aa33776dfc1840507f46140b52f38e30a50afc', className: "h-4 w-3/5" }), [...new Array(5)].map((_, idx) => (h("div", { key: idx }, h(Skeleton, { className: "h-4 w-3/5" })))))))));
    }
    static get style() { return IrHomeLoaderStyle0; }
}, [2, "ir-home-loader"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-home-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-home-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHomeLoader);
            }
            break;
    } });
}

export { IrHomeLoader as I, defineCustomElement as d };

//# sourceMappingURL=ir-home-loader2.js.map