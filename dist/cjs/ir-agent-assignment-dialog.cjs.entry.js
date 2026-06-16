'use strict';

var index = require('./index-Cn9TxUnA.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a7555da6b343d39d424eeb153b92ed0b209305d9' }, index.h("slot", { key: 'b19cb287c4da30bbd01cd1a87e77680f2731880b' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
