import React, { useState } from 'react';
import './Spinner.css';

const Pagination = ({ itemsPerPage, items, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [initialNumber, setInitialNumber] = useState(0);
  const [finalNumber, setFinalNumber] = useState(10);

  return (
    <nav className='nav-margin'>
      <div className='alignPagination'>
        <button
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '1.2rem',
            marginBottom: '1px',
          }}
          onClick={() => {
            if (initialNumber !== 0) {
              setInitialNumber(initialNumber - 10);
              setFinalNumber(finalNumber - 10);
            }
          }}
        >
          {' '}
          {'<'}
          {'   '}
        </button>
        <ul className='pagination'>
          {pageNumbers.slice(initialNumber, finalNumber).map((number) => (
            <div className='pagination-a'>
              <li key={number} style={{ listStyle: 'none' }}>
                <button
                  className='pagination-btn'
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            </div>
          ))}
        </ul>
        <button
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '1.2rem',
            marginBottom: '1px',
          }}
          onClick={() => {
            if (items / itemsPerPage < 10) {
            } else {
              setInitialNumber(initialNumber + 10);
              setFinalNumber(finalNumber + 10);
            }
          }}
        >
          {' '}
          {'>'}{' '}
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
