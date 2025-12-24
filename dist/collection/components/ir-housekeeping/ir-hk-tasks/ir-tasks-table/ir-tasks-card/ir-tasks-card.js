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
        return (h(Host, { key: '00f386c77218088d9cae42391c83eb7d281468a7', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '5fb5195b80a74a773d8e75a1bae7762187e428f9', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '4c756d5633784efc6997e045619ad22ba3b0c0df', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'fbb4136f6b54bb96090ad0e737662507e53ae807', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '85de10910d770eab182a1c5cd0de200e6a8165a8' }, "-"), h("p", { key: '3a736ab3ab02b081ca74bfc23e9b93687d2366e8', class: "m-0 p-0" }, "Unit ", h("b", { key: '018290da877ad1db49a83764a7f49d96e6223349' }, this.task.unit.name)))), h("p", { key: 'c03ab24d59745e2366de128b6b1729c23ab1fc5f', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '1b7d6deacdd722b304b1664c8160f0e34ff6a589', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'f93492ce5b2621fed01469a66714fa4905901417', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'c8cbfcb4d28c1a86cce1ada31f792525bc5e2875', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'fe96602599843a954ac13fd401211985273bfda6', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ee6c8c5abdee1763b1074997089ee28a8689c05c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '437b6140f871e39a71826fff34c7115ba1efdd78' }, h("b", { key: 'c473d4927c0496b3766731f0175239639f328c1e' }, this.task.adult), " Adults")), h("span", { key: '721a34474336fe5200e3732820083266ede7fee1', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6a7793b0942b93c83a537136621111074b7b61ac', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'b9293179b19a6ed63aa5be9d081dce2d27244e94', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '08bf87815b980501e52f1986f33856163f72b8d6' }, h("b", { key: 'd0d6f9d92a8479e062c6d8ee998373780f85d2f4' }, this.task.child), " Children")), h("span", { key: 'a60d60b6c56cb36b63bc396ac0852646cf8da328', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'dd6f84c72b6789fc1da98ed00f8285d645fcc6c9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '4f3495c053668eb6f9bd8310270ce9f01c8a0493', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'ad6e5b34bf2523fa5a45c7daefdb4bbe8633c54e', d: "M15 12h.01" }), h("path", { key: '37f7d29e2daf4c432327ee18dad46454ebb0e6ed', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '2621a330d899365df9f705969c63e877804e6c97', d: "M9 12h.01" })), h("span", { key: 'ee1cf5283807461ce84285526a60d81bc8a2c8ec' }, h("b", { key: '3b123a012e1ede8db9add3c4a8b09a4057e95f51' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '1bd12331d30da96f95d6870557c945f9117bf63e' }, h("div", { key: 'd85490e7bd96518f2ebdee4fc13b28282572be46' }, h("ir-button", { key: '02785b1c90e6d15101e1b2f206905f2c4705ea09', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '2dc6facab741f30b2ade48b13680f94e9b64dc6b' }, h("ir-button", { key: 'c2eaa549dffd735730edb5b8159a3a2e77074a0c', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '56f6407cca6106717edae52e2fd141a2a0f5e642' }, h("ir-button", { key: '9291b6b88539defb067fc2e945a27f2990fe667e', onClickHandler: () => {
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
