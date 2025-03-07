import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { Header } from "./components/Header";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{props.children}</body>
      <script
        type="module"
        src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@0.32.0/dist/gcds/gcds.esm.js"
      ></script>
      <script
        nomodule
        src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@0.32.0/dist/gcds/gcds.js"
      ></script>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <div class="mb-16">
        <Header />
      </div>
      <div class="content-wrapper">
        <main className="container-centered container-xl  mx-auto xl:px-0 sm:px-600 px-225 general-layout">
          <h1 id="page-templates" class="mb-300">
            Page templates
          </h1>
          <p class="mb-300 ">
            Page templates are pre-built pages that combine GC Design System
            components for common presentations. They’re fully responsive for
            multi-device use. Their page structures support a predictable,
            recognizable, and accessible user experience.
          </p>
          <h2 id="start-your-project-with-prebuilt-pages" class="mt-600 mb-300">
            Start your project with pre-built pages
          </h2>
          <p class="mb-300">
            Page templates can be a starting point for you to use GC Design
            System to prototype or code. Already familiar? They’ll help you
            create pages faster and then add components to meet user needs.
          </p>
          <p class="mb-300">
            Unless specified, use them for Canada.ca pages as well as other GC
            websites.
          </p>
          <h2 id="browse-templates" class="mt-600 mb-300">
            Browse templates
          </h2>
          <p class="mb-300">We're sharing page templates as we build them.</p>
          <p class="mb-300"></p>
          <ul class="flex flex-wrap gap-300">
            <li class="github-link">
              <a
                external=""
                href="https://github.com/cds-snc/gcds-examples/tree/main/templates"
                class="link-default"
              >
                GitHub
              </a>
            </li>
            <li class="figma-link">
              <a
                external=""
                href="https://www.figma.com/design/mh2maMG2NBtk41k1O1UGHV/GC-Design-System?node-id=30173-2205&amp;p=f&amp;t=xHo7cPSnhM2N9sx0-0"
                class="link-default"
              >
                Figma
              </a>
            </li>
          </ul>
          <gcds-date-modified>2023-01-26</gcds-date-modified>
        </main>
        <gcds-footer
          display="full"
          contextual-heading="Contextual navigation"
          contextual-links='{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }'
        ></gcds-footer>
      </div>
    </Layout>
  );
};

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

export default app;
