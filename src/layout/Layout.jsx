import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
