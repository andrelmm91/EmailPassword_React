import React from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";

const Home = (props) => {
  const Authcxt = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={Authcxt.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
