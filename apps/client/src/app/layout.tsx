import React from "react";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './global.css';

export const metadata = {
  title: 'Welcome to okkino',
  description: 'code by LVIPHU',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
