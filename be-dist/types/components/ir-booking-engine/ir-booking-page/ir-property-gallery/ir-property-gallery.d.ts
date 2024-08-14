import { RoomType } from "../../../../models/property";
export declare class IrPropertyGallery {
    property_state: 'carousel' | 'gallery';
    roomType: RoomType;
    activeIndex: number;
    private irDialog;
    handleOpenGallery(e: CustomEvent): void;
    handleOpenCarouselGallery(): void;
    showPlanLimitations({ withRoomSize, showMoreTag }: {
        withRoomSize: boolean;
        showMoreTag: boolean;
    }): any;
    render(): any;
}
