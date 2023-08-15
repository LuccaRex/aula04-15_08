import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUsers } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUsers(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
    }
}
export default handlerAcessUser;

