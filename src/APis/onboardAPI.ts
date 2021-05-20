import axios from "axios";
import {INotification} from "../types/main";
import {NotificationGetResponse} from "../types/responses";

const onboardAPI = () => {
    const instance = axios.create({
        baseURL: "https://stage.onboardlms.io/admin/notification/get/MAkTQaSNeZI6"
    })
    const notificationGetRequest = async (): Promise<INotification[]> => {
        const response = await instance.get<NotificationGetResponse>("")
        return response.data.notifications
    }
    return {notificationGetRequest}
}

export default onboardAPI