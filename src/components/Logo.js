import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx, navLogo }) {
  if (navLogo) {
    return (
      <Box
        component="img"
        src="/static/first_digitalbank.png"
        sx={{ width: 95, height: 40, ...sx }}
      />
    );
  }
  return <Box component="img" src="/static/bank-logo.jpg" sx={{ width: 40, height: 40, ...sx }} />;
}
