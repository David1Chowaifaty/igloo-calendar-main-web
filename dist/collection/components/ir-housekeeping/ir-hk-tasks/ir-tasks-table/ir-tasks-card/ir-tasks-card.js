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
        return (h(Host, { key: '4d0b684e8bdcd0e945e09dff470e14f77722483e', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'c5e74338ee31246056dc820b01e4725e8be0c9f5', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'af1f68199a035827fd15839a546677b60683cffe', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '8d67a2b0b1525e48043adb15dc0cfaf3480a6bc6', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'e032b2ac17624b6e21ea70301d8b3580079820f7' }, "-"), h("p", { key: 'd8517967cd0e5fcbf0d52cac6823dbce3828d6ff', class: "m-0 p-0" }, "Unit ", h("b", { key: '2f2e2061077b98bb1529a58ae515a247717df15b' }, this.task.unit.name)))), h("p", { key: 'a1bfa567ae72acd46089e10c1e7ec341a75e7cce', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '1fd02f2b0b719b6b0e9564762a1bfaf503a2c5c7', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '18f1d4f9a9ca811641fe991635e63f30ae2ae77d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'eabdfe8fdd7aceae28071774dd8f8598a4268189', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a23c1a52f7dc0aa95a22cd80c45bb26a7b824b1b', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '0fb75bfa9129f19cb858e507345f86e71fc58d42', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'f0f1c47a575d63024c22bd7d2e866ae179d7621e' }, h("b", { key: '4c9798780b12ed5289d422eae5b6d72fccf45dd5' }, this.task.adult), " Adults")), h("span", { key: 'fd51fe23af883a3da7c00e4880bf605ae982af9c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '427908dbfd819b6813deb31d44cadb2a62e44bf4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '2eba58f28d480c1b06d42f728e82ea8a7ad438c4', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'ccc70664d89ca837cd5e99745f8604df9f6ad9e7' }, h("b", { key: 'b523933cbd935246ff2f4af5a475b96e7e4c0c96' }, this.task.child), " Children")), h("span", { key: '0e2fbfb0a46789f03acf5804477f1e8ad310b82c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a6530aab29cd457f1d18ec1b4b10b747079f7717', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '2b708e7c4266ac0e0a6e8f831efaa285e97adcf1', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '8ea0a34c3cdb943ca0d0d57e642817edf9b7febf', d: "M15 12h.01" }), h("path", { key: 'bfc4539ef33be36d1b6b880bab582b4101d6bac2', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '7484459ec27e9da0848f62e1bc8c52e2bd6f1aa9', d: "M9 12h.01" })), h("span", { key: 'cfe12cf8a392eb7ac88512dc56a619aa1a18ad33' }, h("b", { key: '42c370f37032274412bc24eca1218599199191dd' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '42071ed22e8118a1be56eedafe00eb7c292eef94' }, h("div", { key: '31a9ab22eb68dc204ea6cb924d919e7ff420126f' }, h("ir-button", { key: '66a608ca61b2157ee79e0c5ac067664646d03e4a', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'c35092545d6f2f9608004dc204407c586d180277' }, h("ir-button", { key: 'e0d6f77dba530afe2adf47a8cff77a6ae7b8a1a3', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '14a33c7234b6c0b497caf498026105fbb501fd53' }, h("ir-button", { key: '4cf15ace8d85925245d51f9115d7536943c05ff6', onClickHandler: () => {
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
