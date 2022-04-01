import React from "react";
import styles from './UserForm.module.css';
import Button from "../UI/Button";

const UserForm = function (props) {
    const btnClickHandler = function () {
        const uname = document.querySelector('.form--username').value.trim();
        const age = parseInt(document.querySelector('.form--age').value.trim());

        if (age <= 0) {
            return props.errHandler("Invalid Age entered. (Age must be greater than 0)")

        }

        if (!uname || !age) {
            console.log("Invalid Input")
            return props.errHandler("Please enter a valid user nama and age")

        }

        props.onNewUser(
            {
                "name": uname,
                "age": age,
            }
        )
        document.querySelector('.form--username').value = document.querySelector('.form--age').value = ''
    }
    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" className="form--username" name="username" />
            </div>
            <div>
                <label htmlFor="age">Age (Years)</label>
                <input type="text" className="form--age" name="age" />
            </div>
            <Button onClick={btnClickHandler}> Add User </Button>
        </div>
    )
}

export default UserForm;