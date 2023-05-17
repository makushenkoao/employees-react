import { ReactNode } from "react";
import { useCurrentQuery } from "../../app/services";
import { Loader } from "../../components";

export const Auth = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};
