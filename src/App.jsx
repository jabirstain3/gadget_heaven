import { Outlet } from "react-router-dom";
import Navbar from "./compolents/navbar/Navbar";
import Footer from "./compolents/footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

function App() {

  return (
    <section>            
      <Navbar/>

      <Outlet/>

      <Footer/>

      {/* copyright */}
      <div className="border-t border-[#c4bfbf] py-4">
        <p className="text-center text-sm">© 2023 Gadget Haven. All rights reserved. Developed by jabirstain3</p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} limit={4} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Bounce} />
    </section>
  )
}

export default App
