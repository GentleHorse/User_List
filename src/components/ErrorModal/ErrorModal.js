import React from 'react';
import Card from '../UI/Card';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <div className={classes.header}>
                    <h2>InValid input</h2>
                </div>
                <div className={classes.content}>
                    <div className={classes.action}>
                        <p>{props.text}</p>
                    </div>
                    <div className={classes.buttonFrame}>
                        <button className={classes.button} onClick={props.onClose}>Okay</button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ErrorModal;