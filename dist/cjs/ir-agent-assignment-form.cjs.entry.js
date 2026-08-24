'use strict';

var index = require('./index-DgHWBwDV.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e706d882559ecf3e86e8b39219f61a7454ba1870' }, index.h("slot", { key: 'b5bc2eaa0967ff319d8795eea1541516b018d19e' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
