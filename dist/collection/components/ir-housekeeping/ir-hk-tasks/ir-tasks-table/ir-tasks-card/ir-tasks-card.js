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
        return (h(Host, { key: 'ba0c576b8dd835089443c8e3167bcd091c3f89c0', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '753a6265af26d2d3c2bb5020e8d17e5e71996319', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'd63a2dbb5558226accbb5b802e475e984827700b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '4e58c13ec320a274950016bcc45a7c0afa2c6a68', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '291a75a3888a7832d4abe4b1a9ea296d1ab45cc0' }, "-"), h("p", { key: 'ed04ea993ca7b74ac54eaeb00b7da1a53e5e99d5', class: "m-0 p-0" }, "Unit ", h("b", { key: 'b8d5582a5f11010d9537437ec879492fa8043c58' }, this.task.unit.name)))), h("p", { key: '5b9bcb2c410e07473f0a104044444a9e5f11f539', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'cbf6bca76af2cfcf606996d0a05c343c6f875764', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'b812bf4875dcf19509c81f0cc4b82b96ac13abd8', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '40370cf99500ef48728b405c95153f83f80e338a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '494d58d60b4e68c6132be16f70b359e55603bbb8', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'e0cbda4238b4dbaddc20cb97239165f314700c44', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '075b9a7aa52926fd727e7b2be21c0b7642033439' }, h("b", { key: '6cf55885d819c5f375e03cfe31aebef1a65d7d42' }, this.task.adult), " Adults")), h("span", { key: 'cbe4b7de00d4ac242ec94fa165c6ff4e92f30b2e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '481c07aa68174b00a6e6e07fd00b4cddfb9fa4a1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'f5680e572efc7dc9bfa34bf90533127e38775e95', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'a050e7afe3d198cdf66b9b7b1a17ce6d0396b8e8' }, h("b", { key: '749c0be7e31d09583571d438849d270751b108a8' }, this.task.child), " Children")), h("span", { key: 'ef48e981780355e7817bfeb07fe1db2f09983f2b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'f1a68b1b40621f04a0a15f3608f63907a0473d4c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'fd330277b29398d99ba0aa019ca6f201a2ec994a', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '6bc293d18b9ba47596173eaafaef7ab6d0efb2ca', d: "M15 12h.01" }), h("path", { key: '5d9dc678424f78f5eb454c41cf015e6de2bfab32', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'bcd266df3c4e5c0934909134fca4ecbc8c28fea2', d: "M9 12h.01" })), h("span", { key: 'd91809cf4b64ce29af2621f50c3f2463ec24b19c' }, h("b", { key: '882933c2c70eef9538536d829c2fd53bfd82e828' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '86e5fb83f624a8dd85274e08660822bffc51cd8c' }, h("div", { key: '781de45d2d49657d2fea828b9588a2179f7e88de' }, h("ir-button", { key: '57ebef8d6612230b041aee2df8e398033120da5f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'a845beb6ac239287d8ed669205b6cec8b2b17671' }, h("ir-button", { key: '609685179151499f7b45ea03ce3ece6e727cdee7', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '28414df035148d0f823bed0a522b30bf1daa3838' }, h("ir-button", { key: 'e92f46435f33c8f0cdb2ff8e7a0ea3f644f10b62', onClickHandler: () => {
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
