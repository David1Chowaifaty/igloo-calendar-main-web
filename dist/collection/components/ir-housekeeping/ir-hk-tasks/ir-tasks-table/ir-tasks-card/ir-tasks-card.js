import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '161d95f5388dd914e0ec8945299360907289f81d', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '8e53dd7b40a1ad2a7b9456a2ee4351ff076794c3', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '8396895314f2954c6af96ca14eadbeeef2d3e4f4', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'e06b718b82fc0c06a619530552fd90762b558cc1', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'efd91e82aff4d4b09567f33d4f9c54260b6d9e12' }, "-"), h("p", { key: '30bd64bfe44e58bb5f807f1d54f02cc9e4e98f34', class: "m-0 p-0" }, "Unit ", h("b", { key: '875bdf348c6024a0d0e33a2ed793d37f2a4eeece' }, this.task.unit.name)))), h("p", { key: '5db99aa4bc96fcf9f9e51ba7ae9e1934487f12b9', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '3e2dd960fe56a69f9e35c78dc3b9707a88e98f35', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'bf2e882dfed67fa18f311cc0b5ddd6a39d89f0d2', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'bdf45781f108b660f01454802ac6b53e5d06530e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b9d41553c9e3e79ee3ad16724276a94c9922f5f1', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '0eea9b844c056a491945f960df928c78ec56a825', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '6d4749ec574c050d958df1ed0fe52aa56af29ae8' }, h("b", { key: '8704aa72ae48ca6df1170d00d2f5d3460d5922bf' }, this.task.adult), " Adults")), h("span", { key: 'c6ddbf4a93cd688f4de7e4d3a42a5f644d5e3157', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '90da2830b701f6e6969808f56e19a1408adf8e78', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '7015ee937ebe629d07505603886deccdf33dbdfb', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'b37e6ad28814d16577055a854c5eaea01ea11b99' }, h("b", { key: '492326689ba1543064f28ccc8246457bd03d3ab2' }, this.task.child), " Children")), h("span", { key: '875c9722575e75e02241def493153bcc64a8a14c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6619f81fd5380e7ff1e79cbb79440235417fa6c2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '82c09683430d10dcf6a2f8f1abb21bf462c05f0e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '7760e77d543c4c71e0f202b3fb203da0c38aec34', d: "M15 12h.01" }), h("path", { key: 'b3ae4a46b2ca8a441f6a0f502eefb3a89064adcb', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'b77969d50e0d76d1a61ccc1c316b1374dc7ba290', d: "M9 12h.01" })), h("span", { key: '6f22dd72fdd22b44e5294f93852e79ce23114975' }, h("b", { key: '67bccf92f18882bedbf608b74ea1c588c542764a' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '80e08f2eee0571de9375844446a29f2e5c997564' }, h("ir-button", { key: '9ad62959e76ba9e2714460d6567eebfc824bd3dd', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: '8a34e4c811c5d4290b70e2f5dc50003771ed6a69' }, h("ir-button", { key: '7c6ec9d9f8528a0ef4d6b78a93ea1ab8e3516025', onClickHandler: () => {
                // toggleTaskSelection(this.task);
                this.skipSelectedTask.emit(this.task);
            }, size: "sm", text: 'Skip', labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
    static get is() { return "ir-tasks-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-card.css"]
        };
    }
    static get properties() {
        return {
            "task": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
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
                "setter": false
            },
            "isCheckable": {
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
                "attribute": "is-checkable",
                "reflect": false
            },
            "isSkippable": {
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
                "attribute": "is-skippable",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "cleanSelectedTask",
                "name": "cleanSelectedTask",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                }
            }, {
                "method": "skipSelectedTask",
                "name": "skipSelectedTask",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-tasks-card.js.map
