import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { Tooltip } from "@/components/ui/tooltip";
import LightDarkToggle from "@/components/ui/lightDarkToggle";

export const metadata: Metadata = {
  title: "test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">
        <Header />
        <div className="min-h-screen"> 

        {children}
        </div>
        <Footer />
        
      </main>
      
    </div>
  );
}
