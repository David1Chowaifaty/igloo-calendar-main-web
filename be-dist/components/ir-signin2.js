import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { I as IntegrationIcons } from './integration_icons.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irSigninCss = "*.sc-ir-signin,.sc-ir-signin:after,.sc-ir-signin:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-signin:after,.sc-ir-signin:before{--tw-content:\"\"}.sc-ir-signin-h,html.sc-ir-signin{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-signin{line-height:inherit;margin:0}hr.sc-ir-signin{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-signin:where([title]){text-decoration:underline dotted}h1.sc-ir-signin,h2.sc-ir-signin,h3.sc-ir-signin,h4.sc-ir-signin,h5.sc-ir-signin,h6.sc-ir-signin{font-size:inherit;font-weight:inherit}a.sc-ir-signin{color:inherit;text-decoration:inherit}b.sc-ir-signin,strong.sc-ir-signin{font-weight:bolder}code.sc-ir-signin,kbd.sc-ir-signin,pre.sc-ir-signin,samp.sc-ir-signin{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-signin{font-size:80%}sub.sc-ir-signin,sup.sc-ir-signin{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-signin{bottom:-.25em}sup.sc-ir-signin{top:-.5em}table.sc-ir-signin{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-signin,input.sc-ir-signin,optgroup.sc-ir-signin,select.sc-ir-signin,textarea.sc-ir-signin{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-signin,select.sc-ir-signin{text-transform:none}[type=button].sc-ir-signin,[type=reset].sc-ir-signin,[type=submit].sc-ir-signin,button.sc-ir-signin{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-signin:-moz-focusring{outline:auto}.sc-ir-signin:-moz-ui-invalid{box-shadow:none}progress.sc-ir-signin{vertical-align:baseline}.sc-ir-signin::-webkit-inner-spin-button,.sc-ir-signin::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-signin{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-signin::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-signin::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-signin{display:list-item}blockquote.sc-ir-signin,dd.sc-ir-signin,dl.sc-ir-signin,fieldset.sc-ir-signin,figure.sc-ir-signin,h1.sc-ir-signin,h2.sc-ir-signin,h3.sc-ir-signin,h4.sc-ir-signin,h5.sc-ir-signin,h6.sc-ir-signin,hr.sc-ir-signin,p.sc-ir-signin,pre.sc-ir-signin{margin:0}fieldset.sc-ir-signin,legend.sc-ir-signin{padding:0}menu.sc-ir-signin,ol.sc-ir-signin,ul.sc-ir-signin{list-style:none;margin:0;padding:0}dialog.sc-ir-signin{padding:0}textarea.sc-ir-signin{resize:vertical}input.sc-ir-signin::placeholder,textarea.sc-ir-signin::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-signin,button.sc-ir-signin{cursor:pointer}.sc-ir-signin:disabled{cursor:default}audio.sc-ir-signin,canvas.sc-ir-signin,embed.sc-ir-signin,iframe.sc-ir-signin,img.sc-ir-signin,object.sc-ir-signin,svg.sc-ir-signin,video.sc-ir-signin{display:block;vertical-align:middle}img.sc-ir-signin,video.sc-ir-signin{height:auto;max-width:100%}[hidden].sc-ir-signin{display:none}.sc-ir-signin::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-signin{display:block}.flex-grow.sc-ir-signin{flex-grow:1}.sc-ir-signin-h{display:block}.title.sc-ir-signin{color:#101828;font-size:24px;font-weight:600;height:32px;line-height:1.33}.Supporting-text.sc-ir-signin,.title.sc-ir-signin{align-self:stretch;flex-grow:0;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center}.Supporting-text.sc-ir-signin{color:#475467;font-size:16px;font-weight:400;height:24px;line-height:1.5}.dont-have-an-account.sc-ir-signin{color:#475467;flex-grow:0;font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;height:20px;letter-spacing:normal;line-height:1.43;text-align:left;width:155px}.static.sc-ir-signin{position:static}.p-4.sc-ir-signin{padding:1rem}.shadow.sc-ir-signin{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:640px){.sm\\:p-6.sc-ir-signin{padding:1.5rem}}.mb-4.sc-ir-signin{margin-bottom:1rem}.mb-6.sc-ir-signin{margin-bottom:1.5rem}.mt-4.sc-ir-signin{margin-top:1rem}.flex.sc-ir-signin{display:flex}.h-\\[1px\\].sc-ir-signin{height:1px}.w-\\[45\\%\\].sc-ir-signin{width:45%}.w-full.sc-ir-signin{width:100%}.items-center.sc-ir-signin{align-items:center}.justify-center.sc-ir-signin{justify-content:center}.gap-4.sc-ir-signin{gap:1rem}.space-y-3.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\].sc-ir-signin{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-signin{color:var(--gray-500)}.outline.sc-ir-signin{outline-style:solid}.my-6.sc-ir-signin{margin-bottom:1.5rem;margin-top:1.5rem}.mb-5.sc-ir-signin{margin-bottom:1.25rem}.mb-8.sc-ir-signin{margin-bottom:2rem}.justify-end.sc-ir-signin{justify-content:flex-end}.space-y-4.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.sr-only.sc-ir-signin{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.hidden.sc-ir-signin{display:none}.h-10.sc-ir-signin{height:2.5rem}.h-14.sc-ir-signin{height:3.5rem}.h-4.sc-ir-signin{height:1rem}.w-4.sc-ir-signin{width:1rem}.w-auto.sc-ir-signin{width:auto}.flex-col.sc-ir-signin{flex-direction:column}.justify-start.sc-ir-signin{justify-content:flex-start}.justify-between.sc-ir-signin{justify-content:space-between}.gap-2.sc-ir-signin{gap:.5rem}.space-x-4.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.bg-white.sc-ir-signin{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-fill.sc-ir-signin{object-fit:fill}.py-6.sc-ir-signin{padding-bottom:1.5rem;padding-top:1.5rem}.text-lg.sc-ir-signin{font-size:1.125rem;line-height:1.75rem}.text-sm.sc-ir-signin{font-size:.875rem;line-height:1.25rem}.font-medium.sc-ir-signin{font-weight:500}.text-slate-700.sc-ir-signin{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block.sc-ir-signin{display:block}.md\\:flex.sc-ir-signin{display:flex}.md\\:hidden.sc-ir-signin{display:none}}.pointer-events-none.sc-ir-signin{pointer-events:none}.absolute.sc-ir-signin{position:absolute}.relative.sc-ir-signin{position:relative}.inset-y-0.sc-ir-signin{bottom:0;top:0}.end-0.sc-ir-signin{inset-inline-end:0}.top-\\[50\\%\\].sc-ir-signin{top:50%}.translate-y-\\[-50\\%\\].sc-ir-signin{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rounded-md.sc-ir-signin{border-radius:.375rem}.border.sc-ir-signin{border-width:1px}.px-2.sc-ir-signin{padding-left:.5rem;padding-right:.5rem}.px-4.sc-ir-signin{padding-left:1rem;padding-right:1rem}.py-1.sc-ir-signin{padding-bottom:.25rem;padding-top:.25rem}.pe-6.sc-ir-signin{padding-inline-end:1.5rem}.text-gray-900.sc-ir-signin{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.focus\\:outline-none.sc-ir-signin:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring.sc-ir-signin:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.h-5.sc-ir-signin{height:1.25rem}.w-5.sc-ir-signin{width:1.25rem}.fixed.sc-ir-signin{position:fixed}.right-0.sc-ir-signin{right:0}.right-4.sc-ir-signin{right:1rem}.top-0.sc-ir-signin{top:0}.top-4.sc-ir-signin{top:1rem}.z-50.sc-ir-signin{z-index:50}.mt-8.sc-ir-signin{margin-top:2rem}.h-6.sc-ir-signin{height:1.5rem}.h-screen.sc-ir-signin{height:100vh}.w-6.sc-ir-signin{width:1.5rem}.min-w-\\[70\\%\\].sc-ir-signin{min-width:70%}.max-w-full.sc-ir-signin{max-width:100%}.translate-x-0.sc-ir-signin{--tw-translate-x:0px}.translate-x-0.sc-ir-signin,.translate-x-\\[100\\%\\].sc-ir-signin{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-signin{--tw-translate-x:100%}.shadow.sc-ir-signin,.shadow-md.sc-ir-signin{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-signin{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-signin{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-signin{transition-duration:.3s}.ease-in-out.sc-ir-signin{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-signin{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-signin,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-signin{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-signin{--tw-translate-x:0px}.sticky.sc-ir-signin{position:sticky}.bottom-0.sc-ir-signin{bottom:0}.z-40.sc-ir-signin{z-index:40}.mb-2.sc-ir-signin{margin-bottom:.5rem}.line-clamp-3.sc-ir-signin{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.size-4.sc-ir-signin{height:1rem;width:1rem}.w-40.sc-ir-signin{width:10rem}.flex-1.sc-ir-signin{flex:1 1 0%}.flex-wrap.sc-ir-signin{flex-wrap:wrap}.items-start.sc-ir-signin{align-items:flex-start}.gap-1.sc-ir-signin{gap:.25rem}.gap-10.sc-ir-signin{gap:2.5rem}.space-y-1.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-5.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.divide-y.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-hidden.sc-ir-signin{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\].sc-ir-signin{border-radius:var(--radius,8px)}.rounded-b-none.sc-ir-signin{border-bottom-left-radius:0;border-bottom-right-radius:0}.bg-gray-50.sc-ir-signin{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-700\\/80.sc-ir-signin{background-color:rgba(55,65,81,.8)}.p-2.sc-ir-signin{padding:.5rem}.py-2.sc-ir-signin{padding-bottom:.5rem;padding-top:.5rem}.text-xs.sc-ir-signin{font-size:.75rem;line-height:1rem}.text-gray-200.sc-ir-signin{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-green-500.sc-ir-signin{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-red-500.sc-ir-signin{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-900.sc-ir-signin{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through.sc-ir-signin{text-decoration-line:line-through}@media (min-width:768px){.md\\:w-fit.sc-ir-signin{width:fit-content}.md\\:flex-row.sc-ir-signin{flex-direction:row}.md\\:items-center.sc-ir-signin{align-items:center}.md\\:justify-start.sc-ir-signin{justify-content:flex-start}.md\\:space-x-2.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:space-y-0.sc-ir-signin>.sc-ir-signin:not([hidden])~.sc-ir-signin:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:max-w-md.sc-ir-signin{max-width:28rem}.lg\\:flex-row.sc-ir-signin{flex-direction:row}.lg\\:justify-end.sc-ir-signin{justify-content:flex-end}.lg\\:size-7.sc-ir-signin{height:1.75rem;width:1.75rem}}.resize.sc-ir-signin{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-signin{display:block}}";
const IrSigninStyle0 = irSigninCss;

const IrSignin = /*@__PURE__*/ proxyCustomElement(class IrSignin extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.navigate = createEvent(this, "navigate", 7);
    }
    renderFBIcon() {
        return h("span", { slot: "left-icon" }, IntegrationIcons['001']);
    }
    render() {
        return (h(Host, { key: '25637002fa71bbceb830686d2b8fd8a82ebf9d8a' }, h("h1", { key: '5ba48e0fa83128825b922ba8dece99d57a7eae44', class: "title" }, "Log in to your account"), h("p", { key: 'f4a306ba65b2b4db540d3ce0a9b883c0e6bb909a', class: "Supporting-text mb-8 " }, "Welcome back! Please enter your details."), h("div", { key: '757a223cdd87f00a70ffeecf315a04f2ec3db399', class: "space-y-4 mb-8 " }, h("fieldset", { key: 'ec148097de3467f25835a290f230f67124d8547b', class: "mb-5" }, h("ir-input", { key: '0733bc2547467dbe0a83f2987bb1f8e123cd97ba', autofocus: true, inputId: "email", placeholder: "Enter your email" })), h("fieldset", { key: '68a8739fa7a037966caac514270989357b0698c1' }, h("ir-input", { key: '9ac970e054678a6bd0e20f997a899652f25cddd6', inputId: "password", type: "password", placeholder: "Enter your password" })), h("div", { key: 'd01493b0a155f10aed04c3191e90abf1e6450265', class: "my-6 flex justify-end" }, h("ir-button", { key: '8a6a59ce128de054c41ce22e07c113b023713531', variants: "ghost-primary", label: "Forgot password" })), h("ir-button", { key: '950b671d35f7d4fa87279e86cfaa1202e02a0482', class: "w-full", label: "Sign in", size: "md" }), h("ir-button", { key: 'b8c7b16817922353274e637d6afeedb619d6176e', class: "w-full", variants: "outline", label: "Sign in with Facebook", haveLeftIcon: true }, this.renderFBIcon())), h("div", { key: '1340978e6fc23ceb0479e8a6d6c8a98fc4667157', class: "flex items-center justify-center" }, h("p", { key: '1adb70b9c9e6199a7493c382c165d6cf5107ed68', class: "dont-have-an-account" }, "Don't have an account?"), h("ir-button", { key: '07dac320fd3abaececf077f7e1055bb42c2b01b5', label: "Sign up", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('register') }))));
    }
    static get style() { return IrSigninStyle0; }
}, [2, "ir-signin"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-signin", "ir-button", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-signin":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSignin);
            }
            break;
        case "ir-button":
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