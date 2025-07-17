'use strict';

const axios = require('./axios-6e678d52.js');
const utils = require('./utils-12ac7153.js');

class ToBeAssignedService {
    async getUnassignedDates(propertyid, from_date, to_date) {
        try {
            const { data } = await axios.axios.post(`/Get_UnAssigned_Dates`, {
                propertyid,
                from_date,
                to_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return this.convertUnassignedDates(data.My_Result);
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getUnassignedRooms(calendarFromDates, propertyid, specific_date, roomInfo, formattedLegendData) {
        try {
            const { data } = await axios.axios.post(`/Get_Aggregated_UnAssigned_Rooms`, {
                propertyid,
                specific_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return this.transformToAssignable(calendarFromDates, data, roomInfo, formattedLegendData);
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async assignUnit(props) {
        try {
            const { data } = await axios.axios.post(`/Assign_Exposed_Room`, Object.assign(Object.assign({}, props), { extras: utils.extras }));
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    cleanSpacesAndSpecialChars(str) {
        const regex = /[^a-zA-Z0-9]+/g;
        return str.replace(regex, '');
    }
    transformToAssignable(calendarFromDates, data, roomInfo, formattedLegendData) {
        const result = [];
        data.My_Result.forEach((customer) => {
            customer.unassigned_rooms.forEach((room) => {
                let roomCategory = {
                    roomTypeName: room.room_type_name,
                    ID: room.identifier,
                    NAME: room.guest_name,
                    identifier: room.identifier,
                    FROM_DATE: room.unassigned_date,
                    TO_DATE: room.unassigned_date,
                    BOOKING_NUMBER: room.book_nbr,
                    STATUS: 'IN-HOUSE',
                    defaultDateRange: {
                        fromDate: undefined,
                        toDate: undefined,
                        fromDateTimeStamp: 0,
                        toDateTimeStamp: 0,
                        fromDateStr: '',
                        toDateStr: '',
                        dateDifference: 0,
                    },
                    NO_OF_DAYS: 1,
                    roomsInfo: roomInfo,
                    legendData: formattedLegendData,
                    availableRooms: [],
                    RT_ID: this.getRoomTypeId(room.room_type_name, roomInfo),
                };
                this.updateAvailableRooms(calendarFromDates, room, roomCategory, formattedLegendData, roomInfo);
                this.addDefaultDateRange(roomCategory);
                result.push(roomCategory);
            });
        });
        return result;
    }
    addDefaultDateRange(roomCategory) {
        roomCategory.defaultDateRange.fromDate = new Date(roomCategory.FROM_DATE + 'T00:00:00');
        roomCategory.defaultDateRange.fromDateStr = utils.dateToFormattedString(roomCategory.defaultDateRange.fromDate);
        roomCategory.defaultDateRange.fromDateTimeStamp = roomCategory.defaultDateRange.fromDate.getTime();
        roomCategory.defaultDateRange.toDate = new Date(roomCategory.TO_DATE + 'T00:00:00');
        roomCategory.defaultDateRange.toDateStr = utils.dateToFormattedString(roomCategory.defaultDateRange.toDate);
        roomCategory.defaultDateRange.toDateTimeStamp = roomCategory.defaultDateRange.toDate.getTime();
        roomCategory.defaultDateRange.dateDifference = roomCategory.NO_OF_DAYS;
    }
    getRoomTypeId(roomName, roomInfo) {
        var _a;
        return ((_a = roomInfo.find(room => this.cleanSpacesAndSpecialChars(room.name) === this.cleanSpacesAndSpecialChars(roomName))) === null || _a === void 0 ? void 0 : _a.id) || null;
    }
    updateAvailableRooms(calendarFromDates, room, roomCategory, formattedLegendData, roomsInfo) {
        const rooms = [];
        room.assignable_units.forEach((unit) => {
            if (unit.Is_Fully_Available && !unit.Is_Not_Available) {
                const days = utils.dateDifference(unit.from_date, unit.to_date);
                const fromDate = utils.hooks(new Date(calendarFromDates.from_date)).isAfter(utils.hooks(new Date(unit.from_date))) ? calendarFromDates.from_date : unit.from_date;
                const toDate = utils.hooks(new Date(calendarFromDates.to_date)).isBefore(utils.hooks(new Date(unit.to_date))) &&
                    utils.hooks(new Date(calendarFromDates.to_date)).isAfter(utils.hooks(new Date(unit.from_date)))
                    ? calendarFromDates.to_date
                    : unit.to_date;
                rooms.push({
                    RT_ID: roomCategory.RT_ID,
                    STATUS: 'PENDING-CONFIRMATION',
                    FROM_DATE: fromDate,
                    roomName: unit.name,
                    PR_ID: unit.pr_id,
                    TO_DATE: toDate,
                    NO_OF_DAYS: days,
                    ID: 'NEW_TEMP_EVENT',
                    NAME: '',
                    NOTES: '',
                    BALANCE: '',
                    INTERNAL_NOTE: '',
                    hideBubble: true,
                    legendData: formattedLegendData,
                    roomsInfo,
                });
                roomCategory.TO_DATE = unit.to_date;
                roomCategory.NO_OF_DAYS = days;
            }
        });
        roomCategory.availableRooms = rooms;
    }
    convertUnassignedDates(dates) {
        let convertedDates = {};
        dates.forEach(date => {
            let newDate = new Date(date.date);
            newDate.setHours(0, 0, 0, 0);
            convertedDates[newDate.getTime()] = {
                categories: {},
                dateStr: date.description,
            };
        });
        return convertedDates;
    }
}

exports.ToBeAssignedService = ToBeAssignedService;

//# sourceMappingURL=toBeAssigned.service-73a4a279.js.map