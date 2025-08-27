import { Fragment, Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '21569fb93dcfb18bba146d0699d8520bc4620c24', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '07d658844aaaa04bacda877b71c0ae3140a0be04', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'd3ce61806481b9aa7d0c40ed11862ccd29943ab1', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '74f20c2c6f1e5a4ad8337ef96222abde0f4074c8', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '825fd41f60fb49ab05a3b807bc9fea92b917d483' }, "-"), h("p", { key: 'bd225215b344f62e2d7eb31c8def8ee7a76351ee', class: "m-0 p-0" }, "Unit ", h("b", { key: '4a877e38e170d5f8afe60c2fb3f9e5513b91c73b' }, this.task.unit.name)))), h("p", { key: '67661da915cb8b01085e27d91be052d0d7a2cea4', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '122525277b85eb1a41189edf8481045e61b87e76', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'd23b972bafc8dd48bf226ec71d4505d930d3d0b7', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '17f7131b23b863d25623bcbf059b5321f76a2d8d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0d065ae463ce133a455884cb5638b02354b2da0e', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '9ff6e0ed0cad8ec05497032bdebe94ebf71867e3', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '5a10ff8972aa27be73a4629c47b365c981ee263e' }, h("b", { key: '5e2bb9a15223bd55e5a5c39e76e39da0175714a1' }, this.task.adult), " Adults")), h("span", { key: '13c6fe47241c0cd12ed8deaf682c9919b19a6a7e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'be0dfe43ab246a25aa9c12f7add5f6a139b3d076', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'f9b9c02d2373e85383910f4b3c72a41c8cd551ae', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '335797e3a59b07ffc3388d99b39f81940aa1a6ad' }, h("b", { key: 'c5587074887d5ba0e55853e91afc8c6dece23c4c' }, this.task.child), " Children")), h("span", { key: '7d5c154a353f19c526807d52d4233b1f7e77ed09', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a793f9a2b993386269b20b533748b4119867c98f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '8660505c42fe437f1298c3c88b1e9122b115d634', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '9e4649f351ad843181bbe64da4f29f16a48d5195', d: "M15 12h.01" }), h("path", { key: 'ef6ecb589da1b74eecd2a9234744fd2a031bc5a6', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '97c3954f72a1e360d2f5a3379910851367a1a93e', d: "M9 12h.01" })), h("span", { key: '929b2cce940054cce9497ef318eb2d9edcd9d0c2' }, h("b", { key: '5a89d7346d92262feb6297786abcba28c23045a0' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'b036ede68683f00b04172603443be6e7403d5df4' }, h("div", { key: 'cdea9e1ecd58d85719c7a529af62d09c6c5301b1' }, h("ir-button", { key: '5b88d8849b8eaa43fd71ed0f7bf42c8e951e7f64', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '74bdaed976c25a52792753b472cecfe157e919d3' }, h("ir-button", { key: 'ca73dc02ae890d9b1cbde99a4af1d83ad4a3b73e', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '047e07a17b02abdd8ff43900d35b13a665ca9143' }, h("ir-button", { key: '73caab4ff9c5c755f385bd59cfaa71455061bc5e', onClickHandler: () => {
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
