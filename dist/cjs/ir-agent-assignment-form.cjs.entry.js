'use strict';

var index = require('./index-CQkpA5n3.js');

const irAgentAssignmentFormCss = () => `.sc-ir-agent-assignment-form-h{display:block}`;

const IrAgentAssignmentForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6be4592521a4bb7114d65beafc0898013b268ef4' }, index.h("slot", { key: 'cbc977c0bb20c2517b9997c07a3448dc5dacdffe' })));
    }
};
IrAgentAssignmentForm.style = irAgentAssignmentFormCss();

exports.ir_agent_assignment_form = IrAgentAssignmentForm;
