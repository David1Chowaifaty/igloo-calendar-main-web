import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '16dc30fc0e06cb637171fcf406eaffe7d19fb96c', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'b27c73cd0633352cbbda7bc1ab3920326455c955', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '6fbf17a471ecc1e1cdea0b9db9e8537a97fb33b9', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '0e2d84e204bc835ff166285ab50ae79e45f37e16', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'db6defcfacde59eeb27080ae5f940f4def62b81e' }, "-"), h("p", { key: 'ebe5acddc0e01f83f9d230df29f3aa3d1ed4e565', class: "m-0 p-0" }, "Unit ", h("b", { key: '3cb7da85234b2da03ea2596f1eec4136d4da5cb5' }, this.task.unit.name)))), h("p", { key: '5dd62520ead2b9d4367d591e9fea3334c04c2ad7', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '31e3caa69b292c52b5afc59dcd87784f83e176f8', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'a8066453431c9d7f20a6cab13d4cab7bd351ed3d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'cc4fd3b6f4cc99eccd31b5c9bf69a3e8a2c4b68f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6b9bda6485d2e7b7a6c728da96285b9fd081dcf6', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '76db9d6fea575c190c2763f09a18af05ae3bdb1a', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '2710a5c5fd9ffbed19481362dcb2c08a467d566c' }, h("b", { key: '624fd506492bb0904cea14f7c01cd861537ffe6e' }, this.task.adult), " Adults")), h("span", { key: '868bb63fa5c3bafb5b20bed93566785c175a42c5', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6876657dbabefe52b1ca1d90c64fe62cbde73b43', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'f6107b30e8d317470995dac9282e8f232134dffc', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '286cc0c3f026d498cdfc66b527dd748f9817aa61' }, h("b", { key: 'dd2ce1baf47aad658035a7d91535a90ed4441dea' }, this.task.child), " Children")), h("span", { key: 'fee906bb62e97ef188e33362622dc44dad04a194', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2e3636786694a2a1334ab34e6b8b237fdd92d231', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'c70adad809482a7e15f9bb0a311ded3819c2192e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '6536990fe7e5aac42654c7436d707d7f92b1328a', d: "M15 12h.01" }), h("path", { key: '3db8baf36ef6701b8f18495d58d07432cab213b3', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'ee1cd55eb0c1eb980a37c6dbe0c418750b79031d', d: "M9 12h.01" })), h("span", { key: '8f01d6850703dad5c3b4fb1470618122bb738c19' }, h("b", { key: 'db6078d0e35ddc6341b94de4e38b172f6343913e' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '6a6cf9f199c6d0d88c9535d5d9eeb099777d9b6d' }, h("ir-button", { key: '0e871c11b4d695dd434e78fd39762b532a33cfd3', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: '0abc5c3e1dd53ced07246cb7b6a9e9518b3f368e' }, h("ir-button", { key: 'c77b2c06a0be2831ac286e770913ae06cae6aa6a', onClickHandler: () => {
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
