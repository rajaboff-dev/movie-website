import "./globals.css";
import Provider from "@/app/Provider";
import Navbar from "@/app/components/Navbar";


export const metadata = {
  title: "Movie App",
  description: "Simple movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <Provider>
        <div className='py-[100px] bg-black'>
          {children}
        </div>
      </Provider>
      </body>
    </html>
);
}
