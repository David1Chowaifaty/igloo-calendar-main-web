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
        return (h(Host, { key: '2e46bc5a0b3ec12ee9a6765449b76d5ca11524c6', class: { 'staff-task--future': this.future } }, h("button", { key: '9c5028402d1c8ecd40caa52296bb50b89faec6be', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '245cae56fd04d2b07f416649628fa0912e760f45', class: "staff-task__card" }, h("div", { key: 'bfdcf634ff84dccd326157a54fc21baa1049cea5', class: "unit-label" }, h("span", { key: 'a255da9e0b2f5137329180cac6bbecfad67311c0', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: 'c25dca96d30d93ced49f9e8e75c53277114f1dd6', class: "task-content" }, !this.future && (h("div", { key: '48388433d0bc03e46b8e34a0becb470e413157c0', class: "task-status" }, h("span", { key: '7f3ba82c3135e6a84969176b69a4f841d65cfccf', class: "task-status__label" }, this.task.status.description), h("span", { key: 'd66418d390dc936d011850315252e1a62f9a7b4f', class: "task-status__hint" }, this.task.hint))), h("div", { key: '57ab8f340d633d689a3c9b09aab97a9aa4742baf', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: 'ccabaad3752f907e8a9a044a99f2e3cdedb54510', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '57668f7d8efb46a92246f25a0de8c6b1a4f32341', class: "task-action" }, h("wa-icon", { key: '534e3d412f8f3cb53995ff66f583aa3a3229f05b', name: "broom" })))))));
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