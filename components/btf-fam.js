const BTFfam = () => (
  <div>
    <picture className="btf-fam">
      <source media="(max-width: 799px)" srcSet="/static/redraw_group@2x.png" />
      <source media="(min-width: 800px)" srcSet="/static/redraw_group@3x.png" />
      <img
        src="/static/redraw_group.png"
        alt="Chris standing up holding his daughter Elva"
      />
    </picture>

    <style jsx global>
      {`
        .btf-fam {
          width: 100%;
          position: fixed;
          bottom: -1rem;
          left: 0;
          z-index: 100;
          animation: fadeup 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.2s 1 normal both running;
          will-change: transform;
        }
      `}
    </style>
  </div>
);

export default BTFfam;
