import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '0f26b85c9c03568f55cc09a04badebe8579d6174', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '13236a0fdcfb950eb117308d7828e3536e9f3f36', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '9abfca480764fa9c2aa2a7638a305c9ced51aaa1', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'e280710d7fbfb1fe8c76493c4c6cd21502576de3', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '4b8d926f4a41ae3f5539b9d11e95293847827b00' }, "-"), h("p", { key: '22415a20f52fcd3cc534884c258e090e72ec54c9', class: "m-0 p-0" }, "Unit ", h("b", { key: '0012286f933f7960e21cf47dff9e08ef654f60e1' }, this.task.unit.name)))), h("p", { key: 'a562e69f8b5d689b27ab03cbdded0368c8178446', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '1d95fbd59203f2d3fb1c8625e7bf41f1d485c5ba', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'f163334700acb20630707d99ad4d713d29ba3933', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '43d10ea93b4fd24874a0a94712470ef1b3ff6d9a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '55f1da49fcba6e4bf7c5208ac40d979d5773bdb5', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'c0243e95b26e162784db161a71050310a8db6369', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '806d82b6e94977ba2703e0fd1cd155ef639d1e5a' }, h("b", { key: '11779456cad8edfaf2e0204770b6d2722f70957f' }, this.task.adult), " Adults")), h("span", { key: 'e8705b002e55939905b33ae8e53ca6b902e09f88', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ca6b5a361825e67d1193d304cdbf36268a4c9185', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '86074fb55518363a77520121b743ebc96f62f7ea', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'e254f369de97da494eb032e13cbdca6870d6b4c6' }, h("b", { key: '6d186dedd3d475be803fe1519e14ca0dfb1d30b9' }, this.task.child), " Children")), h("span", { key: 'a94bff9e1278a397e0a5d5fbb225d3944812450e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'c8ff2013b681e040a19dc3f9bb343105b0a1570c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'd54e64d402da140309b801b72866f293892db0eb', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'c7b856308009ecd4cb38e9453f43de4a336b511b', d: "M15 12h.01" }), h("path", { key: '734ccfb1e3c0090b5a29c51f17a68615dcb04ab8', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '486c51a076ee353012234211475b7c887bc47bf2', d: "M9 12h.01" })), h("span", { key: 'bad7c8b3d5868da65c7251b662b9d5dfce8da80a' }, h("b", { key: 'f589e20e2c901ce9c071f06527653f84153d6296' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '3121a342df6b07e74c422e31c738232b75066934' }, h("div", { key: '998d340c9916205f0c092ca7759172566a9ca4c6' }, h("ir-button", { key: '2540d0ca57e4d777881a0b5ebeb8546fdbbee80d', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '823aec978b836e17fe7efe0ac46f0fd8bce999f7' }, h("ir-button", { key: '81c80c5732fbca73876df9f1a945922f15060b08', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '7420e4c311d4c06b8340bf55cb2ddba73f5fc5c2' }, h("ir-button", { key: 'a161d25e102137c90e85983bfc6655a8041fabd5', onClickHandler: () => {
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
