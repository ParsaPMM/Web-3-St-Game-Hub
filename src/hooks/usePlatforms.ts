import APIClient from "@/services/apiClient";
import { Platform } from "@/types/Platform";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["parents_platforms"],
    queryFn: () => apiClient.getAll<Platform>(),
    staleTime: 1000 * 60 * 60 * 24 * 14,
  });

export default usePlatforms;
