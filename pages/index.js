import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import BTFfam from "../components/btf-fam";
import Meta from "../components/Meta";
import ScrollTextNormal from "../components/scroll-text-normal";

export default () => (
  <Layout>
    <Meta/>
    <Container padding>
      <section className="intro">
        <ScrollTextNormal />
      </section>
    </Container>
    <BTFfam/>
  </Layout>
);
