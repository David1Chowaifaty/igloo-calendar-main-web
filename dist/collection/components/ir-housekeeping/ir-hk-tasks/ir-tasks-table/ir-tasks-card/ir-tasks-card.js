import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'fdb424544ad516e42da9578b3e19c7335e152f4a', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '148be008dd78ea2022565db3b24e658fad45b899', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'ea47f6e5508417e315ceb560ffed2dc37de1f10e', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '6a9221d3b39b9eb0748cf2f8e1bc84daafa31021', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'ba25d8e988f0dd810f52f31f82c294c5180a05ec' }, "-"), h("p", { key: '151e9ab69b19be78c51759b2c8c3be11d35d7831', class: "m-0 p-0" }, "Unit ", h("b", { key: '0842d89f27b77067975d3ddd35173696edf4086a' }, this.task.unit.name)))), h("p", { key: 'c7414914f40329accec37fd3a0e0e8ec26e6387f', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'fbffd540ac58752b67322a8084920c9c9ef09d89', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'a4c10de89f5beaf916e5f2ffbdf7b6cd6b7b35e2', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '6e1b1cf51ee43de53a70aae9eb9c2cdece23f376', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'f44614d5cd4ddd681cecd143780bd052b4564b9d', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '1667cdec0fd57b761f9af50e286a5ed849a9a1a9', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'eeaa413f74dbc6dffa5e347c86da8addaa5ba746' }, h("b", { key: 'fe3ec72feb0ac9df1dbad0abfe89d6a5b023917e' }, this.task.adult), " Adults")), h("span", { key: '7f33da1b89b30fdfe5611ea1957f157cdbdb4aa1', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2b8561bed64613fcfe22e7102ba232a982651be6', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '5817f4b3a1b170c2df0d9dd8432e56422945650a', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'dd944e855f343740cdcaaa49ab094b697e5af29f' }, h("b", { key: '9c04f828d683e22bb9400e88039512e55f262b2f' }, this.task.child), " Children")), h("span", { key: '6e4648a6b298b0249b785150c6dc00a918b0c006', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd1ac663bc861fad657a1922247eab8ba47110adb', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'bdbc8e0803043f42cb53c76f53a3ec11a6426f96', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'b7153ea8e3041a57c0c170169f1bdf277941bea0', d: "M15 12h.01" }), h("path", { key: '7ae9b33775860a7a91223cd1efbc21a51af92c40', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '37330b876cb1016315836f606d2265d01ef841aa', d: "M9 12h.01" })), h("span", { key: 'e0b6574737c98c3b2914b0e3ce12af040ae3ca6e' }, h("b", { key: 'da5d12f7a8ccf7a67c6292899a3f5f18034735e3' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '094ebcbd8ebbf1b41d9e923935896b5f11d07c47' }, h("div", { key: '8f2b38b64a8177f5e2728296d9ff5b4b77ac71cd' }, h("ir-button", { key: 'f1b8d5a7372a7f5a0d4bad4e0e11ba49d46b0960', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '33e5a89797c2ee297debedf7cf58a062b59562ec' }, h("ir-button", { key: '96e44ca4915820be5272d62ef2a9d30619ed1a2c', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'caa132e0980dc0df282f29a692d8211865f8faf4' }, h("ir-button", { key: 'b4a6c8eb607af466c604b7c33c9acd914f068bed', onClickHandler: () => {
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
