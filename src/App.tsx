import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import Menu from './components/Menu'
import FooterMenu from './components/FooterMenu'
import NotFound from './components/NotFound'
import { routes } from './config/routes'

/**
 * === ВАРИАНТ 1: Современный подход (Data Router) ===
 * Этот подход рекомендуется в React Router v6.4+ и v7.
 */

// Layout — это "обертка" или "шаблон" для всех страниц.
const Layout = () => {
  return (
    <div className="app-container">
      <header>
        <Menu />
      </header>

      <main>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>

      <footer>
        <FooterMenu />
      </footer>
    </div>
  )
}

// Конфигурация маршрутов на основе массива объектов
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map((route) => ({
      index: route.index,
      path: route.index ? undefined : route.path.replace('/', ''),
      element: route.element
    })),
    errorElement: <NotFound />
  }
])

// === ВАРИАНТ 2: Традиционный подход (BrowserRouter) ===
// Раскомментируйте код ниже, чтобы использовать этот вариант,
// и закомментируйте Вариант 1 и компонент App внизу.
/*
const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <br /><hr /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        // Обработка 404 в традиционном стиле:
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
*/

const App = () => {
  // RouterProvider запускает роутер, используя созданную выше конфигурацию (router)
  return <RouterProvider router={router} />
}

export default App
