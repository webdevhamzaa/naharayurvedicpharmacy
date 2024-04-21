import LegalHeader from "./LegalHeader";

export default function RootLayout({ children }) {
  return (
    <div className="header-space">
      <LegalHeader />
      {children}
    </div>
  )
}