import axios from 'axios';

const signUp=async(email,password,setEmail,setPassword,setEmailError,setPasswordError,setSignUpSuccess,setHistory)=>{
    try {
        setEmailError("");
        setPasswordError("");
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/users/signUp`,
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        setEmail("");
        setPassword("");
        setSignUpSuccess(true);
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

const logIn=async(email,password,setEmail,setPassword,setLoginSuccess,setHistory)=>{
    try {
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/login`,
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
        setHistory()
      } catch (error) {
        setLoginSuccess(0);
      }
}
const signOut=(token)=>{
  axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/signOut`,{
    headers:{
      Authorization:'Bearer '+token
    }
  })
}
const setLink=(LinkDescription,token)=>{
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/setLink`,{
        fullLink:LinkDescription.fullLink,
        shortLink:LinkDescription.shortLink
    },{
        headers:{
            Authorization:'Bearer '+token
        }
    })
}

const getLinks=async(setLinks,setCopyStatus,token)=>{
    try {
        let res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/getLinks`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setLinks(res.data);
        setCopyStatus(new Array(res.data.length).fill(false));
      } catch (error) {
        console.log(error);
      }
}

const deleteLink=async(id,token)=>{
    await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/deleteLink`,{
            data:{
                _id:id,
            },
            headers:{
              Authorization:'Bearer '+token
            }
        }
    )
}
export{
    signUp,
    logIn,
    signOut,
    setLink,
    getLinks,
    deleteLink
};