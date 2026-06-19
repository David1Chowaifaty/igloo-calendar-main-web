import { h } from "@stencil/core";
export class IrModal {
    /**
     * The title text displayed in the modal header.
     */
    modalTitle = 'Modal Title';
    /**
     * The main content text shown in the modal body.
     */
    modalBody = 'Modal Body';
    /**
     * Controls whether the modal title is rendered.
     */
    showTitle;
    /**
     * Whether the right (confirm) button is visible.
     */
    rightBtnActive = true;
    /**
     * Whether the left (cancel/close) button is visible.
     */
    leftBtnActive = true;
    /** Whether the middle (tertiary) button is visible. */
    middleBtnActive = false;
    /**
     * Text displayed on the right (confirm) button.
     */
    rightBtnText = 'Confirm';
    /**
     * Text displayed on the left (cancel/close) button.
     */
    leftBtnText = 'Close';
    /**Text displayed on the middle (tertiary) button. */
    middleBtnText = 'More';
    /**
     * Whether the modal is in a loading state, disabling interaction.
     */
    isLoading = false;
    /**
     * Whether the modal middle button is in a loading state, disabling interaction.
     * @requires middleBtnActive to be true
     */
    isMiddleButtonLoading = false;
    /**
     * If true, the modal automatically closes after confirm/cancel actions.
     */
    autoClose = true;
    /**
     * Color theme of the right button.
     */
    rightBtnColor = 'primary';
    /**
     * Color theme of the left button.
     */
    leftBtnColor = 'secondary';
    /** Color theme of the middle (tertiary) button. */
    middleBtnColor = 'info';
    /**
     * Horizontal alignment of the footer buttons.
     */
    btnPosition = 'right';
    /**
     * Whether an icon should be displayed next to the title.
     */
    iconAvailable = false;
    /**
     * Icon name to render next to the title (if `iconAvailable` is true).
     */
    icon = '';
    /**
     * Controls visibility of the modal.
     */
    isOpen = false;
    /**
     * Payload object to pass along with confirm/cancel events.
     */
    item = {};
    /**
     * Opens the modal.
     *
     * Example:
     * ```ts
     * const modal = document.querySelector('ir-modal');
     * modal.openModal();
     * ```
     */
    async openModal() {
        this.isOpen = true;
    }
    /**
     * Closes the modal.
     */
    async closeModal() {
        this.isOpen = false;
    }
    /**
     * Fired when the confirm (right) button is clicked.
     * Emits the current `item` value.
     */
    confirmModal;
    /**
     * Fired when the cancel (left) button or backdrop is clicked.
     */
    cancelModal;
    /** Fired when the middle (tertiary) button is clicked. Emits the current `item` value. */
    middleModal;
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.leftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.middleBtnText) {
            this.middleModal.emit(this.item);
            this.item = {};
            if (this.autoClose)
                this.closeModal();
        }
        else if (name === this.rightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            h("div", { key: '6eb6a315f823fa0e86a461806f099ea10abac896', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: '8538f6198f69a49b362e56ddcc65ddc3f3300b40', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: 'ff4fccc23f7dc8cda62ccdc3f0d5c0653e32515a', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: '4249e98e3111774e21e05f7760f5307fcf8ad445', class: `ir-alert-header` }, h("p", { key: '8331ddfe08fa3a6307397405bd5af4d4b7aa34ca' }, this.modalTitle))), h("div", { key: 'c6ae277add198ea912eabcff0317be12a88fd11c', class: "modal-body text-left p-0 mb-2" }, h("div", { key: '337b00b376f0b9410033bdabc7e8cfb605cde280' }, this.modalBody)), h("div", { key: '1adc9fb45696d29d3d166df293ad86d577534113', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: '56327c5598e8ecd75a965b53bf904df9e58680d7', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.middleBtnActive && (h("ir-button", { key: 'eb2f93ff0b92350011cba91106bbed9e3cc27c1c', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.middleBtnText, isLoading: this.isMiddleButtonLoading, name: this.middleBtnText })), this.rightBtnActive && (h("ir-button", { key: 'e39ec2b6128f49de15e561c01e155ca15dc71b1b', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
    static get is() { return "ir-modal"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-modal.css"]
        };
    }
    static get properties() {
        return {
            "modalTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title text displayed in the modal header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "modal-title",
                "defaultValue": "'Modal Title'"
            },
            "modalBody": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The main content text shown in the modal body."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "modal-body",
                "defaultValue": "'Modal Body'"
            },
            "showTitle": {
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
                    "text": "Controls whether the modal title is rendered."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-title"
            },
            "rightBtnActive": {
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
                    "text": "Whether the right (confirm) button is visible."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "right-btn-active",
                "defaultValue": "true"
            },
            "leftBtnActive": {
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
                    "text": "Whether the left (cancel/close) button is visible."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "left-btn-active",
                "defaultValue": "true"
            },
            "middleBtnActive": {
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
                    "text": "Whether the middle (tertiary) button is visible."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "middle-btn-active",
                "defaultValue": "false"
            },
            "rightBtnText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text displayed on the right (confirm) button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "right-btn-text",
                "defaultValue": "'Confirm'"
            },
            "leftBtnText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text displayed on the left (cancel/close) button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "left-btn-text",
                "defaultValue": "'Close'"
            },
            "middleBtnText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text displayed on the middle (tertiary) button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "middle-btn-text",
                "defaultValue": "'More'"
            },
            "isLoading": {
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
                    "text": "Whether the modal is in a loading state, disabling interaction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-loading",
                "defaultValue": "false"
            },
            "isMiddleButtonLoading": {
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
                    "tags": [{
                            "name": "requires",
                            "text": "middleBtnActive to be true"
                        }],
                    "text": "Whether the modal middle button is in a loading state, disabling interaction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-middle-button-loading",
                "defaultValue": "false"
            },
            "autoClose": {
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
                    "text": "If true, the modal automatically closes after confirm/cancel actions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-close",
                "defaultValue": "true"
            },
            "rightBtnColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color theme of the right button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "right-btn-color",
                "defaultValue": "'primary'"
            },
            "leftBtnColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color theme of the left button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "left-btn-color",
                "defaultValue": "'secondary'"
            },
            "middleBtnColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color theme of the middle (tertiary) button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "middle-btn-color",
                "defaultValue": "'info'"
            },
            "btnPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right' | 'center'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Horizontal alignment of the footer buttons."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "btn-position",
                "defaultValue": "'right'"
            },
            "iconAvailable": {
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
                    "text": "Whether an icon should be displayed next to the title."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-available",
                "defaultValue": "false"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon name to render next to the title (if `iconAvailable` is true)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "''"
            },
            "item": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Payload object to pass along with confirm/cancel events."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "item",
                "defaultValue": "{}"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "confirmModal",
                "name": "confirmModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the confirm (right) button is clicked.\nEmits the current `item` value."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "cancelModal",
                "name": "cancelModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the cancel (left) button or backdrop is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "middleModal",
                "name": "middleModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the middle (tertiary) button is clicked. Emits the current `item` value."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the modal.\n\nExample:\n```ts\nconst modal = document.querySelector('ir-modal');\nmodal.openModal();\n```",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the modal.",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "clickHandler",
                "method": "btnClickHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
