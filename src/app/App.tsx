import './styles/App.css'
import Header from '../widgets/Header/Header';
import ScrollToTop from '../shared/ScrollTop';
import { Footer } from '../widgets/Footer/Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <Header />
      <div className='App_content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
