/* eslint-disable @typescript-eslint/no-explicit-any */
import useMounted from "@libs/hooks/useMounted";
import { Suspense } from "react";

export default function SSRCompatibleSuspense(props: any) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}
