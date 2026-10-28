'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7848decbc8c582a01d2223af7ae7e4052679fbfc' }, index.h("slot", { key: '2d6e43a708ef9b3cee0d732b5f77ebd6d5612049' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
