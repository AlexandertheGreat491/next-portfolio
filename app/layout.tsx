// https://nextjs.org/docs/getting-started/installation
// defined at the top level of app directory & applies to all routes
// layout enables modification of initial html returned from the server

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }