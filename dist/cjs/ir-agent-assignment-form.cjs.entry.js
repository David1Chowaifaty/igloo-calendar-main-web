'use strict';

var index = require('./index-CQkpA5n3.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4ed32ca5d1e6c3cbdecdaeb2c69682b4908704c6' }, index.h("slot", { key: 'ac3206837a1a6ffee794ec8f7c81c2e021076f80' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
