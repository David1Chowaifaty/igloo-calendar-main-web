'use strict';

var index = require('./index-DgHWBwDV.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9cb979f5c8fa04546d271609669621c6306debc7' }, index.h("slot", { key: '15a3a79cf5c3a691e4fe2cb29adcdb917166072b' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
