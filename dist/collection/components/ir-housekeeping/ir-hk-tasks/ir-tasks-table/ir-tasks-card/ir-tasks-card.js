import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '2c2a90c5f0e152415b88d90900f3fa883a28a9b5', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'f7342e7d625c188117f763e2fa949880d69c996b', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '97d08f20418024ecbef966fcd3dc0309edba615a', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'a226ce3b8ace5510cdfdafae737293d17454a9d8', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'f5e46fa75f5ce189f00677a274eb47a01bc39300' }, "-"), h("p", { key: '083db266888bee68a53ea289bcdcdee2b6a64018', class: "m-0 p-0" }, "Unit ", h("b", { key: '1c2c11953a83aad97c8e63c726ad9feb566702ae' }, this.task.unit.name)))), h("p", { key: '246f209c51a101ac17ec372658b14b29af6cd1ba', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '0371fc4a998fe27e1e7bc928ac39979fc609d74c', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '0d8d580605974633c1b5d2b8d2a0c2565e17a5b4', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'e99a2f917c54ff9bf08cd7715e15b61cbaf8e61c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '77ad7d9f920797350a7313b7e496c22366c39acd', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'cdfbe19ae719735ae96da42650c20599e24ac9c4', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '8b6dac76968024b03e4d61cdccae826bcd5272fe' }, h("b", { key: 'ccc2614c8909a93e1ec9e071e5fc7ebf92c0941f' }, this.task.adult), " Adults")), h("span", { key: '089a23dca01d9c4f5ef12bc67d4eef265dcf33d4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4a56d3a19db5c40dba460d804ea1e0d6f8ae7c4c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '20d50b78f591d9a1fc8adc0ff8ac1f65cb026102', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '451bb262c50085d3ee5957e1c22d3fd32588c356' }, h("b", { key: '0218f4c9418564b44f364387676c4f7be706128b' }, this.task.child), " Children")), h("span", { key: 'f6d50ac9d4ec3628d0df7de1b459f0c9d90c1dbd', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '057152826dbcdb0a2ac3c43bf57581ba3bd5f119', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '69aaffed620effee83df32ad9f61e0c5a605e6d2', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '37f317e7d74025c34e51720abee38a58de42116e', d: "M15 12h.01" }), h("path", { key: '5f16e3c88bd52b6314c2cc5c1f5b66d26f306796', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '924fbf5be6a36d9fe366a088912f3ef372fe8bcc', d: "M9 12h.01" })), h("span", { key: 'c9b854a1949ba44fa8d8899bbdc2dece8bc45bf4' }, h("b", { key: '4a2cdff2a8bbeec5eece241f4ba0672553722c0c' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '03468ff177e819da336d0e6ef6b9306e97d6bd76' }, h("div", { key: '045ac37863aff2a59d36eaea63e266dc573335ea' }, h("ir-button", { key: '7b6db0ad47f48eb776b2d70919437511b888cd8f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '46d15702e19c295b78fd18804a9f3b92a66cfab6' }, h("ir-button", { key: '22ded78af7ea6fd8a0b9812a2b49bd1277ef377e', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '8adbdea194476e2e4069ad54ce5c66ce65a2acd2' }, h("ir-button", { key: '228783de2763cfc3589ac440a9165581299e6b30', onClickHandler: () => {
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
                    "original": "CleanTaskEvent",
                    "resolved": "{ task: Task; status?: \"004\" | \"001\"; }",
                    "references": {
                        "CleanTaskEvent": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::CleanTaskEvent"
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
