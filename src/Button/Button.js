import styles from './Button.module.css';

const Button=(props)=>{

// object destructuring
const {Isoutline,icon,text}=props
// after that remove the props.


    return(
<button 

className={Isoutline ? styles.outline_btn : styles.primary_btn}>
    {icon}
    {text}

    </button>
    );
};
export default Button;