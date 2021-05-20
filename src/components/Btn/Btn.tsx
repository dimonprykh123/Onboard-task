import React from 'react';
import {BsCheck} from "react-icons/bs";
import {IoMdClose} from "react-icons/io"
import styles from "./Btn.module.scss"
import {Colors} from "../Row/Row";

interface BtnProps {
    clickHandler: () => any,
    color: Colors;
    percent: number;
    failed: boolean;
    type:string;
}

const Btn: React.FC<BtnProps> = ({clickHandler, color, failed, percent,type}) => {
        const text = failed ? "Failed" : "Passed"
        return (
            <div onClick={clickHandler} className={`${styles.container} ${color.css}`}>
                <span className={`${styles.iconContainer}`}>
                    {
                        failed && <BsCheck color={color.icon}/> || <IoMdClose color={color.icon}/>
                    }
                </span>
                {percent && <><span className={"m-l4 btn-font-size"}> {text}</span><span className={"m-l4 btn-font-size"}> {percent}%</span></>}
                {!percent && <span className={"m-l4 btn-font-size"}>{type} report</span>}
            </div>
        );
    }
;

export default Btn;