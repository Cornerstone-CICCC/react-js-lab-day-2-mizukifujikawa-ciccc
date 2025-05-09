import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div className="max-w-screen mx-auto">

        <main>
          <Outlet />
        </main>

        {/** Footer */}
      </div>
    </>
  )
}

export default Layout