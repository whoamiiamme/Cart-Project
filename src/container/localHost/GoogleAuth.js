//'347938364135-53ra9ru63bv9fllt4vog1c10r79ksts6.apps.googleusercontent.com'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { onLogin, onLogout} from './../../actions/fetchAuth';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client: auth2',() => {
            window.gapi.auth2
            .init({
                client_id: '347938364135-53ra9ru63bv9fllt4vog1c10r79ksts6.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.status = window.gapi.auth2.getAuthInstance();
                this.statusHost(this.status.isSignedIn.get());
                this.status.isSignedIn.listen(this.statusHost)
            })

        })
    }



    statusHost = (isSigned) => {
        if(isSigned) {
            this.props.onLogin(this.status.currentUser.get().getId())
        }else{
            this.props.onLogout()
        }
    }

    onLogin = () => {

        this.status.signIn()
        .catch(error => {
            console.log('do not login');
        })
    }

    onLogout = () => {
        this.status.signOut()
    }

    renderStatus = () => {
        if(this.props.isSignedIn === null && this.props.profileId === null) {
            return null;
        } else if (this.props.isSignedIn && this.props.profileId){
            return (
                <React.Fragment>
                    <li >
                        <Link to={`/profile/${this.props.profileId}`} >Dashboard</Link>
                    </li>
                    <li >
                        <Link to="/" onClick={ this.onLogout} >Logout</Link>
                    </li>
                </React.Fragment>
            );
        }else{
            return (
                <li >
                    <Link to="/" onClick={ this.onLogin} >Login</Link>
                </li>
            );
            }
    }


    render() {
        return(
            <React.Fragment>
                { this.renderStatus() }
            </React.Fragment>
        )

    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignIn,
        profileId: state.auth.userId
    }
}

export default connect( mapStateToProps ,{
    onLogin, onLogout
})(GoogleAuth);