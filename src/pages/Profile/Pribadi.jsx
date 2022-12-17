import { useState } from 'react'
import { Link } from 'react-router-dom'

function Pribadi() {
  const [Profile, setProfile] = useState('-Kelamin-')
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    setProfile(event.target.value)

    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <div className='mt-5 pt-5 row justify-content-center jarak'>
      <div className='col-sm-2'>
        <div className='card'>
          <div className='card-body p-3'>
            <h5 className='card-title mb-3'>
              <img
                src='./assets/images/user.png'
                alt='user'
                style={{ width: 50, height: 50 }}
              />
              
            </h5>
            <div className='col-md-10 mb-3'>
              <h5>Nama User</h5>
            </div>
            <div className='col-md-8 mb-3'>
              <Link to='#' className='btn btn-danger'>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-header'>
            <ul className='nav nav-tabs card-header-tabs'>
              <li className='nav-item'>
                <Link
                  to='/settingData'
                  className='nav-link active text-primary'
                  aria-current='true'
                >
                  Data Pribadi
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/settingPassword' className='nav-link text-primary'>
                  Password
                </Link>
              </li>
            </ul>
          </div>
          <form className='row g-3 p-3'>
            <div className='col-12'>
              <label htmlFor='inputNama' className='form-label'>
                Nama Lengkap
              </label>
              <input
                type='text'
                className='form-control'
                id='inputNama'
                placeholder='Nama Pengguna'
              />
            </div>
            <div className='col-md-3 mb-4'>
              <label htmlFor='inputGander' className='form-label'>
                Jenis Kelamin
              </label>
              <select id='inputGander' className='form-select'>
                <option selected>-Kelamin-</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
            </div>
            <div className='col-md-4'>
              <label htmlFor='inputAge' className='form-label'>
                Tanggal Lahir
              </label>
              <input
                type='date'
                className='form-control'
                id='inputAge'
                placeholder='dd/mm/yyyy'
              />
            </div>
            <div className='col-md-5'>
              <label htmlFor='inputCity' className='form-label'>
                Kota Tinggal
              </label>
              <input
                type='text'
                className='form-control'
                id='inputCity'
                placeholder='Kota Tinggal'
              />
            </div>
            <div className='col-12'>
              <label htmlFor='inputEmail' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='useremail@example.com'
              />
            </div>
            <div className='col-12'>
              <label htmlFor='inputTel' className='form-label'>
                No. Handphone
              </label>
              <input
                type='tel'
                className='form-control'
                id='inputTel'
                placeholder='081xxxxxx'
              />
            </div>
            <div className='row col-12 d-flex justify-content-center align-content-center p-3'>
              <div className='col-md-3'>
                <Link to='#'>
                  <button type='submit' className='mt-3 btn btn-primary'>
                    Simpan
                  </button>
                </Link>
              </div>
              <div className='col-md-3'>
                <Link to='#'>
                  <button type='delete' className='mt-3 btn btn-danger px-4'>
                    Batal
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Pribadi
