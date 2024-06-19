import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { S as SignInValidtor } from './auth.validator.js';
import { Z as ZodError } from './index4.js';
import { A as AuthService } from './auth.service.js';
import { a as app_store, o as onAppDataChange } from './app.store.js';
import { d as defineCustomElement$4 } from './ir-badge-group2.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irSigninCss = "*.sc-ir-signin,.sc-ir-signin:after,.sc-ir-signin:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-signin:after,.sc-ir-signin:before{--tw-content:\"\"}.sc-ir-signin-h,html.sc-ir-signin{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-signin{line-height:inherit;margin:0}hr.sc-ir-signin{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-signin:where([title]){text-decoration:underline dotted}h1.sc-ir-signin,h2.sc-ir-signin,h3.sc-ir-signin,h4.sc-ir-signin,h5.sc-ir-signin,h6.sc-ir-signin{font-size:inherit;font-weight:inherit}a.sc-ir-signin{color:inherit;text-decoration:inherit}b.sc-ir-signin,strong.sc-ir-signin{font-weight:bolder}code.sc-ir-signin,kbd.sc-ir-signin,pre.sc-ir-signin,samp.sc-ir-signin{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-signin{font-size:80%}sub.sc-ir-signin,sup.sc-ir-signin{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-signin{bottom:-.25em}sup.sc-ir-signin{top:-.5em}table.sc-ir-signin{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-signin,input.sc-ir-signin,optgroup.sc-ir-signin,select.sc-ir-signin,textarea.sc-ir-signin{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-signin,select.sc-ir-signin{text-transform:none}[type=button].sc-ir-signin,[type=reset].sc-ir-signin,[type=submit].sc-ir-signin,button.sc-ir-signin{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-signin:-moz-focusring{outline:auto}.sc-ir-signin:-moz-ui-invalid{box-shadow:none}progress.sc-ir-signin{vertical-align:baseline}.sc-ir-signin::-webkit-inner-spin-button,.sc-ir-signin::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-signin{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-signin::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-signin::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-signin{display:list-item}blockquote.sc-ir-signin,dd.sc-ir-signin,dl.sc-ir-signin,fieldset.sc-ir-signin,figure.sc-ir-signin,h1.sc-ir-signin,h2.sc-ir-signin,h3.sc-ir-signin,h4.sc-ir-signin,h5.sc-ir-signin,h6.sc-ir-signin,hr.sc-ir-signin,p.sc-ir-signin,pre.sc-ir-signin{margin:0}legend.sc-ir-signin{padding:0}menu.sc-ir-signin,ol.sc-ir-signin,ul.sc-ir-signin{list-style:none;margin:0;padding:0}dialog.sc-ir-signin{padding:0}textarea.sc-ir-signin{resize:vertical}input.sc-ir-signin::placeholder,textarea.sc-ir-signin::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-signin,button.sc-ir-signin{cursor:pointer}.sc-ir-signin:disabled{cursor:default}audio.sc-ir-signin,canvas.sc-ir-signin,embed.sc-ir-signin,iframe.sc-ir-signin,img.sc-ir-signin,object.sc-ir-signin,svg.sc-ir-signin,video.sc-ir-signin{display:block;vertical-align:middle}img.sc-ir-signin,video.sc-ir-signin{height:auto;max-width:100%}[hidden].sc-ir-signin{display:none}.sc-ir-signin::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-signin{display:block}.flex.sc-ir-signin{display:flex}.flex-grow.sc-ir-signin{flex-grow:1}.border.sc-ir-signin{border-width:1px}.underline.sc-ir-signin{text-decoration-line:underline}.sc-ir-signin-h{display:block}.title.sc-ir-signin{color:#101828;font-size:24px;font-weight:600;height:32px;line-height:1.33;margin-bottom:2rem}.Supporting-text.sc-ir-signin,.title.sc-ir-signin{align-self:stretch;flex-grow:0;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center}.Supporting-text.sc-ir-signin{color:#475467;font-size:16px;font-weight:400;height:24px;line-height:1.5}.dont-have-an-account.sc-ir-signin{color:#475467;color:var(--text-color,#333);flex-grow:0;font-size:14px;font-size:.875rem;font-stretch:normal;font-style:normal;font-weight:400;height:20px;letter-spacing:normal;line-height:1.43;text-align:left;width:155px}form.sc-ir-signin{display:flex;flex-direction:column;gap:1rem}fieldset.sc-ir-signin{border:none;padding:0}.ir-input.sc-ir-signin{display:block;width:100%}.ir-button.sc-ir-signin{margin-top:1rem;width:100%}.error.sc-ir-signin{color:var(--error-color,#dc3545);margin-bottom:1rem;text-align:center}.divider.sc-ir-signin{align-items:center;display:flex;gap:1rem;justify-content:center;margin:.75rem 0}.divider-line.sc-ir-signin{background-color:var(--divider-color,#ccc);flex:1;height:1px}.divider-text.sc-ir-signin{color:var(--divider-text-color,#6c757d)}.sign-up-button.sc-ir-signin{background-color:transparent;border:none;color:var(--primary-color,#007bff);cursor:pointer;padding:0}.sign-up-button.sc-ir-signin:hover{text-decoration:underline}.static.sc-ir-signin{position:static}.relative.sc-ir-signin{position:relative}.sticky.sc-ir-signin{position:sticky}.top-0.sc-ir-signin{top:0}.z-50.sc-ir-signin{z-index:50}.m-0.sc-ir-signin{margin:0}.mx-auto.sc-ir-signin{margin-left:auto;margin-right:auto}.w-full.sc-ir-signin{width:100%}.max-w-6xl.sc-ir-signin{max-width:72rem}.flex-1.sc-ir-signin{flex:1 1 0%}.flex-col.sc-ir-signin{flex-direction:column}.space-y-5.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-signin{padding:0}.px-4.sc-ir-signin{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6.sc-ir-signin{padding-left:1.5rem;padding-right:1.5rem}}.h-full.sc-ir-signin{height:100%}.shadow.sc-ir-signin{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.top-\\[20\\%\\].sc-ir-signin{top:20%}.aspect-\\[1\\/1\\].sc-ir-signin{aspect-ratio:1/1}.max-h-32.sc-ir-signin{max-height:8rem}.flex-wrap.sc-ir-signin{flex-wrap:wrap}.items-center.sc-ir-signin{align-items:center}.justify-center.sc-ir-signin{justify-content:center}.justify-between.sc-ir-signin{justify-content:space-between}.gap-1.sc-ir-signin{gap:.25rem}.gap-16.sc-ir-signin{gap:4rem}.gap-4.sc-ir-signin{gap:1rem}.space-y-2.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-signin{object-fit:cover}.pt-2.sc-ir-signin{padding-top:.5rem}.text-center.sc-ir-signin{text-align:center}.text-lg.sc-ir-signin{font-size:1.125rem;line-height:1.75rem}.font-medium.sc-ir-signin{font-weight:500}.text-green-500.sc-ir-signin{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.outline.sc-ir-signin{outline-style:solid}@media (min-width:768px){.md\\:text-right.sc-ir-signin{text-align:right}}.size-4.sc-ir-signin{height:1rem;width:1rem}.bottom-2.sc-ir-signin{bottom:.5rem}.z-40.sc-ir-signin{z-index:40}.mb-5.sc-ir-signin{margin-bottom:1.25rem}.mt-14.sc-ir-signin{margin-top:3.5rem}.w-auto.sc-ir-signin{width:auto}.justify-end.sc-ir-signin{justify-content:flex-end}.rounded-md.sc-ir-signin{border-radius:.375rem}.bg-gray-700\\/80.sc-ir-signin{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-signin{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-signin{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-signin{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-signin{padding-bottom:1.25rem}.text-base.sc-ir-signin{font-size:1rem;line-height:1.5rem}.text-sm.sc-ir-signin{font-size:.875rem;line-height:1.25rem}.text-gray-200.sc-ir-signin{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg.sc-ir-signin{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-signin{width:15rem}.lg\\:gap-10.sc-ir-signin{gap:2.5rem}.lg\\:text-2xl.sc-ir-signin{font-size:1.5rem;line-height:2rem}}.sr-only.sc-ir-signin{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table.sc-ir-signin{display:table}.grid.sc-ir-signin{display:grid}.gap-2.sc-ir-signin{gap:.5rem}.gap-2\\.5.sc-ir-signin{gap:.625rem}.space-y-4.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-signin{font-size:1.5rem;line-height:2rem}.font-semibold.sc-ir-signin{font-weight:600}@media (min-width:768px){.md\\:sticky.sc-ir-signin{position:sticky}.md\\:top-20.sc-ir-signin{top:5rem}.md\\:flex.sc-ir-signin{display:flex}.md\\:max-w-4xl.sc-ir-signin{max-width:56rem}.md\\:max-w-md.sc-ir-signin{max-width:28rem}.md\\:flex-row.sc-ir-signin{flex-direction:row}.md\\:items-start.sc-ir-signin{align-items:flex-start}.md\\:justify-end.sc-ir-signin{justify-content:flex-end}}@media (min-width:1024px){.lg\\:size-7.sc-ir-signin{height:1.75rem;width:1.75rem}}.absolute.sc-ir-signin{position:absolute}.right-3.sc-ir-signin{right:.75rem}.top-3.sc-ir-signin{top:.75rem}.h-5.sc-ir-signin{height:1.25rem}.w-5.sc-ir-signin{width:1.25rem}.mx-1.sc-ir-signin{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-signin{justify-content:flex-start}.mb-4.sc-ir-signin{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-signin{max-height:83vh}.overflow-y-auto.sc-ir-signin{overflow-y:auto}.p-4.sc-ir-signin{padding:1rem}.text-xl.sc-ir-signin{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-signin{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-signin{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-signin{padding:1.5rem}}.hidden.sc-ir-signin{display:none}.resize.sc-ir-signin{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-signin{display:block}}@media (min-width:768px){.md\\:hidden.sc-ir-signin{display:none}}.pointer-events-none.sc-ir-signin{pointer-events:none}.inset-y-0.sc-ir-signin{bottom:0;top:0}.end-1.sc-ir-signin{inset-inline-end:.25rem}.start-2.sc-ir-signin{inset-inline-start:.5rem}.bg-white.sc-ir-signin{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-signin{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-signin{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-signin{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-signin{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-signin{padding-inline-end:1.75rem}.ps-9.sc-ir-signin{padding-inline-start:2.25rem}.pt-1.sc-ir-signin{padding-top:.25rem}.text-\\[1rem\\].sc-ir-signin{font-size:1rem}.text-xs.sc-ir-signin{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\].sc-ir-signin{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-signin{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.visible.sc-ir-signin{visibility:visible}.filter.sc-ir-signin{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.fixed.sc-ir-signin{position:fixed}.right-0.sc-ir-signin{right:0}.right-4.sc-ir-signin{right:1rem}.top-4.sc-ir-signin{top:1rem}.mt-8.sc-ir-signin{margin-top:2rem}.h-screen.sc-ir-signin{height:100vh}.min-w-\\[70\\%\\].sc-ir-signin{min-width:70%}.max-w-full.sc-ir-signin{max-width:100%}.translate-x-0.sc-ir-signin{--tw-translate-x:0px}.translate-x-0.sc-ir-signin,.translate-x-\\[100\\%\\].sc-ir-signin{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-signin{--tw-translate-x:100%}.shadow.sc-ir-signin,.shadow-md.sc-ir-signin{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-signin{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-signin{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-signin{transition-duration:.3s}.ease-in-out.sc-ir-signin{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-signin{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-signin,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-signin{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-signin{--tw-translate-x:0px}.max-w-xs.sc-ir-signin{max-width:20rem}.rounded-lg.sc-ir-signin{border-radius:.5rem}.px-3.sc-ir-signin{padding-left:.75rem;padding-right:.75rem}.transform.sc-ir-signin{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.pb-2.sc-ir-signin{padding-bottom:.5rem}.font-normal.sc-ir-signin{font-weight:400}.text-gray-700.sc-ir-signin{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.size-\\[18px\\].sc-ir-signin{height:18px;width:18px}.h-\\[14px\\].sc-ir-signin{height:14px}.h-\\[3rem\\].sc-ir-signin{height:3rem}.w-\\[12\\.25px\\].sc-ir-signin{width:12.25px}.gap-0.sc-ir-signin{gap:0}.gap-0\\.5.sc-ir-signin{gap:.125rem}.border-0.sc-ir-signin{border-width:0}.pt-14.sc-ir-signin{padding-top:3.5rem}.shadow.sc-ir-signin,.shadow-none.sc-ir-signin{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-signin{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-signin{width:auto}.sm\\:w-fit.sc-ir-signin{width:fit-content}.sm\\:border.sc-ir-signin{border-width:1px}.sm\\:pt-4.sc-ir-signin{padding-top:1rem}.sm\\:shadow-sm.sc-ir-signin{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.text-red-500.sc-ir-signin{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6.sc-ir-signin{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-signin{width:fit-content}.md\\:flex-row-reverse.sc-ir-signin{flex-direction:row-reverse}}.ml-1.sc-ir-signin{margin-left:.25rem}.line-clamp-3.sc-ir-signin{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-signin{display:inline-flex}.h-6.sc-ir-signin{height:1.5rem}.max-w-\\[60\\%\\].sc-ir-signin{max-width:60%}.flex-row.sc-ir-signin{flex-direction:row}.gap-3.sc-ir-signin{gap:.75rem}.space-y-14.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100.sc-ir-signin{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.pl-0.sc-ir-signin{padding-left:0}.pt-0.sc-ir-signin{padding-top:0}.pt-0\\.5.sc-ir-signin{padding-top:.125rem}.text-right.sc-ir-signin{text-align:right}.text-end.sc-ir-signin{text-align:end}.text-gray-500.sc-ir-signin{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block.sc-ir-signin{display:block}.md\\:w-full.sc-ir-signin{width:100%}.md\\:max-w-full.sc-ir-signin{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-signin{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-signin{font-size:1.25rem;line-height:1.75rem}}.mt-4.sc-ir-signin{margin-top:1rem}.h-\\[1px\\].sc-ir-signin{height:1px}.w-56.sc-ir-signin{width:14rem}.min-w-\\[1rem\\].sc-ir-signin{min-width:1rem}.space-y-1.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-signin{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300.sc-ir-signin{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-signin{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2.sc-ir-signin{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm.sc-ir-signin{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-signin{aspect-ratio:16/9}.lg\\:p-6.sc-ir-signin{padding:1.5rem}}.p-6.sc-ir-signin{padding:1.5rem}.text-start.sc-ir-signin{text-align:start}@media (min-width:768px){.md\\:justify-between.sc-ir-signin{justify-content:space-between}.md\\:gap-8.sc-ir-signin{gap:2rem}}.gap-\\[2px\\].sc-ir-signin{gap:2px}.w-72.sc-ir-signin{width:18rem}.w-fit.sc-ir-signin{width:fit-content}@media (min-width:768px){.md\\:p-4.sc-ir-signin{padding:1rem}}.text-slate-900.sc-ir-signin{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.ml-4.sc-ir-signin{margin-left:1rem}.size-3.sc-ir-signin{height:.75rem;width:.75rem}.grid-cols-2.sc-ir-signin{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end.sc-ir-signin{align-items:flex-end}.space-y-3.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.py-4.sc-ir-signin{padding-bottom:1rem;padding-top:1rem}.pb-6.sc-ir-signin{padding-bottom:1.5rem}.ordinal.sc-ir-signin{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-800.sc-ir-signin{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-signin{flex-direction:row}.sm\\:items-center.sc-ir-signin{align-items:center}.sm\\:text-sm.sc-ir-signin{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-signin{grid-template-columns:repeat(3,minmax(0,1fr))}}.-bottom-0.sc-ir-signin{bottom:0}.-bottom-1.sc-ir-signin{bottom:-.25rem}.z-0.sc-ir-signin{z-index:0}.mb-1.sc-ir-signin{margin-bottom:.25rem}.mb-2.sc-ir-signin{margin-bottom:.5rem}.size-10.sc-ir-signin{height:2.5rem;width:2.5rem}.h-48.sc-ir-signin{height:12rem}.max-h-\\[80vh\\].sc-ir-signin{max-height:80vh}.cursor-pointer.sc-ir-signin{cursor:pointer}.overflow-hidden.sc-ir-signin{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-signin{border-radius:var(--radius,8px)}.bg-white\\/80.sc-ir-signin{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-signin{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-signin{padding-bottom:1rem}.text-white.sc-ir-signin{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-signin:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-signin{max-height:200px}.md\\:w-auto.sc-ir-signin{width:auto}.md\\:pt-0.sc-ir-signin{padding-top:0}.md\\:pt-4.sc-ir-signin{padding-top:1rem}.md\\:text-xl.sc-ir-signin{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-signin{max-height:250px}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-signin{color:hsl(var(--brand-600))}.text-slate-500.sc-ir-signin{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-signin{padding:1rem}}.space-y-1\\.5.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.border-solid.sc-ir-signin{border-style:solid}.mb-2\\.5.sc-ir-signin{margin-bottom:.625rem}.mb-6.sc-ir-signin{margin-bottom:1.5rem}.w-\\[45\\%\\].sc-ir-signin{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-signin{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-signin{color:var(--gray-500)}.min-h-screen.sc-ir-signin{min-height:100vh}.max-w-md.sc-ir-signin{max-width:28rem}.place-content-center.sc-ir-signin{place-content:center}.overflow-x-auto.sc-ir-signin{overflow-x:auto}.overflow-x-hidden.sc-ir-signin{overflow-x:hidden}.px-\\[20px\\].sc-ir-signin{padding-left:20px;padding-right:20px}.py-\\[16px\\].sc-ir-signin{padding-bottom:16px;padding-top:16px}@media (min-width:768px){.md\\:px-4.sc-ir-signin{padding-left:1rem;padding-right:1rem}}@media (min-width:1024px){.lg\\:table-cell.sc-ir-signin{display:table-cell}}@media (min-width:1280px){.xl\\:px-0.sc-ir-signin{padding-left:0;padding-right:0}}.mt-2.sc-ir-signin{margin-top:.5rem}.mt-2\\.5.sc-ir-signin{margin-top:.625rem}.rounded-xl.sc-ir-signin{border-radius:.75rem}.leading-none.sc-ir-signin{line-height:1}.tracking-tight.sc-ir-signin{letter-spacing:-.025em}";
const IrSigninStyle0 = irSigninCss;

const IrSignin = /*@__PURE__*/ proxyCustomElement(class IrSignin extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.authFinish = createEvent(this, "authFinish", 7);
        this.navigate = createEvent(this, "navigate", 7);
        this.signIn = createEvent(this, "signIn", 7);
        this.authService = new AuthService();
        this.enableSignUp = false;
        this.signInParams = {};
        this.formState = { cause: null, errors: null, status: 'empty' };
        this.isLoading = false;
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
        onAppDataChange('app_data', newValue => {
            this.authService.setToken(newValue.token);
        });
    }
    modifySignInParams(params) {
        if (!this.signInParams) {
            this.signInParams = {};
        }
        this.signInParams = Object.assign(Object.assign({}, this.signInParams), params);
    }
    async login(params) {
        try {
            this.isLoading = true;
            const token = await this.authService.login({ option: 'direct', params });
            this.authFinish.emit({
                state: 'success',
                token,
                payload: Object.assign({ method: 'direct' }, params),
            });
        }
        catch (error) {
            this.authFinish.emit({
                state: 'failed',
                token: null,
                payload: Object.assign({ method: 'direct' }, params),
            });
            this.formState = {
                cause: 'auth',
                status: 'invalid',
                errors: { email: error.message, booking_nbr: error.message },
            };
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSignIn(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        try {
            this.formState.errors = null;
            const params = SignInValidtor.parse(this.signInParams);
            this.signIn.emit({ trigger: 'be', params });
            await this.login(params);
        }
        catch (error) {
            let newErrors = {
                email: null,
                booking_nbr: null,
            };
            if (error instanceof ZodError) {
                error.issues.map(e => {
                    newErrors[e.path[0]] = e.message;
                });
                this.formState = {
                    cause: 'zod',
                    status: 'invalid',
                    errors: Object.assign({}, newErrors),
                };
                console.log(this.formState);
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (h(Host, { key: '4d6124a4787f67c389c6a13c1d8a0df23a56b19d' }, h("h1", { key: '8ad88a7a334e4df22b7e1058db178eafa8c267b2', class: "title" }, "Sign in to your booking"), h("form", { key: '347f637cdc0f34482b59f8f316d82d9ce5bac47e', onSubmit: this.handleSignIn.bind(this) }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "error" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '7ffafeac79dea328bc49a12ec36ab29fe7901e4c' }, h("ir-input", { key: 'fb97ce89883d8a4c813ac026874d4686bd4a7edb', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email", onInputBlur: e => {
                const firstNameSchema = SignInValidtor.pick({ email: true });
                const firstNameValidation = firstNameSchema.safeParse({ email: this.signInParams.email });
                const target = e.target;
                if (!firstNameValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("fieldset", { key: 'b966eedbb5c5b3d32620f6b6a66cb9e87acf5bd6' }, h("ir-input", { key: '1f065f5af8003e7d9d974ee002001a0745c1062e', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.booking_nbr), onTextChanged: e => this.modifySignInParams({ booking_nbr: e.detail }), inputId: "booking_nbr", type: "number", label: "Enter your booking number", onInputBlur: e => {
                const firstNameSchema = SignInValidtor.pick({ booking_nbr: true });
                const firstNameValidation = firstNameSchema.safeParse({ booking_nbr: this.signInParams.booking_nbr });
                const target = e.target;
                if (!firstNameValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("ir-button", { key: '71c7f6f4782afcaa387b3812bd1e4c96a585e13a', isLoading: this.isLoading, type: "submit", class: "ir-button", label: "Sign in", size: "md" }), h("div", { key: 'd7de1b75d9e1c36dfd83629f1cbbb415fd010dfd', class: "divider" }, h("div", { key: '1807703271d9efca59aae8f985ac276a632371b8', class: "divider-line" }), h("span", { key: 'd78e7954c17ae693fd4751c2d4ef1c35b104f9e8', class: "divider-text" }, "OR"), h("div", { key: 'bf8648abb1f241bd8cf1871c928a42c3cea42da0', class: "divider-line" })))));
    }
    static get style() { return IrSigninStyle0; }
}, [2, "ir-signin", {
        "enableSignUp": [4, "enable-sign-up"],
        "signInParams": [32],
        "formState": [32],
        "isLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-signin", "ir-badge-group", "ir-button", "ir-icons", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-signin":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSignin);
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrSignin as I, defineCustomElement as d };

//# sourceMappingURL=ir-signin2.js.map