'useserve'
import { getUsers } from "@/app/functions/handlerAcessAPI";
import Navbar from "../../components/Navbar";
import './dashboard.css'
import Link from "next/link";

export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <div className="gridUser">
                {users?.map((user, index) => 
                    <div key={index} className="user-card">
                         <Link href={`/pages/alter/${user.id}`}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};