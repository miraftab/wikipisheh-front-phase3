import CircularProgress from '@mui/material/CircularProgress';

function MiniCircularProgressButton() {
  return (
    <CircularProgress size={24}
                      sx={{
                        color: "primary.main",
                        position: "absolute",
                        top: "50%",
                        left: "10%",
                        marginTop: "-12px",
                        marginLeft: "-12px",
                      }}/>
  );
}

export default MiniCircularProgressButton;