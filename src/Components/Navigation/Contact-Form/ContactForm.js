import { MdMessage } from 'react-icons/md';
import { IoCall } from "react-icons/io5";

import Button from '../../../Button/Button';
import styles from './ContactForm.module.css'
import { useState } from 'react';
const ContactForm=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [text,setText]=useState("");

 const onSubmit=(event)=>{
   event.preventDefault();

  
   setName(event.target[0].value);
   setEmail(event.target[1].value);
   setText(event.target[2].value);


 };




    return(
<section className={styles.container}>

    <div className={styles.contact_form}>

<div className={styles.top_btn}>

    <Button text="SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
    <Button text="CALL US"  icon={<IoCall fontSize="24px"/>} />
    </div>

    <Button 
    Isoutline={true}
    text="MAIL US"  icon={<IoCall fontSize="24px"/>} />
<form onSubmit={onSubmit}>
    <div className={styles.form_controler}>

    <label htmlFor='Name'>Name</label> 
    <input type='text' name='Name'></input>
    </div>

    <div className={styles.form_controler}>

    <label htmlFor='Email'>Email</label> 
    <input type='email' name='email'></input>
    </div>

    <div className={styles.form_controler}>

    <label htmlFor='Name'>Text</label> 
    <textarea  name='text' rows="5"></textarea>
    </div>
    <div>{name +"  " + email +" "+ text}</div>
    <div className={styles.submit_btn}>
    <Button text="Submit" />
    </div>
    
</form>


    </div>

    <div className={styles.contact_image}>
        <img src='contact.svg' alt='contact'/>
    </div>
    
     </section>
    );
};
export default ContactForm;