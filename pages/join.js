import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";

export default () => (
  <Layout>
    <Meta/>
    <Container padding>
      <section className="intro">
        <h1>HOLY CRAP</h1>
      </section>
    </Container>
  </Layout>
);
