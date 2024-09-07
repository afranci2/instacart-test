import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, s, id, a) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://widgets.instacart.com/widget-bundle-v2.js"; js.async = true;
                js.dataset.source_origin = "affiliate_hub";
                js.dataset.recipe_source_url = "https://instacart-test-ivory.vercel.app/recipe"; // Replace with actual recipe URL
                js.dataset.affiliate_id = "5018";
                js.dataset.affiliate_platform = "recipe_widget";
                fjs.parentNode.insertBefore(js, fjs);
              })(document, "script", "standard-instacart-widget-v1");
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
