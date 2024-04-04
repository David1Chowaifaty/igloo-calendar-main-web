import { Host, h } from "@stencil/core";
import { Loader } from "google-maps";
export class IrGoogleMaps {
    async componentDidLoad() {
        const options = {
        /* todo */
        };
        const loader = new Loader('my-api-key', options);
        const google = await loader.load();
        new google.maps.Map(this.el.shadowRoot.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }
    render() {
        return (h(Host, { key: '59d44f1313a867703f6f0e74b9cd7f1b47af9513' }, h("div", { key: 'b2d518bbf4160442d6bddd64b6b9cce3558fa17b', id: "map" })));
    }
    static get is() { return "ir-google-maps"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-google-maps.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-google-maps.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-google-maps.js.map
