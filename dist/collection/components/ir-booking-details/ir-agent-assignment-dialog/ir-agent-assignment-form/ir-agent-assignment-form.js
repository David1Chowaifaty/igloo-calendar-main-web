import { Host, h } from "@stencil/core";
export class IrAgentAssignmentForm {
    render() {
        return (h(Host, { key: '5baa4589787677134d84479eb64c6fbbd2ff30a8' }, h("slot", { key: '4fba8af9312ef441ad42607752c1f26ccff3dc4f' })));
    }
    static get is() { return "ir-agent-assignment-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-assignment-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-assignment-form.css"]
        };
    }
}
