'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c3337af565703e1c9d0448feeedc91b7ce4b7b26' }, index.h("slot", { key: 'a3bcf20b4ce05e8622448608dab0dc43a03a8b62' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
