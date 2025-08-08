import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'ef1ebbdeba680a83d35fd84f978665960b0aa790', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '535ef6deba25e9319c46e2f8b1f65979b8416b64', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '0b3870a749cc86683e1522cd90c749053476f7ee', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '867e052f0549557fa67253549157b36d73290490', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '34c1699dc40bd11ebca5820f5ad6e66af1513d37' }, "-"), h("p", { key: '40e6559cb2e20f6c6543d79b541df3ade0e0fa26', class: "m-0 p-0" }, "Unit ", h("b", { key: '00b9bc2d38b4960f1c1e44f056d00eb1c22f5bd5' }, this.task.unit.name)))), h("p", { key: '7cf50b503f29d90553c1a7baca4830b47887b1e4', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '37bc6f2ec8b4ba4bd3a99d4df33bc032c830e155', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '2d5e0ecbbd8554b8f93dc26637021b453191e99b', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '68d2ba5ab702495d151579d56cedc32c89120802', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '812e06a5dbf2bb0fcd66a0197ec72f22e32fe2e0', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '33c56f8adc40e84283f358140d7d6b7fd925068c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '3d2d9a4dd385e32ce3d128eecdeaa3d566eb65c6' }, h("b", { key: 'f0a5ee5577c0fe3623c68d1f3bf85c9d37ec3760' }, this.task.adult), " Adults")), h("span", { key: 'a5adb73a8069edff4f14b31efeca93146737c00c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a131da327b634635fd2fc4afd81170db56004165', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'befcb9e7d437d098ed7045fa1fd6041537682f0c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'ec3985afd81c5393f55d54b3822a94884e812579' }, h("b", { key: 'ccf681ab37149b35fb242c915e1bacc4d37e8d4c' }, this.task.child), " Children")), h("span", { key: '8babdee4062b283cf81c07f3d9ec596a80349c0b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '9b60ef68de32b74a218bd8da5041a16bd9ae5253', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '12a2d24f9beabaf885c153dd44971e8a11db4fcc', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'a0799caf726311832d6088027c68483f0fca68e4', d: "M15 12h.01" }), h("path", { key: 'c404dd50c87b2e4cf0ae494e81f9e402b9e720cb', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '78c4fba6b7593ef1a2192e297c3932d459e8180b', d: "M9 12h.01" })), h("span", { key: '70d619fffad2ca0cb7ff4c65217a303def987ea3' }, h("b", { key: '92ea844de5e2da1f6f98b7989260737f9d820730' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '607faefab376a298472b2ae675aff287b361375f' }, h("ir-button", { key: '199487b339f3bba4d18804e307e7fc1517494d21', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: 'a4a941b789c0ef7dc885f6355b437a6ad46b832b' }, h("ir-button", { key: '92fc5640034d7c93944cfe545d30dc8d1ed71b5d', onClickHandler: () => {
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
