import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';
import { v as v4 } from './v4-964634d6.js';

const irRadioCss = ".sc-ir-radio-h{display:block}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange", 7);
        /**
         * Whether the checkbox is checked.
         */
        this.checked = false;
        /**
         * The unique ID of the checkbox element.
         */
        this.radioBoxId = v4();
        /**
         * Internal state tracking whether the checkbox is currently checked.
         */
        this.currentChecked = false;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    /**
     * Watcher for the `checked` property. Syncs internal state with external prop changes.
     */
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    /**
     * Handles user interaction with the checkbox and updates its state.
     */
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h("div", { key: '818b296d541633b93665632215dec012f469b2c1', class: "input-group" }, h("label", { key: '419688dd5648d45f4fc22541a143c1e97c205ab8', class: "check-container radio-container" }, h("span", { key: 'c176c9645e9e7081be95ca611dec3ce6de40beae' }, this.label), h("input", { key: 'c3d5fe4a868a41631e318b6aaaa6f56cacec5935', type: "radio", value: "000", title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: 'ae6bdf070fe68bf707101007f97e249461488a0d', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

export { IrRadio as ir_radio };

//# sourceMappingURL=ir-radio.entry.js.map