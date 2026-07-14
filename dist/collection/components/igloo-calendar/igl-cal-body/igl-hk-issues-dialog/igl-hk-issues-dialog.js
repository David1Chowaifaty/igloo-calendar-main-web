import { HouseKeepingService } from "../../../../services/housekeeping.service";
import { h } from "@stencil/core";
import moment from "moment";
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
    async handleOpenChange(isOpen) {
        if (isOpen) {
            this.error = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    handleIssuesChange(newIssues) {
        this.selectedIds = new Set();
        if (newIssues?.length === 1) {
            this.selectedIds = new Set([newIssues[0].id]);
        }
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
    handleResolve = async () => {
        if (!this.selectedIds.size || this.isResolving)
            return;
        this.isResolving = true;
        this.error = null;
        try {
            const payload = Array.from(this.selectedIds);
            await this.houseKeepingService.resolveHKIssue({ issue_ids: payload });
            this.dialogRef?.closeModal();
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : 'Failed to resolve issue. Please try again.';
        }
        finally {
            this.isResolving = false;
        }
    };
    // private getInitials(name: string): string {
    //   return (name ?? '')
    //     .split(' ')
    //     .map(n => n[0])
    //     .join('')
    //     .toUpperCase()
    //     .slice(0, 2);
    // }
    renderTicket(issue) {
        const isMultiple = this.issues.length > 1;
        const isSelected = this.selectedIds.has(issue.id);
        // const initials = this.getInitials(issue.housekeeper_name);
        return (h("div", { class: `ticket ${isSelected ? 'ticket--selected' : ''}`, key: issue.id, onClick: () => isMultiple && this.toggleIssue(issue.id) }, h("p", { class: "ticket-description" }, issue.description || 'No description provided.'), h("div", { class: "ticket-footer-row" }, h("div", { class: "ticket-reporter" }, h("span", { class: "ticket-reporter-name" }, issue.housekeeper_name)), h("div", { class: 'ticket-meta' }, h("span", { class: "ticket-date" }, moment(issue.date).format('MMM D, YYYY'), issue.hour != null && issue.minute != null && (h("span", { class: "ticket-time" }, String(issue.hour).padStart(2, '0'), ":", String(issue.minute).padStart(2, '0')))), isMultiple && (h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: (e) => {
                e.stopPropagation();
                this.toggleIssue(issue.id);
            } }))))));
    }
    renderContent() {
        if (!this.issues?.length || !this.open)
            return null;
        return (h("div", { class: "dialog-body" }, h("div", { class: "tickets-list" }, this.issues.map(issue => this.renderTicket(issue))), this.error && (h("div", { class: "error-banner", role: "alert" }, h("wa-icon", { name: "circle-exclamation" }), this.error))));
    }
    render() {
        const count = this.issues?.length ?? 0;
        const selectedCount = this.selectedIds.size;
        return (h("ir-dialog", { key: 'a78883c201ed5730cece79e1f38737914529b39a', ref: el => (this.dialogRef = el), label: `Reported ${count > 1 ? 'Issues' : 'Issue'}: ${this.unitName}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderContent(), h("div", { key: '6b4182c84f41bbe680b3c6faf44296cdd52cdf4f', slot: "footer", class: "dialog-footer" }, h("ir-custom-button", { key: 'babdbe259c3b736910e1fcf40454f6bb2dd566f8', variant: "neutral", size: "m", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, "Close"), h("ir-custom-button", { key: 'd095904baff5ef5bfd157467fe119f88d5312a89', variant: "brand", size: "m", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, "Mark as Resolved"))));
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
