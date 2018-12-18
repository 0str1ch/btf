import mapping from "../../gallery-manifest.json";
import React from "react";
import {Fragment, Component} from "react";

class GalleryItems extends Component {
  constructor() {
    super();
    this.state = mapping;
  }

  render() {
    return (
      <Fragment>
        {this.state.mapping.map(mapping => (
          <Fragment>
            <div>{mapping.title}</div>
            <div>{mapping.link}</div>
            <div>{mapping.src}</div>
            </Fragment>
        ))}
      </Fragment>
    );
  }
}

export default GalleryItems;
