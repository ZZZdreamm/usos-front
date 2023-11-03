import { AuthProvider } from "./AuthProvider";
import { RoutesProvider } from "./RoutesProvider";

export function Providers() {
  return (
    <AuthProvider>
      <RoutesProvider></RoutesProvider>
    </AuthProvider>
  );
}
