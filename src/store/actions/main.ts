import {Dispatch} from "redux";
import {INotification, MainAction, MainActionTypes} from "../../types/main";
import {dataFilter} from "../../utils/reusedFunc";

export const fetchNotifications = (service: () => Promise<INotification[]>) => {
    return async (dispatch: Dispatch<MainAction>) => {
        try {
            dispatch({type: MainActionTypes.FETCH_NOTIFICATIONS})
            const data = await service()
            dispatch({type: MainActionTypes.FETCH_NOTIFICATIONS_SUCCESS, payload: dataFilter(data)})
        } catch (e) {
            dispatch({
                type: MainActionTypes.FETCH_NOTIFICATIONS_ERROR,
                payload: "Some trouble with fetching Notifications"
            })
        }
    }
}