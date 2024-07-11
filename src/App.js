import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  // Switch,has changed with Routes
  Routes,
  Route,
  
} from "react-router-dom";

// {/* <Home/>
// <Home></Home> */}
import Login from './screens/Login';
import SignUp from './screens/SignUp.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { CartProvider } from './components/Contextreducer.js';
import MyOrder from './screens/MyOrder.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import 'bootstrap-dark-5/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/createuser" element={<SignUp/>}/>
      <Route exact path="/myOrder" element={<MyOrder/>}/>

     </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
