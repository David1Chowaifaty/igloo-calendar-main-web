import { r as registerInstance, h } from './index-7b3961ed.js';

const irHkStaffTasksHeaderCss = ".sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:65px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}";

const IrHkStaffTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("header", { key: '4847d3441d556fe86e0632d5c6f69db21e21d4e9', class: "tasks-header" }, h("div", { key: 'd874c162cd27a3ae55179ca7d8d82dadee401e71', class: "tasks-header__inner" }, h("div", { key: 'e726210b556267fcf1740d9fb361aa0b9bd30235', class: "tasks-header__brand" }, h("img", { key: '0ab5f1cec767dc5f7f81f6539ba2b0ba92b71f75', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '4e27f8ae9235bb84347980cd490c3a72c73207b6', class: "tasks-header__name" }, "Housekeeper name")), h("div", { key: '2e24fb380a68975d26e6acf331710e3a9a144f5b', class: "tasks-header__actions" }, h("wa-select", { key: 'ac59f0bebaeb83e6d5cd6e519ca59d88af0a7dad', size: "small", defaultValue: 'en' }, h("wa-option", { key: 'd1c8d0181601fb6c5df2b51bfd1bab69ce8d9bc2', value: "en" }, "En"), h("wa-option", { key: '88a815295dc5a35d1e157962728f557c392844cc', value: "ar" }, "Ar"), h("wa-option", { key: '9a9751a4225ce4f9efa93037be7ab946734c9383', value: "el" }, "El")), h("ir-custom-button", { key: 'bfe76ddeaa33a572320c036e51269c752a7be4e5', variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'eee1f339094cce15c0a1be34cb4d1f8cee0bff40', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
};
IrHkStaffTasksHeader.style = irHkStaffTasksHeaderCss;

export { IrHkStaffTasksHeader as ir_hk_staff_tasks_header };

//# sourceMappingURL=ir-hk-staff-tasks-header.entry.js.map