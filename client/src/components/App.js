// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import MovieDetails from './MovieDetails';
import ReviewPage from './ReviewPage';
import AllReviewsPage from './AllReviewsPage';
import ProfilePage from './ProfilePage';
import Login from './Login';
import SignUp from './SignUp';
import { AuthProvider } from '../AuthContext';
import PrivateRoute from '../PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRoute exact path="/" component={HomePage} />
                    <PrivateRoute exact path="/movies" component={MoviePage} />
                    <PrivateRoute path="/movies/:movieId" component={MovieDetails} />
                    <PrivateRoute path="/reviews/:movieId" component={ReviewPage} />
                    <PrivateRoute path="/reviews/all" component={AllReviewsPage} />
                    <PrivateRoute path="/profile" component={ProfilePage} />
                    <Redirect to="/login" />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
