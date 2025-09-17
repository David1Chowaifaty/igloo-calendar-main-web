import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'ec3840c1e0ad00c03857b672a26a31b71aeb2180', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '57931f7ce0855c05bce73df106c4090291396ccb', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'fb80f0d104f3276af0abaf48ea19d80b2136d86b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'f222d5d8fc548dc55e640d84ab6e3a5f9da58032', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '9bfdfc392166ec3306850c6c53c2b3ce55dff090' }, "-"), h("p", { key: '96379dbb723fd64f6a34357a01dae52c5021adff', class: "m-0 p-0" }, "Unit ", h("b", { key: '66272f942f82971e509cb6c48579852c6df397ed' }, this.task.unit.name)))), h("p", { key: '03c5069659c4a9511407c3b19879fc05db39692c', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '9ae71e53608c9c9db546d4a94cf18ccee53f815c', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '65ead507ed25932af3ddea2d652965b5c9aaae00', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '797b158216477ce5d0e2b80cff29a25a286f7c41', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0df4dfa52d35ab19a8826acef17abfe42710b225', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '275f8e7622c2709e4047595e22cb2b6f46b1224e', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'b47eab0e5a03aded751414363a594789a8f04e3c' }, h("b", { key: 'f47c569d30415181ad4cf0b3f1839cdf19e6e426' }, this.task.adult), " Adults")), h("span", { key: '81b3eed9d183fb2d74d049214da78d431551723b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd5537637bd710ee15428d7d73b39dd93f74b414c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1a9ca6ad6976a2fc7bc1859f5a893cdc1b212a63', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '01cb7dd04fc23516933b0913d51f1b45403787d9' }, h("b", { key: '38ed5734abb161c1e0ca76d7ae786e4b5d6ac7ef' }, this.task.child), " Children")), h("span", { key: '016fd0736c33149ec372fa4d9ea3fd30e6c18af1', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b3fc0bece8c88a29a6d5529aef4b13d8554cf44d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '7b02dce7975d98d72ec3dc33a4b86e96edd40e7f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'affabaaf03e33e1d54be258f73ec7812e0e3e3f2', d: "M15 12h.01" }), h("path", { key: '00138e5961ce2b39fd3ad412ed9c4347b7ecd927', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '2c64f55907d9c1540db5e6c4f34ae914f516ba01', d: "M9 12h.01" })), h("span", { key: '60fd5d20a5c1a1211560828549aa820c7bb6af1c' }, h("b", { key: 'a12a00787b9fffe5b6216573c92f88c5bc329a74' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '30b4d560e08b483c41a09b0d7e34bb9f81aa046d' }, h("div", { key: '19c4e8f6cf1aecf76cb9f4e7aa3aa4f18c6a8fc8' }, h("ir-button", { key: 'a92f92fdb8b86a5056ac027911a17a0e38cea75a', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'fffa7f2a035fcdf35209a9a337511b12b520827a' }, h("ir-button", { key: 'd3485680598a9dd835e6734bb148c14a079651c5', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '8a9d3ce0a3f06e8bd132c18974f295d89e94bf38' }, h("ir-button", { key: '34b039f64d64a6fdcc6ff62459d0402d2ee23fe7', onClickHandler: () => {
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
