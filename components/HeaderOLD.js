import Link from "next/link";

const Header = () => (
  <header>
    <Link href="/">
      <a className="logo">
       <span>BTF</span>
      </a>
    </Link>
    <nav className="navWrapper">
      <style jsx global>
        {`
          header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            height: 100px;
            z-index: 2000;
          }
          nav {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            line-height: 2.3rem;
          }
          nav a {
            font-size: 2em;
            transition: color 0.2s ease;
            text-decoration: none;
          }
          a:active {
            text-decoration: none;
          }
          nav a:hover {
            color: red;
          }
          nav :global(a):not(:last-child) {
            margin-right: 24px;
          }
          .logo {
            display: block;
            position: relative;
            /*top: 3vw;
                left: 5vw;*/
            z-index: 1;
            font-weight: 900;
            font-size: 2em;
            text-transform: uppercase;
            text-decoration: none;
            line-height: 0.85em;
            font-smoothing: antialiased;
          }
          .logoSpan {
            display: block;
            position: relative;
            width: 100%;
            overflow: hidden;
            color: red;
          }
          .header__right {
            display: flex;
            align-items: center;
          }
          .header__right a:last-child {
            margin-left: 24px;
          }
          .submit {
            margin-left: 24px;
          }
          .header__mobile-nav {
            display: none;
          }
          .header__mobile-toggle {
            display: none;
          }
          .github-logo {
            font-size: 1.5rem;
            color: var(--hint);
          }
          @media (max-width: 768px) {
            nav,
            .header__right {
              display: none;
            }
            .header__mobile-toggle {
              display: block;
            }
            .header__mobile-nav {
              width: 100%;
              flex-direction: column;
              align-items: center;
              position: relative;
              margin-bottom: 48px;
            }
            .header__mobile-nav :global(a),
            .header__mobile-nav :global(.search-input) {
              height: 48px;
              width: 100%;
              border-bottom: 1px solid var(--hint);
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              color: var(--secondary);
            }
            .header__mobile-nav :global(.search-input input) {
              width: 100%;
              font-size: 1.6rem;
            }
            .header__mobile-nav :global(a):not(:last-child) {
              margin-right: 0;
            }
          }
        `}
      </style>
    </nav>
  </header>
);

export default Header;
