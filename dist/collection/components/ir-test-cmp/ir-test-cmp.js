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
        return (h("ir-page", { key: '1d57f5639d520ebb54128735d55b8903ca997240', label: "Component Playground", description: "Test drawers, dialogs, OTP modals, and toast notifications." }, h("wa-card", { key: 'b928e2812eaf962d087797cc654320c1884ffe51', appearance: "plain", style: { background: 'var(--wa-color-surface-default)' } }, h("div", { key: '53ec486350d6b26b252b95f8731520946cdcd8b2', style: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
            } }, h("wa-button", { key: 'f4e2642a4b09909b12ea711ae12dba20b468e2ed', style: {
                minWidth: '120px',
            }, onClick: () => (this.open = true) }, "Open drawer"), h("wa-button", { key: 'fda8f4a8ae8998ddf3ee44e0f893232d1bcf987d', style: {
                minWidth: '120px',
            }, onClick: () => (this.openDialog = true) }, "Open dialog"), h("wa-button", { key: '58f4a2e63c1583184f7a7f25766680f59aa5d1c4', style: {
                minWidth: '120px',
            }, onClick: () => this.ela?.openModal() }, "Open OTP")), h("wa-divider", { key: '3a9438692dc6c5a9611bf9836cafabf623afd860' }), this.renderToastOptions()), h("ir-drawer", { key: '518a19e5b01bd5453767e368cdfc7473c2c70cec', label: "Toast examples", open: this.open, style: {
                color: '#1f2937',
            }, onDrawerHide: () => (this.open = false) }, this.renderToastOptions()), h("ir-dialog", { key: 'ee32a6a4d169f0a2926a6b6fb72ce3cd42e72e03', label: "Notification center", open: this.openDialog, onIrDialogAfterHide: () => (this.openDialog = false) }, this.renderToastOptions()), h("ir-otp-modal", { key: '9f72d4562c2bb3b839ede65872b0190825ddfe83', ref: element => (this.ela = element), style: {
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
