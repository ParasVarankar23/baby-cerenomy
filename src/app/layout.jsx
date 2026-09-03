import "./globals.css";

export const metadata = {
  title: "बारसं सोहळा | मिलन & रिया काते",
  description:
    "मिलन आणि रिया काते यांच्या चिमुकल्या बाळाच्या बारसं सोहळ्याचे प्रेमपूर्वक निमंत्रण.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <body>{children}</body>
    </html>
  );
}