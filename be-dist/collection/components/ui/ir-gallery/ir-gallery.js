import { onAppDataChange } from "../../../stores/app.store";
import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
export class IrGallery {
    constructor() {
        this.images = [];
        this.totalImages = 0;
        this.maxLength = undefined;
        this.disableCarouselClick = false;
        this.enableCarouselSwipe = false;
    }
    componentWillLoad() {
        if (!this.maxLength) {
            this.maxLength = this.totalImages;
        }
        onAppDataChange('dir', () => {
            this.reinitializeSwiper();
        });
    }
    componentDidLoad() {
        this.initializeSwiper();
    }
    initializeSwiper() {
        if (this.swiperInstance) {
            return;
        }
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation],
            simulateTouch: this.enableCarouselSwipe,
            allowTouchMove: this.enableCarouselSwipe,
            direction: 'horizontal',
            touchMoveStopPropagation: this.enableCarouselSwipe,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
        });
    }
    reinitializeSwiper() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true);
            this.swiperInstance = null;
        }
        this.initializeSwiper();
    }
    handleOpenGallery(index = 0) {
        if (this.totalImages <= 1) {
            return;
        }
        this.openGallery.emit(index);
    }
    render() {
        return (h("div", { key: 'f5b8dcdb72110a39d0773abad36303b1ec49d41d', class: "gallery-container" }, this.totalImages > 1 && (h("button", { key: '04b665d64971cb4fb980da9b7e4362d52e7dcd78', onClick: () => this.handleOpenGallery(), class: "total-images-number" }, h("svg", { key: 'b01f3422bda46c82f777ea5ae881a941293f50dd', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "15.75", viewBox: "0 0 576 512" }, h("path", { key: 'fbc011529c18f87e2b0628b7905a1faaf43e8062', fill: "currentColor", d: "M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '971779aa93d43301c8ff6315e0217393bfa9ff0e' }, this.totalImages, " +"))), h("div", { key: 'e3347224ef53c108f39a89a833c76159e564f9fa', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: 'b92c22a8f4603a6aa49e75f1582597ebfc78936e', class: "swiper-wrapper" }, this.images.map(image => (h("div", { class: "swiper-slide", "data-swipable": this.enableCarouselSwipe }, !this.disableCarouselClick && (h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery"))), h("img", { "data-disabled": this.disableCarouselClick, onClick: () => {
                if (this.disableCarouselClick) {
                    return;
                }
                this.handleOpenGallery();
            }, importance: "high", draggable: false, src: image.url, alt: image.alt }))))), h("div", { key: 'ea66d75fd8b7fa4ef711fa73032918c19b9ef64f', class: "swiper-button-prev", ref: el => (this.prevEl = el) }, h("svg", { key: 'c5499e74c5dff710706bf760caa655b8de198e2c', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '0a302701d230785619f6e51b381b4ede626d9ef9', d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: 'dad02ce4f976977f78c0b6fd69f4904fbfd831cf', class: "swiper-button-next", ref: el => (this.nextEl = el) }, h("svg", { key: '6b7ba5c1edff410e908675380b19bb45f317a9a2', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: 'e1dea61ad5d74c9d664283f93ac17518fcada242', d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), h("div", { key: 'e0c709d96d25fd4d435edfc21635593f3ae83238', class: 'gallery', "data-images": this.images.length }, this.images.slice(0, this.maxLength).map((image, idx) => (h("figure", { class: "gallery-item" }, h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery")), h("img", { onClick: () => this.handleOpenGallery(idx), src: image.url, alt: image.alt })))))));
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
            },
            "maxLength": {
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
                "attribute": "max-length",
                "reflect": false
            },
            "disableCarouselClick": {
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
                    "tags": [],
                    "text": ""
                },
                "attribute": "disable-carousel-click",
                "reflect": false,
                "defaultValue": "false"
            },
            "enableCarouselSwipe": {
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
                    "tags": [],
                    "text": ""
                },
                "attribute": "enable-carousel-swipe",
                "reflect": false,
                "defaultValue": "false"
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
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-gallery.js.map
