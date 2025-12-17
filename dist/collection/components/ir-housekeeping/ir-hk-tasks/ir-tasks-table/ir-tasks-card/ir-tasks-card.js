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
        return (h(Host, { key: '5365c87d653d4b2c06be764483e94157a469b0eb', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '35dc841d8361029694c2dfe83b9f6ce83a4e7709', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '406683428286409f9410e9259c34b205d4eeb98f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '155fdae77a07c6ebdc8b9342150f7ccc3ff9c128', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '3086ad402703a5371acb0bb43b3a7a6bf462e757' }, "-"), h("p", { key: '07bbec33da53182799af812bd07ed62d53af0c0a', class: "m-0 p-0" }, "Unit ", h("b", { key: '846ba7e2a00bb8dc802a677f3af976c8a14de38f' }, this.task.unit.name)))), h("p", { key: '45d94168f4d3188a970914e978aab6d198f4917f', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '2d549c13bd9a93396848f020606294f4afaf8048', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '1b5ecba7b462004c91e744610ad00c2e20df09d5', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'f83a0f8c4bd7b78d28adf3cdda31f90c573f3ace', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '55208c08ec9ed89ad3d15962bf4bf8a3443cf6a0', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'b13c60fa688c748ae5b686a388a6a8dac627c1d0', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '03d9765224ac4fad442e170f053c304bcdd391ad' }, h("b", { key: '60884bdf2c5be0309ea1795eeeef86a6eb9428db' }, this.task.adult), " Adults")), h("span", { key: '9d1a6e42a202ce210245386c85f4db74c1fd69e2', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b085b537db340a57683dae35bc68386e390705cc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '4324d922500e057f7dc66097f8f69356c3be74c5', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'acf2efaf3cc372d8d0ef56d4c4413734169a113b' }, h("b", { key: '293d01d89cdb57e84c9a350515a92a4bacd6b02a' }, this.task.child), " Children")), h("span", { key: '32318613b32b9d1aaf1d46a66e0a251aea314aab', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6500fe25b45210ba6bf7cd01a40a2dc3d654e9d0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'a3c0added6e9548560a63d9fa4ea23c04bc181d6', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '74f71fd2c3fd915ae609e5ceedaf5afa1e974462', d: "M15 12h.01" }), h("path", { key: 'a45092203cfcfeadecf45c56e5ece3647acb7262', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'acd6df9e08c685c89c85c9cad711b5c8632427de', d: "M9 12h.01" })), h("span", { key: '5072447b3f6d768ee8fbbe59f96833805b39683e' }, h("b", { key: '3e303c787c9e983f0dd848099435ec30246e698f' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'ec3770b8eb55ec9c64b6dadfa24e542056619cb2' }, h("div", { key: 'ef9e9c02b3bc17300ca3a6937c35107ce15c67d4' }, h("ir-button", { key: '1936735129287fecf658b5b0c8f154013d0b9d79', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '046f1ecd67f4e5499ac5c9514426f10b329622ad' }, h("ir-button", { key: '0e378ec60cc085821f45794e8299854a65e1bc16', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '9f22b1250bec3922deb33d18d84d2828d16ad4e0' }, h("ir-button", { key: '8cddf844471faac5adf092445d0445df97147ee1', onClickHandler: () => {
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
