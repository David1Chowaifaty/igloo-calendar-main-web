import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irPaginationCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}:host{align-items:center;display:flex;justify-content:space-between}ul{display:none;list-style-type:none;padding:1rem 0}.current-page-info{color:var(--gray-700,#344054);font-size:.875rem;font-weight:500;line-height:1.25rem}@media (min-width:768px){.current-page-info{display:none}ul{display:block}}li{align-items:center;border-radius:min(var(--radius,.5rem),1rem);cursor:pointer;display:inline-flex;font-size:.875rem;font-weight:500;height:2.5rem;justify-content:center;line-height:1.25rem;margin-right:5px;width:2.5rem}li button{all:unset;align-items:center;border-radius:min(var(--radius,.5rem),.5rem);color:var(--gray-500,#667085);display:flex;height:100%;justify-content:center;text-decoration:none;width:100%}li button:hover,li.active button{background:hsla(var(--brand-100,206,100%,85%),.3);color:hsla(var(--brand-600,215,87%,51%))}.ellipsis{color:var(--gray-500,#667085);pointer-events:none}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.absolute{position:absolute}.relative{position:relative}.right-2{right:.5rem}.top-2{top:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.table{display:table}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.w-full{width:100%}.max-w-6xl{max-width:72rem}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.flex-col{flex-direction:column}.place-content-center{place-content:center}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.py-\\[16px\\]{padding-bottom:16px;padding-top:16px}.pb-2{padding-bottom:.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}.right-3{right:.75rem}.top-3{top:.75rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-full{height:100%}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-0{top:0}.top-4{top:1rem}.z-50{z-index:50}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.size-3{height:.75rem;width:.75rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrPaginationStyle0 = irPaginationCss;

const IrPagination = /*@__PURE__*/ proxyCustomElement(class IrPagination extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pageChange = createEvent(this, "pageChange", 7);
        this.total = undefined;
        this.current = undefined;
        this.minPageShown = 7;
    }
    getPages() {
        const wingSize = 2;
        let pages = [];
        for (let i = 1; i <= this.total; i++) {
            if (this.total <= this.minPageShown) {
                pages.push(i);
            }
            else {
                if (i === 1) {
                    pages.push(i);
                }
                else if (i === this.total) {
                    pages.push(i);
                }
                else if (i >= this.current - wingSize && i <= this.current + wingSize) {
                    pages.push(i);
                }
                else if ((i === 2 && this.current > wingSize + 1) || (i === this.total - 1 && this.current < this.total - wingSize)) {
                    pages.push('...');
                }
            }
        }
        return pages;
    }
    render() {
        console.log(this.total);
        if (this.total <= 1) {
            return;
        }
        const pages = this.getPages();
        return (h(Host, null, h("ir-button", { disabled: this.current === 1, onButtonClick: () => this.pageChange.emit(this.current - 1), variants: "outline", label: "Previous", haveLeftIcon: true }, h("ir-icons", { name: "arrow_left", slot: "left-icon", svgClassName: "size-3" })), h("p", { class: "current-page-info" }, "Page ", this.current, " of ", this.total), h("ul", null, pages.map(page => typeof page === 'number' ? (h("li", { class: this.current === page ? 'active' : '' }, h("button", { onClick: () => this.pageChange.emit(page), type: "button" }, page))) : (h("li", { class: "ellipsis" }, page)))), h("ir-button", { disabled: this.current === this.total, onButtonClick: () => this.pageChange.emit(this.current + 1), variants: "outline", label: "Next", haveRightIcon: true }, h("ir-icons", { name: "arrow_right", slot: "right-icon", svgClassName: "size-3" }))));
    }
    static get style() { return IrPaginationStyle0; }
}, [1, "ir-pagination", {
        "total": [2],
        "current": [2],
        "minPageShown": [2, "min-page-shown"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pagination", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPagination);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPagination as I, defineCustomElement as d };

//# sourceMappingURL=ir-pagination2.js.map