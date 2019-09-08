import React from 'react';
import { connect } from 'react-redux';

const UserProfile = props => {
  return(
    <>
    <button>Profilepage</button>
    <h1>`Welcome {props.currentUser.attributes.firstName}, to your profie page!`</h1>
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(mapStateToProps)(UserProfile);