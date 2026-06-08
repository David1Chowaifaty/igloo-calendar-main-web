import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './ir-agent-contract2.js';
import { d as defineCustomElement$a } from './ir-agent-editor-form2.js';
import { d as defineCustomElement$9 } from './ir-agent-profile2.js';
import { d as defineCustomElement$8 } from './ir-country-picker2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-drawer2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-input-text2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const irAgentEditorDrawerCss = ".sc-ir-agent-editor-drawer-h{display:block}.agent-form__tab-group.sc-ir-agent-editor-drawer::part(nav){position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}";
const IrAgentEditorDrawerStyle0 = irAgentEditorDrawerCss;

const IrAgentEditorDrawer = /*@__PURE__*/ proxyCustomElement(class IrAgentEditorDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.agentEditorClose = createEvent(this, "agentEditorClose", 7);
    }
    open = false;
    agent;
    countries;
    setupEntries;
    currentTab = 'profile';
    loading;
    agentEditorClose;
    baseId = `agent-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.currentTab = 'profile';
        this.agentEditorClose.emit();
    }
    // private handleTabChange(e: CustomEvent<{ name: String }>) {
    //   this.currentTab = (e.detail.name.toString() ?? 'profile') as 'profile' | 'contract';
    // }
    render() {
        const isEditMode = this.agent?.id !== -1;
        return (h(Host, { key: 'f5c1f9d1105a2e5242449abfdbe4945a1d39a91c', "data-testid": "agent-editor-drawer" }, h("ir-drawer", { key: '6d2064c45fd61833cd017fa269296647295c12ea', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? 'Edit Agent' : 'New Agent', open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
        // <wa-tab-group class="agent-form__tab-group" activation='manual' active={this.currentTab.toString()} onwa-tab-show={e => this.handleTabChange(e)}>
        //   <wa-tab panel="profile" >Profile</wa-tab>
        //   <wa-tab disabled={!isEditMode} panel="contract">Contract</wa-tab>
        //   <wa-tab-panel name="profile" active={this.currentTab === "profile"}>
        //     {this.currentTab === 'profile' && <ir-agent-profile formId={formId} agent={this.agent}></ir-agent-profile>}
        //   </wa-tab-panel>
        //   <wa-tab-panel name="contract" active={this.currentTab === "contract"}>
        //     {this.currentTab === 'contract' && <ir-agent-contract formId={formId} agent={this.agent}></ir-agent-contract>}
        //   </wa-tab-panel>
        // </wa-tab-group>
        h("ir-agent-editor-form", { key: '37c1230f7a486d6ba43bb5059971262f013d0fb0', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), h("div", { key: '66681bcd65dae3852b789cf3f72190cbfb6cc8b5', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, h("ir-custom-button", { key: 'a821d3f357160f40e11b14bc02a0b19fa4bf89a9', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '49e7507185b5c724e9afbc5a686ef137d07e37a7', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "medium", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, "Save"), this.agent?.id !== -1 && (h("ir-custom-button", { key: '59af1e746863cf50f62202231c5ae656c88bf7be', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "medium", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, "Save & Close"))))));
    }
    static get style() { return IrAgentEditorDrawerStyle0; }
}, [2, "ir-agent-editor-drawer", {
        "open": [516],
        "agent": [16],
        "countries": [16],
        "setupEntries": [16],
        "currentTab": [32],
        "loading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-editor-drawer", "ir-agent-contract", "ir-agent-editor-form", "ir-agent-profile", "ir-country-picker", "ir-custom-button", "ir-drawer", "ir-input", "ir-input-text", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-editor-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentEditorDrawer);
            }
            break;
        case "ir-agent-contract":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-agent-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-agent-profile":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrAgentEditorDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-agent-editor-drawer2.js.map