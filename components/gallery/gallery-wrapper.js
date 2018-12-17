const GalleryWrapper = props => (
  <div className="gallery">
    <div className="gallery_scroll">{props.children}</div>
    <style jsx global>
      {`
        .gallery {
          position: relative;
          width: 100%;
        }
        .gallery_scroll {
          scroll-snap-type: x mandatory;
          align-items: center;
          overflow-x: scroll;
          overflow-y: hidden;
          display: flex;
          height: 500px;
        }

        .gallery_scroll div,
        .gallery_scroll img {
          scroll-snap-align: center;
          margin: 1em;
        }

        .gallery::-webkit-scrollbar {
          display: none;
        }

        .gallery img {
          width: 100%;
        }
      `}
    </style>
  </div>
);

export default GalleryWrapper;
