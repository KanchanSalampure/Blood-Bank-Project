
import { useNavigate } from 'react-router-dom';
import{useState} from 'react'
import React, { useCallback } from 'react';

function ForgotPassword()
{
    let navigate = useNavigate();
    const[QUESTION,setquestionid]=useState({
        question:''
    });
    const[wrongpwd,setWrongPwd]=useState('')
    const[wrongcpwd,setWrongcPwd]=useState('')
    const[wrongEmail,setWrongEmail]=useState('')
    const[questions,setquestions] = useState({
        allquestions : []
    })
    let cpassword = React.createRef();
    let password = React.createRef();
    let answer = React.createRef();
    let email = React.createRef();
    const TakeQuestionValue = (c) => 
    {     
        setquestionid({question:c.target.value})
    }
    React.useEffect(() => {
       

        fetch("http://localhost:8080/allquestions")
        .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
        .then(data => setquestions({allquestions : data}))
        //.then(d => console.log(d));

      }, []);

      const CheckPassword = (c) => 
      {     
        //  setstateid({state:c.target.value})
         // const emailregex = /^[A-Za-z0-9.-]{3,}@[A-Za-z0-9.-]{4,}\.[a-z]{2,5}$/;
          const pwdregex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
          const data=c.target.value;
        if(!pwdregex.test(data))
        {
              setWrongPwd("Wrong Password");
              return false;
        }
        else{
            setWrongPwd('')
        }
    }  
    const CheckConfirmPassword = (c) => 
    {     
    const  pwd=password.current.value;
    const  cpwd=c.target.value;
      if(pwd!=cpwd){
        setWrongcPwd("Password and Confirm Password should be same");
        return false;
      }
      else{
          setWrongcPwd('');
      }

  } 

    

    const CheckEmail = (c) => 
    {     
      //  setstateid({state:c.target.value})
        const emailregex = /^[A-Za-z0-9.-]{3,}@[A-Za-z0-9.-]{4,}\.[a-z]{2,5}$/;
        //const pwdregex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
        const data=c.target.value;
      if(!emailregex.test(data))
      {
            setWrongEmail("Wrong Email");
            return false;
      }
      else{
          setWrongEmail('')
      }

    }

      const CreateNewPassword = (s) => 
      {
          s.preventDefault(); 
          alert(email.current.value)
          alert(password.current.value)
          alert(QUESTION.question)
          alert(answer.current.value)
          const reqData = {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body : JSON.stringify({
                  email : email.current.value,
                  pwd : password.current.value,
                  qid :QUESTION.question,
                  ans : answer.current.value                 
              })
          }
          fetch("http://localhost:8080/forgotpassword",reqData)
        .then(data=>data.json())
        .then(obj=>{
              if(obj==1){
                  alert("Password Updated Sucessfully")
                  navigate("/login");
              }         
              else{
                  navigate("/forgotpassword");
              }
            })
      }
    return (
        <div>
             <form>
                 
                 Email : <input type="email" ref={email} name="email" onKeyUp={(c) => {CheckEmail(c)}}></input>
                 <span style={{color:"red"}}>{wrongEmail}</span><br></br>
                 Select Question : <select  name="question" onChange={(c) => {TakeQuestionValue(c)}}>
                            {                                        
                                        questions.allquestions.map((s) => {
                                            //alert(JSON.stringify(s.Statename))
                                            return(<option  value={s.qid}> {s.question} </option>)
                                        })
                            }
                 </select><br></br>

                 Answer : <input ref={answer} type="text" name="answer"></input><br></br>
                 Enter New Password : <input required ref={password} onKeyUp={(c) => {CheckPassword(c)}} type="password" name="pwd"></input>
                 <span style={{color:"red"}}>{wrongpwd}</span><br></br>
                 Confirm Your Password : <input required ref={cpassword} onKeyUp={(c) => {CheckConfirmPassword(c)}} type="password" name="pwd"></input>
                 <span style={{color:"red"}}>{wrongcpwd}</span><br></br>
            <input type="submit" onClick={(c) => {CreateNewPassword(c)}} name="sbutton" value="Update Password"></input>
             </form>
        
              
                 

        </div>
    )
}
export default ForgotPassword;