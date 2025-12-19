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
        return (h(Host, { key: '10638137d8e506108d07759056c8fd3bf56ca184', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '2ab43b691f48386f78bf102ce8d2f490a1e6ebb0', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '340f9b2df5a12f6cf63c9921b73822e2d18ca44c', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '8c8d3565f2101f11efbb57b4666394b5428b161c', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '20af4875b06a7ed18e56b357f0779485c868b1d4' }, "-"), h("p", { key: '563409ee2b69b072234b0558a2837654e57c11ec', class: "m-0 p-0" }, "Unit ", h("b", { key: '8cb4ff3160cddd233677aa52ea0ea86c88319923' }, this.task.unit.name)))), h("p", { key: '5ee6c070b20b7f73a76e954430fb1f9cb7f03039', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '25b47a09072096f182a8dc86d1808a6c8b2b2219', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '029dd7c9db45ff52e5a514b94fa856451e9e49a6', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'e26bd66a94f278680081a85f508f75c623198d87', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6b9891a6f0504b3bcee5f164e010bff7c317c5cb', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'fabea7ecfa114f5df87f4e29bdd1d0379a1ef287', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'c8f1bc49e0ed438797d18e2517087afed6a45b7e' }, h("b", { key: '84e87ce26b26e45dbfd4b55e7415bdb05862ef69' }, this.task.adult), " Adults")), h("span", { key: '140863345c8c67eef0128968d0a3aec13868758d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2ff2b8256fceed5b5cfbd9a8ea4e16f2f59dfde8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '35334313243f43502ff0c155a6ad65748bf62308', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'b7e4eb918180d1134bb5519652cc52c65dd5eb11' }, h("b", { key: '208f167eb1f880f77450199e206da25268d46e3f' }, this.task.child), " Children")), h("span", { key: '4985e9dab0869605ba6028d678284752630dc336', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'c3e8182d7a95293e5757c7a21ef5f2469823e632', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '8d91e36f43d8421716d6cfc49b8a98bee6918ba0', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '2396f1de98073c3fdf2cb49719a05cfc5af83950', d: "M15 12h.01" }), h("path", { key: '75119f2cb28892c41b9a12b0ebf68dccf1a1dda8', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '0f6699b1f4e5b6cdb35f787cf1a48718c61bc248', d: "M9 12h.01" })), h("span", { key: '8e6584cccabc88fe1039598d56553d1edc031035' }, h("b", { key: '5d2d73eed79553312d41ed719bd59829c46d6318' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '8bbe97a9bd95fb57b61a6867e0c0155cf2669c47' }, h("div", { key: 'e7118fb803a8430ef6e2b52b0641ceed28e62a18' }, h("ir-button", { key: 'b71f3b7bf1df2c650b74977e09027468708abd44', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '6445ccc0e97daf2bfc163c288e7d829a1778ce5d' }, h("ir-button", { key: '0720202cbb25da1eadc7356c627d4588da5a87f1', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'be62d510d196bab2a43e871588f127c5a375ab06' }, h("ir-button", { key: '6cc4cf293f74ca846a93222f05ef29cd2c5d7682', onClickHandler: () => {
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
                    "resolved": "{ task: Task; status?: \"001\" | \"004\"; }",
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
