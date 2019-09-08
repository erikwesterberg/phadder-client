import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";
import { oAuthSignIn } from 'redux-oauth';
import { dispatchMessage } from "../state/actions/flashActions";


class OauthButton extends Component {
  handleClick = () => {
    const { provider, dispatch } = this.props;

    dispatch(oAuthSignIn({ provider }))
      .then(() => {
        // Let's store the credentials in LocalStorage
        this.props.auth
          .getIn(['headers'])
          .forEach((value, key) => { localStorage.setItem(key, value) })
        dispatch({ type: 'DISPATCH_MESSAGE', payload: { message: 'All good', type: 'success' } })
      });

  };

  render() {
    const { disabled, loading, icon } = this.props;


    return (
      <Button
        loading={loading}
        icon={icon}
        className={'facebook'}
        disabled={disabled}
        onClick={this.handleClick}
        content={`Log in with ${this.props.provider}`}
      />
    );
  }
}

const mapStateToProps = ({ auth }, ownProps) => {
  const disabled = auth.getIn(['user', 'isSignedIn']);
  const loading = auth.getIn(['oAuthSignIn', ownProps.provider, 'loading']);

  return { auth, disabled, loading };
}


export default connect(mapStateToProps)(OauthButton)