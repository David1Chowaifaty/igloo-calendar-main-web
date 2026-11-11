'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'fb89724289aad0b413c038892d27dfe06f912a64' }, index.h("slot", { key: 'f7bd644b3daa0b2fb93175b775ba000ff4c69ffb' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
