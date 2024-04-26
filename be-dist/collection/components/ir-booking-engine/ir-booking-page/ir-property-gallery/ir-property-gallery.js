import app_store from "../../../../stores/app.store";
import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPropertyGallery {
    constructor() {
        this.property_state = 'gallery';
        this.roomType = undefined;
    }
    handleOpenGallery() {
        this.irDialog.openModal();
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
            return (h("div", { class: "absolute text-sm flex items-center justify-between z-40 pointer-events-none -bottom-1 bg-white/80 px-2 py-1 pb-2 w-full " }, h("div", { class: "flex items-center" }, h("p", null, "Maximum"), h("div", { class: "flex items-end" }, h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "user" }), h("p", null, this.roomType.occupancy_max.adult_nbr)), this.roomType.occupancy_max.children_nbr > 0 && (h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "child" }), h("p", null, this.roomType.occupancy_max.children_nbr))))), withRoomSize && (h("p", null, this.roomType.size, h("span", { class: "ordinal" }, "m", h("sup", null, "2"))))));
        }
        return (h("div", { class: "absolute text-sm flex items-center justify-between z-40 pointer-events-none -bottom-1 bg-white/80 px-2 py-1 pb-2 w-full " }, h("div", { class: "flex items-center" }, h("p", null, "Maximum"), h("div", { class: "flex items-center" }, [...new Array(this.roomType.occupancy_max.adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" }))))), withRoomSize && (h("p", null, this.roomType.size, h("span", { class: "ordinal" }, "m", h("sup", null, "2"))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const images = this.property_state === 'carousel' ? this.roomType.images : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.images;
        return (h("div", { key: 'ec2d0e2d587d1e37306fbbac9c4bba9d278fd5ca' }, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.images.length, images: (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.map(i => i.url).slice(0, 5) })) : (h(Fragment, null, h("div", { class: "flex text-gray-700 flex-wrap items-center gap-2 font-normal md:hidden text-sm py-2" }, h("ir-accomodations", { bookingAttributes: {
                max_occupancy: this.roomType.occupancy_max.adult_nbr,
                bedding_setup: this.roomType.bedding_setup,
            }, amenities: (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.amenities })), h("div", { class: "relative md:hidden w-full h-48 carousel-container   rounded-md" }, this.roomType.images.length === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), class: "rounded-[var(--radius,8px)] cursor-pointer w-full h-full object-cover ", src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip })) : (h("ir-carousel", { slides: (_g = (_f = this.roomType) === null || _f === void 0 ? void 0 : _f.images) === null || _g === void 0 ? void 0 : _g.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), this.showPlanLimitations()), h("div", { class: "hidden md:block py-2" }, h("div", { class: "carousel-container w-full relative mb-1 rounded-md md:w-auto md:max-h-[200px] xl:max-h-[250px] " }, ((_h = this.roomType.images) === null || _h === void 0 ? void 0 : _h.length) === 1 ? (h(Fragment, null, h("img", { onClick: () => this.irDialog.openModal(), src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip, class: "w-full h-full cursor-pointer object-cover rounded-[var(--radius,8px)] " }), this.showPlanLimitations())) : (h(Fragment, null, h("ir-carousel", { slides: (_j = this.roomType.images) === null || _j === void 0 ? void 0 : _j.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) }), this.showPlanLimitations()))), h("ir-button", { onButtonClick: () => this.irDialog.openModal(), variants: "link", label: "More details", buttonStyles: { paddingLeft: '0' } })))), h("ir-dialog", { key: '5b441493fa25bc179b6c4de8ecc7c86a78a6f759', ref: el => (this.irDialog = el) }, h("div", { key: '240ff5fdcfd5685efdfc0ca583f7664444471f76', slot: "modal-body", class: "modal-container max-h-[80vh] pt-0 px-4 pb-4  md:p-4 md:pt-0 overflow-y-auto" }, h("div", { key: '2d897f98c1b68f8affb319bda2a1c18cdd2ca70b', class: " bg-white sticky top-0 z-50 py-2 md:pt-4  mb-2 flex justify-between items-center w-full" }, h("h2", { key: 'c08ed59d76fd7b0c19b55e6e427ab01883b01fe5', class: "font-semibold text-lg md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.name), h("ir-button", { key: '401a64f7ca32ddfd52a0ed9873559636e757dbe8', variants: "icon", onButtonClick: () => this.irDialog.closeModal() }, h("div", { key: '391fb59c779d0fdda13b62d79dc84ed08660cedc', slot: "btn-icon" }, h("ir-icons", { key: '3bbd3822112ac079b52bc7bf9ecf1f95185a0356', name: "xmark" })))), h("section", { key: 'a6b840cd2798d2a2fc8c144a38ad9f1181b597fe', class: "max-h-[80vh]" }, h("div", { key: '217541a520f9d88976e6434c17f53de55f39942a', class: "coursel_gallery_container" }, h("ir-carousel", { key: '02b735f1757b176c4f7643c8e0fef20723671b99', slides: images === null || images === void 0 ? void 0 : images.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })), onCarouselImageClicked: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }), this.showPlanLimitations(false)), this.property_state === 'carousel' && (h("section", { class: 'text-sm py-4 z-0' }, h("ir-room-type-amenities", { aminities: (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.amenities, roomType: this.roomType }))))))));
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
