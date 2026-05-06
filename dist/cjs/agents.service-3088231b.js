'use strict';

const axios = require('./axios-6e678d52.js');
const type = require('./type-87fd01b8.js');

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

//# sourceMappingURL=agents.service-3088231b.js.map