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
          margin: 0 0.5em;
          width: 75%;
        }

        .gallery::-webkit-scrollbar,
        .gallery_scroll::-webkit-scrollbar {
          width: 0;
        }

        @media screen and (min-width: 1200px) {
          .gallery_scroll img:nth-of-type(1n + 5) {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default GalleryWrapper;
