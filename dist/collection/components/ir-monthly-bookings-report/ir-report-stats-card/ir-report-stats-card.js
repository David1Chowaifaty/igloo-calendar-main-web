import { Host, h } from "@stencil/core";
export class IrReportStatsCard {
    render() {
        if (!this.value) {
            return null;
        }
        return (h(Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("p", { class: "m-0 p-0" }, this.cardTitle), h("ir-icons", { name: this.icon })), h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, this.value)), this.subtitle && h("p", { class: "m-0 p-0 small text-muted" }, this.subtitle)));
    }
    static get is() { return "ir-report-stats-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-report-stats-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-report-stats-card.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"print\" | \"key\" | \"search\" | \"email\" | \"save\" | \"check\" | \"calendar\" | \"note\" | \"user\" | \"angles_left\" | \"clock\" | \"heart-fill\" | \"envelope-circle-check\" | \"danger\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"heart\" | \"user_group\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"xmark-fill\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"menu_list\" | \"credit_card\" | \"closed_eye\" | \"open_eye\" | \"server\" | \"double_caret_left\" | \"square_plus\" | \"angle_right\" | \"angles_right\" | \"outline_user\" | \"unlock\" | \"circle_plus\" | \"arrow-right-from-bracket\" | \"calendar-xmark\" | \"arrow-trend-up\" | \"hotel\" | \"arrow-trend-down\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "@/components/ui/ir-icons/icons",
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
                "getter": false,
                "setter": false,
                "attribute": "icon",
                "reflect": false
            },
            "cardTitle": {
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
                "getter": false,
                "setter": false,
                "attribute": "card-title",
                "reflect": false
            },
            "subtitle": {
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
                "getter": false,
                "setter": false,
                "attribute": "subtitle",
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
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-report-stats-card.js.map
