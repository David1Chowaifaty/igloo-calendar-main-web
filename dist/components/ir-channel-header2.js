import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irChannelHeaderCss = ".sc-ir-channel-header-h{display:block;position:relative;padding:0;margin:0;border-bottom:1px solid #e4e5ec}ul.sc-ir-channel-header{display:flex;align-items:center;gap:2rem;padding:0}li.sc-ir-channel-header{list-style:none !important}.tab.sc-ir-channel-header{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0;transition:color 0.3s ease;user-select:none}.tab[data-disabled].sc-ir-channel-header{cursor:auto}.tab.sc-ir-channel-header:hover{opacity:80%}.tab[data-state='selected'].sc-ir-channel-header,.tab[data-state='selected'].sc-ir-channel-header:hover{color:var(--blue);opacity:100%}.active-indicator.sc-ir-channel-header{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue)}";
const IrChannelHeaderStyle0 = irChannelHeaderCss;

const IrChannelHeader = /*@__PURE__*/ proxyCustomElement(class IrChannelHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.tabChanged = createEvent(this, "tabChanged", 7);
    }
    get el() { return this; }
    headerTitles = [];
    selectedIndex = 0;
    tabChanged;
    activeIndicator;
    animationFrameId;
    componentDidLoad() {
        this.updateActiveIndicator();
    }
    disconnectedCallback() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleTabSelection(index) {
        this.selectedIndex = index;
        this.updateActiveIndicator();
        this.tabChanged.emit(this.headerTitles[this.selectedIndex].id);
    }
    updateActiveIndicator() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        requestAnimationFrame(() => {
            const selectedTab = this.el.querySelector(`li.tab[data-state="selected"]`);
            if (selectedTab) {
                const { left, width } = selectedTab.getBoundingClientRect();
                const parentLeft = this.el.getBoundingClientRect().left;
                const position = left - parentLeft;
                this.activeIndicator.style.width = `${width}px`;
                this.activeIndicator.style.transform = `translateX(${position}px)`;
            }
        });
    }
    render() {
        return (h(Host, { key: '290558d2f287d04070ae1834569f5a71b2792394' }, h("ul", { key: '0a74aed11b151207fb0033205b261a2009957a00', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: '665de509add2837c7d2f3d88004ec6385ac13c5b', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    static get style() { return IrChannelHeaderStyle0; }
}, [2, "ir-channel-header", {
        "headerTitles": [16],
        "selectedIndex": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-channel-header"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-channel-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrChannelHeader);
            }
            break;
    } });
}

export { IrChannelHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-channel-header2.js.map