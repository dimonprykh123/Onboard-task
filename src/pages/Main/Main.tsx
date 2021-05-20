import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import onboardAPI from "../../APis/onboardAPI";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Table from "../../components/Table/Table";
import styles from "./Main.module.scss"
import Loader from "../../components/Loader/Loader";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

const Main = () => {

    const {fetchNotifications} = useActions()
    const {notificationGetRequest} = onboardAPI()
    const {data, loading, error} = useTypedSelector(state => state.main)
    useEffect(() => {
        fetchNotifications(notificationGetRequest)
    }, [])

    return (
        <div className={styles.container}>
            {loading && <Loader/>}
            {error && <ErrorBoundary error={error}/>}
            {!error && !loading && <Table data={data}/>}
        </div>
    );
};

export default Main;