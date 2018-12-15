import React from "react";
import IconArrowDown from "./icons/icon-arrow-down";
import Link from "next/link";

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      mobileNavShown: false
    };

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleMobileNav() {
    this.setState({
      mobileNavShown: !this.state.mobileNavShown
    });
  }

  render() {
    const { mobileNavShown } = this.state;
    return (
      <React.Fragment>
        <header className="container">
          <Link href="/">
            <a className="logo">
              <span className="logoSpan">BTF</span>
            </a>
          </Link>

          <nav>
            <Link href="/join"><a>test</a></Link>
            <Link href="/join"><a>test</a></Link>
            <Link href="/join"><a>test</a></Link>
            <Link href="/join"><a>test</a></Link>
          </nav>

          <div className="header__right">
            <a
              className="github-logo"
              target="_blank"
              href="https://github.com/0str1ch/js-app"
              rel="noopener"
            >
            <span>Donate</span>
            </a>
          </div>

          <a className="header__mobile-toggle" onClick={this.toggleMobileNav}>
            <IconArrowDown />
          </a>
        </header>

        <nav className="header__mobile-nav container">
        <Link href="/join"><a>test</a></Link>
        <Link href="/join"><a>test</a></Link>
        <Link href="/join"><a>test</a></Link>
        <Link href="/join"><a>test</a></Link>
        </nav>

        <style jsx>{`
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

          nav :global(a):not(:last-child) {
            margin-right: 24px;
          }
          .logo {
            display: block;
            position: relative;
            /*top: 3vw;
                left: 5vw;*/
            z-index: 1;
            font-family: inherit;
            font-weight: 900;
            font-style: normal;
            font-stretch: normal;
            font-size: var(--h4-small);
            text-transform: uppercase;
            text-decoration: none;

          }
          .logoSpan {
            overflow: hidden;
            color: var(--primary-text);
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
              display: ${mobileNavShown ? "flex" : "none"};
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
        `}</style>
      </React.Fragment>
    );
  }
}