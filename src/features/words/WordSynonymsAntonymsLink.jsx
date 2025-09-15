import { Link } from "react-router";
import PropTypes from "prop-types";

import MuiLink from "@mui/material/Link";
import Typography from '@mui/material/Typography';
import { digitsEnToFa } from "@persian-tools/persian-tools";

function WordSynonymsAntonymsLink({wordsArray}) {
  let objArray = [];
  wordsArray.map(w => {
    w?.word
      ? objArray.push(
        <MuiLink underline="hover" component={Link} to={`/words/${w.word_slug}`} key={w.word_slug}>
          {w.word}
        </MuiLink>,
      )
      : objArray.push(<MuiLink underline="hover" component={Link} to={`/words/${w.word_slug}`} key={w.word_slug}>
        {w.word_title}({w.definition_number ? digitsEnToFa(w.definition_number) : ""})
      </MuiLink>);
  });

  return (
    <Typography variant="body2" sx={{lineHeight:1.7}}>
      {objArray.reduce((acc, item, index) => (
        index === 0 ?
          [<span key={index}>{item}</span>]
          :
          [...acc, <span key={index}>، {item}</span>]
      ), [])}
    </Typography>
  );
}

WordSynonymsAntonymsLink.propTypes = {
  wordsArray: PropTypes.array,
};

export default WordSynonymsAntonymsLink;