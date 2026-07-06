'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b731cdb5f5734662ab553a1a513e18de35c36e0e' }, index.h("slot", { key: 'c4e148feafb1796fd62e120089ad5abe81c03c5b' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
