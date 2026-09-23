import { HouseKeepingService } from "../../../../services/housekeeping/index";
import { h } from "@stencil/core";
import { formatDate } from "../../../../utils/date/index";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
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
            this.error = e instanceof Error ? e.message : t('Lcz_FailedToResolveGeneric', { fallback: 'Failed to resolve. Please try again.' });
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
        const pad = { minimumIntegerDigits: 2, useGrouping: false };
        const time = `${formatNumber(issue.hour, pad)}:${formatNumber(issue.minute, pad)}`;
        return `${date} · ${time}`;
    }
    renderIssue(issue) {
        const selectable = this.isMultiple;
        const isSelected = this.selectedIds.has(issue.id);
        const description = issue.description?.trim();
        return (h("div", { key: issue.id, class: { 'issue': true, 'issue--selectable': selectable, 'issue--selected': isSelected }, role: selectable ? 'checkbox' : undefined, "aria-checked": selectable ? String(isSelected) : undefined, tabindex: selectable ? 0 : undefined, onClick: selectable ? () => this.toggleIssue(issue.id) : undefined, onKeyDown: selectable ? (event) => this.handleRowKeyDown(event, issue.id) : undefined }, selectable && h("wa-checkbox", { class: "issue__check", checked: isSelected, tabIndex: -1 }), h("div", { class: "issue__body" }, h("p", { class: { 'issue__description': true, 'issue__description--empty': !description } }, description || 'No description provided'), h("p", { class: "issue__meta" }, h("span", { class: "issue__reporter" }, issue.housekeeper_name || t('Lcz_UnknownHousekeeper', { fallback: 'Unknown housekeeper' })), h("span", { class: "issue__sep", "aria-hidden": "true" }, "\u00B7"), h("span", { class: "issue__date" }, this.formatReportedAt(issue))))));
    }
    renderBody() {
        if (!this.open) {
            return null;
        }
        if (!this.issues?.length) {
            return h("ir-empty-state", { message: t('Lcz_NoIssuesReportedForUnit', { fallback: 'No issues reported for this unit.' }) });
        }
        return (h("div", { class: "issues" }, this.isMultiple && (h("div", { class: "issues__toolbar" }, h("span", { class: "issues__count" }, t('Lcz_IssuesReportedCount', { params: [formatCount(this.issues.length)], fallback: `${this.issues.length} issues reported` })), h("button", { type: "button", class: "issues__select-all", onClick: this.toggleSelectAll }, this.allSelected ? t('Lcz_Clear', { fallback: 'Clear' }) : t('Lcz_SelectAll', { fallback: 'Select all' })))), h("div", { class: "issues__list", role: this.isMultiple ? 'group' : undefined, "aria-label": this.isMultiple ? 'Reported issues' : undefined }, this.issues.map(issue => this.renderIssue(issue))), this.error && (h("div", { class: "issues__error", role: "alert" }, h("wa-callout", { variant: "danger" }, h("wa-icon", { slot: "icon", name: "circle-exclamation" }), this.error)))));
    }
    render() {
        const multiple = (this.issues?.length ?? 0) > 1;
        const selectedCount = this.selectedIds.size;
        const unitSuffix = this.unitName ? ` · ${this.unitName}` : '';
        return (h("ir-dialog", { key: 'c641816f6d8276aaf503ed1e22aea02bef0d930a', ref: el => (this.dialogRef = el), label: `${multiple ? t('Lcz_ReportedIssues', { fallback: 'Reported Issues' }) : t('Lcz_ReportedIssue', { fallback: 'Reported Issue' })}${unitSuffix}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderBody(), h("div", { key: '3f317b2e366c0b4050de9aad5666d1e24cfd035a', slot: "footer", class: "footer" }, multiple && selectedCount > 0 && h("span", { key: 'e5f684ce7e2f3260279ad73873c8b32305251851', class: "footer__hint" }, t('Lcz_SelectedItemsCount', { params: [selectedCount], fallback: `${selectedCount} selected` })), h("ir-custom-button", { key: 'a7b5ba7c437b767b89587500d277b5377b40df99', variant: "neutral", size: "m", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, t('Lcz_Close', { fallback: 'Close' })), h("ir-custom-button", { key: 'be68556dac179981d66b8d3fb0c0412e85bcdb08', variant: "brand", size: "m", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, multiple
            ? selectedCount
                ? t('Lcz_ResolveCount', { params: [selectedCount], fallback: `Resolve ${selectedCount}` })
                : t('Lcz_Resolve', { fallback: 'Resolve' })
            : t('Lcz_MarkAsResolved', { fallback: 'Mark as Resolved' })))));
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
