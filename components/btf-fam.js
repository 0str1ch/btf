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
          overflow: hidden;
        }
      `}
    </style>
  </div>
);

export default BTFfam;
