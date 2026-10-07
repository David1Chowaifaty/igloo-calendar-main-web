'use strict';

var index = require('./index-CQkpA5n3.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c286f49d36673f3ba49c046f3fb1a48b227dc6f0' }, index.h("slot", { key: 'f57c3133cec3e109956a85a5d880cc2738d7c082' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
