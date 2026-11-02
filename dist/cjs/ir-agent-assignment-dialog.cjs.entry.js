'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e02119892ed55a030ae38f1ed9651649a71ce05b' }, index.h("slot", { key: '25511e1d69ee8658a7d3d7fbe258fd31f2cd2327' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
