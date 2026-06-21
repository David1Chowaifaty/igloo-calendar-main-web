'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f64cf0b4e7b2d4a124649fef1b0e238de0fa0e2e' }, index.h("slot", { key: 'ad425b95edf76bea1e5f1039b7221fa63036e102' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
