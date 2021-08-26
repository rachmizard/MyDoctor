import {useMutation} from '@apollo/client';
import {SIGN_IN, SIGN_OUT, SIGN_UP} from 'gql/user/user.typeDefs';
import {useLayoutEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {setSignIn, setSignOut} from 'stores/auth/auth.action';

function useAuth() {
  const auth = useSelector(state => state.authReducer.auth);
  const dispatch = useDispatch();
  const [serviceSignOut, {loading: signOutLoading}] = useMutation(SIGN_OUT);
  const [serviceSignIn, {loading: signInLoading}] = useMutation(SIGN_IN);
  const [serviceSignUp, {loading: signUpLoading}] = useMutation(SIGN_UP);
  const [checkAuth, setCheckAuth] = useState(false);

  useLayoutEffect(() => {
    if (auth) {
      setCheckAuth(true);
    }
  }, [auth]);

  async function onSignOut() {
    try {
      await serviceSignOut();
      dispatch(setSignOut());
    } catch (error) {
      showMessage({
        type: 'danger',
        message: error.message,
      });
    }
  }

  async function onSignIn(email, password) {
    try {
      const {data} = await serviceSignIn({
        variables: {
          email,
          password,
        },
      });

      dispatch(setSignIn(data.userSignIn));
    } catch (error) {
      showMessage({
        type: 'danger',
        message: error.message,
      });
    }
  }

  async function onSignUp(fields) {
    try {
      const {data} = await serviceSignUp({
        variables: fields,
      });

      dispatch(setSignIn(data.userSignUp));
    } catch (error) {
      showMessage({
        type: 'danger',
        message: error.message,
      });
    }
  }

  return {
    auth,
    onSignOut,
    onSignIn,
    onSignUp,
    signOutLoading,
    signInLoading,
    signUpLoading,
    checkAuth,
  };
}

export default useAuth;
