import React, { useReducer, useMemo } from "react";
import PropTypes from "prop-types";

const initialState = {
  loggedIn: false,
  company: {},
  user: {},
};

const initialContext = [{ ...initialState }, () => {}];

export const AuthContext = React.createContext(initialContext);

const updater = (state, update) => {
  return { ...state, ...update };
};

export function AuthController(props) {
  const [authState, updateAuth] = useReducer(updater, initialState);
  const value = useMemo(() => [authState, updateAuth], [authState]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

AuthController.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
