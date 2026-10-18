import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import './types-f1klcCJA.js';
import './locale-scope-Jre4lb6k.js';
import { t } from './t-Bvz1wS_D.js';
import './types-BLb1NO3I.js';

const irCloneRatesDrawerCss = () => `.sc-ir-clone-rates-drawer-h{display:block;--ir-drawer-width:60rem}`;

const IrCloneRatesDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cloneRatesDrawerClosed = createEvent(this, "cloneRatesDrawerClosed");
    }
    open = false;
    ticket;
    p;
    language = 'en';
    propertyid;
    /** Fired when the drawer closes: Cancel, the close button, Escape, light dismiss, or a successful copy. The parent should set `open` to false. */
    cloneRatesDrawerClosed;
    handleDrawerHide = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.cloneRatesDrawerClosed.emit();
    };
    render() {
        return (h("ir-drawer", { key: 'ad274a36e4eaf40a5db04bc9caf61a3a7a09b575', open: this.open, label: t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (h("ir-clone-rates", { key: '865b1594fa3da0785fc6bab5892e1ea673299384', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), h("div", { key: 'ec59f9ecd3f550ea80583052648bc90dd3132fab', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '6f9a7ddd89808d1a0b059e8fbc2ceac7e0a8d6f9', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel')), h("ir-custom-button", { key: '3e46c1b1192f74380eb93b21db1ed723816bba47', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

export { IrCloneRatesDrawer as ir_clone_rates_drawer };
