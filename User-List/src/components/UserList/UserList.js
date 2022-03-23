import React from "react";
import UserListItem from "./UserListItem";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = function (props) {
    return (
        <div className={styles.container}>
            {
                props.users.map(user => {
                    return (
                        <Card key={Math.random()}>
                            <UserListItem name={user.name} age={user.age} />
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default UserList;