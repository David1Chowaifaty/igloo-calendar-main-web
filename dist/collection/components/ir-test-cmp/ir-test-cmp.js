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
        return (h("ir-page", { key: 'be5681fed8763624423623a65165b0fe1dd29db2', label: "Component Playground", description: "Test drawers, dialogs, OTP modals, and toast notifications." }, h("wa-card", { key: '0e2e3f3f8bc6e5d4992653be38bb6ae31ba57f19', appearance: "plain", style: { background: 'var(--wa-color-surface-default)' } }, h("div", { key: 'd1979a202e012a071eaceea1329540f248748385', style: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
            } }, h("wa-button", { key: 'ee43a88de3b058ecdd17d56dd6f0d0dd76185bf5', style: {
                minWidth: '120px',
            }, onClick: () => (this.open = true) }, "Open drawer"), h("wa-button", { key: 'c91433ac284473f5008c94609b2e04e4920c5921', style: {
                minWidth: '120px',
            }, onClick: () => (this.openDialog = true) }, "Open dialog"), h("wa-button", { key: '8988974d0bcde311ef0f5ce9bab3dfa67267555b', style: {
                minWidth: '120px',
            }, onClick: () => this.ela?.openModal() }, "Open OTP")), h("wa-divider", { key: '1bfcfe5ce6c49580ddee3a8387fe314c62e81f6a' }), this.renderToastOptions()), h("ir-drawer", { key: '0129ecea7d422e762b2faf71a90ba6f8e4c1f1a1', label: "Toast examples", open: this.open, style: {
                color: '#1f2937',
            }, onDrawerHide: () => (this.open = false) }, this.renderToastOptions()), h("ir-dialog", { key: '804cca95f6eb12b0049556121b688d305c71c3c0', label: "Notification center", open: this.openDialog, onIrDialogAfterHide: () => (this.openDialog = false) }, this.renderToastOptions()), h("ir-otp-modal", { key: 'bd0d59945af2d399feaacede0d63c6e96d6e40ed', ref: element => (this.ela = element), style: {
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
