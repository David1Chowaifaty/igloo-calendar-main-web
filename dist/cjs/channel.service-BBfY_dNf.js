'use strict';

var calendarData = require('./calendar-data-D7gl8C6U.js');
var index = require('./index-KxiFTvIk.js');
var axios = require('./axios-EresIryl.js');

const initialState = {
    channels: [],
    selectedChannel: null,
    mappedChannels: [],
    connected_channels: [],
    isConnectedToChannel: false,
    channel_settings: null,
    property_id: null,
    channel_id: -1,
    is_active: false,
};
const { state: channels_data, onChange: onChannelChange} = index.createStore(initialState);
function setChannelIdAndActiveState(id, is_active) {
    channels_data.channel_id = id;
    channels_data.is_active = is_active;
}
function selectChannel(channel_id) {
    if (channel_id === '') {
        channels_data.selectedChannel = null;
        return;
    }
    const selectedChannel = channels_data.channels.find(c => c.id.toString() === channel_id);
    if (selectedChannel) {
        channels_data.selectedChannel = selectedChannel;
    }
    else {
        channels_data.selectedChannel = {
            id: channel_id,
            name: '',
            properties: [],
        };
    }
    setMappedChannel();
}
function updateChannelSettings(key, value) {
    if (!channels_data.channel_settings) {
        channels_data.channel_settings = {
            hotel_id: '',
            hotel_title: '',
        };
    }
    channels_data.channel_settings[key] = value;
}
function setMappedChannel() {
    let selectedChannelMap = channels_data.connected_channels.find(c => c.channel.id.toString() === channels_data.selectedChannel.id.toString());
    if (!selectedChannelMap) {
        channels_data.mappedChannels = [];
        return;
    }
    channels_data.mappedChannels = [...selectedChannelMap.map];
}
function resetStore() {
    channels_data.selectedChannel = null;
    channels_data.mappedChannels = [];
    channels_data.isConnectedToChannel = false;
    channels_data.channel_settings = null;
}
function addMapping(ir_id, fr_id, isRoomType) {
    channels_data.mappedChannels.push({
        channel_id: fr_id,
        ir_id,
        type: isRoomType ? 'room_type' : 'rate_plan',
    });
}
function testConnection() {
    // const hotelConnection = channels_data.selectedChannel.properties.find(property => property.id === 'd09e6374-1ebf-45e0-a130-64c8c9930987');
    const hotelConnection = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id);
    if (!hotelConnection) {
        if (channels_data.isConnectedToChannel) {
            channels_data.isConnectedToChannel = false;
        }
        return false;
    }
    channels_data.selectedChannel.property = hotelConnection;
    if (channels_data.mappedChannels.length === 0) {
        channels_data.mappedChannels.push({ ir_id: (channels_data.property_id ?? -1).toString(), channel_id: channels_data.channel_settings.hotel_id, type: 'property' });
    }
    channels_data.isConnectedToChannel = true;
    return true;
}

class ChannelService {
    async getExposedChannels(property_id) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Channels`, { property_id });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            channels_data.channels = [...results];
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
            channels_data.connected_channels = [...data.My_Result];
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
                    property: { id: calendarData.calendar_data.id, name: calendarData.calendar_data.name },
                    map: channels_data.mappedChannels,
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
exports.addMapping = addMapping;
exports.channels_data = channels_data;
exports.onChannelChange = onChannelChange;
exports.resetStore = resetStore;
exports.selectChannel = selectChannel;
exports.setChannelIdAndActiveState = setChannelIdAndActiveState;
exports.setMappedChannel = setMappedChannel;
exports.testConnection = testConnection;
exports.updateChannelSettings = updateChannelSettings;
