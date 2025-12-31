import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-7e96440e.js';

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.propertyChange = createEvent(this, "propertyChange", 7);
    }
    get el() { return getElement(this); }
    mode = 'dialog';
    open = false;
    selectedProperty;
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange;
    trigger() {
        return (h("ir-custom-button", { onClickHandler: () => {
                this.open = !this.open;
            }, withCaret: true, variant: "neutral", appearance: "plain" }, h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.name ?? 'Select property')));
    }
    handlePropertySelected = (event) => {
        this.selectedProperty = event.detail;
        this.open = false;
        this.propertyChange.emit(event.detail);
    };
    render() {
        return (h(Host, { key: '9f92a193604abc07fd601bbbbf6f76537912257a' }, this.trigger(), h("ir-dialog", { key: '4df2b37b3b6de250d727ec0276f293d168e5855a', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (h("ir-property-switcher-dialog-content", { key: 'a72d9ade9ad4dfcacbf0efdb03498697077316f7', open: this.open, selectedPropertyId: this.selectedProperty?.id, onPropertySelected: this.handlePropertySelected })))));
    }
};
IrPropertySwitcher.style = IrPropertySwitcherStyle0;

export { IrPropertySwitcher as ir_property_switcher };

//# sourceMappingURL=ir-property-switcher.entry.js.map