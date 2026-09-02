'use strict';

var index = require('./index-P5Mginch.js');
var direction = require('./direction-BKlLiim_.js');
require('./locales.store-v9LoZcAK.js');
require('./index-BLJXadKe.js');

const irTabsCss = () => `.sc-ir-tabs-h{display:flex;align-items:center;position:relative;overflow-x:auto;gap:1rem;padding:0 1rem}.tab.sc-ir-tabs{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0rem;padding-bottom:1rem;transition:color 0.3s ease;user-select:none;background-color:transparent;border:none;outline:none;flex:1 1 0%;text-align:center;white-space:nowrap}.tab[data-disabled].sc-ir-tabs{cursor:auto}.tab.sc-ir-tabs:hover{opacity:80%}.tab[data-state='selected'].sc-ir-tabs,.tab[data-state='selected'].sc-ir-tabs:hover{color:var(--blue, #1e9ff2);opacity:100%}.active-indicator.sc-ir-tabs{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue, #1e9ff2)}`;

const IrTabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabChanged = index.createEvent(this, "tabChanged");
    }
    get el() { return index.getElement(this); }
    /**
     * Array of tab objects containing id and label
     * @type {Tab[]}
     * @default []
     */
    tabs = [];
    /**
     * ID of the tab that should be selected initially
     * @type {string}
     * @default undefined
     */
    initialTab;
    /**
     * Whether the tabs are disabled
     * @type {boolean}
     * @default false
     */
    disabled = false;
    /**
     * Aria label for the tab list
     * @type {string}
     * @default 'Tabs'
     */
    ariaLabel = 'Tabs';
    _selectedTab;
    /**
     * Emitted when a tab is selected
     * @event tabChanged
     * @type {CustomEvent<Tab>}
     */
    tabChanged;
    activeIndicator;
    animationFrameId;
    componentWillLoad() {
        const tab = this.tabs?.find(t => t.id === this.initialTab);
        if (tab) {
            this.selectTab(tab);
        }
        else if (this.tabs?.length > 0) {
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
                const tabRect = selectedTab.getBoundingClientRect();
                // The indicator is absolutely positioned with no inset, so it starts at the strip's
                // inline start - which is the right edge under RTL, where a positive translateX walks
                // it the wrong way. Measure the offset on the inline axis and push it the same way.
                const position = direction.inlineOffset(tabRect, this.el.getBoundingClientRect()) - this.remSize;
                this.activeIndicator.style.width = `${tabRect.width - this.remSize}px`;
                this.activeIndicator.style.transform = `translateX(${position * direction.inlineSign()}px)`;
            }
        });
    }
    remSize = (() => {
        const fontSize = getComputedStyle(document.documentElement).fontSize;
        return parseFloat(fontSize);
    })();
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
            // Arrow keys move along the inline axis, so RTL swaps which key is "next".
            case 'ArrowRight':
            case 'ArrowLeft': {
                event.preventDefault();
                const forward = (event.key === 'ArrowRight') === (direction.inlineSign() === 1);
                nextIndex = forward ? (currentIndex + 1) % this.tabs.length : currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
                break;
            }
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
        return (index.h(index.Host, { key: 'cf7057c4b5dab69d68876a73f6b2dc9cab392549', role: "tablist", "aria-label": this.ariaLabel, "aria-orientation": "horizontal" }, this.tabs.map(tab => (index.h("button", { class: "tab", key: tab.id, type: "button", "data-tab-id": tab.id, role: "tab", tabindex: this._selectedTab?.id === tab.id ? 0 : -1, "aria-selected": this._selectedTab?.id === tab.id ? 'true' : 'false', "aria-controls": `tabpanel-${tab.id}`, id: `tab-${tab.id}`, disabled: this.disabled, "data-state": this._selectedTab?.id === tab.id ? 'selected' : undefined, onClick: () => this.selectTab(tab), onKeyDown: event => this.handleKeyDown(event, tab) }, tab.label))), index.h("span", { key: 'd966c3b2860f1df37b97cd2a92b4f2e6cdc67b31', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
};
IrTabs.style = irTabsCss();

exports.ir_tabs = IrTabs;
