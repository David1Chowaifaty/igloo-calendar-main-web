import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { h as hooks } from './moment-ab846cee.js';
import { A as sleep } from './utils-3b6d64f3.js';
import './index-c1c77241.js';
import './index-502f9842.js';
import './calendar-data-26906e0c.js';
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
        return (h(Host, { key: 'a181160169d41086cbf8e76fe45705e6284e5401' }, h("section", { key: 'f3b46420e235aad6cb5b51435d535e7e44e50dc1', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: '1b42e6c61e16e7dfb6dcadb490499291f9a6e35b', class: "table" }, h("thead", { key: 'cf172c92f4f356fe5ddb739d28df45527425cd2d' }, h("tr", { key: '9e6a394cb93c749bc4441b4a5ac89fb6192eea1d' }, h("th", { key: 'db58ad86403ceab24327f3fd3f970047e17b31d5', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: '2a8ea8142803a70c73a5834068b531723983a519', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: 'cbe81f78a7b1cc208d23b8288bccb5efa6563888', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: '44ff057d02fc70eb1e2205be4d5d16b2f8f1d07c', class: "text-left" }, "Role"), h("th", { key: '8fc8f5e75bee77c69928ec74aaaf2b7a284b0b93', class: "text-left" }, "Last signed in"), h("th", { key: '4838ecd6d59096ec31cb30d0d7cdb076606b837d', class: "text-left" }, "Created at"), h("th", { key: '394b8266edad800814b2186cfc79a585469eb15d' }, "Active"), h("th", { key: 'f88e37364d446f5a8f489f907c3e9df2dc981824' }, h("ir-icon", { key: '4858dddc6318c3c76b5e2ef556a9f7a02bb29d75', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: '82902ace000a5edf62af526db93520abcd9312d5', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '8eb2580beab92a4d87ecd8657abac792d1dd594b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("tbody", { key: 'c0c0d8d443d15ec99e630136b8beaae2502aed40' }, this.users.map((user, i) => (h("tr", { key: user.id, class: "ir-table-row" }, h("td", { class: "text-left" }, user.username), h("td", { class: "text-left w-100" }, user.email), h("td", { class: "text-left" }, user.phone_prefix, " ", user.mobile), h("td", { class: "text-left" }, user.role), h("td", { class: "text-left" }, hooks(user.last_signed_in, 'YYYY-MM-DD').format('MMM, DD YYYY')), h("td", { class: "text-left" }, hooks(user.created_at, 'YYYY-MM-DD').format('MMM, DD YYYY')), h("td", null, i > 0 && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active })), h("td", { class: "" }, h("div", { class: "icons-container d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), i > 0 && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                this.user = user;
                this.modalRef.openModal();
            } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))))))), h("ir-sidebar", { key: '38efa052f74566e3bcf505ae9738a35afcff7842', showCloseButton: false, open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: '0fce92bd19ed8d04e79470cfdf59dc4a3237e450', autoClose: false, modalBody: `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?`, rightBtnColor: "danger", rightBtnText: locales.entries.Lcz_Delete, onConfirmModal: this.removeUser.bind(this), ref: el => (this.modalRef = el) })));
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