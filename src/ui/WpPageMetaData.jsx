import PropTypes from "prop-types";

function WpPageMetaData({title = "ویکی‌پیشه", description = "", name = "ویکی‌پیشه", type = "article", canonicalUrl}) {
  return (
    <div>
      { /* Standard metadata tags */}
      <title>{`ویکی‌پیشه | ${title}`}</title>
      <meta name="description" content={description}/>
      { /* End standard metadata tags */}
      { /* Facebook tags - may use with telegram*/}
      <meta property="og:type" content={type}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      { /* End Facebook tags */}
      { /* Twitter tags */}
      <meta name="twitter:creator" content={name}/>
      <meta name="twitter:card" content={type}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      { /* End Twitter tags */}
      <link rel="canonical" href={`https://wiki-pisheh.ir/${canonicalUrl}`}/>
    </div>
  );
}

WpPageMetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  canonicalUrl: PropTypes.string,
};

export default WpPageMetaData;