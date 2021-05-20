import React, {useCallback, useEffect, useState} from 'react';
import {INotification} from "../../types/main";
import Btn from "../Btn/Btn";
import {ReactComponent as Vector} from "../../assets/img/Vector.svg"
import {ReactComponent as Ellipse} from "../../assets/img/Ellipse.svg"
import styles from "./Row.module.scss"

interface RowProps {
    data: INotification;
}

export interface Colors {
    css: string;
    icon: string;
}

const btnColors: Array<Colors> = [
    {css: "redColor", icon: "#FF0000"},
    {css: "greenColor", icon: "#05C03C"},
    {css: "yellowColor", icon: "#FFCB02"},
    {css: "blueColor", icon: "#006FFF"}
]

const Row: React.FC<RowProps> = ({data}) => {

    const [isNew, setIsNew] = useState<boolean>(true)

    const btnColor = btnColors[Math.floor(Math.random() * btnColors.length)]

    const type = data.type === "ESSAY" ? "Task" : "Quiz"

    const clickHandler = () => {
        setIsNew(!isNew)
    }

    return (
        <>
            <td>{data.learner.name}</td>
            <td className={styles.textTd}>
                <div className={styles.text}>{data.moduleName}</div>
                <div className={styles.hidden}>{data.moduleName}</div>
            </td>
            <td>{type}</td>
            <td><Btn
                color={btnColor}
                clickHandler={clickHandler}
                failed={data.failed}
                percent={data.grade}
                type={type}/>
            </td>
            <td>{data.date}</td>
            <td>
                {
                    isNew && <><Ellipse/><span className={"m-l4"}>New</span></>
                    || <><Vector/><span className={"m-l4"}>Checked</span></>
                }
            </td>
        </>
    )
}


export default Row;