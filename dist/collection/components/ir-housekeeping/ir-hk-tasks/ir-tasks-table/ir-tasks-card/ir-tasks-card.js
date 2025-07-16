import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '6bdf2facf054e2e4f824998b2a97231f10a4e3f9', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '92ae75da08d4b0ed3b290c4fe520088734b447be', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '4964ad8bc2f2ec32e9197bbb095be49fd70fb8db', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '4b25fd8f99dd84753cd29648688d7f28a00ae2cb', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'b1b2f3d462a73734f013024dde33787280fad9a6' }, "-"), h("p", { key: 'e7eb68016ac729d2c277af871e787cf133ba3e48', class: "m-0 p-0" }, "Unit ", h("b", { key: '584492befeabae15da309e9ad2519b32372a6755' }, this.task.unit.name)))), h("p", { key: '535ecef56e45bdc17baa8bc888cb21e05bc1b94b', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '280d25ad57c63c807e46b10b4eea9665ca78294c', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '9625016c136e6af5152160f511827d495101b126', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'c9168e5eed4f9a02c19e5b65b0e6ce8ad9e568dc', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6c3ada13972106cab7be99ac3e42cd30b283e791', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'c36176a8a3922cfd3047ee6db9832409b6e6f659', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '840c1e5942510fafa87e3876a860520b5dc2f807' }, h("b", { key: '289103642c73ead95c62a3ed0d36ac96a10bca15' }, this.task.adult), " Adults")), h("span", { key: '89b7461de263b244846e9829e430892fe13552eb', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a0067ed0eed21f7eb22526205ab522c01e39a894', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '3c8d53635b7e648d236899eac5dd434abb498366', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'f57241257e33ba1c154d205441e9eeca050bf131' }, h("b", { key: '9a3d45af547072bf19d48db1bcda1cb9594166d7' }, this.task.child), " Children")), h("span", { key: 'af0ce3590ceca178f80c49915d2cc4901a5c04c8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0f2a1c1b8afc62bdd3ee2a43f0435523d93dfa9f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'fa5b1b532fb996516198ee43bd2b3a50981df020', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'e571066c6a8b0ef1a5dc4185ab546e3f439ff8d6', d: "M15 12h.01" }), h("path", { key: '37d19e9704215687098ee5a1880f5a3fd6d43c26', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'f3665a421b57f9781d394e49c65fcf3d06f24f83', d: "M9 12h.01" })), h("span", { key: 'eee2985c0cdc4ff2c9fad3f0bc119c2766f66b43' }, h("b", { key: '673132775e9f4cfe8a1b1c635e0d0efd73052828' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '3a07358a38f716061ad8be03088909cac2d9300d' }, h("ir-button", { key: 'e0861a45d2eee86213d8510971f070e17e414151', onClickHandler: () => {
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
