import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContextProvider } from "./contexts/UserContexProvider";
import Layout from "./pages/Layout"
import LoginPage from "./pages/Login";
import TodoPage from "./pages/Todo";
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LoginPage />} />
              <Route path="/todos" element={<TodoPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
};

export default App