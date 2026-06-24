'use strict';

var index = require('./index-DYQrLNin.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6be4cdc3fc4da70c198f49355928fdd09ab058db' }, index.h("slot", { key: '9e659903fd661db3cd98c58b62d38470ef86c315' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
