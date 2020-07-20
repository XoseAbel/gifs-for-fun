import React, { useState } from 'react';
import Search from './components/Search';
import GifAreaF from './components/GifAreaF';
import { Pagination } from './components/Pagination';
// HACER UNA LLAMADA A UN API PARA QUE NOS MUESTRE LOS TRENDING
// UN BUSCADOR QUE NOS DEVUELVA LOS GIPH QUE BUSQUEMOS POR REFERENCIA
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState();
  const [limit, setLimit] = useState(10);

  const handleClick = text => {
    setSearchInput(text);
  };

  return (
    <div className='App'>
      <h1 className='text-center'>Busca tu gif</h1>
      <Search handleClick={handleClick} />
      <Pagination
        actualPage={page}
        maxPage={maxPage}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
      />
      <GifAreaF
        search={searchInput}
        setMaxPage={setMaxPage}
        page={page}
        limit={limit}
      />
    </div>
  );
}

export default App;
