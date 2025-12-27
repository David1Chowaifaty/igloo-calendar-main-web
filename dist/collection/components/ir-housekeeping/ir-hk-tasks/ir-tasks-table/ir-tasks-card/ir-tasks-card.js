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
        return (h(Host, { key: 'a7a693dc41e03ad5fca80552b513676bec5c28f4', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'a735db6e1c30fb9632e286be2a42233d136c0e7f', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '587215cf95121f8a30b1336a0530710e98e8eb72', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'e4cb506d8a405ef2714b971cc88a57d062a66523', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '295f3ac08fd382e48a6bf04b476ab8af4c31b17a' }, "-"), h("p", { key: '527f3c1fe883e5004ab575cb670dfef3ce79bb82', class: "m-0 p-0" }, "Unit ", h("b", { key: '89d86273bdb2a1dd42775c30d07332aad025e7ad' }, this.task.unit.name)))), h("p", { key: '1185ce4c68d8d4da130219728c62a342d6c8a101', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '6a5ef0cddccd60062ad419aa03ac29b0f9a9c498', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'e06afe943b306981975ed4cb6dee188dc2a85064', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '33dfb1287b4d757a333b0ae35c6ef371a2c98226', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '49dca8fd325cf760d30bbae745335acd462f2850', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '25601c9dc0ff40ba7b4c66d860569acadd959fc2', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '2a37231cc1413023178d2fcf8c2ee714925585ea' }, h("b", { key: '11ba5ecc75c1bf43423eabd63c1f5acc47f9825a' }, this.task.adult), " Adults")), h("span", { key: '233b5c3cddc29681aebd1b5006c4bca8004797e8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '87cd9034d1fe718a1a77cc3447a69cf1ab060760', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '6b1996eaceadbcb9aeafeb6eed46b6011364bc1c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '5184cac847bd5063e0e2cd3da459120a14e2c055' }, h("b", { key: 'bdcb1b9ca4f4e073a3d454135fdf399566c3b173' }, this.task.child), " Children")), h("span", { key: '893d41f325d6c9b39291c2249ffdf825c4f164bb', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '96e66b180f9094249449410f8988424724c66b56', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '6d7f3a0650e35c965bd1f27abc7b9ebc89fb026c', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'c27b98305796d0d973ec73d947705d0242f21080', d: "M15 12h.01" }), h("path", { key: '4280443be29adf7209a3411d4895068d56288afe', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '0ea020e1025c4577df7e42a3975dafb552062825', d: "M9 12h.01" })), h("span", { key: '613a9762df667f5b65afc5e8aacf00ff88f1c0e4' }, h("b", { key: '21e60a5c9f51599ddf1fdaf1da05ec41a4b891d2' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '7f3dd105e3dc909b5aea9abb7bba275cf8c5bdd2' }, h("div", { key: '550cad14e41b74d967cd3b119db41ce4c9352bab' }, h("ir-button", { key: '4bb27ec8217c9f163887b70a980f831e9dc22472', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '67f3628d32d8ba824935c222d6e43e4d9a338402' }, h("ir-button", { key: '56438cbcae679fa6f5bcff2dd20a6689f2050439', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '90fe6f331275374a8452113b8b4e91443cdd14fb' }, h("ir-button", { key: '50a960d530736a1b36cf6d42e68af7726b98104d', onClickHandler: () => {
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
