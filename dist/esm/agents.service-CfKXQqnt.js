import { a as axios } from './axios-B50ozOIF.js';
import { E as ExposedAgentsPropsSchema, a as ExposedAgentPropsSchema, H as HandleExposedAgentPropsSchema } from './type-D7rOPtKA.js';

class AgentsService {
    async getExposedAgents(props) {
        const payload = ExposedAgentsPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Exposed_Agents', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getExposedAgent(props) {
        const payload = ExposedAgentPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async handleExposedAgent(props) {
        const payload = HandleExposedAgentPropsSchema.parse(props);
        const { data } = await axios.post('/Handle_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

export { AgentsService as A };
