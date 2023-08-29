import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>

            <h1>Dashboard</h1>

            users.map{<div>user.name</div>}
        </div>
    );
};