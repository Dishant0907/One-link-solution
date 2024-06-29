import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton

} from '@clerk/nextjs'

import { dark,neobrutalism } from '@clerk/themes';
import DataContextProvider from "./context/dataContextProvider";


const luckiestGuy = Luckiest_Guy({ subsets: ["latin"],variable:"--font-luckiest-guy",weight:'400' });

export const metadata: Metadata = {
  title: "One Link",
  description: "One destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DataContextProvider>
      <ClerkProvider
    appearance={{
      baseTheme: [neobrutalism ]

    }}
    
    >
      <html lang="en">
      <body className={luckiestGuy.className}>{children}</body>
    </html>
    </ClerkProvider>
    </DataContextProvider>
  );
}
