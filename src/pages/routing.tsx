import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: string) {
        navigate(path);
      },
    };
  }, [navigate]);
}
