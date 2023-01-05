import PropTypes from 'prop-types';

export const FirstApp = ({ name, subTitle, title }) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'Robinson Betancur',
  subTitle: 'No hay Subtitulo',
  // title: 'No hay Titulo',
};
