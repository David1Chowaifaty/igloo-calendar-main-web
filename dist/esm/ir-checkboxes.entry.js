import { r as registerInstance, c as createEvent, h } from './index-D8DCR0yx.js';

const IrCheckBoxes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkboxesChange = createEvent(this, "checkboxesChange");
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
        return (h("div", { key: 'e5ac2406b6adcf260fb30922ff526b50e45ace74' }, this.checkboxes.map((checkbox, index) => (h("ir-checkbox", { name: index.toString(), label: checkbox.text, checked: checkbox.checked || false })))));
    }
};

export { IrCheckBoxes as ir_checkboxes };
