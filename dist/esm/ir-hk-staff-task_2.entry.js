import { r as registerInstance, c as createEvent, h, H as Host } from './index-D8DCR0yx.js';

const irHkStaffTaskCss = () => `.sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body),.staff-task__card.sc-ir-hk-staff-task [part~="body"]{display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover,.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task [part~="body"]:hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active,.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task [part~="body"]:active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);padding:0 0.25rem}.unit-label.sc-ir-hk-staff-task:dir(ltr){border-top-left-radius:var(--wa-panel-border-radius);border-bottom-left-radius:var(--wa-panel-border-radius)}.unit-label.sc-ir-hk-staff-task:dir(rtl){border-top-right-radius:var(--wa-panel-border-radius);border-bottom-right-radius:var(--wa-panel-border-radius)}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}`;

const IrHkStaffTask = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.taskClick = createEvent(this, "taskClick");
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
        return (h(Host, { key: '1448f41cc032639c6954f5fe6f12ea2a741f95da', class: { 'staff-task--future': this.future } }, h("button", { key: '2c47133ed448621bdd412011873f000883d70e4f', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: 'fa9463428685224c41b36a10c665276e91a3bfcf', class: "staff-task__card" }, h("div", { key: '290e771cd177e3bb29d0c019d9a2f063ff5cec68', class: "unit-label" }, h("span", { key: 'dea99f98c051881e3aff7c6d1dfec7db60a20b6e', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '3d87813963301f7aa4ef4557b606b35cd113970f', class: "task-content" }, !this.future && (h("div", { key: 'f16dc475df771d9194df98f99ece8c6dc175c5d0', class: "task-status" }, h("span", { key: 'd3dce31ab4edb54db1a81e8ff9497486afd9d631', class: "task-status__label" }, this.task.status.description), h("span", { key: '4fc3f2d314c411be7f913bb52040b3ed5ece7926', class: "task-status__hint" }, this.task.hint))), h("div", { key: 'a58369e812fa53bbc52ec1cd4f8b6bb384c27866', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '15ae09b74499b17f48ec25ff68db64940b0b60fa', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '3e214b95aa7746f9072eb6fada4daae4879b7c2b', class: "task-action" }, h("wa-icon", { key: '6b542e4676ad1ae7a9bcc0b9be8b6de3b20b0aaa', name: "broom" })))))));
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
        registerInstance(this, hostRef);
        this.languageChanged = createEvent(this, "languageChanged");
    }
    connectedHK;
    language = 'en';
    languageChanged;
    handleWaChange = (e) => {
        const lang = e.target.value;
        this.languageChanged.emit(lang);
    };
    render() {
        return (h("header", { key: '12eee4ec538eff699587b422b38057b75407e7e2', class: "tasks-header" }, h("div", { key: 'cfa2291a3aa0d238ffece3516b86bc0565c54d05', class: "tasks-header__inner" }, h("div", { key: '4fbfc18f79c24f581cdbbb02c95c0dbb702ef557', class: "tasks-header__brand" }, h("img", { key: 'fadf0a0eb324b0372b50ff2d4b1ce5fa4302f646', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: 'dd4e58124e65c7d189568f9767f6f5d220db6c78', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: '81d0ccef1b09ff72a2f814c233123022603278a6', class: "tasks-header__actions" }, h("wa-select", { key: 'ca395480da3b2dbc51f65b0f68ef8ae865595ff5', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "s" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: '6b1b25f2ce591e2f32aa21bf8f825a3c4e812945', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'cd0d681205cdf538051c84b0ffb73b60e07bb171', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
};
IrHkStaffTasksHeader.style = irHkStaffTasksHeaderCss();

export { IrHkStaffTask as ir_hk_staff_task, IrHkStaffTasksHeader as ir_hk_staff_tasks_header };
