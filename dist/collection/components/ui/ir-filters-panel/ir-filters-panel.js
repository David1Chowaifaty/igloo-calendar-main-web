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
        return (h("div", { key: 'f3b7534e897908d41c44ff3646ec812d0aa5caf3', class: panelClasses }, h("div", { key: '6fd92ff0f6db663ce219a5d1ec1599a6f42736ed', class: cardClass }, h("div", { key: 'c1b6400031a6e63d16e16e6341f58c798aa3d581', class: headerClasses }, h("div", { key: '5bdb651b083e494f8de8346ef84659d67e52b054', class: "filters-panel__title-group" }, h("slot", { key: '646e0cf395b4cd50675be48faa6cb53722348a76', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: 'f77b8bba20c9dcfb8f539e2a5ff8e6ded671865e', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: '0f85cfd83f67519675debeb02f2b113e75524020', name: "header-title-extra" })), h("div", { key: 'fa29501912b5afd71e1596b7ef49bf9484b7db94', class: "filters-panel__header-actions" }, h("slot", { key: '2a5e04d03f96ac7e6807fa3054ecbc2b676f7920', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '2c307a28933b1d325fbd11725a47f45d56772f7d', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: '306577ddf50120307930572c4a7f4c2095eb818b', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: '247969d24cc72feccb9438d0a8f647f8abfe6556' }), !this.hideDefaultActions && (h("div", { key: '8f2551d98016e4fb14d207d4032117a3cb97ca39', class: footerClasses }, h("slot", { key: '7225983a412ff8b2ffaabe635c537bd61f1d2864', name: "actions" }, h("ir-button", { key: '4e1c01b40c96fe7e5e304219a50edf507a261ecb', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '760a9d162266fd1c042ce03717ad9f5f76583076', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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
                "reflect": false,
                "attribute": "filter-title",
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
                "reflect": false,
                "attribute": "collapse-id"
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
                "reflect": false,
                "attribute": "show-collapse-button",
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
                "reflect": false,
                "attribute": "default-collapsed",
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
                "reflect": true,
                "attribute": "collapsed"
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
                "reflect": false,
                "attribute": "persistent-on-desktop",
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
                "reflect": false,
                "attribute": "panel-class"
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
                "reflect": false,
                "attribute": "card-class",
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
                "reflect": false,
                "attribute": "header-class"
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
                "reflect": false,
                "attribute": "content-class"
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
                "reflect": false,
                "attribute": "content-gap",
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
                "reflect": false,
                "attribute": "actions-align",
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
                "reflect": false,
                "attribute": "hide-default-actions",
                "defaultValue": "false"
            },
            "collapseIconOpen": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"angle-down\" | \"angle-up\" | \"angle_left\" | \"angle_right\" | \"angles_left\" | \"angles_right\" | \"arrow-right-from-bracket\" | \"arrow-trend-down\" | \"arrow-trend-up\" | \"arrow_left\" | \"arrow_right\" | \"ban\" | \"bell\" | \"burger_menu\" | \"calendar\" | \"calendar-xmark\" | \"check\" | \"circle_check\" | \"circle_info\" | \"circle_plus\" | \"clock\" | \"closed_eye\" | \"credit_card\" | \"danger\" | \"double_caret_left\" | \"edit\" | \"email\" | \"envelope-circle-check\" | \"eraser\" | \"facebook\" | \"file\" | \"globe\" | \"heart\" | \"heart-fill\" | \"home\" | \"hotel\" | \"instagram\" | \"key\" | \"menu_list\" | \"minus\" | \"note\" | \"open_eye\" | \"outline_user\" | \"plus\" | \"print\" | \"reciept\" | \"save\" | \"search\" | \"server\" | \"square_plus\" | \"trash\" | \"twitter\" | \"unlock\" | \"user\" | \"user_group\" | \"whatsapp\" | \"xmark\" | \"xmark-fill\" | \"youtube\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "../ir-icons/icons",
                            "id": "src/components/ui/ir-icons/icons.ts::TIcons",
                            "referenceLocation": "TIcons"
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
                "reflect": false,
                "attribute": "collapse-icon-open",
                "defaultValue": "'open_eye'"
            },
            "collapseIconClosed": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"angle-down\" | \"angle-up\" | \"angle_left\" | \"angle_right\" | \"angles_left\" | \"angles_right\" | \"arrow-right-from-bracket\" | \"arrow-trend-down\" | \"arrow-trend-up\" | \"arrow_left\" | \"arrow_right\" | \"ban\" | \"bell\" | \"burger_menu\" | \"calendar\" | \"calendar-xmark\" | \"check\" | \"circle_check\" | \"circle_info\" | \"circle_plus\" | \"clock\" | \"closed_eye\" | \"credit_card\" | \"danger\" | \"double_caret_left\" | \"edit\" | \"email\" | \"envelope-circle-check\" | \"eraser\" | \"facebook\" | \"file\" | \"globe\" | \"heart\" | \"heart-fill\" | \"home\" | \"hotel\" | \"instagram\" | \"key\" | \"menu_list\" | \"minus\" | \"note\" | \"open_eye\" | \"outline_user\" | \"plus\" | \"print\" | \"reciept\" | \"save\" | \"search\" | \"server\" | \"square_plus\" | \"trash\" | \"twitter\" | \"unlock\" | \"user\" | \"user_group\" | \"whatsapp\" | \"xmark\" | \"xmark-fill\" | \"youtube\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "../ir-icons/icons",
                            "id": "src/components/ui/ir-icons/icons.ts::TIcons",
                            "referenceLocation": "TIcons"
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
                "reflect": false,
                "attribute": "collapse-icon-closed",
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
                "reflect": false,
                "attribute": "apply-label",
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
                "reflect": false,
                "attribute": "reset-label",
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
                "reflect": false,
                "attribute": "disable-apply",
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
                "reflect": false,
                "attribute": "disable-reset",
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
                "reflect": false,
                "attribute": "is-apply-loading",
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
                "reflect": false,
                "attribute": "action-test-id",
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
