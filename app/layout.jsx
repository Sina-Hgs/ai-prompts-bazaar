import "@styles/globals.css";

export const metadata = {
  title: "AI Prompts Bazaar",
  description: "A platform for sharing the best AI prompts!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
