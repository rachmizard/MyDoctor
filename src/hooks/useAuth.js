import {useMutation, useQuery} from '@apollo/client';
import {
  GET_USER_BY_ID,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from 'gql/user/user.typeDefs';
import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSignIn, setSignOut, updateUser} from 'stores/auth/auth.action';

function useAuth() {
  const auth = useSelector(state => state.authReducer.auth);
  const dispatch = useDispatch();
  const [serviceSignOut, {loading: signOutLoading}] = useMutation(SIGN_OUT);
  const [serviceSignIn, {loading: signInLoading}] = useMutation(SIGN_IN);
  const [serviceSignUp, {loading: signUpLoading}] = useMutation(SIGN_UP);
  const {data: getUserById} = useQuery(GET_USER_BY_ID, {
    variables: {id: auth.id},
  });
  const [checkAuth, setCheckAuth] = useState(false);

  useLayoutEffect(() => {
    if (auth.token) {
      setCheckAuth(true);
    }
  }, [auth]);

  async function refreshAuth() {
    try {
      const getUpdatedUser = await getUserById;

      dispatch(updateUser(getUpdatedUser));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }

  async function onSignOut() {
    try {
      await serviceSignOut();
      dispatch(setSignOut());

      return Promise.resolve();
    } catch (error) {
      dispatch(setSignOut());
      return Promise.reject(error);
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

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function onSignUp(fields) {
    try {
      const {data} = await serviceSignUp({
        variables: {
          payload: fields,
        },
      });

      dispatch(setSignIn(data.userSignUp));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
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
    refreshAuth,
  };
}

export default useAuth;
