import { EventEmitter } from '../../stencil-public-runtime';
import { TIcons } from '../ui/ir-icons/icons';
export declare class IrLabel {
    label: string;
    value: string;
    iconShown: boolean;
    image: {
        src: string;
        alt: string;
        style?: string;
    } | null;
    country: boolean;
    imageStyle: string;
    icon_name: TIcons;
    icon_style: string;
    ignore_value: boolean;
    editSidebar: EventEmitter;
    openEditSidebar(): void;
    render(): any;
}
