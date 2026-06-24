'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9071ec6a08183aa2e3a5fd84762177010465cfa4' }, index.h("slot", { key: 'cbb20e3587d8bf61831455b2271b520ded5b2f76' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
