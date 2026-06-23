'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7d9e408a5e08ebeae8270d4e0f91bc7e8c2c54b4' }, index.h("slot", { key: '06b7c6e4e9a4b1fd70af5cdd99547d1c918f0311' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
