import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irGuestNameCellCss = ".sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}";
const IrGuestNameCellStyle0 = irGuestNameCellCss;

const IrGuestNameCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    name;
    render() {
        return (h(Host, { key: 'a30355df08a4d48448e4be70dfb5586601defb6d' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = IrGuestNameCellStyle0;

export { IrGuestNameCell as ir_guest_name_cell };

//# sourceMappingURL=ir-guest-name-cell.entry.js.map