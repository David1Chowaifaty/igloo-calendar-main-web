'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2059f00cb5bedc13b575b44f851eebfeb5c329c9' }, index.h("slot", { key: 'e2660a3b7428e0fcc88ce0b31a3a1c703bad8b1d' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
