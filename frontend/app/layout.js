import Nav from "./components/Nav";
import "./globals.scss";
import "./styles/design.scss";
import Aside from "./components/Aside";
import Clock from "./components/Clock";
import Icon from "./components/Icon";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "Portfolio CU",
  description: "Creative Portfolio by Cihan Ünal",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="home-page">
          <section className="camera">
            <Clock />
            <div className="camerain">
              <div className="camera1">
                <div className="camerain2"></div>
              </div>
            </div>
            <Icon />
          </section>
          <Nav />
          <section className="main">
            <Aside />

            <div className="main-child">
              <Header />
              {children}
            </div>
          </section>
          <Footer />
        </div>

        <div className="keyboard">
          <div className="keyboardfront"></div>
        </div>
      </body>
    </html>
  );
}
