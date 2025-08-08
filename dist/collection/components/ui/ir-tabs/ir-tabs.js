import { Host, h } from "@stencil/core";
export class IrTabs {
    constructor() {
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
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ui/ir-tabs/ir-tabs.tsx",
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
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ui/ir-tabs/ir-tabs.tsx",
                            "id": "src/components/ui/ir-tabs/ir-tabs.tsx::Tab"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-tabs.js.map
