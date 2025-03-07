import type { FC } from "hono/jsx";
export const Layout: FC = (props) => {
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
