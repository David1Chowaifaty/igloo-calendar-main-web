'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irHkStaffTaskCss = ".sc-ir-hk-staff-task-h{display:block;cursor:pointer;height:100%}[future].sc-ir-hk-staff-task-h{cursor:not-allowed}.staff-task--future.sc-ir-hk-staff-task-h{opacity:0.5}.staff-task__card.sc-ir-hk-staff-task{height:100%}.staff-task__card.sc-ir-hk-staff-task::part(body){display:flex;flex-direction:row;height:100%;padding:0;gap:0.75rem;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}[future].sc-ir-hk-staff-task-h .task-badges.sc-ir-hk-staff-task{margin-block:auto}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.sc-ir-hk-staff-task-h:not([future]) .staff-task__card.sc-ir-hk-staff-task::part(body):active{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.unit-label.sc-ir-hk-staff-task{display:flex;align-items:center;justify-content:center;width:3.5rem;flex-shrink:0;background-color:var(--wa-color-surface-lowered);border-radius:0.5rem 0 0 0.5rem;padding:0 0.25rem}.unit-label__name.sc-ir-hk-staff-task{font-weight:700;letter-spacing:-0.025em;color:var(--wa-color-text-normal);text-align:center;overflow-wrap:break-word;line-height:1.25}.unit-label__name--lg.sc-ir-hk-staff-task{font-size:1.5rem}.unit-label__name--md.sc-ir-hk-staff-task{font-size:0.875rem}.unit-label__name--sm.sc-ir-hk-staff-task{font-size:0.75rem}.task-content.sc-ir-hk-staff-task{display:flex;flex-direction:column;gap:0.5rem;flex:1;padding-top:0.625rem;padding-bottom:0.625rem}.task-status.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem}.task-status__label.sc-ir-hk-staff-task{font-size:0.875rem;text-transform:uppercase}.task-status__hint.sc-ir-hk-staff-task{font-size:0.75rem;color:var(--wa-color-text-quiet)}.task-badges.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap}.task-guests.sc-ir-hk-staff-task{display:flex;align-items:center;gap:0.75rem}.task-guest.sc-ir-hk-staff-task{display:flex;align-items:baseline;gap:0rem}.task-guest__count.sc-ir-hk-staff-task{font-size:1rem;font-weight:600;color:var(--wa-color-text-normal);line-height:1}.task-guest__label.sc-ir-hk-staff-task{font-size:0.875rem;color:var(--wa-color-text-quiet)}.task-action.sc-ir-hk-staff-task{display:flex;align-items:center;padding:0 1rem}.task-icon.sc-ir-hk-staff-task{width:1rem;height:1rem}.staff-task__button.sc-ir-hk-staff-task{all:unset;width:100%;height:100%;border-radius:var(--wa-form-control-border-radius)}.staff-task__button.sc-ir-hk-staff-task:focus{outline:none}.staff-task__button.sc-ir-hk-staff-task:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}";
const IrHkStaffTaskStyle0 = irHkStaffTaskCss;

const IrHkStaffTask = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.taskClick = index.createEvent(this, "taskClick", 7);
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
        return (index.h(index.Host, { key: '5a364e151d7e275178d70aa4879d65a66b7c1877', class: { 'staff-task--future': this.future } }, index.h("button", { key: 'd6dd49e10023e5fdd3a2e73076abe20de3179553', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, index.h("wa-card", { key: '51c1ce40f1e8a2d980f21e0f7abcd5a2dabba678', class: "staff-task__card" }, index.h("div", { key: 'b312664ab6505dff3cf7e20579fcdc1095c79539', class: "unit-label" }, index.h("span", { key: '175e0316fc0e21e3edcb31a6d3c94bde5e575433', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), index.h("div", { key: '56e7d9d671ae21398183bea8c81d437f6e600fcc', class: "task-content" }, !this.future && (index.h("div", { key: 'f9e2993ea1c4af80c5af63a713b56b344513c49f', class: "task-status" }, index.h("span", { key: '7ff4b2303d4f9b5f2fe5f61357de63ebe0f07f7f', class: "task-status__label" }, this.task.status.description), index.h("span", { key: '109804873b6e61083a1da0822817e97c484c65c3', class: "task-status__hint" }, this.task.hint))), index.h("div", { key: '0d15172fb35b370088b02c8d149f9d810c93db27', class: "task-badges" }, index.h("wa-badge", { key: '72f365dc57f35d82361fecb66fc4b86b39a01ba6', variant: "danger", appearance: "filled" }, "\u03BA\u03B1\u03B8\u03B1\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1"), index.h("wa-badge", { key: '4909947c5c61d8125c46a21e2c3067076aff2e2e', variant: "success", appearance: "filled" }, "\u03BB\u03B9\u03BD\u03AC"), index.h("wa-badge", { key: '3ba8c7fabb3dbff855f2f55f6dd2d27e656a3390', variant: "brand", appearance: "filled" }, "\u03C0\u03B5\u03C4\u03C3\u03AD\u03C4\u03B5\u03C2")), !this.future && this.guests.length > 0 && (index.h("div", { key: 'aaf7f6516802e194eaef7d6dcc7be4351a072454', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (index.h("div", { key: g.label, class: "task-guest" }, index.h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (index.h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (index.h("wa-icon", { name: "child", class: "task-guest__label" })) : (index.h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (index.h("div", { key: 'e40fa2f0e8d234487fb100796a4440734988e4a0', class: "task-action" }, index.h("wa-icon", { key: '4f23eb1ff6f94d9cbb52ae32daccfc1fc147fa52', name: "broom" })))))));
    }
};
IrHkStaffTask.style = IrHkStaffTaskStyle0;

const irHkStaffTasksHeaderCss = ".sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:65px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}";
const IrHkStaffTasksHeaderStyle0 = irHkStaffTasksHeaderCss;

const IrHkStaffTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("header", { key: '6f794243f3a4059a6ffca74e013ebeee2576b555', class: "tasks-header" }, index.h("div", { key: '6a387035abbe98582544653d7205ab80ac0921dd', class: "tasks-header__inner" }, index.h("div", { key: '7212635be5127bf02bb6ca53307f0d4e730b0028', class: "tasks-header__brand" }, index.h("img", { key: '94c2a21ac4db85a7fb0020e5c3eed38d48086474', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), index.h("span", { key: 'f3a4bf539992a120fae054e0c66e781f8f1e38f7', class: "tasks-header__name" }, "Housekeeper name")), index.h("div", { key: '0c71b0320a024d9c8be7f144c7ea52fe6a5919e5', class: "tasks-header__actions" }, index.h("wa-select", { key: 'ac21bd6ca75ea9624fd8e804029bde08eec059f6', size: "small", defaultValue: 'en' }, index.h("wa-option", { key: 'd245d7f5c615966f7265ebdebf2322025af20fbd', value: "en" }, "En"), index.h("wa-option", { key: '6bc6c99b8cea81b186c0a81e4bee076ff371ae53', value: "ar" }, "Ar"), index.h("wa-option", { key: '19079faca2a603dcb6f1fee692627d8ae37f641f', value: "el" }, "El")), index.h("ir-custom-button", { key: '8606ef6ddc4e037243e3cebf8f4d7b32bd0e402e', variant: "danger", appearance: "plain" }, index.h("wa-icon", { key: '7732bf3ba12b0ef9d5dd2a6e32cf09ac2420341f', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
};
IrHkStaffTasksHeader.style = IrHkStaffTasksHeaderStyle0;

exports.ir_hk_staff_task = IrHkStaffTask;
exports.ir_hk_staff_tasks_header = IrHkStaffTasksHeader;

//# sourceMappingURL=ir-hk-staff-task_2.cjs.entry.js.map