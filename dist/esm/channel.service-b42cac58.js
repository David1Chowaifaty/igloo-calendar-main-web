import { T as Token } from './Token-be23fd51.js';
import { c as calendar_data } from './calendar-data-666acc1f.js';
import { c as channels_data } from './channel.store-a03c634b.js';
import { a as axios } from './axios-ab377903.js';

class ChannelService extends Token {
    async getExposedChannels() {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.post(`/Get_Exposed_Channels?Ticket=${token}`, {});
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                const results = data.My_Result;
                channels_data.channels = [...results];
                return data;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getExposedConnectedChannels(property_id) {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.post(`/Get_Exposed_Connected_Channels?Ticket=${token}`, { property_id });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                channels_data.connected_channels = [...data.My_Result];
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async saveConnectedChannel(id = null, is_remove) {
        try {
            let body = {};
            if (is_remove) {
                body = {
                    id,
                    is_remove,
                };
            }
            else {
                body = {
                    id: channels_data.channel_id,
                    title: channels_data.channel_settings.hotel_title,
                    is_active: channels_data.is_active,
                    channel: { id: channels_data.selectedChannel.id, name: channels_data.selectedChannel.name },
                    property: { id: calendar_data.id, name: calendar_data.name },
                    map: channels_data.mappedChannels,
                    is_remove,
                };
            }
            const token = this.getToken();
            if (!token) {
                throw new Error('Invalid Token');
            }
            const { data } = await axios.post(`/Handle_Connected_Channel?Ticket=${token}`, body);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}

export { ChannelService as C };

//# sourceMappingURL=channel.service-b42cac58.js.map