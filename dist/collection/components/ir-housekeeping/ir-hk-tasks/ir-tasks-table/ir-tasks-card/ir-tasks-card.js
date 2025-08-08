import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '17b98f585c0391711e8408078b78f9130790f280', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '4581b88ea4fe49f3a329d67d67fca7bc173e3269', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '3c7a139170faf21e71d9523577f6265dd8bf969e', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c6ee08304e1312c8bdd242ff497568ebeecb0e5e', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '6514714c13320ab2acc1dbf9b2940776adcb22ec' }, "-"), h("p", { key: '2394fe26a4a3c4465763399b1a426406dd566cd9', class: "m-0 p-0" }, "Unit ", h("b", { key: 'f0d7e117f242cf0e3a4cd2289f12fb64e91bf13f' }, this.task.unit.name)))), h("p", { key: 'b7b8b471d13d672aaf8b25c19561a66007cb25d9', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'efa36467d7de64fb3d1af4bb17b39d2268c30d52', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '6a7402743d78825fb6fc6e16fd7bc18039635ac4', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '74e17a4fff1d4661a20082993f851a7a4396b01b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '26bed9f84f942118351fe517d47fb17484c1c980', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '722d4752e9787443165b86e3d3a85d4bcce2a59d', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'e561de3ed7ae3722346ef6028426bc5873e1613e' }, h("b", { key: '7545303dcb026c096608ce44fd1f3d77a82c8bf3' }, this.task.adult), " Adults")), h("span", { key: '5eabc1bbf3580c147f7ac353358dda56550d6c98', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '32c597b297fb5fd7a4ac0e7a47d31206010af405', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '92c2480df4778036ad78dac0a2e176cd9a89e4d1', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '2b3dcd17e37ea0a7d6cb64e62aee7f0fc39dbfbc' }, h("b", { key: '3246548cb73b56ec3b978b83e32f390c8b11e252' }, this.task.child), " Children")), h("span", { key: '14538b99f4b557388807af64d6d27710e012827f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6f23d1cc6d9e2361f7691f1ffad29b65c683529a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '89e51a4f236a011cb2fe44cdccda32879c752467', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'b0f1af63f821a8cd5eb193ba443a0a0c9e2162ba', d: "M15 12h.01" }), h("path", { key: 'da8a9901d873c1b0f25213fec66512814b909c13', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '10dd1db3a2f09369101659904d078f4d37eded7f', d: "M9 12h.01" })), h("span", { key: 'd943ce7c48c8e0b60e535aaeeab84e727ab3fcae' }, h("b", { key: '19b92672102c11b933598581796a6d6e3d2f8614' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '914fe833073dcb611152510761a8ca23236623df' }, h("ir-button", { key: '53e559dad15dd90a97be2f17c206cd3ab3a3bcbf', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: '710c86b4e7e52bb0c9db44820c5e885ea438747d' }, h("ir-button", { key: 'a9e8e842dac1245b203c77b3c22e7234e0e87c53', onClickHandler: () => {
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
