'use strict';

var index = require('./index-DgHWBwDV.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '47f1a9ee31aa6128a4b6a5624511b01ad280e84f' }, index.h("slot", { key: '3df49afd37120e26675f22ce02f24dd792b75544' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
