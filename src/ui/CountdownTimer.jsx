import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import PropTypes from "prop-types";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

function CountdownTimer({
                          expiryTimestamp,
                          onTimerStatusChange,
                          showDays = false,
                          showHours = false,
                          showMinutes = true,
                          showSeconds = true,
                          showText = false,
                        }) {
  const {seconds, minutes, hours, days, isRunning} = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

// Notify the parent whenever `isRunning` changes
  useEffect(() => {
    onTimerStatusChange(isRunning);
  }, [isRunning, onTimerStatusChange]);
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={1}>
      {showSeconds &&
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="body2" color="secondary.main">
            {(seconds <= 9) && (seconds !== 0)
              ? "۰" + digitsEnToFa(seconds)
              : digitsEnToFa(seconds)}
          </Typography>
          {showText &&
            <Typography variant="body2" color="secondary.main" fontWeight={300}>ثانیه</Typography>}
        </Box>}
      {showMinutes && !showText && <Typography variant="body2" color="secondary.main">:</Typography>}
      {showMinutes &&
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="body2" color="secondary.main">
            {(minutes <= 9) && (minutes !== 0)
              ? "۰" + digitsEnToFa(minutes)
              : digitsEnToFa(minutes)}
          </Typography>
          {showText && <Typography variant="body2" color="secondary.main" fontWeight={300}>دقیقه</Typography>}
        </Box>}
      {showHours && !showText && <Typography variant="body2" color="secondary.main">:</Typography>}
      {showHours &&
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="body2" color="secondary.main">
            {(hours < 9) && (hours !== 0)
              ? "۰" + digitsEnToFa(hours)
              : digitsEnToFa(hours)}
          </Typography>
          {showText &&
            <Typography variant="body2" color="secondary.main" fontWeight={300}>ساعت</Typography>}
        </Box>}
      {showDays && !showText && <Typography variant="body2" color="secondary.main">:</Typography>}
      {showDays &&
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="body2" color="secondary.main">
            {(days < 9) && (days !== 0)
              ? "۰" + digitsEnToFa(days)
              : digitsEnToFa(days)}
          </Typography>
          {showText && <Typography variant="body2" color="secondary.main" fontWeight={300}>روز</Typography>}
        </Box>}
      {/*<TimerOutlinedIcon sx={{fontSize: 20, color: "secondary.main"}}/>*/}
    </Box>
  );
}

CountdownTimer.propTypes = {
  expiryTimestamp: PropTypes.any,
  showDays: PropTypes.bool,
  showHours: PropTypes.bool,
  showMinutes: PropTypes.bool,
  showSeconds: PropTypes.bool,
  showText: PropTypes.bool,
  onTimerStatusChange: PropTypes.func,
};

export default CountdownTimer;