import { IChannel } from "../../models/calendarData";
export declare const actions: () => {
    id: string;
    name: string;
    icon: () => any;
    action: (params: IChannel) => void;
}[];
