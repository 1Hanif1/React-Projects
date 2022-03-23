import Button from "./Button";
import styles from './Modal.module.css';

const Modal = function (props) {
    return (
        <div onClick={props.onClick} className={`${styles.overlay} ${!props.err && styles.hidden}`}>
            <div className={`${styles.messageBox}`}>
                <h1>Invalid Input</h1>
                <p>{props.err}</p>
                <div><Button onClick={props.onClick}>Okay</Button></div>
            </div>
        </div>
    )
}

export default Modal;