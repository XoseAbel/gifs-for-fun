import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Pagination = props => {
  const handleSumClick = () => {
    if (props.maxPage > props.actualPage) {
      props.setPage(page => page + 1);
    }
  };
  const handleSubstractClick = () => {
    if (props.actualPage > 0) {
      props.setPage(page => page - 1);
    }
  };
  const handleFirstPage = () => {
    props.setPage(0);
  };

  const handleLimit = event => {
    props.setLimit(+event.target.value);
  };

  return (
    <div className='d-flex justify-content-center align-items-center m-2'>
      <ButtonGroup className='col-4 d-flex justify-content-center m-2'>
        <Button color='primary' onClick={handleFirstPage}>
          First
        </Button>
        <Button color='primary' onClick={handleSubstractClick}>
          Previous
        </Button>
        <Button color='primary' onClick={handleSumClick}>
          Next
        </Button>
      </ButtonGroup>
      <select className='my-2' onChange={handleLimit}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
      {props.maxPage ? (
        <>
          <h5 className='col-5'>
            Estas en la pagina {props.actualPage + 1} de{' '}
            {Math.ceil(props.maxPage / props.limit + 1)}
          </h5>
          <h6 className='col-3 px-0'>{props.limit} resultados por pagina</h6>
        </>
      ) : (
        <h6 className='mx-2.'>Loading...</h6>
      )}
    </div>
  );
};
export { Pagination };
