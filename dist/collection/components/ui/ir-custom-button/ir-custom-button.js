import { Host, h } from "@stencil/core";
export class IrCustomButton {
    el;
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
    handleButtonClick(e) {
        this.clickHandler.emit(e);
    }
    render() {
        if (this.link) {
            return (h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, h("slot", { slot: "start", name: "start" }), h("slot", null), h("slot", { slot: "end", name: "end" })));
        }
        return (h(Host, null, h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, h("slot", { slot: "start", name: "start" }), h("slot", null), h("slot", { slot: "end", name: "end" }))));
    }
    static get is() { return "ir-custom-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-custom-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-custom-button.css"]
        };
    }
    static get properties() {
        return {
            "link": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "link",
                "reflect": false
            },
            "iconBtn": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "icon-btn",
                "reflect": true
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['variant']",
                    "resolved": "\"brand\" | \"danger\" | \"neutral\" | \"success\" | \"warning\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The button's theme variant. Defaults to `neutral` if not within another element with a variant."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['appearance']",
                    "resolved": "\"accent\" | \"filled\" | \"filled-outlined\" | \"outlined\" | \"plain\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The button's visual appearance."
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['size']",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The button's size."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'small'"
            },
            "withCaret": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['withCaret']",
                    "resolved": "boolean",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-caret",
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['disabled']",
                    "resolved": "boolean",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the button. Does not apply to link buttons."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false
            },
            "loading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['loading']",
                    "resolved": "boolean",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Draws the button in a loading state."
                },
                "getter": false,
                "setter": false,
                "attribute": "loading",
                "reflect": false
            },
            "pill": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['pill']",
                    "resolved": "boolean",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Draws a pill-style button with rounded edges."
                },
                "getter": false,
                "setter": false,
                "attribute": "pill",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['type']",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native\n`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['name']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.\nThis attribute is ignored when `href` is present."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
            },
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['value']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the button, submitted as a pair with the button's name as part of the form data, but only when this\nbutton is the submitter. This attribute is ignored when `href` is present."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['href']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`."
                },
                "getter": false,
                "setter": false,
                "attribute": "href",
                "reflect": false
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['target']",
                    "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tells the browser where to open the link. Only used when `href` is present."
                },
                "getter": false,
                "setter": false,
                "attribute": "target",
                "reflect": false
            },
            "rel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['rel']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When using `href`, this attribute will map to the underlying link's `rel` attribute."
                },
                "getter": false,
                "setter": false,
                "attribute": "rel",
                "reflect": false
            },
            "download": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['download']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tells the browser to download the linked file as this filename. Only used when `href` is present."
                },
                "getter": false,
                "setter": false,
                "attribute": "download",
                "reflect": false
            },
            "form": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['form']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The \"form owner\" to associate the button with. If omitted, the closest containing form will be used instead. The\nvalue of this attribute must be an id of a form in the same document or shadow root as the button."
                },
                "getter": false,
                "setter": false,
                "attribute": "form",
                "reflect": false
            },
            "formAction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['formAction']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to override the form owner's `action` attribute."
                },
                "getter": false,
                "setter": false,
                "attribute": "form-action",
                "reflect": false
            },
            "formEnctype": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['formEnctype']",
                    "resolved": "\"application/x-www-form-urlencoded\" | \"multipart/form-data\" | \"text/plain\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to override the form owner's `enctype` attribute."
                },
                "getter": false,
                "setter": false,
                "attribute": "form-enctype",
                "reflect": false
            },
            "formMethod": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['formMethod']",
                    "resolved": "\"get\" | \"post\"",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to override the form owner's `method` attribute."
                },
                "getter": false,
                "setter": false,
                "attribute": "form-method",
                "reflect": false
            },
            "formNoValidate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['formNoValidate']",
                    "resolved": "boolean",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to override the form owner's `novalidate` attribute."
                },
                "getter": false,
                "setter": false,
                "attribute": "form-no-validate",
                "reflect": false
            },
            "formTarget": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeButton['formTarget']",
                    "resolved": "string",
                    "references": {
                        "NativeButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-button/ir-custom-button.tsx",
                            "id": "src/components/ui/ir-custom-button/ir-custom-button.tsx::NativeButton"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to override the form owner's `target` attribute."
                },
                "getter": false,
                "setter": false,
                "attribute": "form-target",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "clickHandler",
                "name": "clickHandler",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-custom-button.js.map
