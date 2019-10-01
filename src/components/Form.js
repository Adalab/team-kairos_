import React from 'react'; 
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form4Ambassador from './Form4Ambassador';
import Form3Talent from './Form3Talent';
import Form5LastCheck from './Form5LastCheck';

const Form = props => {
  const {rol, getUserData} = props;
  return (
    <div className="form__container">
     <form action="/signup" method="post">
      <Form1NewProject 
        rol={rol}
        getUserData={getUserData}
      />
      <Form2Operations 
        rol={rol}
        getUserData={getUserData}
        />  
      <Form3Talent 
        rol={rol}
        getUserData={getUserData}
        />
      <Form4Ambassador 
        rol={rol}
        getUserData={getUserData}
        /> 
     <Form5LastCheck 
      rol={rol}
      getUserData={getUserData}
      />     
     </form>
    </div>

  );
}

export default Form; 