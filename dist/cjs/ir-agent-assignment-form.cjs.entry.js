'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5baa4589787677134d84479eb64c6fbbd2ff30a8' }, index.h("slot", { key: '4fba8af9312ef441ad42607752c1f26ccff3dc4f' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
