export interface ILearner {
    learnerEmail: string;
    name: string;
}

export interface INotification {
    id: number;
    type: string;
    date: string;
    status: number;
    moduleName: string;
    learner: ILearner;
    grade: number;
    failed: boolean;
}

export interface MainState {
    data: INotification[];
    loading: boolean;
    error: null | string;
}

export enum MainActionTypes {
    FETCH_NOTIFICATIONS = "FETCH_NOTIFICATIONS",
    FETCH_NOTIFICATIONS_SUCCESS = "FETCH_SUCCESS",
    FETCH_NOTIFICATIONS_ERROR = "FETCH_NOTIFICATIONS_ERROR"

}

interface FetchNotificationsAction {
    type: MainActionTypes.FETCH_NOTIFICATIONS
}

interface FetchNotificationsActionSuccess {
    type: MainActionTypes.FETCH_NOTIFICATIONS_SUCCESS;
    payload: INotification[];
}

interface FetchNotificationsActionError {
    type: MainActionTypes.FETCH_NOTIFICATIONS_ERROR;
    payload: string;
}

export type MainAction = FetchNotificationsActionError | FetchNotificationsAction | FetchNotificationsActionSuccess