import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const PrivateRouter = (props) => {
  console.log("props: ", props);
  let { currentUser } = useAuth();

  //Authproviderdan gerekli user bilgisini aliyoruz
  //private router i approuter da cagirdik
  return currentUser ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRouter;
