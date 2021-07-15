import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={320}
      height={460}
      viewBox="0 0 320 460"
      backgroundColor="#bbb"
      foregroundColor="#acabab"
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="0" y="0" rx="2" ry="2" width="300" height="10" />
      <rect x="0" y="0" rx="2" ry="2" width="300" height="10" />
      <rect x="0" y="0" rx="2" ry="2" width="300" height="400" />
    </ContentLoader>
  </div>
);

export default CardLoader;
