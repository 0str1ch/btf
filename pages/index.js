import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Container padding>
      <section className="intro">
        <h1>BTF</h1>
      </section>
    </Container>
    <picture className="btf-fam">
          <source
            media="(max-width: 799px)"
            srcSet="/static/redraw_group@2x.png"
          />
          <source
            media="(min-width: 800px)"
            srcSet="/static/redraw_group@3x.png"
          />
          <img
            src="/static/redraw_group.png"
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>
  </Layout>
);
