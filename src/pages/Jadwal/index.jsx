import { Link } from 'react-router-dom'

function Jadwal() {
  return (
    <div>
      <div
        className='text-center bg-image p-3 mb-4'
        style={{ backgroundImage: 'url("./assets/images/header.png")' }}
      >
        <div>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='position-relative'>
              <h2>Jadwal Penerbangan</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container filter filter-container mb-5'>
        <div>
          <form>
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-3 my-1'>
                <label htmlFor='jadwalTerbang' className='label'>
                  Dari
                </label>
                <input
                  className='form-control'
                  required
                  type='text'
                  name='keberangkatan'
                  id='keberangkatan'
                  placeholder='Kota Keberangkatan'
                />
              </div>
              <div className='col-md-3 my-1'>
                <label htmlFor='jadwalTerbang' className='label'>
                  Tujuan
                </label>
                <input
                  className='form-control'
                  required
                  type='text'
                  name='keberangkatan'
                  id='keberangkatan'
                  placeholder='Kota Tujuan'
                />
              </div>
              <div className='col-md-2 my-1'>
                <li className='list-group-item'>
                  <input
                    className='form-check-input me-2'
                    type='radio'
                    name='listKeberangkatan'
                    value=''
                    id='firstKeberangkatan'
                    checked
                  />
                  <label
                    className='form-check-label'
                    htmlFor='firstKeberangkatan'
                  >
                    Pergi Pulang
                  </label>
                </li>
              </div>
              <div className='col-md-2 my-1'>
                <li className='list-group-item'>
                  <input
                    className='form-check-input me-2'
                    type='radio'
                    name='listKeberangkatan'
                    value=''
                    id='firstKeberangkatan'
                  />
                  <label
                    className='form-chech-label'
                    htmlFor='firstKeberangkatan'
                  >
                    Sekali Jalan
                  </label>
                </li>
              </div>
              <div className='col-md-3 my-1'>
                <label htmlFor='jadwalTerbang' className='label'>
                  Pergi
                </label>
                <input
                  className='form-control'
                  required
                  type='date'
                  name='keberangkatan'
                  id='keberangkatan'
                />
              </div>
              <div className='col-md-3 my-1'>
                <label htmlFor='jadwalTerbang' className='label'>
                  Pulang
                </label>
                <input
                  className='form-control'
                  required
                  type='date'
                  name='keberangkatan'
                  id='keberangkatan'
                />
              </div>
              <div className='col-md-2 my-1'>
                <Link to='#'>
                  <button className='btn btn-primary' type='submit'>
                    Cari Jadwal
                  </button>
                </Link>
              </div>
              <div className='col-md-2 my-1'>
                <Link to='#'>
                  <button className='btn btn-danger' type='submit'>
                    Hapus input
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='row justify-content-center p-3'>
        <div className='col-sm-7'>
          <div className='card'>
            <div className='card-body p-3'>
              <p className='card-title'>
                Jakarta&nbsp;&nbsp;
                <img src='./assets/images/rotate.png' />
                &nbsp;&nbsp;Bali
              </p>
              <p className='card-title'>Rab, 12 Okt 2022</p>
            </div>
            <div className='row align-items-center justify-content-center position-absolute top-50 end-0 translate-middle'>
              <div className='card-body'>
                <Link to='#'>
                  <button className='btn btn-primary' type='submit'>
                    Ganti Pencarian
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-sm-7'>
          <div className='card'>
            <div className='table'>
              <thead className='table-primary'>
                <tr className=' text-center'>
                  <th scope='col'>Flight</th>
                  <th>Keberangkatan</th>
                  <th>Waktu Keberangkatan</th>
                  <th>Kedatangan</th>
                  <th>Waktu Kedatangan</th>
                  <th>Nomor Penerbangan</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jadwal
