import { BrowserRouter as Route } from "react-router-dom";
import Store from "../Pages/Store";
import MemberLogin from "../Pages/MemberLogin";
import MemberSignup from "../Pages/MemberSignup";
import NewProduct from "../Pages/NewProduct";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  return (
    <div>
      <Route path="/Store" element={<Store />} />
      <Route path="/Memberlogin" element={<MemberLogin />} />
      <Route path="/Membersignup" element={<MemberSignup />} />
      <Route path="/NewProduct" element={<NewProduct />} />
    </div>
  );
}

export default Body;
