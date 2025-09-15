import { useQuery } from "@tanstack/react-query";

import { getSupporters } from "../../services/apiSupporters.js";

export function useSupporters() {
  const { isLoading, data: supporters, errors } = useQuery({
    queryFn: getSupporters,
    queryKey: ["supporters"],
  });

  return { isLoading, supporters, errors };
}