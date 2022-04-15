

const reducer1 =(state ,action)=>{
switch(action.type)
{
    case "LOGIN":
    return{...state,loggedin: true};

    case"LOGOUT":
    return{...state,loggedin: false};

}


}
export default reducer1;