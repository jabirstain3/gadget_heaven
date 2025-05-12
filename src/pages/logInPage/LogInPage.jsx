import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useToRoute } from "../../hooks/useToRout";

const LogInPage = () => {
    const [show, setShow] = useState(false)
    const navigate = useToRoute();

    const HandelLogIn = (e) =>{

        e.preventDefault();
        // console.log(e);
        
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        navigate('/');
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="grid gap-4 w-fit mx-auto my-12 px-32 py-14 border bg-purple-700 text-white "onSubmit={HandelLogIn}>
                <h1 className="text-3xl text-center font-bold mb-6">Log In</h1>
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="email" name="email" placeholder="Email..."required />
                <div className="relative">
                    <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1 w-full"  type={show ? 'text' : 'password'} name="password" placeholder="password" required />
                    <span className='absolute top-1 right-2 cursor-default text-White' onClick={() => setShow(!show)}>{ show ? "hide" : "show"}</span>
                </div>
                <input className="w-fit border-2 rounded-md bordered-white bg-purple-900 px-4 py-1 mt-4 mx-auto" type="submit" value={"log in"} />
                <p>Dont Have an account? <NavLink className={'hover:text-black '} to={'/registration'} >Register Now!</NavLink></p>
            </form>
        </div>
    );
};

export default LogInPage;