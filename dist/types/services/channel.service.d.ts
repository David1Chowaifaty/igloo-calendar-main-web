export declare class ChannelService {
    getExposedChannels(property_id: number): Promise<any>;
    getExposedConnectedChannels(property_id: number): Promise<void>;
    saveConnectedChannel(id: number, is_remove: boolean): Promise<any>;
}
