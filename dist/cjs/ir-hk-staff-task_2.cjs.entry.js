'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irHkStaffTaskCss = ".sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body){display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);padding:0 0.25rem}.unit-label.sc-ir-hk-staff-task:dir(ltr){border-top-left-radius:var(--wa-panel-border-radius);border-bottom-left-radius:var(--wa-panel-border-radius)}.unit-label.sc-ir-hk-staff-task:dir(rtl){border-top-right-radius:var(--wa-panel-border-radius);border-bottom-right-radius:var(--wa-panel-border-radius)}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}";
const IrHkStaffTaskStyle0 = irHkStaffTaskCss;

const IrHkStaffTask = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.taskClick = index.createEvent(this, "taskClick", 7);
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
        return (index.h(index.Host, { key: '5743c65dcea338becca93d1dc3705461d6d9344e', class: { 'staff-task--future': this.future } }, index.h("button", { key: 'ee372203b1884a55cb2e7a329b91bc141b125039', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, index.h("wa-card", { key: 'e0177e648188e6bff0be9279f2d24ed3564f2973', class: "staff-task__card" }, index.h("div", { key: '5e44af03861ef6b4161f58f9c62f23fee5c98ee2', class: "unit-label" }, index.h("span", { key: '36c8969b0b5b56089bc27bb1549990d9ba162c42', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), index.h("div", { key: '6e5ffe82c25769317cfddb79ea4a378813bf1e3d', class: "task-content" }, !this.future && (index.h("div", { key: '2ad2cce43da51295077beb54182a68d01074d45c', class: "task-status" }, index.h("span", { key: '2c7f4c181773f10e59f0f1d2d178020fb9009ab3', class: "task-status__label" }, this.task.status.description), index.h("span", { key: 'c14a467af9ce7c7fecf4d26c9a564d9576300336', class: "task-status__hint" }, this.task.hint))), index.h("div", { key: 'eb1cf22dae2fa1b9e89ad501440291b26acbd91c', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (index.h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (index.h("div", { key: '6b81940a4d8d7f0cd66dc8a8d9db612bea55c363', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (index.h("div", { key: g.label, class: "task-guest" }, index.h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (index.h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (index.h("wa-icon", { name: "child", class: "task-guest__label" })) : (index.h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (index.h("div", { key: '873597ea1e3298f7a272877ef67d4231138a17f9', class: "task-action" }, index.h("wa-icon", { key: 'a9783d23802a134afbe64470421dbffe37411ef2', name: "broom" })))))));
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
        index.registerInstance(this, hostRef);
        this.languageChanged = index.createEvent(this, "languageChanged", 7);
    }
    connectedHK;
    language = 'en';
    languageChanged;
    handleWaChange = (e) => {
        const lang = e.target.value;
        this.languageChanged.emit(lang);
    };
    render() {
        return (index.h("header", { key: '662145728dcdcae483cc6b74dc9310fcddae2ab9', class: "tasks-header" }, index.h("div", { key: '02e3fa08d9e7afd328808bef2dab408bc75a18b3', class: "tasks-header__inner" }, index.h("div", { key: '842f8ff4c5e68733f2e2c69cfbe9ea0e345d332f', class: "tasks-header__brand" }, index.h("img", { key: '3b59583fa6b94a097fb78e6620944ea89d77ceba', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), index.h("span", { key: '561869155bc0849f0d7b14d01b3cb92aef56fd93', class: "tasks-header__name" }, this.connectedHK.NAME)), index.h("div", { key: 'f53ae2ee63d0a153915cc6670a3c32f42e26f940', class: "tasks-header__actions" }, index.h("wa-select", { key: '9ee0ef8708a5e734ac2b2f665f31a56ac3958c4f', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "small" }, LANGUAGE_OPTIONS.map(opt => (index.h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), index.h("ir-custom-button", { key: '830a046cdb68cc4b1135cc730430beb017622c23', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, index.h("wa-icon", { key: '13f3d12fea9f516143540574a9ad8bff97508251', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
};
IrHkStaffTasksHeader.style = IrHkStaffTasksHeaderStyle0;

exports.ir_hk_staff_task = IrHkStaffTask;
exports.ir_hk_staff_tasks_header = IrHkStaffTasksHeader;

//# sourceMappingURL=ir-hk-staff-task_2.cjs.entry.js.map