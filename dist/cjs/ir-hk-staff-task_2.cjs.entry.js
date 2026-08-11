'use strict';

var index = require('./index-CJa_TWt0.js');

const irHkStaffTaskCss = () => `.sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body),.staff-task__card.sc-ir-hk-staff-task [part~="body"]{display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover,.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task [part~="body"]:hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active,.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task [part~="body"]:active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);padding:0 0.25rem}.unit-label.sc-ir-hk-staff-task:dir(ltr){border-top-left-radius:var(--wa-panel-border-radius);border-bottom-left-radius:var(--wa-panel-border-radius)}.unit-label.sc-ir-hk-staff-task:dir(rtl){border-top-right-radius:var(--wa-panel-border-radius);border-bottom-right-radius:var(--wa-panel-border-radius)}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}`;

const IrHkStaffTask = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.taskClick = index.createEvent(this, "taskClick");
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
        return (index.h(index.Host, { key: '1b28c447cd38e349f326bd918076005f1d705626', class: { 'staff-task--future': this.future } }, index.h("button", { key: 'c6e3c41359f509cc490bc9ea9c4e9efa0d0a6b14', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, index.h("wa-card", { key: '631d9500c3f84239653763219ac997464d12cd7b', class: "staff-task__card" }, index.h("div", { key: '9d2d982127f9a22fa3c61f2948e7cae6812e372f', class: "unit-label" }, index.h("span", { key: 'ced1b7cb4450e2c706357a5a1ac23c304bdbc69e', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), index.h("div", { key: 'c5b575da0d57d894675a596b66c70d6e64c34b45', class: "task-content" }, !this.future && (index.h("div", { key: '7ec50333a46f90e4b4fc54e46b2225e9b79b35ae', class: "task-status" }, index.h("span", { key: 'ccb426137cac5ea9b8e430d2a814426047263a9b', class: "task-status__label" }, this.task.status.description), index.h("span", { key: 'a39da1ac751fdb55ed536276570c6f32e598bcef', class: "task-status__hint" }, this.task.hint))), index.h("div", { key: '3750e584ac15f74e3a735636e051c8c5bbb9bc6e', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (index.h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (index.h("div", { key: 'e7a1a29d72449688d12554fd53f6ef192a4757d2', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (index.h("div", { key: g.label, class: "task-guest" }, index.h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (index.h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (index.h("wa-icon", { name: "child", class: "task-guest__label" })) : (index.h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (index.h("div", { key: '3a2356101fc4b59e236b1e67b5f6bf9a67d4577d', class: "task-action" }, index.h("wa-icon", { key: '634123de8fa61e4ba2029309a45933b625af5785', name: "broom" })))))));
    }
};
IrHkStaffTask.style = irHkStaffTaskCss();

const irHkStaffTasksHeaderCss = () => `.sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:70px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}`;

const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'EN' },
    { value: 'ar', label: 'AR' },
    { value: 'el', label: 'EL' },
];
const IrHkStaffTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.languageChanged = index.createEvent(this, "languageChanged");
    }
    connectedHK;
    language = 'en';
    languageChanged;
    handleWaChange = (e) => {
        const lang = e.target.value;
        this.languageChanged.emit(lang);
    };
    render() {
        return (index.h("header", { key: '96ae492c51d688ac38899189b2f3c12b9dcc907c', class: "tasks-header" }, index.h("div", { key: 'f0f9575d08706e4c10b17a9582e322209bbe33da', class: "tasks-header__inner" }, index.h("div", { key: 'ebaf8d4dc704b8f2fc8130860bf1f8c768230c13', class: "tasks-header__brand" }, index.h("img", { key: '114273e6895fb25e2ddf287897dba5ed510f84be', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), index.h("span", { key: '4b47bff90adbb4733599087bd63b124859bc41f0', class: "tasks-header__name" }, this.connectedHK.NAME)), index.h("div", { key: 'dcb34ca43795eafd64892399c0187c5b4f6f5c2f', class: "tasks-header__actions" }, index.h("wa-select", { key: 'b388b1b33535397961b54bd439ed7c67f3d7f81d', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "s" }, LANGUAGE_OPTIONS.map(opt => (index.h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), index.h("ir-custom-button", { key: '420c437b8f547e467bf8da0b7dc24978feef0da2', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, index.h("wa-icon", { key: '9008e0dd96ad1daaea9894158aae6a8ecee941e5', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
};
IrHkStaffTasksHeader.style = irHkStaffTasksHeaderCss();

exports.ir_hk_staff_task = IrHkStaffTask;
exports.ir_hk_staff_tasks_header = IrHkStaffTasksHeader;
