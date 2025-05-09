import { Outlet } from "react-router-dom";
import Navbar from "./compolents/navbar/Navbar";
import Footer from "./compolents/footer/Footer";

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
    </section>
  )
}

export default App
