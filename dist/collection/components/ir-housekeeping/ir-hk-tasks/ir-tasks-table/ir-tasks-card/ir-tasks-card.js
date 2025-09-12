import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '7d9366d2e573ff509960e978cc7c63107c554ae0', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'ca60dae829b1d356df17bfd9354540d46890e1ae', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '812090f4a46783c86e6b69cedae8a5ae087bef5b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '5e488ac1db1facb0c32f1b8f049544c2265941b7', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '6afede3a7d0ab34106d06ac462e2cd94b7f69026' }, "-"), h("p", { key: '089c7b4416715f189d3842aa6080ac54867bbe30', class: "m-0 p-0" }, "Unit ", h("b", { key: '86cb346a7c4c8219ab59408f5f0d0598009c2019' }, this.task.unit.name)))), h("p", { key: 'b7e58f89dec915a3af90730e2f5c94edf3438b10', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '449bf4bdc4f73b64b7610f7c5b27f9f60272c8c4', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '4c07c7b47ea6e0842f8275350fa4392868e874bb', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'f047dcb269df7a350c511dd76e94a13df3d11001', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '84df2d219d3024cbf1f5754735824620f688d40b', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ccbac68b0093708870d3b521c749b8a4e040b157', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '75954302fd3f2de0ac55ce690a21fabc3052cbef' }, h("b", { key: '19ed4d8760f84a6fe492f3477591d0d1e4d9be78' }, this.task.adult), " Adults")), h("span", { key: 'cd583a5a3883483bd8be81f77179578ec5afdbc4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '1883fb66b97d43dcbd1c85389358c815dc28c40e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '6dfda25571abd012032e9f9a7b3324c88d44d9ed', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '79dd5f035ac2b9894a2a4173aafa5d1c985949b3' }, h("b", { key: 'ec64f61fcaded4253422bcdf240ec5c9c85dc83c' }, this.task.child), " Children")), h("span", { key: '62c59652beeacdbb0b1f04b0afac1ad3f67b33de', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '3bc36765989f101209b4758c27a6c0cd66dab8b3', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '06fffcb114a850f3baf9835759f61f113bd0924d', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '29671c31e6365b7898ec474d5118fe96ac1bda2e', d: "M15 12h.01" }), h("path", { key: '52f46f10b4527d3ed7fb005c8f39c5f1a233ac05', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '98b7c8fde7f40bf23a35acf0d3f63d2c7777bb12', d: "M9 12h.01" })), h("span", { key: 'a414fad67b7cc0189e8c864d43a971ee057e3871' }, h("b", { key: 'a67696e9235c450ee088a20075b09a6deac8811e' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'da11150be77cf03894c8f00713dc73ed4d39a883' }, h("div", { key: '8cbbc564089444eb741782c5437a7ba51ec24003' }, h("ir-button", { key: '26ead1625fe8a7d3aa351efc09b26343ef46c8fa', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'bca7e4713070d4a6052dbf1bf660823086240159' }, h("ir-button", { key: 'ed2fe68c5b2f428920de2cfc656079ff805d6cd5', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '6637ac71578387ea6271165956504b5809014c0f' }, h("ir-button", { key: 'eddf442455049904adad877fdef2b9eab2b50799', onClickHandler: () => {
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
