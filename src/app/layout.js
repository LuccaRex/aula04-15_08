import './style.css'

export const metadata = {
  title: 'middleware',
  description: 'Projeto PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}