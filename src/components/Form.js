import React from 'react'; 
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form4Ambassador from './Form4Ambassador';
import Form3Talent from './Form3Talent';
import Form5LastCheck from './Form5LastCheck';

const Form = props => {
  const {rol} = props;
  return (
    <div className="form__container">
     <form action="/signup" method="post">
      <Form1NewProject rol={rol}/>
      <Form2Operations rol={rol}/>  
      <Form3Talent rol={rol}/>
      <Form4Ambassador rol={rol}/> 
     <Form5LastCheck rol={rol}/>     
     </form>
    </div>

  );
}

export default Form; 