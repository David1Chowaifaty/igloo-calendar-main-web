import { IExposedProperty, RoomType } from "../../models/property";
export declare class IrPropertyGallery {
    exposed_property: IExposedProperty;
    property_state: 'carousel' | 'gallery';
    roomType: RoomType;
    private irDialog;
    handleOpenGallery(): void;
    handleOpenCarouselGallery(): void;
    render(): any;
}
