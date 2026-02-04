import { Agents, ExposedAgentsProps, HandleExposedAgentProps } from './type';
export declare class AgentsService {
    getExposedAgents(props: ExposedAgentsProps): Promise<Agents>;
    handleExposedAgent(props: HandleExposedAgentProps): Promise<any>;
}
