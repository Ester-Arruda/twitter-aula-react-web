import { SignInPage } from "./SignInPage";
import { ProfilePage } from "./ProfilePage";
import { useGlobalStore } from "../useGlobalStore";

export function HomePage(props) {
  const isAuthenticated = useGlobalStore((state) => state.isAuthenticated);
  if (isAuthenticated) {
    return <ProfilePage {...props} />;
  } else {
    return <SignInPage {...props} />;
  }
}
