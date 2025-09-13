import OverlayLoader from '../OverlayLoader';

const Loading = ({ message = 'Getting products from server...' }) => {
  return <OverlayLoader message={message} show={true} />;
};

export default Loading;
