'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a5ee901866c4d85104facbec35f1bfeb46130300' }, index.h("slot", { key: 'dcad742f664917d808380e5165ca4ace1f9c1a00' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
