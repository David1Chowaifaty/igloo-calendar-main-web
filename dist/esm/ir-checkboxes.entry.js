import { r as registerInstance, c as createEvent, h } from './index-jhiFt_tX.js';

const IrCheckBoxes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkboxesChange = createEvent(this, "checkboxesChange");
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
        return (h("div", { key: 'd624f0276c2546e0f1c06585da5e6820c94183ce' }, this.checkboxes.map((checkbox, index) => (h("ir-checkbox", { name: index.toString(), label: checkbox.text, checked: checkbox.checked || false })))));
    }
};

export { IrCheckBoxes as ir_checkboxes };
//# sourceMappingURL=ir-checkboxes.entry.js.map

//# sourceMappingURL=ir-checkboxes.entry.js.map