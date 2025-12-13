import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
let panelId = 0;
export class IrFiltersPanel {
    /** Panel headline text */
    filterTitle = locales.entries.Lcz_Filters;
    /** Optional custom collapse target id (useful for legacy CSS hooks) */
    collapseId;
    /** Show collapse toggle button */
    showCollapseButton = true;
    /** Collapse by default */
    defaultCollapsed = false;
    /** Controlled collapse state */
    collapsed;
    /** Keep content expanded on desktop and hide the collapse toggle */
    persistentOnDesktop = true;
    /** Optional extra class for the outer wrapper */
    panelClass;
    /** Optional extra class for the card wrapper */
    cardClass = 'sales-filters-card';
    /** Optional extra class for the header row */
    headerClass;
    /** Optional extra class for the filters content wrapper */
    contentClass;
    /** Space between content items */
    contentGap = '0.5rem';
    /** Align footer actions */
    actionsAlign = 'end';
    /** Hide the default footer actions */
    hideDefaultActions = false;
    /** Collapse icon when expanded */
    collapseIconOpen = 'open_eye';
    /** Collapse icon when collapsed */
    collapseIconClosed = 'closed_eye';
    /** Apply button copy */
    applyLabel = locales.entries.Lcz_Apply;
    /** Reset button copy */
    resetLabel = locales.entries.Lcz_Reset;
    /** Disable apply action */
    disableApply = false;
    /** Disable reset action */
    disableReset = false;
    /** Show loader inside apply button */
    isApplyLoading = false;
    /** Optional data test id suffix for default buttons */
    actionTestId = 'filter';
    filterToggle;
    filterApply;
    filterReset;
    internalCollapsed = false;
    generatedCollapseId = `ir-filters-panel-${++panelId}`;
    componentWillLoad() {
        this.internalCollapsed = this.collapsed ?? this.defaultCollapsed;
    }
    handleCollapsedChange(newValue) {
        if (typeof newValue === 'boolean' && newValue !== this.internalCollapsed) {
            this.internalCollapsed = newValue;
        }
    }
    get targetId() {
        return this.collapseId || this.generatedCollapseId;
    }
    toggleCollapse(event) {
        event?.stopPropagation();
        const next = !this.internalCollapsed;
        this.internalCollapsed = next;
        this.collapsed = next;
        this.filterToggle.emit({ collapsed: next });
    }
    handleReset(event) {
        event.stopPropagation();
        this.filterReset.emit();
    }
    handleApply(event) {
        event.stopPropagation();
        this.filterApply.emit();
    }
    renderDefaultIcon() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })));
    }
    renderCollapseButton(collapsed) {
        if (!this.showCollapseButton) {
            return null;
        }
        return (h("ir-button", { variant: "icon", "aria-expanded": !collapsed ? 'true' : 'false', "aria-controls": this.targetId, class: "collapse-btn toggle-collapse-btn", icon_name: collapsed ? this.collapseIconClosed : this.collapseIconOpen, visibleBackgroundOnHover: true, onClickHandler: this.toggleCollapse.bind(this), btn_type: "button", style: { '--icon-size': '1.6rem' } }));
    }
    render() {
        const collapsed = this.internalCollapsed;
        const panelClasses = {
            'filters-panel': true,
            'filters-panel--persistent': this.persistentOnDesktop,
        };
        if (this.panelClass) {
            panelClasses[this.panelClass] = true;
        }
        const headerClasses = {
            'filters-panel__header': true,
        };
        if (this.headerClass) {
            headerClasses[this.headerClass] = true;
        }
        const contentWrapperClasses = {
            'filters-panel__content-inner': true,
        };
        if (this.contentClass) {
            contentWrapperClasses[this.contentClass] = true;
        }
        const footerClasses = {
            'filters-panel__footer': true,
            'filter-actions': true,
            'd-flex': true,
            'align-items-center': true,
            [`filters-panel__footer--${this.actionsAlign}`]: true,
        };
        const cardClass = `card mb-0 p-1 d-flex flex-column ${this.cardClass || ''}`.trim();
        return (h("div", { key: '4e9426d2826d7f6e66400ddec1e6ec95ed70e766', class: panelClasses }, h("div", { key: '6a335a1f23d53d6487b7d6a71983346146d67f5e', class: cardClass }, h("div", { key: '708b8275a2c8a5d553c325109a408b31392cfb2e', class: headerClasses }, h("div", { key: '1d91c8e9c3b58c0c3ae13afaa4d484d3d50a5565', class: "filters-panel__title-group" }, h("slot", { key: '3a1dfe9563208e8f0e37b518e16b5b8ddb192d88', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: 'f9a8da276f03f536a20f7ac4319130f942001f52', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: 'a89fe87d0afda6e96d2f1ed6335ce0879d467f2f', name: "header-title-extra" })), h("div", { key: '766188a71b803454ecc98e023ea9a755232ebe03', class: "filters-panel__header-actions" }, h("slot", { key: '59c9687e3167b10082dcab9b3458964f277b3559', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '78817995e6f5f1ff4f2f8539d02c1182272e88ff', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: 'decb45a1b72042149107d2b8ce75f029d71d7748', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: '9bec7b7bf6d2abde0ee7c71157f7e070dcd87d0c' }), !this.hideDefaultActions && (h("div", { key: '4227eda38e9f7f33510f4143515040ef93028b41', class: footerClasses }, h("slot", { key: '5fcce11560b306243177348c554a79294ac33e5c', name: "actions" }, h("ir-button", { key: '1c06427f8235af9a6aec1d17458e63532488939d', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: 'aa62a852c4c3408bc669216eb0257c811c0d3a4d', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
    }
    static get is() { return "ir-filters-panel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-filters-panel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-filters-panel.css"]
        };
    }
    static get properties() {
        return {
            "filterTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Panel headline text"
                },
                "getter": false,
                "setter": false,
                "attribute": "filter-title",
                "reflect": false,
                "defaultValue": "locales.entries.Lcz_Filters"
            },
            "collapseId": {
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
                    "text": "Optional custom collapse target id (useful for legacy CSS hooks)"
                },
                "getter": false,
                "setter": false,
                "attribute": "collapse-id",
                "reflect": false
            },
            "showCollapseButton": {
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
                    "text": "Show collapse toggle button"
                },
                "getter": false,
                "setter": false,
                "attribute": "show-collapse-button",
                "reflect": false,
                "defaultValue": "true"
            },
            "defaultCollapsed": {
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
                    "text": "Collapse by default"
                },
                "getter": false,
                "setter": false,
                "attribute": "default-collapsed",
                "reflect": false,
                "defaultValue": "false"
            },
            "collapsed": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controlled collapse state"
                },
                "getter": false,
                "setter": false,
                "attribute": "collapsed",
                "reflect": true
            },
            "persistentOnDesktop": {
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
                    "text": "Keep content expanded on desktop and hide the collapse toggle"
                },
                "getter": false,
                "setter": false,
                "attribute": "persistent-on-desktop",
                "reflect": false,
                "defaultValue": "true"
            },
            "panelClass": {
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
                    "text": "Optional extra class for the outer wrapper"
                },
                "getter": false,
                "setter": false,
                "attribute": "panel-class",
                "reflect": false
            },
            "cardClass": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional extra class for the card wrapper"
                },
                "getter": false,
                "setter": false,
                "attribute": "card-class",
                "reflect": false,
                "defaultValue": "'sales-filters-card'"
            },
            "headerClass": {
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
                    "text": "Optional extra class for the header row"
                },
                "getter": false,
                "setter": false,
                "attribute": "header-class",
                "reflect": false
            },
            "contentClass": {
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
                    "text": "Optional extra class for the filters content wrapper"
                },
                "getter": false,
                "setter": false,
                "attribute": "content-class",
                "reflect": false
            },
            "contentGap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Space between content items"
                },
                "getter": false,
                "setter": false,
                "attribute": "content-gap",
                "reflect": false,
                "defaultValue": "'0.5rem'"
            },
            "actionsAlign": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'center' | 'end' | 'space-between' | 'space-around'",
                    "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Align footer actions"
                },
                "getter": false,
                "setter": false,
                "attribute": "actions-align",
                "reflect": false,
                "defaultValue": "'end'"
            },
            "hideDefaultActions": {
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
                    "text": "Hide the default footer actions"
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-default-actions",
                "reflect": false,
                "defaultValue": "false"
            },
            "collapseIconOpen": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"angle-down\" | \"clock\" | \"check\" | \"heart-fill\" | \"envelope-circle-check\" | \"danger\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"user\" | \"heart\" | \"user_group\" | \"search\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"calendar\" | \"xmark-fill\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"print\" | \"menu_list\" | \"save\" | \"credit_card\" | \"closed_eye\" | \"open_eye\" | \"server\" | \"double_caret_left\" | \"square_plus\" | \"angles_left\" | \"angle_right\" | \"angles_right\" | \"outline_user\" | \"key\" | \"unlock\" | \"circle_plus\" | \"arrow-right-from-bracket\" | \"note\" | \"email\" | \"calendar-xmark\" | \"arrow-trend-up\" | \"hotel\" | \"arrow-trend-down\" | \"angle-up\" | \"ban\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "../ir-icons/icons",
                            "id": "src/components/ui/ir-icons/icons.ts::TIcons"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Collapse icon when expanded"
                },
                "getter": false,
                "setter": false,
                "attribute": "collapse-icon-open",
                "reflect": false,
                "defaultValue": "'open_eye'"
            },
            "collapseIconClosed": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"angle-down\" | \"clock\" | \"check\" | \"heart-fill\" | \"envelope-circle-check\" | \"danger\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"user\" | \"heart\" | \"user_group\" | \"search\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"calendar\" | \"xmark-fill\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"print\" | \"menu_list\" | \"save\" | \"credit_card\" | \"closed_eye\" | \"open_eye\" | \"server\" | \"double_caret_left\" | \"square_plus\" | \"angles_left\" | \"angle_right\" | \"angles_right\" | \"outline_user\" | \"key\" | \"unlock\" | \"circle_plus\" | \"arrow-right-from-bracket\" | \"note\" | \"email\" | \"calendar-xmark\" | \"arrow-trend-up\" | \"hotel\" | \"arrow-trend-down\" | \"angle-up\" | \"ban\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "../ir-icons/icons",
                            "id": "src/components/ui/ir-icons/icons.ts::TIcons"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Collapse icon when collapsed"
                },
                "getter": false,
                "setter": false,
                "attribute": "collapse-icon-closed",
                "reflect": false,
                "defaultValue": "'closed_eye'"
            },
            "applyLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Apply button copy"
                },
                "getter": false,
                "setter": false,
                "attribute": "apply-label",
                "reflect": false,
                "defaultValue": "locales.entries.Lcz_Apply"
            },
            "resetLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Reset button copy"
                },
                "getter": false,
                "setter": false,
                "attribute": "reset-label",
                "reflect": false,
                "defaultValue": "locales.entries.Lcz_Reset"
            },
            "disableApply": {
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
                    "text": "Disable apply action"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-apply",
                "reflect": false,
                "defaultValue": "false"
            },
            "disableReset": {
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
                    "text": "Disable reset action"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-reset",
                "reflect": false,
                "defaultValue": "false"
            },
            "isApplyLoading": {
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
                    "text": "Show loader inside apply button"
                },
                "getter": false,
                "setter": false,
                "attribute": "is-apply-loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "actionTestId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional data test id suffix for default buttons"
                },
                "getter": false,
                "setter": false,
                "attribute": "action-test-id",
                "reflect": false,
                "defaultValue": "'filter'"
            }
        };
    }
    static get states() {
        return {
            "internalCollapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "filterToggle",
                "name": "irFilterToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ collapsed: boolean }",
                    "resolved": "{ collapsed: boolean; }",
                    "references": {}
                }
            }, {
                "method": "filterApply",
                "name": "irFilterApply",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "filterReset",
                "name": "irFilterReset",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "collapsed",
                "methodName": "handleCollapsedChange"
            }];
    }
}
//# sourceMappingURL=ir-filters-panel.js.map
