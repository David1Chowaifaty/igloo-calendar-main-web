'use strict';

var axios = require('./axios-EresIryl.js');
var types = require('./types-ClUdQ5q-.js');

const extraServicesCategories = new Set(['ECI', 'LCO', 'BCT', 'EXB', 'HMP', 'ANP', 'BRF', 'LNC', 'DIN', 'HBD', 'FBD', 'MNB', 'DUZ']);
class ExtraServicesService {
    async getExposedExtraServices(props) {
        const payload = types.GetExposedExtraServicesPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Get_Exposed_Extra_Services', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ?? [];
    }
    async handleExposedExtraService(props) {
        const payload = types.HandleExposedExtraServicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Handle_Exposed_Extra_Service', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

exports.ExtraServicesService = ExtraServicesService;
exports.extraServicesCategories = extraServicesCategories;
