import { h } from "@stencil/core";
export class IrCityLedgerTransactionDrawer {
    open = false;
    formId = 'city-ledger-transaction-form';
    drawerLabel = 'New Entry';
    agentId = null;
    initialTransactionType = 'OB';
    taxOptions = [];
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    closeDrawer;
    transactionSaved;
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (h("ir-drawer", { key: 'cc55b5fa56a970bbc134174468af8faf889eb86b', open: this.open, label: this.drawerLabel, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.closeDrawer.emit();
                }
            } }, this.open && (h("ir-city-ledger-transaction-form", { key: '464b94ac0fa6c86d9e7ab343cbdf2b88eb35e5ec', formId: this.formId, agentId: this.agentId, initialTransactionType: this.initialTransactionType, taxOptions: this.taxOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, currencySymbol: this.currencySymbol, onTransactionSaved: () => {
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            } })), h("div", { key: '2b83358f8ffd4d084c28a10658d289fba14c591a', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '79e7938f5c19bbe48e950a2234425d276278d885', appearance: "filled", size: "medium", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: 'db47199428405c6f204091a39d84c81fdda06701', form: this.formId, size: "medium", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn" }, "Save"))));
    }
    static get is() { return "ir-city-ledger-transaction-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-transaction-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-transaction-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "formId": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "form-id",
                "reflect": false,
                "defaultValue": "'city-ledger-transaction-form'"
            },
            "drawerLabel": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "drawer-label",
                "reflect": false,
                "defaultValue": "'New Entry'"
            },
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "agent-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "initialTransactionType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TransactionType",
                    "resolved": "\"ADJ\" | \"CN\" | \"DB\" | \"DN\" | \"OB\" | \"PAY\"",
                    "references": {
                        "TransactionType": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::TransactionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "initial-transaction-type",
                "reflect": false,
                "defaultValue": "'OB'"
            },
            "taxOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TaxOption[]",
                    "resolved": "TaxOption[]",
                    "references": {
                        "TaxOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::TaxOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "unpaidInvoiceOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "LinkedOption[]",
                    "resolved": "LinkedOption[]",
                    "references": {
                        "LinkedOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkedOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "bookingOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "LinkedOption[]",
                    "resolved": "LinkedOption[]",
                    "references": {
                        "LinkedOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkedOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "serviceCategoryOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ServiceCategoryOption[]",
                    "resolved": "ServiceCategoryOption[]",
                    "references": {
                        "ServiceCategoryOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::ServiceCategoryOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "currencySymbol": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "currency-symbol",
                "reflect": false,
                "defaultValue": "'$'"
            }
        };
    }
    static get events() {
        return [{
                "method": "closeDrawer",
                "name": "closeDrawer",
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
                "method": "transactionSaved",
                "name": "transactionSaved",
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
}
//# sourceMappingURL=ir-city-ledger-transaction-drawer.js.map
