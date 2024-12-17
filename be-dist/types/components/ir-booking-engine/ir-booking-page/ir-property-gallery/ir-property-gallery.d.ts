import { RoomType } from "../../../../models/property";
export declare class IrPropertyGallery {
    display: 'grid' | 'default';
    property_state: 'carousel' | 'gallery';
    roomType: RoomType;
    activeIndex: number;
    private irDialog;
    handleOpenGallery(e: CustomEvent): void;
    handleOpenCarouselGallery(): void;
    private showPlanLimitations;
    private renderRoomtypeImages;
    render(): any;
}
