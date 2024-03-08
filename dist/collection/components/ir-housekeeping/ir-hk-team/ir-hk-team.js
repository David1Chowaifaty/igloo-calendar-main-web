var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import housekeeping_store from "../../../stores/housekeeping.store";
import { Host, h } from "@stencil/core";
export class IrHkTeam {
    constructor() {
        this.currentTrigger = null;
    }
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (h("span", null, "0 -", ' ', h("button", { class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, "Assign")));
        }
        return (h("span", null, hk.assigned_units.length, " -", ' ', h("button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }), class: "outline-btn" }, "Edit")));
    }
    renderCurrentTrigger() {
        var _a;
        switch ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) {
            case 'unassigned_units':
                return h("ir-hk-unassigned-units", { slot: "sidebar-body", user: this.currentTrigger.user });
            case 'user':
                return h("ir-hk-user", { slot: "sidebar-body", user: this.currentTrigger.user, isEdit: this.currentTrigger.isEdit });
            default:
                return null;
        }
    }
    handleCloseSideBar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentTrigger = null;
    }
    handleDeletion(user) {
        this.currentTrigger = { type: 'delete', user };
        this.deletionTimout = setTimeout(() => {
            const modal = this.el.querySelector('ir-delete-modal');
            if (!modal)
                return;
            modal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.deletionTimout);
    }
    render() {
        var _a, _b;
        const { assigned, total, un_assigned } = housekeeping_store.hk_criteria.units_assignments;
        return (h(Host, { key: 'aacfec15a45c0ce2fa4699789d544a6baa7908f7', class: "card p-1" }, h("section", { key: '993bfa7e628b216831d413550dc7155a0ef1d919' }, h("div", { key: '52ee590f56eac4f9db4d9f23cfbd8415d581ee38', class: "assignments-container align-items-start align-items-md-center flex-column flex-md-row justify-between" }, h("h4", { key: 'c77887b7ab6556722267c02b6f43b5a514941455' }, "Room or Unit Status"), h("div", { key: '72ca18f0b9ea80fed13131a0735260a729832473', class: "assignments-container" }, h("p", { key: '6865c0cd93e5cd115f8470316bbd3e1dc882db11' }, total, " ", h("span", { key: '9d857b139a42f2ad9a8c874d95e6d7d071dcbb11', class: "font-semibold" }, "Total units")), h("p", { key: 'b12aa3704046b64168f47c994a9c1763ceba9aa3' }, assigned, " ", h("span", { key: '3ea96dfb4f543481218be0cb993503f35e30d0de', class: "font-semibold" }, "Assigned")), h("div", { key: '08fb17ed3bce81a31992a08009db9676a3526544', class: "unassigned-container" }, h("p", { key: '034ad26a6e49a7dd28c66489fb3c966f09456585' }, un_assigned), ' ', h("button", { key: 'b1918658590bde2c85c1b00a3e5d3ea84e8205ae', class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }) }, "Unassigned")))), h("p", { key: '27bcc710cff5c0e8ab39f8cf5af2c6941746c155' }, "As an option, create housekeepers (as individuals or teams) and assign units to them to notify them separately.")), h("section", { key: 'deed0564beb23919bf5039ad59987d8d0b1bf9fd', class: "table-container" }, h("table", { key: 'ac2e599f18c519e4f853a7ccd32fbf567f39a9b6', class: "table" }, h("thead", { key: '78ad2e279010b4fdd266ae18f7f80d48b5ff33a6' }, h("tr", { key: 'd965ab0d596826cbe22344f33d8b74264a00fb94' }, h("th", { key: '842601c71a42032474ff42a39cf330a2c18a6fff' }, "Name"), h("th", { key: '7006263bfc52e5684781e75f8ef615f653ad1cec' }, "Mobile"), h("th", { key: '6d3608a524849c26f8322897f36b28acc018f0b7' }, "Username"), h("th", { key: '1b36956b86e655f808e76a19d6787ae93267ae40' }, "Note"), h("th", { key: '7bd547ed3af1bfd6e06e8b2a7440c8b629a59ccb' }, "Units assigned"), h("th", { key: '948b93b7653736394b382145a6e4124da10654b0', class: "text-center" }, h("ir-icon", { key: 'fe7ef3920418353c705761656691a259f6c09174', onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: '997ab2fc677fe2bc4f5520ae5b692aeb50e733ce', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '0546b158fc406ac4098d4390e6f6bdd03ab636d3', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("tbody", { key: 'e2ed69a6b097318ce18673094214063e848d8d6a' }, housekeeping_store.hk_criteria.housekeepers.map(hk => (h("tr", { key: hk.id }, h("td", null, hk.name), h("td", null, hk.mobile), h("td", null, hk.username), h("td", null, hk.note), h("td", null, this.renderAssignedUnits(hk)), h("td", { class: "text-center" }, h("div", { class: "icons-container" }, h("ir-icon", { onIconClickHandler: () => {
                const { assigned_units, is_soft_deleted, is_active } = hk, user = __rest(hk, ["assigned_units", "is_soft_deleted", "is_active"]);
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), h("span", null, " \u00A0"), h("ir-icon", { icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => this.handleDeletion(hk) }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))))))))))), h("ir-sidebar", { key: '3de64d7dc3229daaecb14df0ab398a367c4c93a6', sidebarStyles: {
                maxWidth: ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) === 'unassigned_units' ? 'max-content' : '100%',
            }, showCloseButton: false, open: this.currentTrigger !== null && this.currentTrigger.type !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null) }, this.renderCurrentTrigger()), ((_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.type) === 'delete' && h("ir-delete-modal", { user: this.currentTrigger.user })));
    }
    static get is() { return "ir-hk-team"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-team.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-team.css"]
        };
    }
    static get states() {
        return {
            "currentTrigger": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "closeSideBar",
                "method": "handleCloseSideBar",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-hk-team.js.map
