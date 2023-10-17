import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={480}
    height={460}
    viewBox="0 0 480 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
  >
    <circle cx="147" cy="126" r="111" />
    <rect x="11" y="259" rx="9" ry="9" width="280" height="27" />
    <rect x="177" y="318" rx="0" ry="0" width="4" height="2" />
    <rect x="12" y="300" rx="9" ry="9" width="280" height="88" />
    <rect x="14" y="408" rx="9" ry="9" width="90" height="27" />
    <rect x="139" y="400" rx="9" ry="9" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
