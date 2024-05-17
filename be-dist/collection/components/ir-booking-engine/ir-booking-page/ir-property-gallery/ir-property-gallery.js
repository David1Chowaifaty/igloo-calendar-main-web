import app_store from "../../../../stores/app.store";
import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPropertyGallery {
    constructor() {
        this.property_state = 'gallery';
        this.roomType = undefined;
    }
    handleOpenGallery() {
        if (window.innerWidth > 650) {
            this.irDialog.openModal();
        }
    }
    handleOpenCarouselGallery() {
        this.irDialog.openModal();
    }
    showPlanLimitations(withRoomSize = true) {
        var _a, _b, _c, _d;
        if (!this.roomType) {
            return null;
        }
        const maxNumber = ((_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.occupancy_max) === null || _b === void 0 ? void 0 : _b.adult_nbr) + ((_d = (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.occupancy_max) === null || _d === void 0 ? void 0 : _d.children_nbr);
        if (maxNumber > 7) {
            return (h("div", { class: "pointer-events-none absolute -bottom-1 z-40 flex w-full items-center justify-between bg-white/80 px-2 py-1 pb-2 text-sm " }, h("div", { class: "flex items-center gap-1" }, h("p", null, "Maximum"), h("div", { class: "ml-1 flex items-end" }, h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "user" }), h("p", null, this.roomType.occupancy_max.adult_nbr)), this.roomType.occupancy_max.children_nbr > 0 && (h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "child" }), h("p", null, this.roomType.occupancy_max.children_nbr))))), withRoomSize && (h("p", null, this.roomType.size, h("span", { class: "ordinal" }, "m", h("sup", null, "2"))))));
        }
        return (h("div", { class: "pointer-events-none absolute -bottom-1 z-40 flex w-full items-center justify-between bg-white/80 px-2 py-1 pb-2 text-sm " }, h("div", { class: "flex items-center" }, h("p", null, "Maximum"), h("div", { class: "ml-1 flex items-center" }, [...new Array(this.roomType.occupancy_max.adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" }))))), withRoomSize && (h("p", null, this.roomType.size, h("span", { class: "ordinal" }, "m", h("sup", null, "2"))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const images = this.property_state === 'carousel' ? this.roomType.images : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.images;
        return (h("div", { key: '4835889ccbf650535228fbb366d725dc6201682b' }, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.images.length, images: (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.map(i => ({ url: i.url, alt: i.tooltip })).slice(0, 5) })) : (h(Fragment, null, h("div", { class: "flex flex-wrap items-center gap-2 py-2 text-sm font-normal text-gray-700 md:hidden" }, h("ir-accomodations", { bookingAttributes: {
                max_occupancy: this.roomType.occupancy_max.adult_nbr,
                bedding_setup: this.roomType.bedding_setup,
            }, amenities: (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.amenities })), h("div", { class: "carousel-container relative h-48 w-full rounded-md   md:hidden" }, this.roomType.images.length === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), class: "h-full w-full cursor-pointer rounded-[var(--radius,8px)] object-cover ", src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip })) : (h("ir-carousel", { slides: (_g = (_f = this.roomType) === null || _f === void 0 ? void 0 : _f.images) === null || _g === void 0 ? void 0 : _g.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), this.showPlanLimitations()), h("div", { class: "hidden py-2 md:block" }, h("div", { class: "carousel-container relative mb-1 w-full rounded-md md:max-h-[200px] md:w-auto xl:max-h-[250px] " }, ((_h = this.roomType.images) === null || _h === void 0 ? void 0 : _h.length) === 1 ? (h(Fragment, null, h("img", { onClick: () => this.irDialog.openModal(), src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip, class: "h-full w-full cursor-pointer rounded-[var(--radius,8px)] object-cover " }), this.showPlanLimitations())) : (h(Fragment, null, h("ir-carousel", { slides: (_j = this.roomType.images) === null || _j === void 0 ? void 0 : _j.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) }), this.showPlanLimitations()))), h("ir-button", { onButtonClick: () => this.irDialog.openModal(), variants: "link", label: "More details", buttonStyles: { paddingLeft: '0' } })))), h("ir-dialog", { key: '04877aeb92c0323237185cc2924d82c76622217d', ref: el => (this.irDialog = el) }, h("div", { key: '3f68db49ccf7abaef8e0cd431cabfb2235f76c7e', slot: "modal-body", class: "modal-container max-h-[80vh] overflow-y-auto px-4 pb-4  pt-0 md:p-4 md:pt-0" }, h("div", { key: '759986d3a59bb0214042faddb9c01bd384c628b4', class: " sticky top-0 z-50 mb-2 flex w-full  items-center justify-between bg-white py-2 md:pt-4" }, h("h2", { key: 'a3f40bfcecb5661f967034d0f5e31ce1cc7119ef', class: "text-lg font-semibold md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.name), h("ir-button", { key: '7911e0f5c9e2a6301d1dc7b8e8a45145dcfa20ab', variants: "icon", onButtonClick: () => this.irDialog.closeModal() }, h("div", { key: '7a5a9360baa150f7d48980dfb2bd897c3a0dab0f', slot: "btn-icon" }, h("ir-icons", { key: 'a756b410eeb2ee0c515d40ea6234c12227983af5', name: "xmark" })))), h("section", { key: '451bea694ab13b81f5bb99786cfadf235ce9d14d', class: "max-h-[80vh]" }, h("div", { key: 'a9e57bfefafcde9773072f624dd0f372962a5fc8', class: "coursel_gallery_container" }, h("ir-carousel", { key: '9967c6f93a11b58ad614d272a6c7937d31cb2d3c', slides: images === null || images === void 0 ? void 0 : images.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })), onCarouselImageClicked: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }), this.showPlanLimitations(false)), this.property_state === 'carousel' && (h("section", { class: 'z-0 py-4 text-sm' }, h("ir-room-type-amenities", { aminities: (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.amenities, roomType: this.roomType }))))))));
    }
    static get is() { return "ir-property-gallery"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-gallery.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-gallery.css"]
        };
    }
    static get properties() {
        return {
            "property_state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'carousel' | 'gallery'",
                    "resolved": "\"carousel\" | \"gallery\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "property_state",
                "reflect": false,
                "defaultValue": "'gallery'"
            },
            "roomType": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType",
                    "resolved": "RoomType",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RoomType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "openGallery",
                "method": "handleOpenGallery",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "carouselImageClicked",
                "method": "handleOpenCarouselGallery",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-property-gallery.js.map
