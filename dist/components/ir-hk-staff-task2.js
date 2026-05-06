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
        return (h(Host, { key: '01a9e9e9f34edb3f750f8b2a0612635968eea5a8', class: { 'staff-task--future': this.future } }, h("button", { key: 'ac3d9b8ba150d2b032787e9e4f8d543f455556a6', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '0b407e838707e4ae3a1163ed4bd5997fa8089d88', class: "staff-task__card" }, h("div", { key: '52630c64cad6f458a7544dd258109ca480f3e31e', class: "unit-label" }, h("span", { key: 'c822d0546234cecbf188d6b6fd1fd60087211902', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '6ce8ebd452aafb14b732d43621b6a21294c5455b', class: "task-content" }, !this.future && (h("div", { key: 'e3b37fe3f711b09213bd8be5747515770dcecbcf', class: "task-status" }, h("span", { key: 'b86c2fd1f662a209fe880bbcc38ddb1f18428446', class: "task-status__label" }, this.task.status.description), h("span", { key: '22ff33067fc0fd467f1af47e3c09df5865d88ae6', class: "task-status__hint" }, this.task.hint))), h("div", { key: '8e749f9498c7e3ba13616467f8af0524db004b3a', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: 'c45bd255ee507ac9a53d915232d2bec498123687', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: 'a2344f8cf361f64a0522e566f90d368f10d315bc', class: "task-action" }, h("wa-icon", { key: 'dd96db8a4eb602f8e56ceb18bb7b6d884ead4b76', name: "broom" })))))));
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