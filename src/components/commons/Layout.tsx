import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={jetbrains_mono.className}>
      <Header />
      {children}
    </div>
  );
};
