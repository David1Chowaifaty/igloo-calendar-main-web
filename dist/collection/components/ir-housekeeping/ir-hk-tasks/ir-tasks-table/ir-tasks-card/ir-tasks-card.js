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
        return (h(Host, { key: '36e279585bef6616172cf7bdf8df3cb5857b15fe', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '65ead48b1b78544ac266c4144f642e58300ae1f0', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'e536f4c42057afa140a27a6b6501f34ffc1ccfa9', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'ec38e30da0277de1ff15e31298f375e5fbe46f34', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8d94fbcdfdffcc812930fc21524d7950979dd0d0' }, "-"), h("p", { key: '7e8b57a3496fee6ed45e18014ccedd7c3811156f', class: "m-0 p-0" }, "Unit ", h("b", { key: '4d1b465139e11be92d90c3dc8a5a4d07e43b8178' }, this.task.unit.name)))), h("p", { key: 'd1e919820271a14447ae5a74cf200ae206db563c', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '2768a4dc6a40779341dad2478815fe71c47ab3d6', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '1d257616ecd5757cfda4e19e9a0136db0468389b', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'bfbbd26e517ed9e31493803af04b302265ab7144', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '47d647c0aee792af55d49a3d1a71eebb020fb1ef', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '6032b95f8954ff2325a29938f96ed8b97033b07a', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '5e99c04c3b0d9e58a149aef84c2c2ad947fc5f03' }, h("b", { key: '85d28423c3a90d3f1b39454706adf2cae7be32d2' }, this.task.adult), " Adults")), h("span", { key: '730d4596116f9165ea1739cc6d564740fc224c00', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0869728b603f093cc83345f8114d2f0b94400b28', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1decea932473d90a1abecd14fde397eea4ba2082', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '56a6c36a68322950274c15d7b50d622537a75852' }, h("b", { key: 'f55c339ab647735cead97e157af4711a738e5ab0' }, this.task.child), " Children")), h("span", { key: 'cd65911cb0ab1e958873a3b5c53ad0b2a69d2e2d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '5b6fbda1ef51ca17578f8d66dba6fe767407465e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '0d22396b810f02d3882381d2026738331dedd5bd', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'a165e9fb8decf486eb843389dc60a6aca8832785', d: "M15 12h.01" }), h("path", { key: '4d263005df0f180ac5da7bf49930d79d8ac37159', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '58c9f187b6ee45d1169bca6e61c05c52390185ff', d: "M9 12h.01" })), h("span", { key: '56ea7df3b35cd072075ec5fc97e98a608d63506e' }, h("b", { key: 'd4b508ec6f9675226176cbc9550fee298fb5fd04' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '0dedfb1a37a358094e0d1691b5244444d5d534ef' }, h("div", { key: 'f68f5d6b706a8406434ca2ca305bda2cdcbe3f45' }, h("ir-button", { key: '431362baba8f6ba9df69446f5a2472e1b6e8fb07', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '81603fca1a0c9a2fb1f2a8f00e8a044eb16599ce' }, h("ir-button", { key: 'ee9eb740a6099e7ee4e632728f9be18745e3aef7', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '735db0c90a7e7a3f8d4df67ccd9a94a8bfad4671' }, h("ir-button", { key: 'b335bce582a5cb3489d31812229283c749d6b04f', onClickHandler: () => {
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
