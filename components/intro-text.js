const IntroText = () => (
  <div className="container">
    <h3 className="fade0">Welcome to the</h3>
    <h1 className="fade1">British T-Pose Force</h1>
    <p className="fade2">Also known as BTF, if you're into brevity.</p>
    <style jsx>
      {`
        .container {
          width: 100%;
          height: 100%;
          text-align: center;
        }

        p {
          color: var(--hint-light);
        }

        h1 {
          color: var(--light-text);
          background: var(--primary);
          text-transform: uppercase;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h3 {
          color: var(--light-text);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fade0 {
          animation: fadeIn 300ms cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s 1
            normal both running;
        }

        .fade1 {
          animation: fadeIn 300ms cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s 1
            normal both running;
        }

        .fade2 {
          animation: fadeIn 300ms cubic-bezier(0.39, 0.575, 0.565, 1) 0.8s 1
            normal both running;
        }
      `}
    </style>
  </div>
);

export default IntroText;
