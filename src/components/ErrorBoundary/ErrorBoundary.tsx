import React from 'react';
import styles from "./ErrorBoundary.module.scss"

interface ErrorBoundaryProps {
    error: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({error}) => {
    return (
        <div className={styles.text}>
            {error}
        </div>
    );
};

export default ErrorBoundary;