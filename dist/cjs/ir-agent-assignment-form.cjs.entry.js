'use strict';

var index = require('./index-P5Mginch.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a1c9b44fe47de41548cc093f7ca3690b110da1c2' }, index.h("slot", { key: '9858450e7c56c20ce5a94945254c7c7db94461a8' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
