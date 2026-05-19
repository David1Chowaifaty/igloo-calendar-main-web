import { h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
import housekeeping_store from "../../../../../stores/housekeeping.store";
import locales from "../../../../../stores/locales.store";
export class IrTasksCard {
    task;
    isCheckable;
    isSkippable;
    cleanSelectedTask;
    skipSelectedTask;
    assignHousekeeper;
    // private taskBadges() {
    //   const config = [
    //     { code: 'CLN', variant: 'danger', label: 'CL' },
    //     { code: 'T1', variant: 'success', label: 'T1' },
    //     { code: 'T2', variant: 'brand', label: 'T2' },
    //   ] as const;
    //   const presentCodes = new Set([this.task.task_type?.code, ...(this.task.extra_task?.map(et => et.task_type?.code) ?? [])]);
    //   return config.map(({ code, variant, label }) => (
    //     <wa-badge key={code} variant={variant} appearance="filled" style={{ opacity: presentCodes.has(code) ? '1' : '0' }}>
    //       {label}
    //     </wa-badge>
    //   ));
    // }
    taskTypeBadge(code) {
        const config = {
            CLN: { variant: 'danger', label: 'CL' },
            T1: { variant: 'success', label: 'T1' },
            T2: { variant: 'brand', label: 'T2' },
        };
        const { variant, label } = config[code] ?? { variant: 'neutral', label: code };
        return (h("wa-badge", { variant: variant, appearance: "filled" }, label));
    }
    get guests() {
        return [
            { count: this.task.adult, icon: 'person', label: 'Ad' },
            { count: this.task.child, icon: 'child', label: 'Ch' },
            { count: this.task.infant, icon: 'baby', label: 'In' },
        ].filter(g => g.count > 0);
    }
    render() {
        return (h("wa-card", { key: 'a289bbf826a71729cb7b5af715343d1ded02483b', class: "task-card" }, h("div", { key: '597a8fd9b306963e0b2971d700ab8ab3b0569f67', class: "task-card__body" }, h("div", { key: '14604f168cf861ab93a51bc4492c2dd210129214', class: "task-card__unit" }, h("span", { key: '15b1e4cba4414f34c03a55d4ac154cce92ece5ae', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: '514b8e7b65c44f1d37ed87d8fe51a800f217f85f', class: "task-card__meta" }, h("span", { key: '00395846d86a688d3fc9cf0bc9e641608d9352c3', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: 'c40ffc44a88bc068df24121e0fed700ccf6acd8b', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: '46ef1a7f2e8f53041efbb7b6e86ab3523799b483', class: "task-card__hint" }, this.task.hint))), h("div", { key: '29fe86c3177b7ebc901e98a574f6e910a56da243', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '3616f01ac07572c7e20a54874e380ae195b4d222', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, g.count)))))), h("div", { key: 'b1a9ecd29e56ad1e3cdc10b8223fedc4cd9f742e', class: "task-card__assign" }, h("wa-select", { key: '573506a0a948bb551f139100db56e0c3c7bb33bb', label: "Housekeeper", class: "task-card__hk-select", size: "small", placeholder: "Unassigned", value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: 'fb40dc5f54bc2a573278bf510417f7c3f72877d8', value: "0" }, locales.entries.Lcz_Unassigned), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: '93cc7f78c4e5cbf61bebd534962aa381c751dde8', class: "task-card__actions" }, this.isSkippable && (h("ir-custom-button", { key: '917a1758fbce8136bb3ab2de27f72845e6fea8b8', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, "Skip")), this.isCheckable && (h("div", { key: '430d01ee26f89009a3879c4d0f1d352fee1997c6', class: "task-card__clean-group" }, h("ir-custom-button", { key: 'bf0afe3cdee1a2db9d4f115b37ac1b541ab10b23', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, "Clean & Inspect"), h("ir-custom-button", { key: 'd7ab1d51d867609b2a828d89c236e358f59c924b', variant: "brand", appearance: "accent", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, "Clean")))))));
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
            }, {
                "method": "assignHousekeeper",
                "name": "assignHousekeeper",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ task: Task; hkm_id: number }",
                    "resolved": "{ task: Task; hkm_id: number; }",
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
