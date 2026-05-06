import { Agent, Agents, ExposedAgentProps, ExposedAgentsProps, HandleExposedAgentProps } from './type';
export declare class AgentsService {
    getExposedAgents(props: ExposedAgentsProps): Promise<Agents>;
    getExposedAgent(props: ExposedAgentProps): Promise<Agent>;
    handleExposedAgent(props: HandleExposedAgentProps): Promise<any>;
}
