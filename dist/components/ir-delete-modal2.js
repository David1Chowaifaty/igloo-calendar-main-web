import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as housekeeping_store } from './housekeeping.store.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irDeleteModalCss = ".backdropModal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened']{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content{padding:10px;background:white;border-radius:5px}.modal{z-index:1001 !important}.modal-dialog{height:100vh;display:flex;align-items:center}.ir-alert-footer{gap:10px}.ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrDeleteModalStyle0 = irDeleteModalCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
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
const IrDeleteModal = /*@__PURE__*/ proxyCustomElement(class IrDeleteModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.modalClosed = createEvent(this, "modalClosed", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.isOpen = false;
        this.selectedId = '';
        this.loadingBtn = null;
        this.housekeepingService = new HouseKeepingService();
    }
    async closeModal() {
        this.isOpen = false;
        this.modalClosed.emit(null);
    }
    async openModal() {
        this.isOpen = true;
    }
    async btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        try {
            if (name === 'confirm') {
                this.loadingBtn = 'confirm';
                if (this.selectedId === '') {
                    await this.housekeepingService.editExposedHKM(this.user, true);
                }
                else {
                    const newAssignedUnits = this.user.assigned_units.map(u => ({ hkm_id: +this.selectedId, is_to_assign: true, unit_id: u.id }));
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, newAssignedUnits);
                    const _a = this.user, user = __rest(_a, ["assigned_units", "is_soft_deleted", "is_active"]);
                    await this.housekeepingService.editExposedHKM(user, true);
                }
                this.resetData.emit(null);
            }
            if (name === 'cancel') {
                this.closeModal();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            if (this.loadingBtn) {
                this.loadingBtn = null;
                this.closeModal();
            }
        }
    }
    render() {
        if (!this.user) {
            return;
        }
        return [
            h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.closeModal();
                } }),
            h("div", { "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { class: `ir-alert-content p-2` }, h("div", { class: `r-alert-header mb-1 d-flex align-items-center justify-content-between border-0 py-0 m-0 ` }, h("p", { class: 'm-0 p-0' }, this.user.assigned_units.length > 0 ? locales.entries.Lcz_AssignUnitsTo : locales.entries.Lcz_ConfirmDeletion), h("ir-button", { class: "exit-icon", variant: "icon", icon_name: "xmark", onClickHandler: () => this.closeModal() })), h("div", { class: "modal-body text-left p-0 mb-2" }, this.user.assigned_units.length > 0 && (h("div", { class: "modal-body text-left p-0 mb-2" }, h("ir-select", { firstOption: locales.entries.Lcz_nobody, selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), data: housekeeping_store.hk_criteria.housekeepers
                    .filter(hk => hk.id !== this.user.id)
                    .map(m => ({
                    value: m.id.toString(),
                    text: m.name,
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())) })))), h("div", { class: `ir-alert-footer border-0  d-flex justify-content-end` }, h("ir-button", { btn_color: 'secondary', btn_block: true, text: locales.entries.Lcz_Cancel, name: 'cancel' }), h("ir-button", { isLoading: this.loadingBtn === 'confirm', btn_color: 'primary', btn_block: true, text: locales.entries.Lcz_Confirm, name: 'confirm' })))),
        ];
        // <div aria-modal={this.isOpen ? 'true' : 'false'} class="modal fade" ref={el => (this.modalEl = el)} tabindex="-1">
        //   <div class="modal-dialog modal-dialog-centered">
        //     <div class="modal-content">
        //       <div class="modal-body">
        //         <div class={`ir-alert-header mb-1 d-flex align-items-center justify-content-between border-0 py-0 m-0 `}>
        //           <p class="p-0 my-0 modal-title">{this.user.assigned_units.length > 0 ? locales.entries.Lcz_AssignUnitsTo : locales.entries.Lcz_ConfirmDeletion}</p>
        //           <ir-button class="exit-icon" variant="icon" icon_name="xmark" onClickHandler={() => this.closeModal()}></ir-button>
        //         </div>
        //         {this.user.assigned_units.length > 0 && (
        //           <div class="modal-body text-left p-0 mb-2">
        //             <ir-select
        //               firstOption={locales.entries.Lcz_nobody}
        //               selectedValue={this.selectedId}
        //               onSelectChange={e => (this.selectedId = e.detail)}
        //
        //               data={housekeeping_store.hk_criteria.housekeepers
        //                 .filter(hk => hk.id !== this.user.id)
        //                 .map(m => ({
        //                   value: m.id.toString(),
        //                   text: m.name,
        //                 }))
        //                 .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))}
        //             ></ir-select>
        //           </div>
        //         )}
        //         <div class={`ir-alert-footer border-0 d-flex justify-content-end`}>
        //           <ir-button btn_color={'secondary'} btn_block text={locales.entries.Lcz_Cancel} name={'cancel'}></ir-button>
        //           <ir-button isLoading={this.loadingBtn === 'confirm'} btn_color={'primary'} btn_block text={locales.entries.Lcz_Confirm} name={'confirm'}></ir-button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
    }
    static get style() { return IrDeleteModalStyle0; }
}, [0, "ir-delete-modal", {
        "user": [16],
        "isOpen": [32],
        "selectedId": [32],
        "loadingBtn": [32],
        "closeModal": [64],
        "openModal": [64]
    }, [[0, "clickHandler", "btnClickHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-delete-modal", "ir-button", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-delete-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDeleteModal);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDeleteModal as I, defineCustomElement as d };

//# sourceMappingURL=ir-delete-modal2.js.map