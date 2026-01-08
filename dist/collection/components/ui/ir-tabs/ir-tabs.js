import { Host, h } from "@stencil/core";
export class IrTabs {
    el;
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
                const { left, width } = selectedTab.getBoundingClientRect();
                const parentLeft = this.el.getBoundingClientRect().left;
                const position = left - parentLeft - this.remSize;
                this.activeIndicator.style.width = `${width - this.remSize}px`;
                this.activeIndicator.style.transform = `translateX(${position}px)`;
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
        return (h(Host, { key: '9baa2b584d9d12af86e297a27d2053f7f0ffe957', role: "tablist", "aria-label": this.ariaLabel, "aria-orientation": "horizontal" }, this.tabs.map(tab => (h("button", { class: "tab", key: tab.id, type: "button", "data-tab-id": tab.id, role: "tab", tabindex: this._selectedTab?.id === tab.id ? 0 : -1, "aria-selected": this._selectedTab?.id === tab.id ? 'true' : 'false', "aria-controls": `tabpanel-${tab.id}`, id: `tab-${tab.id}`, disabled: this.disabled, "data-state": this._selectedTab?.id === tab.id ? 'selected' : undefined, onClick: () => this.selectTab(tab), onKeyDown: event => this.handleKeyDown(event, tab) }, tab.label))), h("span", { key: 'f70d84046260d2a9c3580bafa2a263dc78495343', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    static get is() { return "ir-tabs"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tabs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tabs.css"]
        };
    }
    static get properties() {
        return {
            "tabs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Tab[]",
                    "resolved": "Tab[]",
                    "references": {
                        "Tab": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-tabs/ir-tabs.tsx",
                            "id": "src/components/ui/ir-tabs/ir-tabs.tsx::Tab"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "type",
                            "text": "{Tab[]}"
                        }, {
                            "name": "default",
                            "text": "[]"
                        }],
                    "text": "Array of tab objects containing id and label"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "initialTab": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "type",
                            "text": "{string}"
                        }, {
                            "name": "default",
                            "text": "undefined"
                        }],
                    "text": "ID of the tab that should be selected initially"
                },
                "getter": false,
                "setter": false,
                "attribute": "initial-tab",
                "reflect": false
            },
            "disabled": {
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
                    "tags": [{
                            "name": "type",
                            "text": "{boolean}"
                        }, {
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "Whether the tabs are disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "type",
                            "text": "{string}"
                        }, {
                            "name": "default",
                            "text": "'Tabs'"
                        }],
                    "text": "Aria label for the tab list"
                },
                "getter": false,
                "setter": false,
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "'Tabs'"
            }
        };
    }
    static get states() {
        return {
            "_selectedTab": {}
        };
    }
    static get events() {
        return [{
                "method": "tabChanged",
                "name": "tabChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "event",
                            "text": "tabChanged"
                        }, {
                            "name": "type",
                            "text": "{CustomEvent<Tab>}"
                        }],
                    "text": "Emitted when a tab is selected"
                },
                "complexType": {
                    "original": "Tab",
                    "resolved": "{ id: string; label: string; }",
                    "references": {
                        "Tab": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-tabs/ir-tabs.tsx",
                            "id": "src/components/ui/ir-tabs/ir-tabs.tsx::Tab"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-tabs.js.map
