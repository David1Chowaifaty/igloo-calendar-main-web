import { h } from "@stencil/core";
import { showToast } from "../../utils/utils";
export class IrTestCmp {
    el;
    ela;
    open = false;
    openDialog = false;
    toast(toast) {
        showToast(toast);
    }
    renderToastOptions() {
        return (h("div", { style: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
            } }, h("wa-button", { style: {
                minWidth: '110px',
                flex: '1',
            }, onClick: () => this.toast({
                title: 'Heads up',
                description: 'This is an info message.',
                type: 'info',
            }) }, "Info"), h("wa-button", { variant: "success", style: {
                minWidth: '110px',
                flex: '1',
            }, onClick: () => this.toast({
                title: 'Saved',
                description: 'Operation completed successfully!',
                type: 'success',
            }) }, "Success"), h("wa-button", { variant: "danger", style: {
                minWidth: '110px',
                flex: '1',
            }, onClick: () => this.toast({
                title: 'Failed',
                description: 'Something went wrong. Please try again.',
                type: 'error',
            }) }, "Danger"), h("wa-button", { variant: "warning", style: {
                minWidth: '110px',
                flex: '1',
            }, onClick: () => this.toast({
                title: 'Careful',
                description: 'Proceed with caution.',
                type: 'warning',
            }) }, "Warning"), h("wa-button", { variant: "brand", style: {
                minWidth: '120px',
                flex: '1',
            }, onClick: () => this.toast({
                title: 'Item archived',
                actionLabel: 'Undo',
                type: 'info',
            }) }, "With action"), h("wa-button", { style: {
                minWidth: '120px',
                flex: '1',
            }, onClick: () => this.toast({
                title: 'Persistent',
                description: 'Stays until closed.',
                type: 'info',
                duration: 0,
            }) }, "Persistent")));
    }
    render() {
        return (h("ir-page", { key: '33b7292b263ae5eee5a65c56a3ba66c05241b737', label: "Component Playground", description: "Test drawers, dialogs, OTP modals, and toast notifications." }, h("wa-card", { key: '4f0aea6d6edbd8773d8791b50311f11dc31904f2', appearance: "plain", style: { background: 'var(--wa-color-surface-default)' } }, h("div", { key: 'a3d30e65ed4968b65c0df238dd2f9cb276a2a2a3', style: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
            } }, h("wa-button", { key: '7875ed92a400eb6f250d0e035511e6dcf803ff67', style: {
                minWidth: '120px',
            }, onClick: () => (this.open = true) }, "Open drawer"), h("wa-button", { key: '8098a4bf9eda5dcaac1121696ada6d41fdc21971', style: {
                minWidth: '120px',
            }, onClick: () => (this.openDialog = true) }, "Open dialog"), h("wa-button", { key: 'e9f070cbbfb908ccf9f1a4737f68a450deeffb9a', style: {
                minWidth: '120px',
            }, onClick: () => this.ela?.openModal() }, "Open OTP")), h("wa-divider", { key: '32e112a02a5cdbb0a22dfa0e62f889f2cc132336' }), this.renderToastOptions()), h("ir-drawer", { key: '4e295eee2bb90d5664bb75ba99579e69db5d4339', label: "Toast examples", open: this.open, style: {
                color: '#1f2937',
            }, onDrawerHide: () => (this.open = false) }, this.renderToastOptions()), h("ir-dialog", { key: '017ecc9fcba691b62aeda5392fbf3c5a273499d3', label: "Notification center", open: this.openDialog, onIrDialogAfterHide: () => (this.openDialog = false) }, this.renderToastOptions()), h("ir-otp-modal", { key: '94f113ef6a65e3ca2c2cb9c995cf45e1df0d7bc2', ref: element => (this.ela = element), style: {
                position: 'relative',
                zIndex: '1000',
            } })));
    }
    static get is() { return "ir-test-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get states() {
        return {
            "open": {},
            "openDialog": {}
        };
    }
    static get elementRef() { return "el"; }
}
