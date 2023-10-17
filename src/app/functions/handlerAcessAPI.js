'use server'

const url = "https://ptac-np-2.vercel.app" 

const getUserAuthenticated = async (user) => {
   const responseOfApi = await fetch(url + "/user/authenticated",
    {
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(user)
    }
   );
   const userAuth = await responseOfApi.json();
   return userAuth;
}

const getUsers = () =>{

}

export { getUsers, getUserAuthenticated };