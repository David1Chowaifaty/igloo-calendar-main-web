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
        return (h(Host, { key: 'c1457b7b08f774198680935bcaf21f2e88beea87', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'af7ba88ca22ddb329ede448eeb701e54c3c6f671', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '52ca197c5f37ff5b00f88ad400acd7c9ff598275', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '88a5906fae7aece2c4a90a448d68b24165e495fb', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'b0d3eaf60425dbb6b281ab310778b73bc6b40449' }, "-"), h("p", { key: '191cae004392f9c540f9434044fe0df6b2fe15bf', class: "m-0 p-0" }, "Unit ", h("b", { key: '583ae430f3fbea0a89109851e6508014c771bdf3' }, this.task.unit.name)))), h("p", { key: 'f7848da9cc9f9d89f07e13c76a6cea6f7b197d64', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'c12183fbe2e281ea49f428aa5ab27be4ea8e30a4', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'f1de5953c357f1a73826cb35257f2941921a1418', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'c4a05105bd307a3600764f7ace2d77a3b003bd27', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'fa21135467f28340ee91aa26e38a7567049519df', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '0a6e61f5bf0fbfc4281947ed3c3fad06ce756963', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'e0ff167f41a030b7e80e11ecf87c40f32ae0e13a' }, h("b", { key: '9c2bbf9b1ff5e68fb7ccccf40287146a5f4d7b7e' }, this.task.adult), " Adults")), h("span", { key: '1c9567efaf0b437a34b90d903dac6ed4324661a5', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '50fdd4f8478da70614b0b8481c7310bdd292440f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '8d0b6f183b54c75dc21b2a890c13f827390ea81b', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '57be204cb7287bfce37a464525d7bad5bac332dc' }, h("b", { key: 'ca6aab00ac3a9777d8c86b4f36fd9fb7c3b06f56' }, this.task.child), " Children")), h("span", { key: '772cb19e195fc1475d6b3eb815f14cb30ad42b68', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '97a4ed7a3c4f906382a9393fd1467ea0708b7c9d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '4a3cadae92dfa7771a66d22257af83fce053eec3', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '3118854e8a8dc36697fc2a8d1e1c7c0fda255401', d: "M15 12h.01" }), h("path", { key: '6980b83cb1da266bf2ccf37131a5338cf64dc856', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '3510c3e63bf736a7fb719958f4211f70da9e4e63', d: "M9 12h.01" })), h("span", { key: '1bc11cb846f468615d04aadfdbe2585fc0ac56b3' }, h("b", { key: '3913fe671cdcb0426bf734f9c58d889386dbd4f3' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'fa7119489455d6e168b28d1f8c9c37782e6b20d5' }, h("div", { key: '007003e4ceb1ec5c6b698ac748e9c97776854acb' }, h("ir-button", { key: 'f878b598407b2fabfb09ee4fce3ab80c09b991c5', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '8dbec7719248c7b1f1f046f1753ff861cfeb5b58' }, h("ir-button", { key: '2cc22ac65f6ab8472b1336a93213b1d242d68cff', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '0b29eed9414da1150f3d4720adbe9eb30e4afb91' }, h("ir-button", { key: 'b918bf5ce31bcd6b0c844f4da253844087b26183', onClickHandler: () => {
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
