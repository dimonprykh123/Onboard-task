import React from 'react';
import {INotification} from "../../types/main";
import Row from "../Row/Row";
import styles from "./Table.module.scss"
import {ReactComponent as Group} from "../../assets/img/Group.svg";

interface TableProps {
    data: INotification[];
}

const Table = ({data}: TableProps) => {
    return (
            <table className={styles.table}>
                <caption className={styles.caption}><Group/> Onboardee reports</caption>
                <thead className={styles.thead}>
                <tr className={styles.head}>
                    <th>Name</th>
                    <th></th>
                    <th>Type</th>
                    <th>Result</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody className={styles.tbody}>
                {
                    data.map(el => (
                        <tr key={el.id} className={styles.row}>
                            <Row data={el}/>
                        </tr>
                    ))
                }
                </tbody>
            </table>
    );
};

export default Table;