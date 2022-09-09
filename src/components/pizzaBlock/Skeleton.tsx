import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="536" y="227" rx="3" ry="3" width="88" height="6" />
    <circle cx="132" cy="107" r="98" />
    <rect x="0" y="219" rx="10" ry="10" width="280" height="21" />
    <rect x="0" y="265" rx="10" ry="10" width="280" height="77" />
    <rect x="1" y="400" rx="10" ry="10" width="95" height="32" />
    <rect x="123" y="390" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
