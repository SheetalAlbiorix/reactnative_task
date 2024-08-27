import { Show_Logs } from './AppConfig';

export const PrintLogs = (title: String, data: any) => {
    if (Show_Logs) {
        PrintLogs(title, data);
    }
}