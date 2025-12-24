import { Host, h } from "@stencil/core";
export class IrActionsCell {
    buttons = [];
    irAction;
    getLabel(type) {
        switch (type) {
            case 'check_in':
                return 'Check in';
            case 'check_out':
                return 'Check out';
            case 'overdue_check_in':
                return 'Overdue check-in';
            case 'overdue_check_out':
                return 'Overdue check-out';
            case 'edit':
                return 'icon';
            case 'delete':
                return 'icon';
            default:
                return '';
        }
    }
    getVariant(type) {
        switch (type) {
            case 'overdue_check_in':
            case 'overdue_check_out':
                return 'neutral';
            case 'edit':
                return 'neutral';
            case 'delete':
                return 'danger';
            default:
                return 'brand';
        }
    }
    getAppearance(type) {
        switch (type) {
            case 'edit':
            case 'delete':
                return 'plain';
            default:
                return 'accent';
        }
    }
    onClick(action) {
        this.irAction.emit({ action });
    }
    renderButton(type) {
        const label = this.getLabel(type);
        const variant = this.getVariant(type);
        const appearance = this.getAppearance(type);
        if (!label)
            return null;
        return (h("ir-custom-button", { variant: variant, appearance: appearance, "data-action": type, onClick: () => this.onClick(type) }, label !== 'icon' && label, type === 'edit' && h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } }), type === 'delete' && h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })));
    }
    render() {
        return h(Host, { key: '7335002522bd2fee39ebf5b52522fbb5df656477' }, this.buttons.map(button => this.renderButton(button)));
    }
    static get is() { return "ir-actions-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-actions-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-actions-cell.css"]
        };
    }
    static get properties() {
        return {
            "buttons": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IrActionButton[]",
                    "resolved": "IrActionButton[]",
                    "references": {
                        "IrActionButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/table-cells/booking/ir-actions-cell/ir-actions-cell.tsx",
                            "id": "src/components/table-cells/booking/ir-actions-cell/ir-actions-cell.tsx::IrActionButton"
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
            }
        };
    }
    static get events() {
        return [{
                "method": "irAction",
                "name": "irAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ action: IrActionButton }",
                    "resolved": "{ action: IrActionButton; }",
                    "references": {
                        "IrActionButton": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/table-cells/booking/ir-actions-cell/ir-actions-cell.tsx",
                            "id": "src/components/table-cells/booking/ir-actions-cell/ir-actions-cell.tsx::IrActionButton"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-actions-cell.js.map
