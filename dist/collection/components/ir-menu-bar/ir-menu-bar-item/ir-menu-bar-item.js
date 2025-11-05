import { Fragment, Host, h } from "@stencil/core";
export class IrMenuBarItem {
    constructor() {
        /**
         * Displays an `ir-new-badge` next to the trigger when set.
         */
        this.newBadge = false;
    }
    render() {
        return (h(Host, { key: 'fcf374f93531f756cb44afd26cfeececbe2dddbc', role: "menuitem", tabindex: "-1", part: "item", onClick: e => {
                if (!this.href)
                    this.menuBarItemClick.emit(e);
            } }, this.href ? (h("a", { target: this.target, onClick: e => {
                const ce = this.menuBarItemClick.emit(e);
                if (ce.defaultPrevented) {
                    e.preventDefault();
                }
            }, class: "menu-bar-item__link", href: this.href }, h("slot", null), this.newBadge && h("ir-new-badge", null))) : (h(Fragment, null, h("slot", null), this.newBadge && h("ir-new-badge", null)))));
    }
    static get is() { return "ir-menu-bar-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu-bar-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu-bar-item.css"]
        };
    }
    static get properties() {
        return {
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The URL that the menu item should link to.\nWhen provided, the component renders as an `<a>` element."
                },
                "getter": false,
                "setter": false,
                "attribute": "href",
                "reflect": false
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'_self' | '_blank' | '_parent' | '_top'",
                    "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies where to open the linked document.\nMirrors the native HTML `target` attribute.\n\nPossible values:\n- `_self` \u2014 Opens the link in the same browsing context (default)\n- `_blank` \u2014 Opens the link in a new tab or window\n- `_parent` \u2014 Opens the link in the parent frame\n- `_top` \u2014 Opens the link in the full body of the window"
                },
                "getter": false,
                "setter": false,
                "attribute": "target",
                "reflect": false
            },
            "newBadge": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displays an `ir-new-badge` next to the trigger when set."
                },
                "getter": false,
                "setter": false,
                "attribute": "new",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "menuBarItemClick",
                "name": "menu-bar-item-click",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the menu bar item is clicked.\n\nThis event bubbles up from both linked (`<a>`) and non-linked (`<button>`-like) items.\nYou can call `event.preventDefault()` on the listener to stop the default navigation\nwhen the item has an `href`.\n\nExample:\n```js\ndocument.querySelector('ir-menu-bar-item').addEventListener('menu-bar-item-click', e => {\n  e.preventDefault(); // prevents navigation if the item has an href\n  console.log('Menu item clicked:', e);\n});\n```"
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-menu-bar-item.js.map
