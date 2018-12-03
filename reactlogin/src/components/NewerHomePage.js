import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import AdminNavBar from "./AdminNavBar";
import AdminDashboard from "./AdminDashboard";
import AddMovies from "./AddMovies";
import AdminViewMovies from "./AdminViewMovies";
import VerifyUser from "./verifyUser";
import BillingPage from './BillingPage';
import UserProfile from './UserProfile';
import MovieDetail from './MovieDetail';
import Video from './Video';
import SearchMovies from './SearchMovies';
import MovieFilter from './MovieFilter';    
import CustomerDashboard from './CustomerDashboard';
import BrowseCustomers from './BrowseCustomers';
import FinancialReport from './FinancialReport';


class NewerHomePage extends Component {

    render() {
        return (
            <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/dashboard" component={AdminDashboard}/>
                    <Route exact path="/navbar" component={NavBar}/>
                    <Route exact path="/addmovies" component={AddMovies}/>
                    <Route exact path="/adminviewmovies" component={AdminViewMovies}/>
                    <Route exact path="/verifyuser" component={VerifyUser}/>
                    <Route path = "/billing" component={BillingPage}/>
                    <Route path="/user-profile" component={UserProfile}/>
                    <Route exact path="/moviedetail" component={MovieDetail}/> 
                    <Route exact path="/video" component={Video}/> 
                    <Route exact path="/searchmovies" component={SearchMovies}/> 
                    <Route exact path="/moviefilter" component={MovieFilter}/> 
                    <Route exact path="/customerdashboard" component={CustomerDashboard}/> 
                    <Route path="/browse-customers" component={BrowseCustomers}/>
                    <Route path="/financial-report" component={FinancialReport}/>
                </Switch>
            </Router>

            </div>
        );
    }
}

export default withRouter(NewerHomePage);