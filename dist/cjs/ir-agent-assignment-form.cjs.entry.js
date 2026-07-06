'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ac670fb749ee752127b185d88e6b057c72469ab7' }, index.h("slot", { key: 'fd0923288161efd8fd0bfd0edded79239cb0202f' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
