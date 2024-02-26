import { useState } from 'react';
import './App.css';
// import Form from './Components/Form';
import ValidationForm from './Components/ValidationForm';

function App() {

  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      label:"Confirm Password"
    }
  ]

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data));
  };

  console.log(values)

  return (
    <>
    <div>
      {/* <Form /> */}
      <form className='form flex flex-col h-screen items-center justify-center ' onSubmit={handleSubmit}>
        {inputs.map((input)=>(
          <ValidationForm 
            key={input.id} 
            {...input} 
            value={values[input.name]}
            onChange={onChange}/>
        ))}
        
        <button className='bg-slate-200 px-4 py-2 rounded-lg hover:bg-slate-300'>Submit</button>
      </form>
    </div>
    
    
    </>
  );
}

export default App;
