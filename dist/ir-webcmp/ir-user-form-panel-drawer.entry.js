import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import './index-17663a35.js';

const irUserFormPanelDrawerCss = ".sc-ir-user-form-panel-drawer-h{display:block}";

const IrUserFormPanelDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    open;
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    closeSideBar;
    render() {
        const formId = `user-form-${this.user?.id}`;
        return (h("ir-drawer", { key: 'b1a91df69350c82f8cdccb63b36b2663e84facb6', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : 'Create New User', open: this.open }, this.open && (h("ir-user-form-panel", { key: 'aaa513370f236a4b27112ba16d888df23b6b064a', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), h("div", { key: '8c72cd5c98985e282d88f728b103af65490c6010', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'f8295ae53ef8eb43cc5dba6a1803e9832bec2f78', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '1c0162381f211b30c6e40587a913fa1fba63a19d', form: formId, loading: isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "medium", class: "flex-fill", type: "submit", variant: "brand" }, locales?.entries?.Lcz_Save))));
    }
};
IrUserFormPanelDrawer.style = irUserFormPanelDrawerCss;

export { IrUserFormPanelDrawer as ir_user_form_panel_drawer };

//# sourceMappingURL=ir-user-form-panel-drawer.entry.js.map