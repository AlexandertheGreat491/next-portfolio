// https://nextjs.org/docs/getting-started/installation
// defined at the top level of app directory & applies to all routes

export default function RootLayout( {
    children,
} : {
    children: React.ReactNode
}) {
    return(
        <html lang="en">
       <body>
        {children}
        </body>
        </html>
    )
}