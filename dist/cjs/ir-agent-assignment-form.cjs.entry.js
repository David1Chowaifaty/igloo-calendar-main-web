'use strict';

var index = require('./index-DgHWBwDV.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '35175cd9ce90d90f347f8e60233fe151db39e231' }, index.h("slot", { key: 'c38f4703728c92cb1a4baff5002ac2ac47a30c4d' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
