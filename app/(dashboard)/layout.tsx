const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-screen">
      <aside className="absolute left-0 top-0 h-full w-[200px] border-r border-black/10">
        Moodsense
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">hello</header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
