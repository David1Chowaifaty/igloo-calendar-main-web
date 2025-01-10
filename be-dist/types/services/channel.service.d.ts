export declare class ChannelService {
    getExposedChannels(): Promise<any>;
    getExposedConnectedChannels(property_id: number): Promise<void>;
    saveConnectedChannel(id: number, is_remove: boolean): Promise<any>;
}
