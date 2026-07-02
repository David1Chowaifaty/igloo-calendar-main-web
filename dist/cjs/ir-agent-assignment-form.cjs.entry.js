'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b4a78b0255a2f039d0b34297f4526873a2cca737' }, index.h("slot", { key: 'ef4f844faf76ecbf19c199505e284f8688c23505' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
