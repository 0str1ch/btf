import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import BTFfam from "../components/btf-fam";
import Meta from "../components/Meta";
import Header from "../components/HeaderOLD";

export default () => (
  <Layout>
    <Meta/>
    <Container padding>
      <section className="intro">
        <h1>BTF</h1>
      </section>
    </Container>
    <BTFfam/>
  </Layout>
);
