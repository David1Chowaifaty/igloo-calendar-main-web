import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import './locale.controller-Bs0lwnpi.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './language-observer-CHgzsZkY.js';
import './types-CB66a07H.js';

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
        return (h("ir-drawer", { key: '5f8ebad0c162971ceebbcf07b60275b23f0765d8', open: this.open, label: t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (h("ir-clone-rates", { key: 'e327f4de40626cb9209c22d07c8447e85a35594a', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), h("div", { key: 'ca15a23ed092aa1d82fa2c96329befbc1e44c0b7', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '217b14fee481d31df0c5eaa5fc615a1cb8fbac7a', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel')), h("ir-custom-button", { key: '971d1b0ecc6c5ff476898f884f9079aee72ebc72', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

export { IrCloneRatesDrawer as ir_clone_rates_drawer };
