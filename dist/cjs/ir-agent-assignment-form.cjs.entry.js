'use strict';

var index = require('./index-jMqrfjaT.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '88d6d47c46335beb19ea5ed355cd4bf8106beefe' }, index.h("slot", { key: '915d985d194d0c11cc739fe674adb95412637751' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
