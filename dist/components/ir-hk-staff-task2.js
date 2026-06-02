import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irHkStaffTaskCss = ".sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body){display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);padding:0 0.25rem}.unit-label.sc-ir-hk-staff-task:dir(ltr){border-top-left-radius:var(--wa-panel-border-radius);border-bottom-left-radius:var(--wa-panel-border-radius)}.unit-label.sc-ir-hk-staff-task:dir(rtl){border-top-right-radius:var(--wa-panel-border-radius);border-bottom-right-radius:var(--wa-panel-border-radius)}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}";
const IrHkStaffTaskStyle0 = irHkStaffTaskCss;

const IrHkStaffTask = /*@__PURE__*/ proxyCustomElement(class IrHkStaffTask extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.taskClick = createEvent(this, "taskClick", 7);
    }
    task;
    future = false;
    taskClick;
    badgeVariant(code) {
        if (code === 'CLN')
            return 'danger';
        if (code === 'T1')
            return 'success';
        return 'brand';
    }
    unitNameSizeClass(name) {
        if (name.length <= 4)
            return 'unit-label__name--lg';
        if (name.length <= 10)
            return 'unit-label__name--md';
        return 'unit-label__name--sm';
    }
    get guests() {
        return [
            { label: 'adults', count: this.task.adult },
            { label: 'children', count: this.task.child },
            { label: 'infant', count: this.task.infant },
        ].filter(g => g.count > 0);
    }
    render() {
        return (h(Host, { key: '24c580acf108dd50359da1228d07c16839bb8c0d', class: { 'staff-task--future': this.future } }, h("button", { key: 'd2e2191f5f6e36b2ba1e644c107e64e3411e3fd4', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '2289174703e05c9052cca54a52c2f54c01866323', class: "staff-task__card" }, h("div", { key: 'd65a8ad4a49b2ae8bed9ae166d242c7bcc30c2b9', class: "unit-label" }, h("span", { key: '9da418ddabb0d921e0ac385cbd3336bc2f5c6e53', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '04f4f7072fa68fccb6725ef334ebe3e2c251cfc2', class: "task-content" }, !this.future && (h("div", { key: 'b2c2e0ea2ed1384bbfe0b0123f2a52f5450dbbf9', class: "task-status" }, h("span", { key: 'ecd6aa478e03d51821d6955499e548a1b5f646ed', class: "task-status__label" }, this.task.status.description), h("span", { key: '9d6e80c145b5db442682b0de4d76a9cb061ba996', class: "task-status__hint" }, this.task.hint))), h("div", { key: 'c5a9b95207bde81613a84a766eba9bc9c5dba1ab', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '0276c58a4be863eeb372b8c2e098d125036fa717', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: 'f4cfc967603f7fd70f58ca5aeaa04a8b0b66231f', class: "task-action" }, h("wa-icon", { key: '6eb6f3a3350394aaaaf356232eaeb910e7f0f70a', name: "broom" })))))));
    }
    static get style() { return IrHkStaffTaskStyle0; }
}, [2, "ir-hk-staff-task", {
        "task": [16],
        "future": [516]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-staff-task"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-staff-task":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkStaffTask);
            }
            break;
    } });
}

export { IrHkStaffTask as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-staff-task2.js.map