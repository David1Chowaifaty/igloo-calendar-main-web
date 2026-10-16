'use strict';

var index = require('./index-Bp205iz4.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '005bb29990f03356747c7238334a05735a86d39c' }, index.h("slot", { key: 'd0dedbe54b88ce7e1396950ae9527a08f19142bc' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
