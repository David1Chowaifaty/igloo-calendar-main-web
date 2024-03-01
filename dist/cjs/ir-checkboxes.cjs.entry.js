'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-009c7daa.js');

const IrCheckBoxes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkboxesChange = index.createEvent(this, "checkboxesChange", 7);
        this.checkedCheckboxes = [];
        this.checkboxes = [];
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
        return (index.h("div", { key: '5d45cd654441ef38ca5c4e0093e84d8204882f20' }, this.checkboxes.map((checkbox, index$1) => (index.h("ir-checkbox", { name: index$1.toString(), label: checkbox.text, value: checkbox.value, checked: checkbox.checked || false })))));
    }
};

exports.ir_checkboxes = IrCheckBoxes;

//# sourceMappingURL=ir-checkboxes.cjs.entry.js.map