'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '26e44beb67a08f87465f08e476ed16be13c97b0a' }, index.h("slot", { key: 'fe5062b4da61caa035216373d3ff4f4e49a42a84' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
