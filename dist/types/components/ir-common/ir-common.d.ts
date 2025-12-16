import { IrOnlineResource } from '../../common/models';
export declare class IrCommon {
    extraResources: string;
    disableResourceInjection: boolean;
    resources: IrOnlineResource[];
    componentWillLoad(): void;
    componentDidLoad(): void;
    hrefsChanged(): void;
    private parseRefs;
    private appendTag;
    private initializeStyles;
    render(): any;
}
