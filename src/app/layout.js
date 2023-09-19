import './style.css'

export const metadata = {
  title: 'PTAC-Cookies',
  description: 'Projeto PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}