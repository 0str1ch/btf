import Head from "next/head";


export default () => (
  <Head>
      <title>BTF</title>
    <meta charSet="UTF-8" />
    <style jsx global>{`

    :root {
        --site-bg: #0000FF;
        --primary: #53FF45;
        --primary-light: rgba(255, 255, 255, 1);
        --secondary: rgba(46, 62, 72, 0.6);
        --secondary-light: rgba(255, 255, 255, 0.7);
        --hint: rgba(46, 62, 72, 0.35);
        --hint-light: rgba(255, 255, 255, 0.35);
        --error: #ff5b0f;
        --shadow: rgba(235, 237, 242, 0.9);
        --primary-text: rgba(0, 0, 0, 0.87);
        --secondary-text: rgba(0, 0, 0, 0.67);
        --light-text: #fff;
      }

        :root {
          --h1-xl: 3.157em;
          --h2-large: 2.369em;
          --h3-medium: 1.777em;
          --h4-small: 1.333em;
          --text-large: ;
          --text-normal: 1em;
          --text-small: 0.777em;
        }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        line-height: 1.6;
        font-family: system-ui, -apple-system,
          BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial,
          sans-serif;
        font-weight: 400;
        min-width: 320px;
        direction: ltr;
        font-feature-settings: "kern";
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
      }
      html {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        text-size-adjust: 100%;
        background: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
      }
      /*
* === Resets & Fixes ===
*/
      html {
        -ms-overflow-style: -ms-autohiding-scrollbar !important;
        /* MS Edge and IE scrollbar hide */
      }
      *,
      *::before,
      *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-font-kerning: auto;
        font-kerning: auto;
        word-wrap: break-word;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      body {
        height: 100%;
        width: 100%;
        position: relative;
        overflow-x: hidden;
      }
      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      :after,
      :before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      ::-moz-selection {
        background: var(--primary);
        color: var(--primary-light);
      }
      ::selection {
        background: var(--primary);
        color: var(--primary-light);
      }
      button:focus,
      select:focus {
        outline: thin dotted var(--hint);
      }
      a {
        outline: 0;
        text-decoration: inherit;
      }
      a,
      abbr,
      acronym,
      address,
      applet,
      article,
      aside,
      audio,
      b,
      big,
      blockquote,
      body,
      canvas,
      caption,
      center,
      cite,
      dd,
      del,
      details,
      dfn,
      div,
      dl,
      dt,
      em,
      embed,
      fieldset,
      figcaption,
      figure,
      footer,
      form,
      header,
      hgroup,
      html,
      i,
      iframe,
      img,
      ins,
      kbd,
      label,
      legend,
      li,
      mark,
      menu,
      nav,
      object,
      ol,
      output,
      q,
      ruby,
      s,
      samp,
      section,
      small,
      span,
      strike,
      strong,
      sub,
      summary,
      sup,
      table,
      tbody,
      td,
      tfoot,
      th,
      thead,
      time,
      tr,
      tt,
      u,
      ul,
      var,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }
      p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }
      ol,
      ul {
        list-style: none;
      }
      * + address,
      * + dl,
      * + fieldset,
      * + figure,
      * + pre {
        margin-top: 0;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      svg:not(:root) {
        overflow: hidden;
      }
      svg {
        vertical-align: middle;
      }
      svg {
        shape-rendering: crispEdges;
      }
      svg path,
      svg circle {
        shape-rendering: geometricprecision;
      }
      video {
        height: auto;
        width: 100%;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      nav,
      section,
      summary {
        display: block;
      }
    `}</style>
  </Head>
);