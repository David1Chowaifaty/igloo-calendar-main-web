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
        return (h(Host, { key: 'd7df956c3f0fcf917b014152090c03aa5868103f', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '01642211edca96020127597b65f0ffbde381f460', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '70af905af843cae4e8fa7ff5beb380d1dbc6ba72', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'bc5605763b9704697ad1bdca23b74cbed0ec2b36', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '6cf91805ea6174d3c1e4bfe6f973fd5bc8bdb2d1' }, "-"), h("p", { key: 'dab75e1b90188cf1dcddc480c57d7858806638da', class: "m-0 p-0" }, "Unit ", h("b", { key: 'a9e2b0928f134a820a59ab9d0f419b7fbafe0ed7' }, this.task.unit.name)))), h("p", { key: '81c2cf9ee2db44a5f1493e4c029f305293afe3a5', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '5c3a24d4b393f381b93dcc2004b36a30113c0bfb', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '6f98d0fe4fa60b4613860a21f6fc058eea5d1706', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '9dc5c49d8809f22d77e8935d3488aeb1012424c7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '234d5ce329caf86789a9335b3726f537a2377806', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '8ab16694d0c5933de925ededa4beba739ec7513c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'e69d4852d8bc81828922f5f5f21720842c38d85a' }, h("b", { key: 'eb60b9af4f7706aa60c7832a851b3f7e2ea08af8' }, this.task.adult), " Adults")), h("span", { key: '21a9e5ccb980dc1c34347adce8721a9a79340e08', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '499d1566e190df20372dc2b4c40a8ed0b67a3d39', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'e94b9f5f66f85621a770f5cd8139175c1cdafe92', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '3893966fe493e2280ea119bcb87c3c614f9b0212' }, h("b", { key: '50e9197ad8be40f561a3b0f1995257bdbb6c3010' }, this.task.child), " Children")), h("span", { key: 'a13c54c7ab1180447fbb9c3603c282249d80340d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b7ef57bf3c2ac0588e01003d6542ee69b29d0203', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '3005f3934c3f7fd16423f6ea971b59f06d579a0d', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '2d559929442786cdf839061dc3e35b203ec26484', d: "M15 12h.01" }), h("path", { key: '6dbe2b894ac3729692191f3c09bfb12643427e94', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'e6143b5173290d38d0c084e117a8281e07a4a2aa', d: "M9 12h.01" })), h("span", { key: '684bd73bb9b1c0d2fedaf566230c431f19a5a660' }, h("b", { key: 'd98dfbd135d05239b8c5539793a8efaba1dd2c7d' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '72ca9aa238912e262b6c3aa674d8932aa0f8d59e' }, h("div", { key: 'd4dcf60ae7021e33d2a74afeeaa7eefc0e5d2923' }, h("ir-button", { key: 'e90d62b85b6b897717835bb7fe100dc29f7b1cf7', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '0321da5ead1f601f9198c61ed4b2096e88259719' }, h("ir-button", { key: '1554e5872a843f36eabdfc746b23bf1f5adfa094', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'd786d35f493527e96d6c066d01cec50ae9ad0ddc' }, h("ir-button", { key: '727f5bcf47d7d381d46916dbc9f1a9ac5b7fc2f3', onClickHandler: () => {
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
