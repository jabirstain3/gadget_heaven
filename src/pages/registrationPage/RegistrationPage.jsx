import { NavLink } from "react-router-dom";
import { useToRoute } from "../../hooks/useToRout";

const RegistrationPage = () => {
    const goTo = useToRoute();

    const HandelRegistration = (e) =>{
        // const { createUser } = useContext(AuthContextProvider);
        
        e.preventDefault();
        // console.log(e);

        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // console.log(email, password, name);
        goTo('/login');
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="grid gap-4 w-fit mx-auto my-12 px-32 py-14 border bg-purple-700 text-white "onSubmit={HandelRegistration}>
                <h1 className="text-3xl text-center font-bold mb-6">Registration</h1>
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="text" name="name" placeholder="User Name..." required />
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="email" name="email" placeholder="Email..."required />
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="password" name="password" placeholder="password"required />
                <div className="flex gap-3">
                    <input type="checkbox" name="terms"id="terms" />
                    <p htmlFor="terms">Accept our <a href="">terms and condation</a></p>
                </div>
                <input className="w-fit border-2 rounded-md bordered-white bg-purple-900 px-4 py-1 mt-4 mx-auto" type="submit" value={"Register"} />
                <p>Have an account? <NavLink className={'hover:text-black '} to={'/login'} >Log In!</NavLink></p>
            </form>
        </div>
    );
};

export default RegistrationPage;