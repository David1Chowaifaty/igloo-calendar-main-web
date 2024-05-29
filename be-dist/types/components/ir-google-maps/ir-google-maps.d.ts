/// <reference types="googlemaps" />
export declare class IrGoogleMaps {
    el: HTMLIrGoogleMapsElement;
    map: google.maps.Map<HTMLElement>;
    componentDidLoad(): Promise<void>;
    render(): any;
}
