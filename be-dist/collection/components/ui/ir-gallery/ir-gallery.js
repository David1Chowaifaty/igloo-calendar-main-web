import { onAppDataChange } from "../../../stores/app.store";
import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
export class IrGallery {
    constructor() {
        this.images = [];
        this.totalImages = 0;
    }
    componentWillLoad() {
        onAppDataChange('dir', () => {
            this.reinitializeSwiper();
        });
    }
    componentDidLoad() {
        this.initializeSwiper();
    }
    initializeSwiper() {
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation],
            simulateTouch: false,
            allowTouchMove: false,
            direction: 'horizontal',
            touchMoveStopPropagation: false,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
        });
    }
    reinitializeSwiper() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true);
        }
        this.initializeSwiper();
    }
    render() {
        return (h("div", { key: 'ae1ea1090a27665af954aa52d2ccc7d9b769ad6a', class: "gallery-container" }, this.totalImages > 0 && (h("button", { key: 'ba351b82afa79287340677299d472d81a1612174', onClick: () => this.openGallery.emit(null), class: "total-images-number" }, h("svg", { key: 'd7c0002a05d2a285ec1082774eaec1cecdefc297', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "15.75", viewBox: "0 0 576 512" }, h("path", { key: '61367a0171b4834843162cf8f41d558dc55b4180', fill: "currentColor", d: "M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '35b8f002e424b3960149eeba85952e5bf4334d2e' }, this.totalImages, " +"))), h("div", { key: '8715e84b95dc823e5bb08a15bdf38a0a40f40c08', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: 'c0b064378588fe1562581dbb2f71fc7bb8861ada', class: "swiper-wrapper" }, this.images.map(image => (h("div", { class: "swiper-slide" }, h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery")), h("img", { onClick: () => this.openGallery.emit(null), importance: "high", draggable: false, src: image.url, alt: image.alt }))))), h("div", { key: '4b26b91ea463b8947ac0642740ed3a2c962de2cb', class: "swiper-button-prev", ref: el => (this.prevEl = el) }, h("svg", { key: '64bccde5d4e88a6203cabc8c89be8e135299f43a', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '28329b43ff6a8a04ceeb6a384e85b50dd6512db4', d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: '3f804466b21baf369a7cb797603bc717024b12ad', class: "swiper-button-next", ref: el => (this.nextEl = el) }, h("svg", { key: '2cee61e0a6c6e1efb3e883491bf9b2671ee22172', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '41612dc7ff6eabcf20d5608151e0d816a60517b5', d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), h("div", { key: 'f9f7348b76fb3145854630c5439cbccd118530b4', class: "gallery" }, this.images.map(image => (h("figure", { class: "gallery-item" }, h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery")), h("img", { onClick: () => this.openGallery.emit(null), src: image.url, alt: image.alt })))))));
    }
    static get is() { return "ir-gallery"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-gallery.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-gallery.css"]
        };
    }
    static get properties() {
        return {
            "images": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ url: string; alt: string }[]",
                    "resolved": "{ url: string; alt: string; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "totalImages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "total-images",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get events() {
        return [{
                "method": "openGallery",
                "name": "openGallery",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-gallery.js.map
