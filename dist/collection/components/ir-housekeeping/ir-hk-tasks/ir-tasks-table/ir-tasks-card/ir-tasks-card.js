import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '5f4b11cfffeb3015bbaf33a50fdad35c6d30bdac', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'a7121c1d51cb9d1b0f909807327b713491fe7388', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'f480da0f5041d98a757faa660fcaba9310882ea7', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '5d2fcea62f55cdbe3a65cbc867919afc1f5f43bd', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'd14f92aeb4b76dfada84b6de381fbfc9cd556e51' }, "-"), h("p", { key: '753377469ac95a1ff48909c9697b316957dd9d49', class: "m-0 p-0" }, "Unit ", h("b", { key: '3825b107ae6b2b8ffad9f168f0068567e90f8fe4' }, this.task.unit.name)))), h("p", { key: '7bc8b6253e63944b37b87da368ff79c03d548078', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '7d33833adc01ff8d556af94976f5dc47db3e5d2b', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'ddfa9aab77da12bcdc92da5f2f36614a4d963ab1', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '9685f7f69d0632c523b68667f50916be0f0e96d4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6c5afc3f5d77587d925f4ac5f5a8ebe8d2ce7078', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '8a28295a91a2a2dc716c4ca8764910a6436f9296', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'd8fbf8da5af16a7964d755d551debb31c2633c77' }, h("b", { key: 'a0d66fc7b0501db584778f4ca1fc9a75499d2e56' }, this.task.adult), " Adults")), h("span", { key: '66356164cd92af849a5bb1c06160f9fa047e6c49', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '82cd9115fba36a1839e3f9ac3517463cdd55f41d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '0d1c6b1136f6cc35a571344e2f629d695a7a088a', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '0002100ce4336517d4c847c3b71ab9b6252f9564' }, h("b", { key: '07d93a205e39e9ff0d99dfc162bb09f9196ef0e3' }, this.task.child), " Children")), h("span", { key: 'e78ba8f9594ceb149b84931f0c0525a1db034b71', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ec01add6379e3bd22428993aebd990c4d455f24d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'a6de5c770278526cf1269f05d357ec7d1b56886c', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '4510ba6b53f48d64c7229fb90e307d5606eed960', d: "M15 12h.01" }), h("path", { key: 'fc35d1fc326b718cef556526a2921d4fef47996b', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'b189e8020307f3b3da59ec38f9408174579646b3', d: "M9 12h.01" })), h("span", { key: '27efe7a3564b6ce9dafb1ef33fbc5bbe2b0229b1' }, h("b", { key: '995f2bb3daa0e8abc5166d592797d54f2e61e8d3' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: 'f182cbad6c6ccddd1a16d5e6931a073168f4ea76' }, h("ir-button", { key: '5be0f8a60d5124268e49279723af58658b9b4ede', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: '75d6388d02adaac069f6c52bd136549fddc8ebb5' }, h("ir-button", { key: '074cf4ab138db6fbac69b1f6defcd59f8303883d', onClickHandler: () => {
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
