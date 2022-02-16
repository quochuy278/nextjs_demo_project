import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import MainComponent from "../components/food/mainComponents";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <MainComponent />
    </Fragment>
  );
};

export default Home;
