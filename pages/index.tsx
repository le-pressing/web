import type { NextPage } from "next";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;
