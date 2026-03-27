import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irHkStaffTaskCss = ".sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body){display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);border-radius:0.5rem 0 0 0.5rem;padding:0 0.25rem}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}";
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
        return (h(Host, { key: '2202ec35c33b33cd750c98b6b6903115ebacf414', class: { 'staff-task--future': this.future } }, h("button", { key: 'ac50a3f91d93dfd4ac2112096ca1f67d603c6f27', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '46e419f7358856f588b62fae84f83a56073a7b8a', class: "staff-task__card" }, h("div", { key: 'f1d3a808abc8fd9bb862575f7078966b6d0f4a1b', class: "unit-label" }, h("span", { key: '6a491272126bb42047dd9757f2e0645ab3bf740c', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: 'fe68767668878f883b8cc213a9b0c76b5a5a4b02', class: "task-content" }, !this.future && (h("div", { key: 'fba2a0cb77a23c0700a29d4a337018f9ae57447e', class: "task-status" }, h("span", { key: '022c6dca181636cbfa4022143ad24a5cd0e2042c', class: "task-status__label" }, this.task.status.description), h("span", { key: '286c24071ea7bf724293efd22a321af63940cf29', class: "task-status__hint" }, this.task.hint))), h("div", { key: 'dfec154f9e530dfd7336ee772dbf75c28e11c028', class: "task-badges" }, h("wa-badge", { key: '72a94b4a2a72d3fd60bebe09f5ee11eea344a56a', variant: "danger", appearance: "filled" }, "\u03BA\u03B1\u03B8\u03B1\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1"), h("wa-badge", { key: '414c05059f01ff86c9f825ef35d9ccabb1d5b772', variant: "success", appearance: "filled" }, "\u03BB\u03B9\u03BD\u03AC"), h("wa-badge", { key: '9fac17433d0020c507867af02e6df8c4de6e6e6f', variant: "brand", appearance: "filled" }, "\u03C0\u03B5\u03C4\u03C3\u03AD\u03C4\u03B5\u03C2")), !this.future && this.guests.length > 0 && (h("div", { key: 'b630a33a38f89f5d26c8f92872513b60710dc1cd', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '193dd8636b71982fdad18b66c938bf8c7ccf9474', class: "task-action" }, h("wa-icon", { key: '8f77a7c9be1c55d2f92d07f29cee8d3a57eea9bb', name: "broom" })))))));
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