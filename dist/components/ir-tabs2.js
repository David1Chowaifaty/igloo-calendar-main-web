import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irTabsCss = ".sc-ir-tabs-h{display:flex;align-items:center;position:relative;overflow-x:auto;gap:1rem;padding:0 1rem}.tab.sc-ir-tabs{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0rem;padding-bottom:1rem;transition:color 0.3s ease;user-select:none;background-color:transparent;border:none;outline:none;flex:1 1 0%;text-align:center;white-space:nowrap}.tab[data-disabled].sc-ir-tabs{cursor:auto}.tab.sc-ir-tabs:hover{opacity:80%}.tab[data-state='selected'].sc-ir-tabs,.tab[data-state='selected'].sc-ir-tabs:hover{color:var(--blue, #1e9ff2);opacity:100%}.active-indicator.sc-ir-tabs{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue, #1e9ff2)}";
const IrTabsStyle0 = irTabsCss;

const IrTabs = /*@__PURE__*/ proxyCustomElement(class IrTabs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.tabChanged = createEvent(this, "tabChanged", 7);
        /**
         * Array of tab objects containing id and label
         * @type {Tab[]}
         * @default []
         */
        this.tabs = [];
        /**
         * Whether the tabs are disabled
         * @type {boolean}
         * @default false
         */
        this.disabled = false;
        /**
         * Aria label for the tab list
         * @type {string}
         * @default 'Tabs'
         */
        this.ariaLabel = 'Tabs';
        this.remSize = (() => {
            const fontSize = getComputedStyle(document.documentElement).fontSize;
            return parseFloat(fontSize);
        })();
    }
    componentWillLoad() {
        var _a, _b;
        const tab = (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.find(t => t.id === this.initialTab);
        if (tab) {
            this.selectTab(tab);
        }
        else if (((_b = this.tabs) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            // Select first tab if no initial tab is specified
            this.selectTab(this.tabs[0]);
        }
    }
    // componentDidLoad() {
    //   this.updateActiveIndicator();
    // }
    disconnectedCallback() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    updateActiveIndicator() {
        // if (this.animationFrameId) {
        //   cancelAnimationFrame(this.animationFrameId);
        // }
        // this.animationFrameId = requestAnimationFrame(() => {
        //   const selectedTab = this.el.querySelector(`button.tab[data-state="selected"]`);
        //   if (selectedTab && this.activeIndicator) {
        //     const { left, width } = selectedTab.getBoundingClientRect();
        //     const parentLeft = this.el.getBoundingClientRect().left;
        //     const position = left - parentLeft;
        //     this.activeIndicator.style.width = `${width}px`;
        //     this.activeIndicator.style.transform = `translateX(${position}px)`;
        //   }
        // });
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        requestAnimationFrame(() => {
            const selectedTab = this.el.querySelector(`.tab[data-state="selected"]`);
            if (selectedTab) {
                const { left, width } = selectedTab.getBoundingClientRect();
                const parentLeft = this.el.getBoundingClientRect().left;
                const position = left - parentLeft - this.remSize;
                this.activeIndicator.style.width = `${width - this.remSize}px`;
                this.activeIndicator.style.transform = `translateX(${position}px)`;
            }
        });
    }
    selectTab(tab) {
        if (this.disabled)
            return;
        this._selectedTab = tab;
        this.updateActiveIndicator();
        this.tabChanged.emit(tab);
    }
    handleKeyDown(event, currentTab) {
        if (this.disabled)
            return;
        const currentIndex = this.tabs.findIndex(t => t.id === currentTab.id);
        let nextIndex = currentIndex;
        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                nextIndex = (currentIndex + 1) % this.tabs.length;
                break;
            case 'ArrowLeft':
                event.preventDefault();
                nextIndex = currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
                break;
            case 'Home':
                event.preventDefault();
                nextIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                nextIndex = this.tabs.length - 1;
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.selectTab(currentTab);
                return;
            default:
                return;
        }
        const nextTab = this.tabs[nextIndex];
        if (nextTab) {
            this.selectTab(nextTab);
            requestAnimationFrame(() => {
                const tabButton = this.el.querySelector(`button.tab[data-tab-id="${nextTab.id}"]`);
                if (tabButton) {
                    tabButton.focus();
                }
            });
        }
    }
    render() {
        return (h(Host, { key: '711657ebcd30b82212663dc8e3396465db1fd340', role: "tablist", "aria-label": this.ariaLabel, "aria-orientation": "horizontal" }, this.tabs.map(tab => {
            var _a, _b, _c;
            return (h("button", { class: "tab", key: tab.id, type: "button", "data-tab-id": tab.id, role: "tab", tabindex: ((_a = this._selectedTab) === null || _a === void 0 ? void 0 : _a.id) === tab.id ? 0 : -1, "aria-selected": ((_b = this._selectedTab) === null || _b === void 0 ? void 0 : _b.id) === tab.id ? 'true' : 'false', "aria-controls": `tabpanel-${tab.id}`, id: `tab-${tab.id}`, disabled: this.disabled, "data-state": ((_c = this._selectedTab) === null || _c === void 0 ? void 0 : _c.id) === tab.id ? 'selected' : undefined, onClick: () => this.selectTab(tab), onKeyDown: event => this.handleKeyDown(event, tab) }, tab.label));
        }), h("span", { key: '47c73e46ef8b486faa56b5fbf9c80095876d07a2', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    get el() { return this; }
    static get style() { return IrTabsStyle0; }
}, [2, "ir-tabs", {
        "tabs": [16],
        "initialTab": [1, "initial-tab"],
        "disabled": [4],
        "ariaLabel": [1, "aria-label"],
        "_selectedTab": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTabs);
            }
            break;
    } });
}

export { IrTabs as I, defineCustomElement as d };

//# sourceMappingURL=ir-tabs2.js.map