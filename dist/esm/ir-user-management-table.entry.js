import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { h as hooks } from './moment-ab846cee.js';
import { K as sleep } from './utils-4faca0c0.js';
import './index-c1c77241.js';
import './index-502f9842.js';
import './calendar-data-5d531f99.js';
import './axios-aa1335b8.js';

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}.table.sc-ir-user-management-table th.sc-ir-user-management-table,.table.sc-ir-user-management-table td.sc-ir-user-management-table{white-space:nowrap;width:max-content !important;background:white;padding:0.25rem 1rem !important}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table:last-child{width:100%}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:#e3f3fa !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--blue)}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.users = [];
        this.currentTrigger = null;
        this.user = null;
    }
    async handleUserActiveChange(e, user) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await sleep(300);
        console.log(user);
        this.toast.emit({
            position: 'top-right',
            title: 'Saved Successfully',
            description: '',
            type: 'success',
        });
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: 'f9a676efe3bf2645ff0406532df8a18dd4172411' }, h("section", { key: '691caa9e2c5e87721872f1ffd576d84accd036df', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: '6fcffde8fefee307726f0ea382af7b43696c150f', class: "table" }, h("thead", { key: '244d8d8564d1af850b69bf1c690b79768584cee3' }, h("tr", { key: '33052f44ba9cf7b2aabf95729b421a1b08c51bbc' }, h("th", { key: '21111ca5026a8a89c35e171c0aea1a37c037710f', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: 'c16e26645f349413b9ad92aef5630a076aa64e82', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: 'be636068df333b25f9acf55c3a463979225cc080', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: '5f21eeeb069486d7a1c028bb843519805a284f5c', class: "text-left" }, "Role"), h("th", { key: '1cdd74fe4cd9572bdcf1a4bf131d882cc2926006', class: "text-left" }, "Last signed in"), h("th", { key: '8c82289148743fab2fb515b0bb451a8d07655964', class: "text-left" }, "Created at"), h("th", { key: '78275ba35cd845cb04bbdd1fba8cec726989d67b' }, "Active"), h("th", { key: '74d33f01bdfdde3d29ce36a002d77356fb298135' }, h("ir-icon", { key: '89b59562ecbbb74f004c7a0d93ebd2bec5c80999', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: '1c96e8850300e892a4a1f82fad81835f66afffc6', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '77db4abf2b3c0140ff152b3d5ddbcb92f45380db', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("tbody", { key: '81ebe8012e2a7458fa9cb3987f2d114a2ddb44e1' }, this.users.map((user, i) => (h("tr", { key: user.id, class: "ir-table-row" }, h("td", { class: "text-left" }, user.username), h("td", { class: "text-left w-100" }, user.email), h("td", { class: "text-left" }, user.phone_prefix, " ", user.mobile), h("td", { class: "text-left" }, user.role), h("td", { class: "text-left" }, hooks(user.last_signed_in, 'YYYY-MM-DD').format('MMM, DD YYYY')), h("td", { class: "text-left" }, hooks(user.created_at, 'YYYY-MM-DD').format('MMM, DD YYYY')), h("td", null, i > 0 && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active })), h("td", { class: "" }, h("div", { class: "icons-container d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), i > 0 && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                this.user = user;
                this.modalRef.openModal();
            } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))))))), h("ir-sidebar", { key: '0b4036a2d0567c98a4e6ac7013b4cc26b1462061', showCloseButton: false, open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: '6899dae9d865207b83d1063ef398855132b73c1b', autoClose: false, modalBody: `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?`, rightBtnColor: "danger", rightBtnText: locales.entries.Lcz_Delete, onConfirmModal: this.removeUser.bind(this), ref: el => (this.modalRef = el) })));
    }
    async removeUser(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        finally {
            this.user = null;
            this.modalRef.closeModal();
        }
    }
    renderCurrentTrigger() {
        var _a, _b;
        if (!this.currentTrigger) {
            return null;
        }
        return (h("ir-user-form-panel", { isSuperAdmin: this.isSuperAdmin, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
};
IrUserManagementTable.style = IrUserManagementTableStyle0 + IrUserManagementTableStyle1;

export { IrUserManagementTable as ir_user_management_table };

//# sourceMappingURL=ir-user-management-table.entry.js.map