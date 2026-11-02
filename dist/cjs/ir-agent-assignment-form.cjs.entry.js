'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f953af7ca4294d2341c84a8b39f65e42f3a7306e' }, index.h("slot", { key: 'd47c138a897c67ba6d6043343d947204f749bce3' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
