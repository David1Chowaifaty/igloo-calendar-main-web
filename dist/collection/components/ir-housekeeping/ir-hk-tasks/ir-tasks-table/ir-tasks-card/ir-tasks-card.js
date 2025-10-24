import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'a34530e541aa3a13401816b7e53913edbba19115', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'e548ef9fcbb67e426cb78b8f8491bbbf5ecf188b', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '3ad6699407936cc587f23b49682c0de1d8275efc', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c35d651e58148b3906f8d959660e4a760f3420cd', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '38786971dbf10325a9517f24b4f760c8c2a512d8' }, "-"), h("p", { key: '0de0ee9eb80e1d4e1283e89ac622ebdf824f3e99', class: "m-0 p-0" }, "Unit ", h("b", { key: '0264950d4463a4af1078e8a5c27de3f68a8ffa00' }, this.task.unit.name)))), h("p", { key: '3977ee4403352284ff4fe897438cc15a513e717f', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '3b5a85d23f0e1670559d731fc196c4bc6eddbbd6', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '706f19b3cf510b3e2b25a59328d4cf477bd538b0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '40dfbdc3e8332ea5ed7294765c64d4bfdb8c5ee1', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2582b33c76adae37ed5d8106ae2828638deb55e9', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '88073b2389c931bb2bc8c71789bc42db8a5dbf31', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'dfa29bf736959d7eecc79f907928606f41755382' }, h("b", { key: '327ba83adf8259c91d4ba7ee54441b34d326aa47' }, this.task.adult), " Adults")), h("span", { key: 'ea6cc78c72177ffa4eca2bf7296f9caa5f7da685', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '8d1cbe31554f77ca0b75862e659a50ded40b81b7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1ef649b3687b4642bd2afea98c4f749fee5c1565', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '9d8f66fa28583e4f83cae3fee4d600e295c2a8ea' }, h("b", { key: '67a403a7e328b02b2f2c732eb60096498999f42c' }, this.task.child), " Children")), h("span", { key: '29c7661190b865546cfa6f9d2895ba5c4e7c7de7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '764e710fbe305130bf2c761540deffd947f8bb07', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'ead9ba911bfaa5d0efefad9000aa3ae0c82400f8', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'fc8438009e4b4069c8d4dbf48c0cc6982404c207', d: "M15 12h.01" }), h("path", { key: '4bed03ece36b45f1e9c048a1ee66ad54da523eb0', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '3b584a5457ae418921de4d156d4d9dc446efbf2b', d: "M9 12h.01" })), h("span", { key: 'e6e6a2e631768ef72f8ea50be02c253c4c5e492a' }, h("b", { key: '35e95d00bb5d954afc01494fe12097a532e17886' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'fdb07c8fbbd4c9278be8f146697070c03f72ad1d' }, h("div", { key: '183b1c05d58b58c3b12a8147a51645842b22131d' }, h("ir-button", { key: 'bfc4c5e160be92294a65d34bad51110de7f38ae4', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '74be5b7b7eeaf129024b4b6e3abd996959b4257d' }, h("ir-button", { key: 'bd587e9d75894702628b0b9aef9ff5b2f9ea8e36', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '88d438ea1ec29242b32cfce129cd5837b492a7f7' }, h("ir-button", { key: '4be1b25aa0cfd4f436c0521d88b0e738ee254397', onClickHandler: () => {
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
                    "resolved": "{ task: Task; status?: \"001\" | \"004\"; }",
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
