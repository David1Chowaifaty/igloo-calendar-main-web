'use strict';

var index = require('./index-Du1V06mp.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd73b8ee8b8a50e6657049de53ae10543d9534bb3' }, index.h("slot", { key: '9b2afaec94e90b76e7e8b0771582aff37d5902bc' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
