import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const toPersianNumber = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  if (!num) return;
  return num.toString().replace(/[0-9]/g, (digit) => persianDigits[digit]);
};

function WpPaginationItem(props) {
  const {page, ...other} = props;
  return (
    <PaginationItem
      {...other}
      page={toPersianNumber(page)}
    />
  );
}

function WpPagination(props) {
  return (
    <Pagination
      {...props}
      renderItem={(item) => <WpPaginationItem {...item} />}
    />
  );
}

export default WpPagination;