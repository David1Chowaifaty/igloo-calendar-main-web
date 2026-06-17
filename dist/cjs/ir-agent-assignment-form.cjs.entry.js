'use strict';

var index = require('./index-OzksjAXP.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3bd302fbf343e436175ead93bfcf95366949a931' }, index.h("slot", { key: '724a76a900395a4f8920d363f7089568e5cd6891' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
