'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentDialogCss = () => `.sc-ir-agent-assignment-dialog-h{display:block}`;

const IrAgentAssignmentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6438fe6c2684dd2e0942622051db78c986602bea' }, index.h("slot", { key: '015d5774f2f2e37337058ff5dfddd4be17f3fd37' })));
    }
};
IrAgentAssignmentDialog.style = irAgentAssignmentDialogCss();

exports.ir_agent_assignment_dialog = IrAgentAssignmentDialog;
