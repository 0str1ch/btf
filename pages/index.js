import Container from "../components/Container";
import React from "react";
import Layout from "../components/layout";
import BTFfam from "../components/btf-fam";
import Meta from "../components/Meta";
import IntroText from "../components/intro-text";

export default () => (
  <Layout>
    <Meta/>
    <Container padding>
      <section className="intro">
        <IntroText />
      </section>
    </Container>
    <BTFfam/>
  </Layout>
);
