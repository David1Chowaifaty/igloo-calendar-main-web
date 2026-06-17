'use strict';

var index = require('./index-OzksjAXP.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ec2afa4b965966dc2fb09082e42016a9c6e29e64' }, index.h("slot", { key: '379fd39f4b615cfb7a9fc14de2fa0e989ef9a14e' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
