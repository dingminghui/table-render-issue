import { Outlet } from "react-router-dom";

interface Props {}

export type { Props as RootLayoutProps };

export function RootLayout() {
  return <Outlet />;
}
