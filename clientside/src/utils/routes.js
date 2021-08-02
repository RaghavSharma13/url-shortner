import axios from 'axios';

const signUp=async(setAuth, email,password,setEmail,setPassword,setEmailError,setPasswordError,setHistory)=>{
    try {
        setEmailError("");
        setPasswordError("");
        await axios.post(
          `/users/signUp`,
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        setEmail("");
        setPassword("");
        setAuth(true);
        setHistory();
      } catch (err) {
        const error = err.response.data;
        if (error.fields.length > 1) {
          setEmailError(error.message[0]);
          setPasswordError(error.message[1]);
          return;
        }
        error.fields.includes("email")
          ? setEmailError(error.message)
          : setPasswordError(error.message);
      }
}

const logIn=async(setAuth, email,password,setEmail,setPassword,setLoginSuccess,setHistory)=>{
    try {
        await axios.post(
          `/user/login`,
          {
            email:email,
            password:password,
          },
          {
            withCredentials: true,
          }
        );
        setEmail("");
        setPassword("");
        setLoginSuccess(1);
        setAuth(true);
        setHistory();
      } catch (error) {
        setLoginSuccess(0);
      }
}
const logout=()=>{
  try{
    axios.delete(`/user/logout`)
  }catch(error){
    
  }
}
const signOut=()=>{
  try{
    axios.delete(`/user/signOut`)
  }catch(error){
    
  }
}
const setLink=(LinkDescription)=>{
    try{
      axios.post(`/setLink`,{
        fullLink:LinkDescription.fullLink,
        shortLink:LinkDescription.shortLink
    })}catch(error){
      console.log("Failed to save Link.")
    }
}

const getLinks=async(setLinks,setCopyStatus)=>{
    try {
        let res = await axios.get(
          `/getLinks`,
        );
        setLinks(res.data);
        setCopyStatus(new Array(res.data.length).fill(false));
      } catch (error) {
        setLinks(null)
      }
}

const deleteLink=async(id)=>{
    try{
      await axios.delete(
        `/deleteLink`,{
            data:{
                _id:id,
            }
        }
    )}catch(error){
      console.log("Failed to Delete Link.")
    }
}
export{
    signUp,
    logIn,
    logout,
    signOut,
    setLink,
    getLinks,
    deleteLink
};