import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default () => (
  <Layout>
    <Header/>
    <Container padding>
      <section className="intro">
        <h1>BTF</h1>
      </section>
    </Container>
    </Layout>
);
