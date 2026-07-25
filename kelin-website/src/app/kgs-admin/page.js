import KgsAdminClient from "./KgsAdminClient";

export const metadata = {
  title: "KGS Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function KgsAdminPage() {
  return <KgsAdminClient />;
}
