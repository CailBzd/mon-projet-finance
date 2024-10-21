// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mon Projet Finance',
  description: 'Gérez vos finances personnelles facilement',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Vous pouvez ajouter des balises meta supplémentaires ici */}
      </head>
      <body>{children}</body>
    </html>
  );
}
