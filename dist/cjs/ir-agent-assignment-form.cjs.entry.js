'use strict';

var index = require('./index-IDeZZwEK.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '224e89fb5a6163641bbe7bc7142e9880ddc85b17' }, index.h("slot", { key: '98514a67b220697555100f7f2eb69e31da006a63' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
