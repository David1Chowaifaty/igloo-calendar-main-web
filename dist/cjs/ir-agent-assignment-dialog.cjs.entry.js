'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '464ba1861bc9a81895a6efae80b7a608dd6165e1' }, index.h("slot", { key: 'de7ee07baec098c8773022e055ecb87f207ef579' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
