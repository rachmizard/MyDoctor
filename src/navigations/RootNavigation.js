import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    navigationRef.current.getRootState();
  }
}

export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  } else {
    navigationRef.current.getRootState();
  }
}

export function replace(...args) {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(...args));
  } else {
    navigationRef.current.getRootState();
  }
}
