import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LetterCard({letter}) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2} bgcolor="primary.main" width="4rem"
         borderRadius="50%" mt={4}>
      <Typography variant="h6" color="common.white">{letter}</Typography>
    </Box>
  );
}

LetterCard.propTypes = {
  letter: PropTypes.string
};

export default LetterCard;