'use strict';

var index = require('./index-Cn9TxUnA.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ebce00cb5b2c363cbfb8f55b5b192cc2370e5e47' }, index.h("slot", { key: '8b79d31a45811eb179828c83db1cc681bbe9bf60' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
