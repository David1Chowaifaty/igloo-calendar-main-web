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
        return (h("ir-page", { key: 'f279456328bb490afa98529681e55afe3893db0b', label: "Component Playground", description: "Test drawers, dialogs, OTP modals, and toast notifications." }, h("wa-card", { key: '4868f39870bc6781fb221f10b79a1ca4bc2d6a22', appearance: "plain", style: { background: 'var(--wa-color-surface-default)' } }, h("div", { key: '721a1e68f05fc9ea16d00963ccbfc1853d9b8347', style: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
            } }, h("wa-button", { key: '38e8f0b52396c025c5df22b4c2b0204919667797', style: {
                minWidth: '120px',
            }, onClick: () => (this.open = true) }, "Open drawer"), h("wa-button", { key: '355852f3a3b9958239fd2e9d2b527bae65dbf313', style: {
                minWidth: '120px',
            }, onClick: () => (this.openDialog = true) }, "Open dialog"), h("wa-button", { key: '9acd3b2dc52c4457dd50b8997b7a3e3dd5a7509b', style: {
                minWidth: '120px',
            }, onClick: () => this.ela?.openModal() }, "Open OTP")), h("wa-divider", { key: '619fa6ee2a7a8b7792198107c63db42f4fa7f0a2' }), this.renderToastOptions()), h("ir-drawer", { key: '3c703d9adcebdeff19ccac99ddc5b60b84e8ca81', label: "Toast examples", open: this.open, style: {
                color: '#1f2937',
            }, onDrawerHide: () => (this.open = false) }, this.renderToastOptions()), h("ir-dialog", { key: '0112546ac56e2500715502f51cffb534990f8f90', label: "Notification center", open: this.openDialog, onIrDialogAfterHide: () => (this.openDialog = false) }, this.renderToastOptions()), h("ir-otp-modal", { key: '8df9d1619529a231f67b452cbf16f88391a17893', ref: element => (this.ela = element), style: {
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
