import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
      <title>Minimal UI Kit</title>
      <meta name="description" content="הבנק הדיגיטלי הראשון בישראל" />
      <meta name="keywords" content="הבנק הדיגיטלי הראשון בישראל מציג את המערכת המיוחד למשתמשים" />
      <meta name="author" content="Nitsan Cohen, React Front-end developer" />
    </Helmet>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
