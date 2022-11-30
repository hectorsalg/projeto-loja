import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


import Home from './components/pages/Home'
import Category from './components/pages/Category'

function App() {

  return (
    <div>
      <Router>
        <Header />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category' element={<Category />} />
            </Routes>
          </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
