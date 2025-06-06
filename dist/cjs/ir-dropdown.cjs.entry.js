'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');

const irDropdownCss = ".dropdown-menu.sc-ir-dropdown{position:absolute !important;top:100%;right:0;z-index:1000;display:none}.dropdown.nav-item.show.sc-ir-dropdown .dropdown-menu.sc-ir-dropdown{display:block}";
const IrDropdownStyle0 = irDropdownCss;

const IrDropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dropdownItemCLicked = index.createEvent(this, "dropdownItemCLicked", 7);
        this.data = null;
        this.object = null;
        this.show = false;
    }
    render() {
        let content = null;
        if (this.data !== null) {
            content = (index.h("li", { class: this.show ? 'dropdown nav-item show' : 'dropdown nav-item', "data-menu": "dropdown" }, index.h("a", { class: "dropdown-toggle nav-link", onClick: () => {
                    this.show = !this.show;
                }, "data-toggle": "dropdown" }, index.h("ir-icon", { icon: this.data.icon }), index.h("span", { "data-i18n": "Dashboard", class: "text-primary" }, this.data.name)), index.h("ul", { class: this.show ? 'dropdown-menu show' : 'dropdown-menu' }, this.data.children.map(child => {
                return (index.h("li", { "data-menu": "" }, index.h("a", { class: "dropdown-item", "data-toggle": "", onClick: () => {
                        this.dropdownItemCLicked.emit({ name: child.name, object: this.object });
                        this.show = false;
                    } }, index.h("ir-icon", { icon: child.icon }), index.h("span", { "data-i18n": child.name }, child.name))));
            }))));
        }
        return (index.h("ul", { class: "nav navbar-nav", id: "main-menu-navigation", "data-menu": "menu-navigation" }, content));
    }
};
IrDropdown.style = IrDropdownStyle0;

exports.ir_dropdown = IrDropdown;

//# sourceMappingURL=ir-dropdown.cjs.entry.js.map