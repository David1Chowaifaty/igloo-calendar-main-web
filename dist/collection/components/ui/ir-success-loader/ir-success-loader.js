import { Host, h } from "@stencil/core";
export class IrSuccessLoader {
    constructor() {
        /**
         * How long the spinner should be shown before transitioning to the success icon.
         * Value is expressed in milliseconds.
         */
        this.spinnerDuration = 1500;
        /**
         * How long the success icon should be shown before the loader dispatches the completion event.
         * Value is expressed in milliseconds.
         */
        this.successDuration = 1000;
        /**
         * Whether the loader should automatically start its cycle when it becomes active.
         */
        this.autoStart = true;
        /**
         * Controls the visibility of the loader. Setting this to `true` starts the spinner/success cycle.
         */
        this.active = true;
        this.phase = 'spinner';
    }
    componentWillLoad() {
        if (this.autoStart && this.active) {
            this.startCycle();
        }
    }
    disconnectedCallback() {
        this.clearTimers();
    }
    onActiveChange(isActive) {
        if (isActive) {
            if (this.autoStart) {
                this.startCycle();
            }
        }
        else {
            this.resetCycle();
        }
    }
    onDurationChange() {
        if (this.active && this.autoStart) {
            this.startCycle();
        }
    }
    startCycle() {
        this.clearTimers();
        this.phase = 'spinner';
        const spinnerDelay = Math.max(0, Number(this.spinnerDuration) || 0);
        if (spinnerDelay === 0) {
            this.showSuccess();
            return;
        }
        this.spinnerTimer = window.setTimeout(() => this.showSuccess(), spinnerDelay);
    }
    showSuccess() {
        this.phase = 'success';
        const successDelay = Math.max(0, Number(this.successDuration) || 0);
        if (successDelay === 0) {
            this.handleCompletion();
            return;
        }
        this.successTimer = window.setTimeout(() => this.handleCompletion(), successDelay);
    }
    handleCompletion() {
        this.loaderComplete.emit();
        this.active = false;
    }
    resetCycle() {
        this.clearTimers();
        this.phase = 'spinner';
    }
    clearTimers() {
        if (this.spinnerTimer) {
            clearTimeout(this.spinnerTimer);
            this.spinnerTimer = undefined;
        }
        if (this.successTimer) {
            clearTimeout(this.successTimer);
            this.successTimer = undefined;
        }
    }
    render() {
        return (h(Host, { key: '86eb1d153bffca344a30c9b61b9c81949b01ef83' }, this.phase === 'spinner' ? (h("svg", { part: "spinner", width: "18", height: "18", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z", class: "spinner" }))) : (h("ir-icons", { part: "check", name: "check", style: { color: '#45b16d' } }))));
    }
    static get is() { return "ir-success-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-success-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-success-loader.css"]
        };
    }
    static get properties() {
        return {
            "spinnerDuration": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How long the spinner should be shown before transitioning to the success icon.\nValue is expressed in milliseconds."
                },
                "getter": false,
                "setter": false,
                "attribute": "spinner-duration",
                "reflect": false,
                "defaultValue": "1500"
            },
            "successDuration": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How long the success icon should be shown before the loader dispatches the completion event.\nValue is expressed in milliseconds."
                },
                "getter": false,
                "setter": false,
                "attribute": "success-duration",
                "reflect": false,
                "defaultValue": "1000"
            },
            "autoStart": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the loader should automatically start its cycle when it becomes active."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-start",
                "reflect": false,
                "defaultValue": "true"
            },
            "active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls the visibility of the loader. Setting this to `true` starts the spinner/success cycle."
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "phase": {}
        };
    }
    static get events() {
        return [{
                "method": "loaderComplete",
                "name": "loaderComplete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emit when the loader finishes the success state and should be hidden by the parent."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "onActiveChange"
            }, {
                "propName": "spinnerDuration",
                "methodName": "onDurationChange"
            }, {
                "propName": "successDuration",
                "methodName": "onDurationChange"
            }];
    }
}
//# sourceMappingURL=ir-success-loader.js.map
