import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername === '' || enteredAge === '') {
            setErrorMessage(<p>Please enter a valid name and age (non-empty values).</p>);
            setIsValid(false);
        } else if (enteredAge <= 0) {
            setErrorMessage(<p>Please enter a valid age ({'>'} 0).</p>);
            setIsValid(false);
        } else {
            const userData = {
                username: enteredUsername,
                age: enteredAge
            }

            props.onAddUser(userData);

            setEnteredUsername('');
            setEnteredAge('');
        }
    }

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const closeWindowHandler = () => {
        setIsValid(true);
    }

    return (
        <div>
            {!isValid && <ErrorModal text={errorMessage} onClose={closeWindowHandler} />}
            <Card>
                <form onSubmit={submitHandler} className={classes.input}>
                    <div>
                        <label>Username</label>
                        <input
                            type='text'
                            id='username'
                            value={enteredUsername}
                            onChange={usernameHandler}
                        />
                    </div>
                    <div>
                        <label>Age (Years)</label>
                        <input
                            type='text'
                            id='age'
                            value={enteredAge}
                            onChange={ageHandler}
                        />
                    </div>
                    <Button>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;