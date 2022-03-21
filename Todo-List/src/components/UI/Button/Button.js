
// import styled from 'styled-components';

import styles from './Button.module.css';

// const Button = styled.button`
//     font: inherit;
//     width: 100%;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #2BDDC2;
//     color: #2BDDC2;
//     background: white;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;


//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #2BDDC2;
//     border-color: #2BDDC2;
//     color: white;
//     box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (min-width: 768px){
//     width: auto;
//   }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
