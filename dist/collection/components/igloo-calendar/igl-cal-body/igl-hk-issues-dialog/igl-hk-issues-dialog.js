import { HouseKeepingService } from "../../../../services/housekeeping.service";
import { h } from "@stencil/core";
import { formatDate } from "../../../../utils/date/index";
export class IglHkIssuesDialog {
    open = false;
    unitId;
    unitName;
    propertyId;
    issues;
    irAfterClose;
    error = null;
    isResolving = false;
    selectedIds = new Set();
    dialogRef;
    houseKeepingService = new HouseKeepingService();
    handleOpenChange(isOpen) {
        this.error = null;
        if (isOpen) {
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    handleIssuesChange(newIssues) {
        // A single issue is the only thing to act on — pre-select it.
        this.selectedIds = newIssues?.length === 1 ? new Set([newIssues[0].id]) : new Set();
    }
    get isMultiple() {
        return (this.issues?.length ?? 0) > 1;
    }
    get allSelected() {
        return !!this.issues?.length && this.selectedIds.size === this.issues.length;
    }
    toggleIssue(id) {
        const next = new Set(this.selectedIds);
        if (next.has(id)) {
            next.delete(id);
        }
        else {
            next.add(id);
        }
        this.selectedIds = next;
    }
    toggleSelectAll = () => {
        this.selectedIds = this.allSelected ? new Set() : new Set(this.issues.map(issue => issue.id));
    };
    handleRowKeyDown = (event, id) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.toggleIssue(id);
        }
    };
    handleResolve = async () => {
        if (!this.selectedIds.size || this.isResolving) {
            return;
        }
        this.isResolving = true;
        this.error = null;
        try {
            await this.houseKeepingService.resolveHKIssue({ issue_ids: Array.from(this.selectedIds) });
            this.dialogRef?.closeModal();
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : 'Failed to resolve. Please try again.';
        }
        finally {
            this.isResolving = false;
        }
    };
    formatReportedAt(issue) {
        const date = formatDate(issue.date, 'MMM D, YYYY');
        if (issue.hour == null || issue.minute == null) {
            return date;
        }
        const time = `${String(issue.hour).padStart(2, '0')}:${String(issue.minute).padStart(2, '0')}`;
        return `${date} · ${time}`;
    }
    renderIssue(issue) {
        const selectable = this.isMultiple;
        const isSelected = this.selectedIds.has(issue.id);
        const description = issue.description?.trim();
        return (h("div", { key: issue.id, class: { 'issue': true, 'issue--selectable': selectable, 'issue--selected': isSelected }, role: selectable ? 'checkbox' : undefined, "aria-checked": selectable ? String(isSelected) : undefined, tabindex: selectable ? 0 : undefined, onClick: selectable ? () => this.toggleIssue(issue.id) : undefined, onKeyDown: selectable ? (event) => this.handleRowKeyDown(event, issue.id) : undefined }, selectable && h("wa-checkbox", { class: "issue__check", checked: isSelected, tabIndex: -1 }), h("div", { class: "issue__body" }, h("p", { class: { 'issue__description': true, 'issue__description--empty': !description } }, description || 'No description provided'), h("p", { class: "issue__meta" }, h("span", { class: "issue__reporter" }, issue.housekeeper_name || 'Unknown housekeeper'), h("span", { class: "issue__sep", "aria-hidden": "true" }, "\u00B7"), h("span", { class: "issue__date" }, this.formatReportedAt(issue))))));
    }
    renderBody() {
        if (!this.open) {
            return null;
        }
        if (!this.issues?.length) {
            return h("ir-empty-state", { message: "No issues reported for this unit." });
        }
        return (h("div", { class: "issues" }, this.isMultiple && (h("div", { class: "issues__toolbar" }, h("span", { class: "issues__count" }, this.issues.length, " issues reported"), h("button", { type: "button", class: "issues__select-all", onClick: this.toggleSelectAll }, this.allSelected ? 'Clear' : 'Select all'))), h("div", { class: "issues__list", role: this.isMultiple ? 'group' : undefined, "aria-label": this.isMultiple ? 'Reported issues' : undefined }, this.issues.map(issue => this.renderIssue(issue))), this.error && (h("div", { class: "issues__error", role: "alert" }, h("wa-callout", { variant: "danger" }, h("wa-icon", { slot: "icon", name: "circle-exclamation" }), this.error)))));
    }
    render() {
        const multiple = (this.issues?.length ?? 0) > 1;
        const selectedCount = this.selectedIds.size;
        const unitSuffix = this.unitName ? ` · ${this.unitName}` : '';
        return (h("ir-dialog", { key: 'c553e9bcba8054b20941698f11615af1b40eeaab', ref: el => (this.dialogRef = el), label: `${multiple ? 'Reported issues' : 'Reported issue'}${unitSuffix}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderBody(), h("div", { key: '3ccb2e5270910e671ec2f5416ecac57058d449dd', slot: "footer", class: "footer" }, multiple && selectedCount > 0 && h("span", { key: '29b3b51db452fdb186588ac45a93f0ad5dbc83d2', class: "footer__hint" }, selectedCount, " selected"), h("ir-custom-button", { key: '77eec2b6d8120ca3f7b7ac7da5f5a73c20450fab', variant: "neutral", size: "m", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, "Close"), h("ir-custom-button", { key: 'bc4007398d82f96d1a6aeccb83a8f689f4572be8', variant: "brand", size: "m", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, multiple ? `Resolve${selectedCount ? ` ${selectedCount}` : ''}` : 'Mark as resolved'))));
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
                "reflect": false,
                "attribute": "open",
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
                "reflect": false,
                "attribute": "unit-id"
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
                "reflect": false,
                "attribute": "unit-name"
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
                "reflect": false,
                "attribute": "property-id"
            },
            "issues": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HKIssue[]",
                    "resolved": "HKIssue[]",
                    "references": {
                        "HKIssue": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::HKIssue",
                            "referenceLocation": "HKIssue"
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
            "isResolving": {},
            "selectedIds": {}
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
            }, {
                "propName": "issues",
                "methodName": "handleIssuesChange"
            }];
    }
}
