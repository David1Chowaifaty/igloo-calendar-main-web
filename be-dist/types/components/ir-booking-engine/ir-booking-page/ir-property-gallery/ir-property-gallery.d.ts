import { RoomType } from "../../../../models/property";
export declare class IrPropertyGallery {
    property_state: 'carousel' | 'gallery';
    roomType: RoomType;
    private irDialog;
    handleOpenGallery(): void;
    handleOpenCarouselGallery(): void;
    showPlanLimitations(withRoomSize?: boolean): any;
    render(): any;
}
