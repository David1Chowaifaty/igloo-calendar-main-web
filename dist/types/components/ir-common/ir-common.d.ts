import { IrOnlineResource } from '../../common/models';
export declare class IrCommon {
    extraResources: string;
    disableResourceInjection: boolean;
    /** Sends the IRBE endpoints listed in `ApiClient` to the default base URL instead of the IRBE gateway. */
    disableIrbeRouting: boolean;
    resources: IrOnlineResource[];
    componentWillLoad(): void;
    handleDisableIrbeRoutingChange(newValue: boolean): void;
    componentDidLoad(): void;
    hrefsChanged(): void;
    private parseRefs;
    private appendTag;
    private initializeStyles;
    render(): any;
}
