import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import 'upkit/dist/style.min.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import UserAccount from './pages/UserAccount';
import UserAddress from './pages/UserAddress';
import UserAddressAdd from './pages/UserAddressAdd';
import UserOrder from './pages/UserOrder';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pesanan" component={UserOrder} />
        <Route path="/account" component={UserAccount} />
        <Route path="/invoice/:order_id" component={Invoice} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/alamat-pengiriman/tambah" component={UserAddressAdd} />
        <Route path="/alamat-pengiriman" component={UserAddress} />
        <Route path="/register" component={Register} />
        <Route path="/register-success" component={RegisterSuccess} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
