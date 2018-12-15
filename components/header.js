import React from "react";
import IconArrowDown from "./icons/icon-arrow-down";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

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
              <div className="logoSpan">BTF</div>
            </a>
          </Link>

          <nav>
            <ActiveLink href="/join">Bigtext</ActiveLink>
            <ActiveLink href="/join">Bigtext</ActiveLink>
            <ActiveLink href="/join">Bigtext</ActiveLink>
            <ActiveLink href="/join">Bigtext</ActiveLink>
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
          <ActiveLink href="/join">Bigtext</ActiveLink>
          <ActiveLink href="/join">Typography</ActiveLink>
          <ActiveLink href="/join">Projects</ActiveLink>
          <ActiveLink href="/join">Blog</ActiveLink>
        </nav>

        <style jsx global>{`
          header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            min-height: 100px;
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
            display: flex;
            place-content: center;
            place-items: center;
            position: relative;
            background: var(--primary);
            margin: 0;
            padding: 0;
            width: 70px;
            height: 70px;
            border-radius: 7px;
            position: relative;
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
            color: var(--light-text);
            line-height: 1;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
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
            font-size: var(--h4-small);
            font-weight: 700;
            color: var(--light-text);
            border: 2px solid var(--primary-light);
            border-radius: 7px;
            padding: 0 1em;
            display: flex;
            height: 2em;
            place-items: center;
            text-transform: uppercase;
          }

          .github-logo span {
              line-height: 2em;
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
            .header__mobile-nav :global(a) {
              height: 48px;
              width: 100%;
              border-bottom: 1px solid var(--hint);
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              color: var(--secondary);
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
