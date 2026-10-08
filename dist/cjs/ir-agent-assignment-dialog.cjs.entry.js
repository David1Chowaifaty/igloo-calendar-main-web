'use strict';

var index = require('./index-CQkpA5n3.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '78de7c8ad63e39aeeaee59af2fb966d0ac98dea2' }, index.h("slot", { key: '5bcdc356146a5fcd874d280e6d83bac313905a95' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
