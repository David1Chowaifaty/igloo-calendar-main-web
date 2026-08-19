'use strict';

var index = require('./index-DgHWBwDV.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'fa5717ffef162e65ade2d925fc9f6dc482a506e2' }, index.h("slot", { key: '2547677b3664f7e640961777eb57f6d3a1de07ba' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
