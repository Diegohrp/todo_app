import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../components/GlobalStyles';
import { Todos } from '../pages/Todos/Todos';
import { Edit } from '../pages/Edit';
function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
