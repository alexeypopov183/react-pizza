import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return(
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="141" cy="128" r="96" />
      <rect x="-5" y="298" rx="6" ry="6" width="285" height="111" />
      <rect x="23" y="253" rx="6" ry="6" width="243" height="28" />
      <rect x="185" y="424" rx="6" ry="6" width="99" height="79" />
      <rect x="-3" y="432" rx="6" ry="6" width="97" height="20" />
    </ContentLoader>
  )
};

export default LoadingBlock;