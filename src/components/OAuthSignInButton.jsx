import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";
import { oAuthSignIn } from 'redux-oauth';


class OAuthSignInButton extends Component {
  handleClick = () => {
    const { provider, dispatch } = this.props;
    dispatch(oAuthSignIn(provider));
  };

  render() {
    const { disabled, loading } = this.props;

    return (

      <Button
        loading={loading}
        icon="facebook"
        disabled={disabled}
        className="facebook"
        onClick={this.handleClick}
        content={`Log in with ${this.props.provider}`}
      />
    );
  }
}

const mapStateToProps = ({auth}) => {
  const disabled = auth.getIn(['user', 'isSignedIn']);
  const loading = auth.getIn(['oAuthSignIn', 'loading']);

  return { disabled, loading };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     oAuthSignIn: bindActionCreators(oAuthSignIn, dispatch)
//   }
// }

export default connect(mapStateToProps)(OAuthSignInButton)