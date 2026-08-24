'use strict';

var index = require('./index-DgHWBwDV.js');

const IrCheckBoxes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkboxesChange = index.createEvent(this, "checkboxesChange");
    }
    checkboxes = [];
    checkedCheckboxes = [];
    checkboxesChange;
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
        return (index.h("div", { key: 'c404a9386d33b29e391eb3c1a9b5e36998dd674c' }, this.checkboxes.map((checkbox, index$1) => (index.h("ir-checkbox", { name: index$1.toString(), label: checkbox.text, checked: checkbox.checked || false })))));
    }
};

exports.ir_checkboxes = IrCheckBoxes;
