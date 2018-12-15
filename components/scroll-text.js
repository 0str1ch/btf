const ScrollText = () => (
  <div className="scrollBox container">
    <div className="marquee">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus corporis itaque veritatis, quo aliquid dolorem? Quos numquam debitis nesciunt eum id, voluptates alias consequuntur odio iusto voluptatibus veniam maiores non deleniti nihil et harum quasi exercitationem voluptatum illum, illo cupiditate ea. Laboriosam libero sit optio, numquam corrupti qui aliquam repellendus. Minus ab ratione suscipit voluptatem illum maiores facilis ipsa adipisci quibusdam enim in quis, vel debitis cumque omnis sunt vero quam perferendis nulla, vitae officia! Consequuntur, natus facere! Quam nemo cupiditate asperiores tempore odio quo ratione voluptatibus molestias eligendi inventore repellat quod neque ab corporis reprehenderit at, distinctio corrupti, architecto quos. Accusantium iste nisi adipisci sed cumque esse illum hic sapiente dignissimos itaque ea, debitis dolorum mollitia dolorem incidunt fuga, molestiae quas et minima veniam, optio quidem ut. Enim sed ipsam ullam totam consequatur, rem tenetur nihil qui vero laborum ad autem, voluptas minima. Asperiores repudiandae maxime esse totam illum veritatis eveniet fugit, vel deleniti facere nisi reiciendis nobis vitae quos maiores voluptate et omnis! Exercitationem reiciendis porro minima impedit quos odit doloribus possimus assumenda ut laudantium error amet perspiciatis adipisci quibusdam cumque sapiente laborum labore veritatis beatae eveniet, repellat, ipsa laboriosam cupiditate voluptatum? Autem repudiandae nesciunt eos sunt consectetur sequi fugiat, veritatis laborum ipsam molestias sed est optio non, tenetur modi maxime atque placeat eius accusantium saepe ex? Qui accusamus tenetur unde magnam iusto tempora suscipit non eveniet dolorum ipsam dignissimos ipsum, at perspiciatis. Eveniet quasi commodi, soluta cum est eaque illo veniam, odio deleniti, pariatur quos quam.
    </p>
    </div>

    <style jsx>
      {`
        .container {
          width: 100%;
          height: 100%;
          margin: 1em auto;
          overflow: hidden;
          background: white;
          position: relative;
          box-sizing: border-box;
        }

        .marquee {
          animation: marquee 25s linear infinite;
          backface-visibility: hidden;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateY(110%);
          }
          100% {
            transform: translateY(-140%);
          }
        }

        .scrollBox .marquee {
          margin: 0;
        }

        .scrollBox:before,
        .scrollBox::before,
        .scrollBox:after,
        .scrollBox::after {
          left: 0;
          z-index: 1;
          content: "";
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 4em;
          background-image: linear-gradient(
            180deg,
            #fff,
            rgba(255, 255, 255, 0)
          );
        }

        .scrollBox:after,
        .scrollBox::after {
          bottom: 0;
          transform: rotate(180deg);
        }

        .scrollBox:before,
        .scrollBox::before {
          top: 0;
        }
      `}
    </style>
  </div>
);

export default ScrollText;
