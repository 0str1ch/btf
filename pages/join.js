import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import GalleryWrapper from "../components/gallery/gallery-wrapper";


export default () => (
  <Layout>
    <Meta/>
    <Container padding>
      <section className="intro">
        <h1>HOLY CRAP</h1>
        <GalleryWrapper>
          <img src="/static/redraw_group.png" alt=""/>
          <img src="/static/redraw_group.png" alt=""/>
          <img src="/static/redraw_group.png" alt=""/>
          <img src="/static/redraw_group.png" alt=""/>
          <img src="/static/redraw_group.png" alt=""/>
          <img src="/static/redraw_group.png" alt=""/>
        </GalleryWrapper>
      </section>
    </Container>
  </Layout>
);
