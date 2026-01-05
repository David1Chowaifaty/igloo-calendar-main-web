'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.propertyChange = index.createEvent(this, "propertyChange", 7);
    }
    get el() { return index.getElement(this); }
    mode = 'dialog';
    open = false;
    selectedProperty;
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange;
    trigger() {
        return (index.h("ir-custom-button", { onClickHandler: () => {
                this.open = !this.open;
            }, withCaret: true, variant: "neutral", appearance: "plain" }, index.h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.name ?? 'Select property')));
    }
    handlePropertySelected = (event) => {
        this.selectedProperty = event.detail;
        this.open = false;
        this.propertyChange.emit(event.detail);
    };
    render() {
        return (index.h(index.Host, { key: 'b491592706d580a1291edfbaf47e41dafbe70b5e' }, this.trigger(), index.h("ir-dialog", { key: 'fb14a8c02a71a69cbeed196ffaf7b2fdc47bd3d7', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (index.h("ir-property-switcher-dialog-content", { key: 'daa83094cb295c7b0ca8600b7756431f8b73f81f', open: this.open, selectedPropertyId: this.selectedProperty?.id, onPropertySelected: this.handlePropertySelected })))));
    }
};
IrPropertySwitcher.style = IrPropertySwitcherStyle0;

exports.ir_property_switcher = IrPropertySwitcher;

//# sourceMappingURL=ir-property-switcher.cjs.entry.js.map