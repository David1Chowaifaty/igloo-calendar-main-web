import app_store from "../../stores/app.store";
import { Host, h } from "@stencil/core";
import { Loader } from "google-maps";
export class IrGoogleMaps {
    async componentDidLoad() {
        var _a, _b, _c;
        if (this.map) {
            return;
        }
        const loader = new Loader('AIzaSyCrNcuQfXO55D0I5CLaWAx7U6pBCvru8rk', {});
        const google = await loader.load();
        this.map = new google.maps.Map(this.el.shadowRoot.getElementById('map'), {
            center: { lat: ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.location.latitude) || 34.022, lng: ((_b = app_store.property) === null || _b === void 0 ? void 0 : _b.location.longitude) || 35.628 },
            zoom: 15,
        });
        new google.maps.Marker({
            position: this.map.getCenter(),
            map: this.map,
            title: (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.name,
        });
    }
    render() {
        return (h(Host, { key: 'e1e293c76a4f66bbfbd1cd12cc623517ef5cb874' }, h("div", { key: '38eac0b2870b25b85acc02dd8b32b26dfdb99036', id: "map", class: "h-full w-full" })));
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
