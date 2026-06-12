import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';

const irHkStaffTaskCss = ".sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body){display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);padding:0 0.25rem}.unit-label.sc-ir-hk-staff-task:dir(ltr){border-top-left-radius:var(--wa-panel-border-radius);border-bottom-left-radius:var(--wa-panel-border-radius)}.unit-label.sc-ir-hk-staff-task:dir(rtl){border-top-right-radius:var(--wa-panel-border-radius);border-bottom-right-radius:var(--wa-panel-border-radius)}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}";
const IrHkStaffTaskStyle0 = irHkStaffTaskCss;

const IrHkStaffTask = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '899d7a5c625f4873d410d85f2f481c6e3b8319f8', class: { 'staff-task--future': this.future } }, h("button", { key: 'e3125b602111941c0ef6f406e33bd8060583fe25', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '7ef94dd332876850f11b9338a73417da1d538d73', class: "staff-task__card" }, h("div", { key: 'c5e741badd41df4fccad9def06c2667496937bcc', class: "unit-label" }, h("span", { key: 'e293c20959283ceb9bb38504798298e570ed8200', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: 'ae62473bec4865ea711a25498a1824185fbee3fa', class: "task-content" }, !this.future && (h("div", { key: 'aec4cc9810e5454aeef41326ad3470ff2fd04f8d', class: "task-status" }, h("span", { key: '3323a79bf217b6b0402062025ad305e09b2fb4e2', class: "task-status__label" }, this.task.status.description), h("span", { key: '9f35bafbdf121af96b467ed18b88fd2d4c66a31e', class: "task-status__hint" }, this.task.hint))), h("div", { key: 'faee89a7bdb33dcf361f23f91b5b9b639607a5f9', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '89be0b9f207e2a7a990e6380ba8cc3ca8ffd2e09', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '03ba0975399def19c732d809eb11a77161bc28a7', class: "task-action" }, h("wa-icon", { key: '684710269c10698b2daa68376ff4a13ba4f656e3', name: "broom" })))))));
    }
};
IrHkStaffTask.style = IrHkStaffTaskStyle0;

const irHkStaffTasksHeaderCss = ".sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:70px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}";
const IrHkStaffTasksHeaderStyle0 = irHkStaffTasksHeaderCss;

const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'EN' },
    { value: 'ar', label: 'AR' },
    { value: 'el', label: 'EL' },
];
const IrHkStaffTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.languageChanged = createEvent(this, "languageChanged", 7);
    }
    connectedHK;
    language = 'en';
    languageChanged;
    handleWaChange = (e) => {
        const lang = e.target.value;
        this.languageChanged.emit(lang);
    };
    render() {
        return (h("header", { key: '2b1d6e8f14fafc1072245fe58a8a03d04edcacff', class: "tasks-header" }, h("div", { key: 'c17b3f9b10a20e48239bea1acc567da0ad8e6ecc', class: "tasks-header__inner" }, h("div", { key: '9bdf863eaa61b55f23bd29f26d6e3579ca212660', class: "tasks-header__brand" }, h("img", { key: '80df1a57874ca6afc0cd1943edf4f2472e03b7fa', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '2d443e0bb6f26a2d91aeda05c709d2521fbd5a85', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: 'e5e0e159ad740f8611c4bc159454d139fc7e8f64', class: "tasks-header__actions" }, h("wa-select", { key: '3f6b2b344cc96e1a2f7db143b5e86cbb8b9ea9d0', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "small" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: 'e8519eb7c686c1255b46d0638d4736e91c3caa2b', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: '72cbb94296403c5940db33d0efce05b3c8efa8cb', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
};
IrHkStaffTasksHeader.style = IrHkStaffTasksHeaderStyle0;

export { IrHkStaffTask as ir_hk_staff_task, IrHkStaffTasksHeader as ir_hk_staff_tasks_header };

//# sourceMappingURL=ir-hk-staff-task_2.entry.js.map