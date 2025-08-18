import { EventEmitter } from '../../stencil-public-runtime';
interface ACPage {
    label: string;
    href: string;
    id?: string;
    isNew?: boolean;
    badgeId?: string;
    className?: string;
    icon?: string;
}
export interface ACPages extends ACPage {
    subMenus?: ACPage[];
}
export declare class AcPagesMenu {
    pages: ACPages[];
    location: 'sheet' | 'nav';
    linkClicked: EventEmitter<MouseEvent>;
    private Icon;
    render(): any;
}
export {};
