// TableComponent.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Road.css"


const TableComponent = () => {
  // Data shu yerda joylashgan
  const tableData = Array.from({ length: 89 }, (_, index) => ({
    id: index + 1,
    kod: `SHK-${1000 + index}`,
    nomi: `Shahobcha ${index + 1}`,
    texPd: `TexPD-${Math.floor(Math.random() * 100)}`,
    Paragref: `Paragref ${Math.floor(Math.random() * 50) + 1}`
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const rowsPerPage = 10;

  // Qidiruv natijalari
  const filteredData = tableData.filter((item) =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Search */}
      <div className="row mt-3 mb-4">
        <div className="col-md-6">
          <input 
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="🔍 Qidiruv: nom, kod, TexPD va h.k."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Table */}
      <table className="table table-hover table-bordered shadow-sm">
        <thead  className="tables">
          
          <tr>
            <th style={{color: '#1F2937' }} >ID</th>
            <th style={{color: '#1F2937' }} >Shahobcha KODI</th>
            <th style={{color: '#1F2937' }} >Shahobcha NOMI</th>
            <th style={{color: '#1F2937' }} >TexPD</th>
            <th style={{color: '#1F2937' }} >Paragref</th>
          </tr>
        </thead>
        <tbody  >
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <tr  key={item.id}>
                <td style={{color: '#1F2937' }}>{item.id}</td>
                <td style={{color: '#1F2937' }}>{item.kod}</td>
                <td style={{color: '#1F2937' }}>{item.nomi}</td>
                <td style={{color: '#1F2937' }}>{item.texPd}</td>
                <td style={{color: '#1F2937' }}>{item.Paragref}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                🔍 Hech qanday mos ma'lumot topilmadi.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul  className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <li style={{ backgroundColor: '#FCF5E6', color: '#1F2937' }}
              key={i}
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            >
              <button style={{color: '#1F2937' }} onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableComponent;
