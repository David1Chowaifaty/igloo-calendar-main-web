import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irGuestNameCellCss = ".sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}";
const IrGuestNameCellStyle0 = irGuestNameCellCss;

const IrGuestNameCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    name;
    render() {
        return (h(Host, { key: '86de6eb0dec830ff0c9a21c73adf0b2637cf8c10' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = IrGuestNameCellStyle0;

export { IrGuestNameCell as ir_guest_name_cell };

//# sourceMappingURL=ir-guest-name-cell.entry.js.map