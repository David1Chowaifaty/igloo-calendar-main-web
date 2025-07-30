import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'fdbc981faff2f8a428aac057cefc0cf94d6c1e84', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '72d97bdf0722f496e768570dbe2eb0fc0b468f4b', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'ec8ba6b9b895d9c883c601840424dd35bc11b186', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '488ef685659746373dfc0242c0eb0db081a206c9', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '0e0a47d5a9635f9bfa9aa902cda170f52ce5ee64' }, "-"), h("p", { key: '76515d0b87f2ea7a9432b1be21f22c6709bc07a2', class: "m-0 p-0" }, "Unit ", h("b", { key: '65d294edf5e5edfa9a5e706a351816cd37a8d0de' }, this.task.unit.name)))), h("p", { key: '697de3103238e45a8fced3fff444622d361a515f', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'bf91b5c238921f9c510fb686d8da80a1bd7d6f68', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'a0df01298775a1bab083dcbca9e4958bcf36de23', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '4ecb90d3ef4cba79767c4d9ef480857e339cebc7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '29744e9bb3d28dacedb024bb8cfff7560c818a9a', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'c4e35d8f04582cb090e33e2d2ffd05ebaea45e21', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '399de5510638f0db2dd4a6c6615d831da37d39b6' }, h("b", { key: 'b78381860afb013b2af81c2ce5b4b700c72579bb' }, this.task.adult), " Adults")), h("span", { key: '203cdbbb6141dbf2801eba4b794c93a5534f1d15', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '39034f5adff58645ec9664aacfe8887d85e7f5c8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1e877af0f1c0f8af0b73b0f15f0f5b1f41f80b61', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '9e9e03684a95a5275e994eb761d41a291a135d69' }, h("b", { key: '90d8395153ec6694426a197385ab42506fd7c3c0' }, this.task.child), " Children")), h("span", { key: 'b31d1961464cbdfe3f27311f0f224b0ed0175236', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '00da0f6af28c94d4214ed3ad9ab6032f375c5e57', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '9c0791359782de8f64fb5346bf7b8d0be0eb799b', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '0926cc32bdefb4d11626afa77e3f2d776df7aa72', d: "M15 12h.01" }), h("path", { key: '460aa70186fbe85fa04dea2375fdcdfd7909cc96', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '85a6deefea7fee7d512cb1389a7a33db642dc204', d: "M9 12h.01" })), h("span", { key: '31179fc553a9523a099e15b92aab9de90f16e329' }, h("b", { key: '6cb80e57be86788887050cb43d604818fffd2a37' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: 'e9902ba679dd2bd33f38b49bc7b4cf2136068a74' }, h("ir-button", { key: '3c22020e6f2ea12815ddd2d5cbca6e5a8692829f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
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
            }];
    }
}
//# sourceMappingURL=ir-tasks-card.js.map
