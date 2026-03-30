import { HouseKeepingService } from "../../../../services/housekeeping.service";
import { h } from "@stencil/core";
import moment from "moment";
export class IglHkIssuesDialog {
    open = false;
    unitId;
    unitName;
    propertyId;
    issue;
    irAfterClose;
    error = null;
    isResolving = false;
    dialogRef;
    houseKeepingService = new HouseKeepingService();
    async handleOpenChange(isOpen) {
        if (isOpen) {
            this.error = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    handleResolve = async () => {
        if (!this.issue || this.isResolving)
            return;
        this.isResolving = true;
        this.error = null;
        try {
            await this.houseKeepingService.resolveHKIssue({ issue_id: this.issue.id });
            this.dialogRef?.closeModal();
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : 'Failed to resolve issue. Please try again.';
        }
        finally {
            this.isResolving = false;
        }
    };
    renderContent() {
        if (!this.issue || !this.open)
            return null;
        return (h("div", { class: "detail-body" }, h("div", { class: "meta-row" }, h("span", { class: "meta-item" }, h("wa-icon", { name: "door-open" }), h("span", { class: "meta-value" }, this.issue.unit.name)), h("span", { class: "meta-divider" }), h("span", { class: "meta-item" }, h("wa-icon", { name: "user" }), h("span", { class: "meta-value" }, this.issue.housekeeper_name)), h("span", { class: "meta-divider" }), h("span", { class: "meta-item" }, h("wa-icon", { name: "calendar-days" }), h("span", { class: "meta-value" }, moment(this.issue.date).format('MMM D, YYYY')))), h("wa-callout", { variant: "warning", size: "small" }, h("strong", null, "Reported Issue"), h("p", { class: "description-text" }, this.issue.description || 'No description provided.')), this.error && (h("div", { class: "error-banner", role: "alert" }, h("wa-icon", { name: "circle-exclamation" }), this.error))));
    }
    render() {
        return (h("ir-dialog", { key: '84cad1ba34cc6a918fd51bcedfcbca772721e9f4', ref: el => (this.dialogRef = el), label: `Issue #${this.issue?.id}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderContent(), h("div", { key: '8dc5c714519e3257af5dc114962b9daf01f78aa1', slot: "footer", class: "dialog-footer" }, h("ir-custom-button", { key: '01313028be4070155cfde7ef2a8d48fe0e51abd7', variant: "neutral", size: "medium", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, "Close"), h("ir-custom-button", { key: 'f350253218172eee7ce9268857602c3de25b8c8d', variant: "brand", size: "medium", appearance: "accent", onClickHandler: this.handleResolve, disabled: this.isResolving || !this.issue, loading: this.isResolving }, "Mark as Resolved"))));
    }
    static get is() { return "igl-hk-issues-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-hk-issues-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-hk-issues-dialog.css"]
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
                "reflect": false,
                "defaultValue": "false"
            },
            "unitId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
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
                "attribute": "unit-id",
                "reflect": false
            },
            "unitName": {
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
                "attribute": "unit-name",
                "reflect": false
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
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
                "attribute": "property-id",
                "reflect": false
            },
            "issue": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HKIssue",
                    "resolved": "HKIssue",
                    "references": {
                        "HKIssue": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::HKIssue"
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
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "error": {},
            "isResolving": {}
        };
    }
    static get events() {
        return [{
                "method": "irAfterClose",
                "name": "irAfterClose",
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
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
//# sourceMappingURL=igl-hk-issues-dialog.js.map
