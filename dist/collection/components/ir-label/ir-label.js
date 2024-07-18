import { h, Host } from "@stencil/core";
import { colorVariants } from "../ui/ir-icons/icons";
export class IrLabel {
    constructor() {
        this.label = undefined;
        this.value = undefined;
        this.iconShown = false;
        this.image = undefined;
        this.country = false;
        this.imageStyle = '';
        this.icon_name = 'edit';
        this.icon_style = undefined;
    }
    openEditSidebar() {
        this.editSidebar.emit();
    }
    render() {
        if (!this.value) {
            return null;
        }
        return (h(Host, { class: this.image ? 'align-items-center' : '' }, h("strong", null, this.label), this.image && h("img", { src: this.image.src, class: `p-0 m-0 ${this.country ? 'country' : 'logo'} ${this.image.style}`, alt: this.image.src }), h("p", null, this.value), this.iconShown && (h("div", { class: "icon-container" }, h("ir-button", { variant: "icon", icon_name: this.icon_name, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHanlder: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openEditSidebar();
            } })))));
    }
    static get is() { return "ir-label"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-label.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-label.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": ""
                },
                "attribute": "label",
                "reflect": false
            },
            "value": {
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
                    "text": ""
                },
                "attribute": "value",
                "reflect": false
            },
            "iconShown": {
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
                "attribute": "icon-shown",
                "reflect": false,
                "defaultValue": "false"
            },
            "image": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ src: string; alt: string; style?: string } | null",
                    "resolved": "{ src: string; alt: string; style?: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "country": {
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
                "attribute": "country",
                "reflect": false,
                "defaultValue": "false"
            },
            "imageStyle": {
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
                    "text": ""
                },
                "attribute": "image-style",
                "reflect": false,
                "defaultValue": "''"
            },
            "icon_name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"print\" | \"save\" | \"check\" | \"user\" | \"search\" | \"danger\" | \"clock\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"heart\" | \"user_group\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"calendar\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"menu_list\" | \"credit_card\" | \"closed_eye\" | \"open_eye\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "../ui/ir-icons/icons",
                            "id": "src/components/ui/ir-icons/icons.ts::TIcons"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon_name",
                "reflect": false,
                "defaultValue": "'edit'"
            },
            "icon_style": {
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
                    "text": ""
                },
                "attribute": "icon_style",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "editSidebar",
                "name": "editSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-label.js.map
