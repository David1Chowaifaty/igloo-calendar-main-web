import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import './locale.controller-D7aoAo6z.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './language-observer-CHgzsZkY.js';
import './types-DFSK8b1u.js';

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
        return (h("ir-drawer", { key: 'cbe1b17129090dc270ef858e5830a519719feadd', open: this.open, label: t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (h("ir-clone-rates", { key: '2ec53de9ceb9394e1ff6e4444371f74690f52d1c', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), h("div", { key: '18e69ba81e7272da89a3df989cc50d43df2bd7d0', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '620a3de241bcf47a37271897868eb3e816666bfb', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel')), h("ir-custom-button", { key: 'c639a0ae5ab6753673c80e90ba2fc9828b29b5a1', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

export { IrCloneRatesDrawer as ir_clone_rates_drawer };
