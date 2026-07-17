'use strict';

var index = require('./index-Bg4VKYKR.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'cee29ffb62555af18c3d2708be71c693e075cd2b' }, index.h("slot", { key: 'd56a99b5b2d2a115774691235793a9eb0370cdac' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
