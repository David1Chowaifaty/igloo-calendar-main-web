import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
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
        if (!this.roomType) {
            return null;
        }
        const { adult_nbr, children_nbr } = this.roomType.occupancy_max;
        const maxNumber = adult_nbr + children_nbr;
        const renderOccupancy = () => (h("div", { class: "flex items-end" }, h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "user" }), h("p", null, adult_nbr)), children_nbr > 0 && (h("div", { class: "flex items-center gap-2" }, h("ir-icons", { svgClassName: "size-3", name: "child" }), h("p", null, children_nbr)))));
        const renderRoomSize = () => withRoomSize &&
            this.roomType.size > 0 && (h("p", null, this.roomType.size, h("span", { class: "ordinal" }, "m", h("sup", null, "2"))));
        if (maxNumber > 7) {
            return (h("div", { class: "capacity-container pointer-events-none absolute -bottom-1 z-40 flex w-full items-center justify-between bg-white/80 px-2 py-1 pb-2 text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), renderOccupancy()), renderRoomSize()));
        }
        return (h("div", { class: "capacity-container pointer-events-none absolute -bottom-0 z-40 flex w-full items-center justify-between bg-white/80 px-2 py-1 pb-2 text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), h("div", { class: "flex items-center" }, [...Array(adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" }))))), renderRoomSize()));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const images = this.property_state === 'carousel' ? this.roomType.images : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.images;
        return (h("div", { key: 'f9f52358824b735d94b96bda7bc1ea8f5fab2bb4' }, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.images.length, images: (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.map(i => ({ url: i.url, alt: i.tooltip })).slice(0, 5) })) : (h(Fragment, null, h("div", { class: "flex flex-wrap items-center gap-2 py-2 text-sm font-normal text-gray-700 md:hidden" }, h("ir-accomodations", { bookingAttributes: {
                max_occupancy: this.roomType.occupancy_max.adult_nbr,
                bedding_setup: this.roomType.bedding_setup,
            }, amenities: (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.amenities })), h("div", { class: "carousel-container relative h-48 w-full overflow-hidden rounded-md md:hidden" }, this.roomType.images.length === 0 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon bg-gray-300 text-white" }, h("ir-icons", { name: "image", svgClassName: "size-10 mb-4" })), this.showPlanLimitations())) : this.roomType.images.length === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), class: "gallery-img object-cover ", src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip })) : (h("ir-carousel", { slides: (_g = (_f = this.roomType) === null || _f === void 0 ? void 0 : _f.images) === null || _g === void 0 ? void 0 : _g.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), this.showPlanLimitations()), h("div", { class: "hidden  md:block" }, h("div", { class: "carousel-container relative mb-1 w-full rounded-md md:max-h-[200px] md:w-auto xl:max-h-[250px] " }, this.roomType.images.length === 0 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon hover:bg-gray-400" }, h("ir-icons", { name: "image", svgClassName: "size-10 mb-4" })), this.showPlanLimitations())) : ((_h = this.roomType.images) === null || _h === void 0 ? void 0 : _h.length) === 1 ? (h(Fragment, null, h("img", { onClick: () => this.irDialog.openModal(), src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip, class: "h-full w-full cursor-pointer rounded-[var(--radius,8px)] object-cover " }), this.showPlanLimitations())) : (h(Fragment, null, h("ir-carousel", { slides: (_j = this.roomType.images) === null || _j === void 0 ? void 0 : _j.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) }), this.showPlanLimitations()))), h("ir-button", { onButtonClick: () => this.irDialog.openModal(), variants: "link", label: localizedWords.entries.Lcz_MoreDetails, class: "more-details-button", buttonStyles: { paddingLeft: '0', paddingBottom: '0', background: 'transparent', fontSize: '12px' } })))), h("ir-dialog", { key: '612c83aa93a7eba4229b3a5c8016bf60156d3937', ref: el => (this.irDialog = el), closeButton: false }, h("div", { key: '5126e3b784a50b10cbf194267c347a0dca0b7e37', slot: "modal-body", class: "modal-container max-h-[80vh] overflow-y-auto px-4 pb-4  pt-0 md:p-4 md:pt-0", dir: "ltr" }, h("div", { key: '40e219ddc84bc6992453c6daf6c0d80975d9f8bf', class: " sticky top-0 z-50 mb-2 flex w-full  items-center justify-between bg-white py-2 md:pt-4", dir: app_store.dir }, h("h2", { key: '7cff1adc1626705618c9ca4a27a929f6bd4873d7', class: "text-lg font-semibold md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.name), h("ir-button", { key: 'ed9329c6ef36dc8fbd9ce28add1c12de1114b222', iconName: "xmark", variants: "icon", onButtonClick: () => this.irDialog.closeModal() })), h("section", { key: '52eb69c15f85f8072cd3b9a1eee77723b307de35', class: "max-h-[80vh]" }, images.length > 0 && (h("div", { class: "coursel_gallery_container hidden sm:block" }, h("ir-carousel", { dir: app_store.dir, key: ((_l = this.roomType) === null || _l === void 0 ? void 0 : _l.id) + '_' + app_store.dir, slides: images === null || images === void 0 ? void 0 : images.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })), onCarouselImageClicked: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }), this.showPlanLimitations(false))), this.property_state === 'carousel' && (h("section", { class: 'z-0 py-4 text-sm', dir: app_store.dir }, h("ir-room-type-amenities", { aminities: (_m = app_store.property) === null || _m === void 0 ? void 0 : _m.amenities, roomType: this.roomType }))))))));
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
