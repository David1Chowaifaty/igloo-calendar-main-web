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
        return (h(Host, { key: '0b5856601f3a56492d83d788e8a4610c6c8469af', class: { 'staff-task--future': this.future } }, h("button", { key: '51f5738a475796068adb42bd6704893f92679169', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: 'b4e7e0bc3966be93cb9278e2caf1d45ad9a595eb', class: "staff-task__card" }, h("div", { key: 'a54b17d423f6f439f22d2ad684801b7164310b4e', class: "unit-label" }, h("span", { key: '63901ed472c94c16f15dfc49706f5fb2021ce7a8', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: 'f99b7a12261cf46e2c71e623b24c6476a81dee0b', class: "task-content" }, !this.future && (h("div", { key: '9010a9193aa8a7941984324061bde78afc81044b', class: "task-status" }, h("span", { key: 'ad6b0ff35ed011963153300e4b718e0523c4b77c', class: "task-status__label" }, this.task.status.description), h("span", { key: 'deea196fac56d6edbe4f058a779af2e6c0770c19', class: "task-status__hint" }, this.task.hint))), h("div", { key: '6bcd4bdc0dd9c1fdd345ef192db00c12143eb904', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: 'ed94630c90fa4d639d2680775a82824a29fa0e26', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '9d1047eb8342092cd74d2303b42979a2cfc34d30', class: "task-action" }, h("wa-icon", { key: 'ccfe1fcc9896c53e037ee22c1ddbeac83ceef90f', name: "broom" })))))));
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