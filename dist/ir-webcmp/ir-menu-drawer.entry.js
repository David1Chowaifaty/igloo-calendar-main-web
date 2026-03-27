import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';

const irMenuDrawerCss = ":host{display:block}.menu__drawer::part(header){border-bottom:0}.menu__drawer::part(body){padding:calc(var(--spacing) - 0.5rem)}";

const IrMenuDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuOpenChanged = createEvent(this, "menuOpenChanged", 7);
    }
    open;
    menuOpenChanged;
    componentWillLoad() {
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown = (e) => {
        const isModifierPressed = e.ctrlKey || e.metaKey;
        if (isModifierPressed && e.key === 'b') {
            e.preventDefault();
            this.open = !this.open;
        }
    };
    async openDrawer() {
        this.open = true;
    }
    handleOpenChange() {
        this.menuOpenChanged.emit(this.open);
    }
    render() {
        return (h("ir-drawer", { key: '0d244c05e7603680e681d774611198457e90dc95', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '8dc73ae05a9147df71d678a52202d525d580124a', name: "label", slot: "label" }), h("slot", { key: '804f9da8c85823497cc4466ac53a1461cfe36325' }), h("slot", { key: '06d2291d4816b553d10f288971ffb7299e36b315', name: "footer", slot: "footer" })));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrMenuDrawer.style = irMenuDrawerCss;

export { IrMenuDrawer as ir_menu_drawer };

//# sourceMappingURL=ir-menu-drawer.entry.js.map