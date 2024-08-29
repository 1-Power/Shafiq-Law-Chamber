declare module "react-helmet";
import { Helmet } from "react-helmet";
import "../../assets/styles/global.css";

// BaseHead component
function BaseHead() {
  return (
    <>
      <Helmet>
        {/* Add your meta tags, title, and other head elements here */}
        <title>Shafiq Law Chamber</title>
        <meta
          name="Shafiq Law Chamber"
          content="Shafiq Law Chamber is a Law Firm based in the heart of the city, providing legal services to clients across various domains."
        />
        {/* awesome fontawesome */}
        <script
          src="https://kit.fontawesome.com/4151751d46.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
    </>
  );
}

export default BaseHead;
