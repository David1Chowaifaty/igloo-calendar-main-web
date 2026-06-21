'use strict';

var axios = require('./axios-C-Phc0sj.js');
var type = require('./type-Dy9pVS4V.js');

class AgentsService {
    async getExposedAgents(props) {
        const payload = type.ExposedAgentsPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Get_Exposed_Agents', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getExposedAgent(props) {
        const payload = type.ExposedAgentPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Get_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async handleExposedAgent(props) {
        const payload = type.HandleExposedAgentPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Handle_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

exports.AgentsService = AgentsService;
