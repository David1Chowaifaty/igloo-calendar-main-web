import { h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
import housekeeping_store from "../../../../../stores/housekeeping.store";
import { t } from "../../../../../services/locale/t";
import { formatCount } from "../../../../../utils/number";
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
            CLN: { variant: 'danger', label: t('Lcz_CleaningAbbreviation', { fallback: 'CL' }) },
            T1: { variant: 'success', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(1)] }) },
            T2: { variant: 'brand', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(2)] }) },
        };
        const { variant, label } = config[code] ?? { variant: 'neutral', label: code };
        return (h("wa-badge", { variant: variant, appearance: "filled" }, label));
    }
    get guests() {
        return [
            { count: this.task.adult, icon: 'person', label: t('Lcz_Ad', { fallback: 'Ad' }) },
            { count: this.task.child, icon: 'child', label: t('Lcz_Ch', { fallback: 'Ch' }) },
            { count: this.task.infant, icon: 'baby', label: t('Lcz_In', { fallback: 'In' }) },
        ].filter(g => g.count > 0);
    }
    render() {
        return (h("wa-card", { key: '2424901b8dcea51e4fa2dcd3a2d6ec64eacdfafe', class: "task-card" }, h("div", { key: '5e61d6bc029b6baaaca948fb00545a7e8229b7bf', class: "task-card__body" }, h("div", { key: 'c4c96cf9b3f16910971b1197478675ce27463d1c', class: "task-card__unit" }, h("span", { key: 'ea91cbdaffcb992737f32b2d849a17bfd6e05406', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: '2804af5f758febd58ddc1bea120ac1d49bb16787', class: "task-card__meta" }, h("span", { key: 'e75705c9451c4abef4b16ee2795ead46dda0434f', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: '15907050a7ef4e98f107ac55385d51951fb14182', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: 'a6bdeb7650645636532ee52ad4330ba0f9a22da9', class: "task-card__hint" }, this.task.hint))), h("div", { key: '2e9a39c4ddb4dc3295b213207f97644dd7b20331', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '3cbc99d6a6bde6868a2734caa9690912aea79d41', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, formatCount(g.count))))))), h("div", { key: '2cc9855194c2f448b98511c1b6524063e88578b2', class: "task-card__assign" }, h("wa-select", { key: 'db76e3d066d15ba3a2fce005ccdaee80a6270e0f', label: t('Lcz_Housekeeper', { fallback: 'Housekeeper' }), class: "task-card__hk-select", size: "s", placeholder: t('Lcz_Unassigned', { fallback: 'Unassigned' }), value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: '1048886f2a5edcf9b3437ac124521baba4fef241', value: "0" }, t('Lcz_Unassigned', { fallback: 'Unassigned' })), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: '94788c136a634c86f734f96436acdc4e33cbf1b7', class: "task-card__actions" }, this.isSkippable && (h("ir-custom-button", { key: 'ade0265c8eb61b22b58da03504574467378bd257', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, t('Lcz_Skip', { fallback: 'Skip' }))), this.isCheckable && (h("div", { key: '05d40e3532d7c3d15acc119403cc2f21ee0b75f4', class: "task-card__clean-group" }, h("ir-custom-button", { key: '297679c8fd561ef9d681c5c8d8625da50c89e354', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' })), h("ir-custom-button", { key: 'ed9905b06df7e4c530d99c794c1c8ae3691598c1', variant: "brand", appearance: "accent", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, t('Lcz_Clean', { fallback: 'Clean' }))))))));
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
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
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
                "reflect": false,
                "attribute": "is-checkable"
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
                "reflect": false,
                "attribute": "is-skippable"
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
                            "id": "src/models/housekeeping.ts::CleanTaskEvent",
                            "referenceLocation": "CleanTaskEvent"
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
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
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
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
                        }
                    }
                }
            }];
    }
}
