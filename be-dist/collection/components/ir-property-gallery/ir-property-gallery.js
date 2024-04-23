import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPropertyGallery {
    constructor() {
        this.exposed_property = undefined;
        this.property_state = 'gallery';
        this.roomType = undefined;
    }
    handleOpenGallery() {
        this.irDialog.openModal();
    }
    handleOpenCarouselGallery() {
        this.irDialog.openModal();
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (!this.exposed_property) {
            return null;
        }
        const images = this.property_state === 'carousel' ? this.roomType.images : this.exposed_property.images;
        return (h("div", null, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: this.exposed_property.images.length, images: (_a = this.exposed_property.images) === null || _a === void 0 ? void 0 : _a.map(i => i.url).slice(0, 5) })) : (h(Fragment, null, h("div", { class: "flex text-gray-700 flex-wrap items-center gap-2 font-normal md:hidden text-sm py-2" }, h("ir-accomodations", { bookingAttributes: {
                max_occupancy: this.roomType.occupancy_max.adult_nbr,
                bedding_setup: this.roomType.bedding_setup,
            }, amenities: this.exposed_property.amenities })), h("div", { class: "relative md:hidden w-full h-48 carousel-container   rounded-md" }, this.roomType.images.length === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), class: "rounded-[var(--radius,8px)] cursor-pointer w-full h-full object-cover ", src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip })) : (h("ir-carousel", { slides: (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.images) === null || _c === void 0 ? void 0 : _c.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) }))), h("div", { class: "hidden md:block py-2" }, h("div", { class: "w-full relative md:w-auto md:max-h-[150px] mb-1 lg:max-h-[200px] xl:max-h-[250px]  carousel-container   rounded-md" }, ((_d = this.roomType.images) === null || _d === void 0 ? void 0 : _d.length) === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), src: this.roomType.images[0].url, alt: this.roomType.images[0].tooltip, class: "w-full h-full cursor-pointer object-cover rounded-[var(--radius,8px)] " })) : (h("ir-carousel", { slides: (_e = this.roomType.images) === null || _e === void 0 ? void 0 : _e.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), h("div", { class: "lg:hidden" }, h("ir-accomodations", { bookingAttributes: {
                max_occupancy: this.roomType.occupancy_max.adult_nbr,
                bedding_setup: this.roomType.bedding_setup,
            }, amenities: this.exposed_property.amenities }))), h("ir-button", { onButtonClick: () => this.irDialog.openModal(), variants: "ghost", label: "More details" })))), h("ir-dialog", { ref: el => (this.irDialog = el) }, h("div", { slot: "modal-body", class: "modal-container pt-0 px-4 pb-4  md:p-4 md:pt-0" }, h("div", { class: " bg-white sticky top-0 z-50 py-2 md:pt-4  mb-2 flex justify-between items-center w-full" }, h("h2", { class: "font-semibold text-lg md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : this.exposed_property.name), h("ir-button", { variants: "icon", onButtonClick: () => this.irDialog.closeModal() }, h("div", { slot: "btn-icon" }, h("ir-icons", { name: "xmark" })))), h("section", { class: "max-h-[80vh]" }, h("div", { class: "coursel_gallery_container" }, h("ir-carousel", { slides: images.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })), onCarouselImageClicked: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            } })), this.property_state === 'carousel' && (h("section", { class: 'text-sm mt-4 z-0' }, h("ir-room-type-amenities", { aminities: this.exposed_property.amenities, roomType: this.roomType }), h("p", { innerHTML: (_f = this.exposed_property) === null || _f === void 0 ? void 0 : _f.description.location_and_intro, class: "py-2" }))))))));
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
            "exposed_property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty",
                    "resolved": "IExposedProperty",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IExposedProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
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
