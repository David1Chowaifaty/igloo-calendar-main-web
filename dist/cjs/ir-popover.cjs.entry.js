'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');

const irPopoverCss = ".sc-ir-popover-h{display:block;width:100%}*.sc-ir-popover{box-sizing:border-box}.popover-title.sc-ir-popover{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0}.popover-container.sc-ir-popover{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-popover{opacity:1}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleMouseEnter = () => {
            if (!this.showPopover) {
                return;
            }
            if (this.showPopover) {
                this.isHovered = true;
            }
        };
        this.handleMouseLeave = () => {
            if (!this.showPopover) {
                return;
            }
            this.isHovered = false;
        };
        this.popoverTitle = undefined;
        this.isHovered = false;
        this.showPopover = false;
        this.irPopoverLeft = '10px';
    }
    componentWillLoad() {
        this.checkTitleWidth();
    }
    checkTitleWidth() {
        requestAnimationFrame(() => {
            const titleElement = this.el.querySelector('.popover-title');
            if (titleElement) {
                const width = titleElement.scrollWidth;
                this.showPopover = width > 150; // Show popover if title width exceeds 170px
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '9718d2df7e52f118ed97a90c8df99fb4239821a1', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: '0b76f0b1d6c5ca7d366708732fb6c6f1f87cce72', class: "popover-title", onMouseLeave: this.handleMouseLeave, onMouseEnter: this.handleMouseEnter }, this.popoverTitle), this.showPopover && this.isHovered && (index.h("div", { key: 'ee3e40ce8a9706e4bf6a156e7c2757c47b84630d', "data-state": "show", class: "popover-container" }, this.popoverTitle))));
    }
    get el() { return index.getElement(this); }
};
IrPopover.style = IrPopoverStyle0;

exports.ir_popover = IrPopover;

//# sourceMappingURL=ir-popover.cjs.entry.js.map