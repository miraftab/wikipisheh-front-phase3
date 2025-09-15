import { useQuery } from "@tanstack/react-query";

import { getAdvancedSearchParams } from "../../services/apiWords.js";

function UseAdvSearchFields() {
  const { isLoading, data: { fields, categories } = {}, errors } = useQuery({
    queryFn: getAdvancedSearchParams,
    queryKey: ["advSearchParams"]
  });
  return {isLoading, fields, categories, errors}
}

export default UseAdvSearchFields;