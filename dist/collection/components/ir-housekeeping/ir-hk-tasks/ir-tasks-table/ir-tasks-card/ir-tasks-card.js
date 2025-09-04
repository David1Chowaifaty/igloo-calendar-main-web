import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '852a95a4a4a4830e8ce6466a023ab1630767885d', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '075f09db542c6362ac60cdb478dc5635c2eaaa58', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'b48daa2341d051aab80321731bdf166bff973ec3', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'a9d65183d96a31b64aeb705f67e3cb4f02676449', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '1eb3c69246e82f3078a59dcd442661236302fb0a' }, "-"), h("p", { key: 'e311553608f442a0e931e39d53078a7854bc2612', class: "m-0 p-0" }, "Unit ", h("b", { key: '2a513140e34e4b45ac5a0a7ca3f9a6ef48873d7f' }, this.task.unit.name)))), h("p", { key: '7344425d92673b240c122c3d7a56a19b2e7eb8d3', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'e6261b2842f8bc8c4f28fcc6fba71675ecdc132d', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '5a0dbe692fef5ede12a55ebc8338cae1f531af1e', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '2d77738e032202cc811ee9197fe3d638f02bffdb', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'aa3ae5c1213421c2722fbea008a4964d0184b399', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '2a4b1ea5a775c0d63ad3ea0f3ca7868006293199', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '75444bb7da9bca20d7d7bbfafe7a5da74bcfcb61' }, h("b", { key: '6c746f2593e9c76246374a7e79fc1b3691fdb3e3' }, this.task.adult), " Adults")), h("span", { key: '122a02b32e921f68ac8c7a44b5602695ffe2ea6e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '5673e48718c61f948c671a7c225bd210e3e4293a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'd6e0aa12e7a918d269f86a8fb56a2d179ec78ab5', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'd9840e91be90bcb0f0e05aa2c3a322a2459a0c0e' }, h("b", { key: '0d08263707b88f4932ba21519096b583e47f1fc7' }, this.task.child), " Children")), h("span", { key: '0e6eeed7e78c113dbd49977ca9ff0cbc8a9b2eb9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '39e7e08e3f13ce6723fdfa35715b14d04523d0bf', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'e5c590396a17b35f947af31e3bf0d5756e74b6a2', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '7830b63171a439fb475f8fab66b446c8e43ecd85', d: "M15 12h.01" }), h("path", { key: 'c33e95a85a1f53c363bbb79064b217c0c046a23a', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '8555cffa15bf32da98c18fd4311e30a58f5881f7', d: "M9 12h.01" })), h("span", { key: 'f3287f22bf41ad1b58ec620d85f61e5d5529e5d1' }, h("b", { key: '21180d7c516496d4b374c09b496a6b495304ce49' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '97b1c0b8780e71a54bb66b698bc4806d0f66d481' }, h("div", { key: '1203dd62c49193579024c6ea142c19b2650b2b47' }, h("ir-button", { key: 'd6a544012b9f83407debe08b0febad5c1e0595e1', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'aa163121d6b9d685d016a49399ca3f22aa691dc2' }, h("ir-button", { key: '5c00a7ef80f71eac98e65c4294cfc8e1c1d2a327', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'c2f613aa03900c45a750b4a70f9ac3ea9de3ee97' }, h("ir-button", { key: '083dd1699833445e7878382fb718ebbc9f99d07e', onClickHandler: () => {
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
