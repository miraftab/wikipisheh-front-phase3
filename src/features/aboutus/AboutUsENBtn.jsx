import { useNavigate } from "react-router";

import WpButton from "../../ui/WpButton.jsx";

function AboutUsEnBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us", {state: {enAbout: true}});
  };

  return (
    <WpButton variant="contained" size="small" disableElevation onClick={handleClick} dir="ltr">
      Wikipisheh
    </WpButton>
  );
}

export default AboutUsEnBtn;