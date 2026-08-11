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
        return (h("ir-page", { key: 'ce62ed33f459f473022d9d74d7e0bbdfee660727', label: "Component Playground", description: "Test drawers, dialogs, OTP modals, and toast notifications." }, h("wa-card", { key: '824ca8efdfa903b84602ad31ae1b6d19a6fcfefa', appearance: "plain", style: { background: 'var(--wa-color-surface-default)' } }, h("div", { key: 'd77b918a8c12ef77c5be92ff1dfe2230aed88066', style: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
            } }, h("wa-button", { key: '0123f20f3234cc7eeda75cb824562fb855d49e9d', style: {
                minWidth: '120px',
            }, onClick: () => (this.open = true) }, "Open drawer"), h("wa-button", { key: 'c121bda7b989b582b7b8702ab41d2015f13ff04b', style: {
                minWidth: '120px',
            }, onClick: () => (this.openDialog = true) }, "Open dialog"), h("wa-button", { key: '92149f44bd8b74cadabd1d236f26ff88e313c83a', style: {
                minWidth: '120px',
            }, onClick: () => this.ela?.openModal() }, "Open OTP")), h("wa-divider", { key: 'be9bcd51df1a173fe47e28661707cfce7c1a52a5' }), this.renderToastOptions()), h("ir-drawer", { key: '10b000b513bbef621e0211abeddf0e2fd1e7992d', label: "Toast examples", open: this.open, style: {
                color: '#1f2937',
            }, onDrawerHide: () => (this.open = false) }, this.renderToastOptions()), h("ir-dialog", { key: '96d541782a602aac604ea741c8b6dac87e17f144', label: "Notification center", open: this.openDialog, onIrDialogAfterHide: () => (this.openDialog = false) }, this.renderToastOptions()), h("ir-otp-modal", { key: '0dc4323619d41578f594d7cde0ab9715a1813df3', ref: element => (this.ela = element), style: {
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
