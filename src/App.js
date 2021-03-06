import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import Plans from './Component/Home/Plans/Plans';
import Login from './Component/Shared/Login/Login';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home/Home';
import AddPlans from './Component/AddPlans/AddPlans';
import PageNotfound from './Component/Shared/PageNotFound/PageNotfound';
import PrivateRoute from './Component/Shared/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Component/MyOrders/MyOrders';
import Orders from './Component/Orders/Orders';
import AdminDashboard from './Component/Admin/AdminDashboard/AdminDashboard';
import AllUsers from './Component/Admin/AllUsers/AllUsers';
import AddUser from './Component/AddUser/AddUser';
import AddOrders from './Component/AddOrders/AddOrders';



function App() {

  return (
    <div className="App">
      <AuthProvider>

    {/* set route */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/plans">
            <Plans></Plans>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addplans">
            <AddPlans></AddPlans>
          </Route>
          <Route path="/myorder/:email">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/allorders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/allusers">
            <AllUsers></AllUsers>
          </PrivateRoute>
          <PrivateRoute path="/adduser">
            <AddUser></AddUser>
          </PrivateRoute>
          <PrivateRoute path="/addorder/:plansId">
            <AddOrders></AddOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/admindashboard">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
          
          <Route exact path="*">
            <PageNotfound></PageNotfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
