'use strict';

const calendarData = require('./calendar-data-7e342bed.js');
const channel_store = require('./channel.store-9da77951.js');
const axios = require('./axios-b86c5465.js');

class ChannelService {
    async getExposedChannels() {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Channels`, {});
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            channel_store.channels_data.channels = [...results];
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getExposedConnectedChannels(property_id) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Connected_Channels`, { property_id });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            channel_store.channels_data.connected_channels = [...data.My_Result];
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
                    id: channel_store.channels_data.channel_id,
                    title: channel_store.channels_data.channel_settings.hotel_title,
                    is_active: channel_store.channels_data.is_active,
                    channel: { id: channel_store.channels_data.selectedChannel.id, name: channel_store.channels_data.selectedChannel.name },
                    property: { id: calendarData.calendar_data.id, name: calendarData.calendar_data.name },
                    map: channel_store.channels_data.mappedChannels,
                    is_remove,
                };
            }
            const { data } = await axios.axios.post(`/Handle_Connected_Channel`, body);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}

exports.ChannelService = ChannelService;

//# sourceMappingURL=channel.service-32940a1b.js.map