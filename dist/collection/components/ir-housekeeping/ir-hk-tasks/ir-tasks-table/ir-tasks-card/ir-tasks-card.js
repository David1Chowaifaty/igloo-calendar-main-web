import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'ecf394ea44f3b2e81065c505be105749e4752085', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'dcb80252c9d2aca602edfbb4611dc00c91c54573', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '3c087ef89e9397c04c6d98ad80126446b69688ca', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '8cc5c659773d0ea72da7db2cdca6db23aa6d25eb', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '515aa0a6a487769bc4d807a4f7fc9dd2b23544e2' }, "-"), h("p", { key: '5f4aaa8fcb4ac1120eac962af3e99070456918be', class: "m-0 p-0" }, "Unit ", h("b", { key: 'abd66b604ee7bdc42452805e319c8129a6ee4844' }, this.task.unit.name)))), h("p", { key: 'c5d03618d9d40d19091775d7bab985f8fbb2e184', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '9948e5e71830f7d1ece024dfd2bc4cbc678976e6', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '94950a9ea8ef828608c484f99889bf62a4a5120b', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '578ea7070e83f75f83e8cddca056b5f835ea8f39', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '59df15786efaa08309c13be416446e6dc0489f1b', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ecacab320703ec38a7ba3a88806e040bb28883ba', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'fbe39ac40715c7cb2f8b73df1124f32ea254634b' }, h("b", { key: 'a4e98021b7c12e0b4f74a641ec002af15dfda70f' }, this.task.adult), " Adults")), h("span", { key: 'a0e9c1ffec3587853c302e2093393f3c6688d752', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ac8fcc4ebd8d4025e97cbdf58c5df70ffa0349c1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'd09c975044e55b84acb48c1fb9aae7e5dafbd70e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '8be2c4a2094ea3341ea357c65871e4c4ceff3d37' }, h("b", { key: '9e2dc1d0256995ff3857b572e85948895eb34900' }, this.task.child), " Children")), h("span", { key: '18a610d59d4452686a44fc420be7742eb394f67b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'e1cb0c8ac9d94f5e117bc786674224b57c21677f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '0bc8c274fc3f23468ebbfee53d696964d476e6ab', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'fa6d8e56f7e0dfbb01191ee18553fc2b44dd7e25', d: "M15 12h.01" }), h("path", { key: '7d5083701aac70e9db5a7cffa3f74e16e6497e36', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '83d79c596557f44b5ba8fdc5b1224dd15bdae263', d: "M9 12h.01" })), h("span", { key: 'bbe0dbb1fc0c55b2be4dd9fa0944b0cdf2b5dbff' }, h("b", { key: 'dff5d397efa95cc9ca5fb268e8e4f61f82e86ef2' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '42e366c6c4f254c7647909a7486fc8cf0a6d677b' }, h("ir-button", { key: '1fcffa9f1a3182cc33e821432085473741b4c294', onClickHandler: () => {
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
