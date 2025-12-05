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
        return (h(Host, { key: 'bdb5db1d91f56d7d40d5d0907f9e326a5b2333e4', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '1ccd56c2a926d85a10fda1364f5649cd83849174', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '8083a80a439080e0b38c632473c12ec06754cfea', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'f33532cbc6c5f1df0a7f601177544364e455dbd0', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8b71a62aa36d9ec6e94adab8fe9874ba94065904' }, "-"), h("p", { key: '20c834376ce9c20e53c89b597b1d0ba76d69e5e8', class: "m-0 p-0" }, "Unit ", h("b", { key: '885a050a40f43d4a22c640a1171cf974a18357fb' }, this.task.unit.name)))), h("p", { key: 'beba5dfe38495b25f2e7dc57e5d5bba2917fdf20', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '8be152c24a7f302b3bcb425b017ffecae8187fc3', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'f6566318432448f8a60cc5d7935591f124e1b4f5', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '72f9b2f9be40f068df1dd517d4c0c90d423def18', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0312a87f52c385506171f0d7c676536df0f9c5a1', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '68ce683267cb6aa48beb2280cc0364fa4b2f9a77', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '7ae9ede7fdd6f7e7149203dd3a36f275c24d36f1' }, h("b", { key: 'be9932cd81ba2b538d07e36201b6f03f0b90bd71' }, this.task.adult), " Adults")), h("span", { key: '31ac134ae5aed02244020bf95e2ffcb3fb0231dd', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0712c808d14e106a9d9281aab9619a2ea5055847', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '09b52a691da709043ab658d417e4f0c4269b683c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'bc8ab86ed68150bdd560996cbd33035da632a47f' }, h("b", { key: '8e3dc25cc941824db0b8d178a4da6e96db836c29' }, this.task.child), " Children")), h("span", { key: '0b1935b8c7a2d8406614b08716f5a4f92f39cd4f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'dac123674effc407a568b13c066955d7244671bd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '11171888b9faca98163f46a720b31d730b28bb53', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '4e6763908fb58b90909ee9fcf6f5b7835a6c230f', d: "M15 12h.01" }), h("path", { key: '663e9f3125252af46b9254174d5a906269ceed09', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '4548e285c285c04204d3dab959e5261339ebf220', d: "M9 12h.01" })), h("span", { key: 'f742464de5a8d36ab9b3da0c384f73256e01e774' }, h("b", { key: 'f88cfef2661a4323b11840d61fa86504e09c83b9' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'e7da35c5b72ffb535d0d6c293a10664bbf102e84' }, h("div", { key: 'c427ed71e0d5abb14affb415dbd7918b0004b843' }, h("ir-button", { key: 'e7c37c6bae567e70545cb6fa9d3122c997249313', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '3f5d64ae7201722ca3b924ab21b0e6229b9c9d3c' }, h("ir-button", { key: '20c06ffa3f17f1ae69262e54ea0e36a7aadd224f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '27616ea7d1e85d383e145813deb8dcf25dde8d94' }, h("ir-button", { key: 'cf276ab30a1efd08773e7bcdf9ff1b24df706691', onClickHandler: () => {
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
