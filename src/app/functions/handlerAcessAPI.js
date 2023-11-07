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

const getUsers = async () =>{
    const responseOfApi = await fetch(url + "/users", {
        next: { revalidate: 10 }
    });
    const userAuth = await responseOfApi.json();
    return userAuth;
}

const postUser = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/user", {
            method: 'POST',
            headers: {'Content-Type': 'Application/json' },
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        return userSave;
    } catch {
        return null;
    }
}

export { getUsers, getUserAuthenticated, postUser };