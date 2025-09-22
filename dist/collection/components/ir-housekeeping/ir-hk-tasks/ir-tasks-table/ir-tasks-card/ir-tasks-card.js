import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '18561a7c80a888fbcbe56c3151069e902de54af3', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '6bb2277d6cfa3544443d15ff8387a85aba194864', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'ff49d3d6445014b5497e408a70972f605f2dd09b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '874a2e57453259835d6422683b9b6185d380e53e', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'b237a9e4ae34759f76edb9f4f2145dd3952ddc83' }, "-"), h("p", { key: '49370b44aba711ef122626547d748d00e3ce1aa1', class: "m-0 p-0" }, "Unit ", h("b", { key: '0d847482db41bc1c7cb2214eca09a279f3b2f77e' }, this.task.unit.name)))), h("p", { key: '31672fe18d58f869c80a25074a89b9e69ab557e5', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '92cc328b60def5f6b7371e247bcb78258f8e1c8e', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'a87242b2ca63a8bcf5640c87610a9f3053f327d0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'f91408497109b38764eb39aacd5ef88560662451', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '43976ab460cc133f12ab694924a26a9a5d2336d9', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'dc5a7b0f3e6cb58d2a70f609e7b9bddfed447204', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '63021a83800c7b881c5c80c993efb400ad7dcc8d' }, h("b", { key: '3297512422e6cf78be515c512e459855a0f37875' }, this.task.adult), " Adults")), h("span", { key: '4ca10fbe408860604f531246f6ace6b76e0f0a2b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '8d9332acedb18117abcfd3e4cdc3b7030b7907fd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '2c2826e74c9a3e9621e96f10dc0759780920e8e2', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'ba5f2a9f2313a0271b3f59b0358adb263965fffb' }, h("b", { key: '4a995d90a309677dbe8a03d2b15cb3efe8a8fc63' }, this.task.child), " Children")), h("span", { key: 'eb5a18e8d44cf0422339b805eec3f8f5d784ec37', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '3466c8bbc7507ac93f0a97b7315f8e2facf47089', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'd17b07931cba45d7c4e3a1b9dd4ce71483aa1aac', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'de33d911652f24586baec5acb257174c9053b6ba', d: "M15 12h.01" }), h("path", { key: 'ea6a7fa3246a2fb80207f8ff87a3b45f738ce6b4', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '0ff8f4b613dc000f6a29f0fae9ae003dd6c43eff', d: "M9 12h.01" })), h("span", { key: 'd41d5a6fd84b00751a719f0012e6ac0110f2c204' }, h("b", { key: 'e319edf775104fc89ea78bf917a30bd78027eb11' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '031519da309aca5f21aca3c6039ac458eecdecdf' }, h("div", { key: 'a2b73f72c880785c7f94fb909f0ea3bf1c5864df' }, h("ir-button", { key: 'b8d25f37456b5d31e8deb83537282054f0928996', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'a062f02b211f748a9b4389349a63417f1e303476' }, h("ir-button", { key: '0595ac6e33727592b43dddd505008725e2c0e20b', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '0bd3d65b3a79d5e59dc698a765864e4b01dedb93' }, h("ir-button", { key: 'acc5cd5efc66010e185dc9c2095ea6bf08442e14', onClickHandler: () => {
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
