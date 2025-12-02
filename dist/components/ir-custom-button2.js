import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irCustomButtonCss = ":host{display:block}.ir__custom-button{width:100%}.ir__custom-button.--icon::part(base){height:auto;width:auto;padding:0}.ir__custom-button::part(base){height:var(--ir-c-btn-height, var(--wa-form-control-height));padding:var(--ir-c-btn-padding, 0 var(--wa-form-control-padding-inline));font-size:var(--ir-c-btn-font-size, auto)}.ir__custom-button.--link::part(base){height:fit-content;padding:0}";
const IrCustomButtonStyle0 = irCustomButtonCss;

const IrCustomButton = /*@__PURE__*/ proxyCustomElement(class IrCustomButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.clickHandler = createEvent(this, "clickHandler", 7);
    }
    link;
    iconBtn;
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant;
    /** The button's visual appearance. */
    appearance;
    /** The button's size. */
    size = 'small';
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    withCaret;
    /** Disables the button. Does not apply to link buttons. */
    disabled;
    /** Draws the button in a loading state. */
    loading;
    /** Draws a pill-style button with rounded edges. */
    pill;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type = 'button';
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name;
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target;
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    rel;
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download;
    /**
     * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
     * value of this attribute must be an id of a form in the same document or shadow root as the button.
     */
    form;
    /** Used to override the form owner's `action` attribute. */
    formAction;
    /** Used to override the form owner's `enctype` attribute.  */
    formEnctype;
    /** Used to override the form owner's `method` attribute.  */
    formMethod;
    /** Used to override the form owner's `novalidate` attribute. */
    formNoValidate;
    /** Used to override the form owner's `target` attribute. */
    formTarget;
    clickHandler;
    buttonEl;
    componentDidLoad() {
        this.buttonEl.addEventListener('click', this.handleButtonClick);
    }
    disconnectedCallback() {
        this.buttonEl.removeEventListener('click', this.handleButtonClick);
    }
    handleButtonClick = (e) => {
        this.clickHandler.emit(e);
    };
    render() {
        return (h(Host, { key: '7520d3b79fd1dbd826524c340968dd2247f0bdc7' }, h("wa-button", { key: '4b0937b060a995bd8428a15c21670d5e1168ce97', ref: el => (this.buttonEl = el),
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget }, h("slot", { key: '49df20964428d3d558156409ca23457dd6ed5250', slot: "start", name: "start" }), h("slot", { key: '43822ecbb30f76b96ab8acea6b7d828b72e34d97' }), h("slot", { key: 'c96bfb3cc1792ce5ea3f6248298757bfec19c28a', slot: "end", name: "end" }))));
    }
    static get style() { return IrCustomButtonStyle0; }
}, [4, "ir-custom-button", {
        "link": [4],
        "iconBtn": [516, "icon-btn"],
        "variant": [1],
        "appearance": [1],
        "size": [1],
        "withCaret": [4, "with-caret"],
        "disabled": [4],
        "loading": [4],
        "pill": [4],
        "type": [1],
        "name": [1],
        "value": [1],
        "href": [1],
        "target": [1],
        "rel": [1],
        "download": [1],
        "form": [1],
        "formAction": [1, "form-action"],
        "formEnctype": [1, "form-enctype"],
        "formMethod": [1, "form-method"],
        "formNoValidate": [4, "form-no-validate"],
        "formTarget": [1, "form-target"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCustomButton);
            }
            break;
    } });
}

export { IrCustomButton as I, defineCustomElement as d };

//# sourceMappingURL=ir-custom-button2.js.map