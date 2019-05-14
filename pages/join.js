import Container from "../components/Container";
import React from "react";
import Layout from "../components/layout";
import Meta from "../components/Meta";
import GalleryWrapper from "../components/gallery/gallery-wrapper";


const data = [{ title: "test1" }, { title: "test2" }];
const listItems = data.map(d => <div key={d.title}>{d.title}</div>);


export default () => (
  <Layout>
    <Meta />
    <Container padding>
      <section className="intro">
        <div>{listItems}</div>
        <GalleryWrapper>
          <img src="/static/redraw_group.png" alt="" />
          <img src="/static/redraw_group.png" alt="" />
          <img src="/static/redraw_group.png" alt="" />
          <img src="/static/redraw_group.png" alt="" />
          <img src="/static/redraw_group.png" alt="" />
          <img src="/static/redraw_group.png" alt="" />
        </GalleryWrapper>
      </section>
    </Container>
  </Layout>
);
