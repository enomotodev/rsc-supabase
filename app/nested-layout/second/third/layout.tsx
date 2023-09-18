export default function ThirdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 text-center">
      <p>Layout 3</p>
      {children}
    </div>
  )
}