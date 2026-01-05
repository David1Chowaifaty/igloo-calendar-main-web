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
        return (h(Host, { key: 'e08e00071dbe220e0d33f5abeb3d011b4e468ee7', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '40e1f733f26ebb2390e946dc32b57ccd80ab0d42', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '8306beae1c78353650f785f309eb8269490fe0e2', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '0c2fd9c0051f9a3af85018be65d8d7c053ef50e9', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8d315403f661d6f567636041ad0af3f4fa4d7a4e' }, "-"), h("p", { key: 'f0541ed2b17ce85fd0336a219691411a02e62934', class: "m-0 p-0" }, "Unit ", h("b", { key: '42b5679800aa2daeee8577b5557663c91cd93502' }, this.task.unit.name)))), h("p", { key: 'a5b7c052c817f37b60a6f3d232b59076132c81e6', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'd844c2c4ca7bb8f4bd401abb5d1e3480901d0a7b', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '0b9452daf43c07b0154e0298d5bd1160d137c398', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '8923284ea05f8a7364b22701abf61302edcb66ad', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '240e631f9e7b9d04ed41071507b89670cf9a0af7', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '2853081c4f2ce1bebe67536766a64e26e42ed8de', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '2f5f1f77985ce289fd92922f949622dd14ec1986' }, h("b", { key: 'ba2470615cef59b2fb62f8af4dd7ec9a585f5c0e' }, this.task.adult), " Adults")), h("span", { key: '2f389484238ca51a5c059d4788d5ee745cd8943d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '1363baa2f1cebaf74f0259d00c6cfc6eda963f07', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '41c8ee9e38c854a3004fa1eddb92c546e9e59d43', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '8c24aab40d14f974aa29412cd743547a8f840ccb' }, h("b", { key: 'a9628067892fd35dfc2a265ac7525c28a0a8ea7f' }, this.task.child), " Children")), h("span", { key: 'b0ce62224d233d1600159e3ed087d6151760041b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a1bfc3fb270a59f1518ecfa49efe11bda9edc39a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '7f7186d955c910bd10c5687a7abed54bd30272fb', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '56bd5837e62f784ada7f9b092878d0f7a0a11ea7', d: "M15 12h.01" }), h("path", { key: '6a12934345ae7ea4bf7318a073d2433cf8ff5785', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'd7e7d64512844f3e8a92f92e67170ad87c116adf', d: "M9 12h.01" })), h("span", { key: '19a3f52b6fd08f616f4acd307405c62eca2d5a1d' }, h("b", { key: '102b5ccae0a6335d95ffe43253a82231a7ee8e8c' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '0a375bf47fa1d005832d61e96499a5492c84a473' }, h("div", { key: '5f619daed1ee448bdf94da64f4a43e3aec80d975' }, h("ir-button", { key: '32f6412a230a05e40de34e59fcfcd813b6d0e2f7', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'e0251b73dd27c811c96200a6a79e055b020857a6' }, h("ir-button", { key: 'c383bc70bae655c88fa4c1f95c3c354c4784a6b5', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'c61ebf614a2bacaba6b1c527d3d9fb93c9775970' }, h("ir-button", { key: 'b2a8c6dc4b990c72eb0a5d6f3b91cce6cc8ecdd6', onClickHandler: () => {
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
