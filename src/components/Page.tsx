import type { FC } from "hono/jsx";
import { Layout } from "./Layout";
import { Header } from "./Header";

export const Page: FC = () => {
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
          <p class="mb-300 bg-">
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
          <h2 id="browse-templates" class="mt-600 mb-300">
            Browse templates
          </h2>
          <p class="mb-300">We're sharing page templates as we build them.</p>
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

        <div className="text-center py-4 mb-10 bg-blue-900 bg-blue-950">
          <h2 className="text-2xl text-white bg-">Test</h2>
        </div>

        <gcds-footer
          display="full"
          contextual-heading="Contextual navigation"
          contextual-links='{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }'
        ></gcds-footer>
      </div>
    </Layout>
  );
};
