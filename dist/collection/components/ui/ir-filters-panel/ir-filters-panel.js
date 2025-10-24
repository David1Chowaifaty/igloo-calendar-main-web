import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
let panelId = 0;
export class IrFiltersPanel {
    constructor() {
        /** Panel headline text */
        this.filterTitle = locales.entries.Lcz_Filters;
        /** Show collapse toggle button */
        this.showCollapseButton = true;
        /** Collapse by default */
        this.defaultCollapsed = false;
        /** Keep content expanded on desktop and hide the collapse toggle */
        this.persistentOnDesktop = true;
        /** Optional extra class for the card wrapper */
        this.cardClass = 'sales-filters-card';
        /** Space between content items */
        this.contentGap = '0.5rem';
        /** Align footer actions */
        this.actionsAlign = 'end';
        /** Hide the default footer actions */
        this.hideDefaultActions = false;
        /** Collapse icon when expanded */
        this.collapseIconOpen = 'open_eye';
        /** Collapse icon when collapsed */
        this.collapseIconClosed = 'closed_eye';
        /** Apply button copy */
        this.applyLabel = locales.entries.Lcz_Apply;
        /** Reset button copy */
        this.resetLabel = locales.entries.Lcz_Reset;
        /** Disable apply action */
        this.disableApply = false;
        /** Disable reset action */
        this.disableReset = false;
        /** Show loader inside apply button */
        this.isApplyLoading = false;
        /** Optional data test id suffix for default buttons */
        this.actionTestId = 'filter';
        this.internalCollapsed = false;
        this.generatedCollapseId = `ir-filters-panel-${++panelId}`;
    }
    componentWillLoad() {
        var _a;
        this.internalCollapsed = (_a = this.collapsed) !== null && _a !== void 0 ? _a : this.defaultCollapsed;
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
        event === null || event === void 0 ? void 0 : event.stopPropagation();
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
        return (h("div", { key: '7d864a632c1b73d3c5efd245f756aec583531542', class: panelClasses }, h("div", { key: '51da8b86d0d800c32684b309ad47a64a8f52ff7d', class: cardClass }, h("div", { key: '633152f55b05eecdd598e54aed09f7529dddbc3a', class: headerClasses }, h("div", { key: 'ed05ce67e9a84c4d788132d3f6d1f1ca474e9dc6', class: "filters-panel__title-group" }, h("slot", { key: 'ff07842a65c05883e1a484a4ed0bf5bbeae771ba', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: '2292c6989e4fc93f648045a5e981ee110094c64a', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: '7fbdb266be8a72844ee6e4f954017d44b5672218', name: "header-title-extra" })), h("div", { key: 'c20e9e4d33f649ef03fe0372389d8d3ce45ffd81', class: "filters-panel__header-actions" }, h("slot", { key: '8dd58ae5e20610a49820a2afd94d87845b17da4c', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '45e956d87f069417b72d3acabc7d438a975aa25f', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: 'ab6994118fd23dab9f02e69e91d9281659c7ee63', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: '0e71c242efa81190df59d00ebee3cd28c5eb2ec3' }), !this.hideDefaultActions && (h("div", { key: '4d32179f11b3808f267802b03f0c3601a1bdcaae', class: footerClasses }, h("slot", { key: '692e757c78ad243a79b570767147a5b9f9bb668c', name: "actions" }, h("ir-button", { key: '3db128691fe5b1c694d827455d47ab7a31cc7e51', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '3a414ba8a28e4da791b66c270b789748b018770e', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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
                    "resolved": "\"print\" | \"key\" | \"angle-down\" | \"clock\" | \"check\" | \"heart-fill\" | \"envelope-circle-check\" | \"danger\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"user\" | \"heart\" | \"user_group\" | \"search\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"calendar\" | \"xmark-fill\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"menu_list\" | \"save\" | \"credit_card\" | \"closed_eye\" | \"open_eye\" | \"server\" | \"double_caret_left\" | \"square_plus\" | \"angles_left\" | \"angle_right\" | \"angles_right\" | \"outline_user\" | \"unlock\" | \"circle_plus\" | \"arrow-right-from-bracket\" | \"note\" | \"email\" | \"calendar-xmark\" | \"arrow-trend-up\" | \"hotel\" | \"arrow-trend-down\" | \"angle-up\" | \"ban\"",
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
                    "resolved": "\"print\" | \"key\" | \"angle-down\" | \"clock\" | \"check\" | \"heart-fill\" | \"envelope-circle-check\" | \"danger\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"user\" | \"heart\" | \"user_group\" | \"search\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"calendar\" | \"xmark-fill\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"menu_list\" | \"save\" | \"credit_card\" | \"closed_eye\" | \"open_eye\" | \"server\" | \"double_caret_left\" | \"square_plus\" | \"angles_left\" | \"angle_right\" | \"angles_right\" | \"outline_user\" | \"unlock\" | \"circle_plus\" | \"arrow-right-from-bracket\" | \"note\" | \"email\" | \"calendar-xmark\" | \"arrow-trend-up\" | \"hotel\" | \"arrow-trend-down\" | \"angle-up\" | \"ban\"",
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
