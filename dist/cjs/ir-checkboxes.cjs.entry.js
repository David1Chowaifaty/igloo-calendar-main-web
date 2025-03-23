'use strict';

var index = require('./index-Dt9a74kn.js');

const IrCheckBoxes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkboxesChange = index.createEvent(this, "checkboxesChange");
        this.checkboxes = [];
        this.checkedCheckboxes = [];
    }
    handleCheckboxChange(event) {
        if (event.detail.checked) {
            this.checkedCheckboxes.push(this.checkboxes[parseInt(event.detail.name)]);
        }
        else {
            this.checkedCheckboxes.splice(this.checkedCheckboxes.indexOf(this.checkboxes[parseInt(event.detail.name)]), 1);
        }
        this.checkboxesChange.emit(this.checkedCheckboxes);
    }
    componentWillLoad() {
        this.checkedCheckboxes = this.checkboxes.filter(checkbox => checkbox.checked);
        if (this.checkedCheckboxes.length > 0) {
            this.checkboxesChange.emit(this.checkedCheckboxes);
        }
    }
    render() {
        return (index.h("div", { key: 'd624f0276c2546e0f1c06585da5e6820c94183ce' }, this.checkboxes.map((checkbox, index$1) => (index.h("ir-checkbox", { name: index$1.toString(), label: checkbox.text, checked: checkbox.checked || false })))));
    }
};

exports.ir_checkboxes = IrCheckBoxes;
//# sourceMappingURL=ir-checkboxes.entry.cjs.js.map

//# sourceMappingURL=ir-checkboxes.cjs.entry.js.map