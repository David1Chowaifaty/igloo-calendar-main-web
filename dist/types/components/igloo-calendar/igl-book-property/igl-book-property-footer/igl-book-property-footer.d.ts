import { EventEmitter } from '../../../../stencil-public-runtime';
import { TPropertyButtonsTypes } from '../../../../models/igl-book-property';
export declare class IglBookPropertyFooter {
    eventType: string;
    page: string;
    isEditOrAddRoomEvent: boolean;
    dateRangeData: {
        [key: string]: any;
    };
    isLoading: string;
    buttonClicked: EventEmitter<{
        key: TPropertyButtonsTypes;
    }>;
    private isEventType;
    private editNext;
    private renderButton;
    private shouldRenderTwoButtons;
    render(): any;
}
