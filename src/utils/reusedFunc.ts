import {INotification} from "../types/main";

export const dataFilter = (data: INotification[]): INotification[] => {
    const filterArr: Array<string> = []
    const newData: Array<INotification> = []
    data.forEach(el => {
        if (!filterArr.includes(el.learner.name)) {
            filterArr.push(el.learner.name)
            newData.push(el)
        }
    })
    return newData
}
