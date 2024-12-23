import app_store from "../../stores/app.store";
import { Host, h } from "@stencil/core";
import { Loader } from "google-maps";
export class IrGoogleMaps {
    async componentDidLoad() {
        var _a, _b, _c;
        if (this.map) {
            return;
        }
        const loader = new Loader('AIzaSyCJ5P4SraJdZzcBi9Ue16hyg_iWJv-aHpk', {});
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
        return (h(Host, { key: '27faea75732b12d448fc7bf2b89a2f5f331508fa' }, h("div", { key: 'cbed22b96715b985ee8ad0549f151e0ed7f1765d', id: "map", class: "h-full w-full" })));
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
