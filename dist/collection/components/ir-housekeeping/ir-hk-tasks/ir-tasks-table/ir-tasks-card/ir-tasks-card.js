import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    task;
    isCheckable;
    isSkippable;
    cleanSelectedTask;
    skipSelectedTask;
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'e745574eb6f56416fd320bfe822ad58f0477518c', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'e0f8c561073e92cc11e13894daee349b596506b6', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'eb8fd710f0facad890d9cf5a24443c6060a9579c', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '01b68ee537863aadfc506eac8fe9769cd546f967', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '42f34b74abbd8f3fee025eb4cf50e9c828431b95' }, "-"), h("p", { key: '18aa82d9633b27f8fde31ab28adeeaaf7bc50563', class: "m-0 p-0" }, "Unit ", h("b", { key: '1f030f01c556110afdb575d8cb30dbf5d5c858a0' }, this.task.unit.name)))), h("p", { key: '0c74ae8a6d417ea7647e96681b5d5cde03313a4f', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '47c808ec9cf6252ce779b8ba9d7a9c74c07100b7', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'a48ad0e404abe234387f443a2b59899e3cdb89a3', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '1f1c9e772c46f5f891d1338727fb944d91da6fed', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0ba199ac07b135bf550e7c0032d53d6fb23380e1', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '2620b4ce74f7d9522b888baac79ddc9775d21a0b', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'a01b33de26171988588daa88edd615383b598f03' }, h("b", { key: '58b7a673d69177e93cead6c6c61d420a237740f6' }, this.task.adult), " Adults")), h("span", { key: 'b37f85d3c35e1e0f173de37bccbb66955ae22a53', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '7a729898063dcd8a3c0dde7d3ccdc89078d97a2c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '315c043504b09f86fda04327070fa92321633a51', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'fc1abc4033284f9ed606130a8af784d66d811b69' }, h("b", { key: '93be9e1c6530298734925d95d5485a576600b946' }, this.task.child), " Children")), h("span", { key: '540bb5258efb9ae12b0ed2fc5b9afb5e46cc972a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd226e598274fcaef72203901699db3a84c8ab3fe', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '7895f52d0eb9b10375785940c4729711507e9329', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '412ceb043b4ba29f4986bc1aa258bb7c2df53966', d: "M15 12h.01" }), h("path", { key: '1d2f503961bf352b4e0a618f6807e7d1cd031c76', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '528ace5acd6f651a5f8723bfb197db80392c8d68', d: "M9 12h.01" })), h("span", { key: '41b99ad3a751508ba5ef05fcd12a6d2e1cd2e8a6' }, h("b", { key: 'effc0b5560c80a4f9b71362072df2ca4a45355b2' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '8bcb854e8465ab1d387548b882140c1314c82c5d' }, h("div", { key: '4cc08cf36d1e15b539da4d392b5c909d6c4580a3' }, h("ir-button", { key: '009f14e4101d12e25e81475d5edb3ecb954b174b', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '25ad525c83f338447b7f95926d0994c2683a282a' }, h("ir-button", { key: '9e17d61cea2f1d7c62bc77c1da27854044daf1fd', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '38f203b5e123346cb6559fccd3d68618a39ab2a1' }, h("ir-button", { key: 'eb705188370c3eb5be5a41f64a03f50c4277e214', onClickHandler: () => {
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
