import { Host, h } from "@stencil/core";
export class IrAgentAssignmentDialog {
    render() {
        return (h(Host, { key: 'ec2afa4b965966dc2fb09082e42016a9c6e29e64' }, h("slot", { key: '379fd39f4b615cfb7a9fc14de2fa0e989ef9a14e' })));
    }
    static get is() { return "ir-agent-assignment-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-assignment-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-assignment-dialog.css"]
        };
    }
}
