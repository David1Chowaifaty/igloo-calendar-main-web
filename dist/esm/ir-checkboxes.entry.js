import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';

const IrCheckBoxes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkboxesChange = createEvent(this, "checkboxesChange", 7);
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
        return (h("div", { key: '0ce277ce9b933d8b5913841fa2c8a5e699e338d6' }, this.checkboxes.map((checkbox, index) => (h("ir-checkbox", { name: index.toString(), label: checkbox.text, checked: checkbox.checked || false })))));
    }
};

export { IrCheckBoxes as ir_checkboxes };

//# sourceMappingURL=ir-checkboxes.entry.js.map