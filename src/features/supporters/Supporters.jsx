import Box from '@mui/material/Box';

import { useSupporters } from "./useSupporter.js";
import FullPageSpinner from "../../ui/FullPageSpinner.jsx";
import SupporterCard from "./SupporterCard.jsx";

function Supporters() {
  const {isLoading, supporters, errors} = useSupporters();
  if (isLoading) {
    return <FullPageSpinner/>;
  }
  if (errors) {
    console.log(errors);
  }

  return (
    <Box display="flex" flexDirection="column" rowGap={5}>
      {supporters.map((supporter) => <SupporterCard key={supporter.id} supporter={supporter}/>)}
    </Box>
  );
}

export default Supporters;