import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import PopUpNotifikasi from "../pages/Notifikasi/PopUpNotif";
import PopUp from '../pages/Profile/popUp';

const Navbar = () => {

  const [profileOpn, setOpenProfile] = useState(true)
  const [notifOpen, setNotif] = useState(true)
  const [navOpen, setOpen] = useState(true)
  let nav = document.getElementById('nav')
  let notif = document.getElementById('popup-notif')
  let iconProfile = document.getElementById('popup-profile')
  const { getUserData } = useSelector(state => state.userReducer)

  function handleClickOpen() {
    nav = document.getElementById('nav')
    console.log(nav, navOpen);
    try {
      if (navOpen) {
        nav.classList.add('show')
      } else {
        nav.classList.remove('show')
      }
      setOpen(!navOpen)
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickNotif() {
    notif = document.getElementById('popup-notif')
    console.log(notif, notifOpen);
    try {
      if (notifOpen) {
        notif.classList.remove('d-none')
      } else {
        notif.classList.add('d-none')
      }
      setNotif(!notifOpen)
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickProfile() {
    iconProfile = document.getElementById('popup-profile')
    try {
      if (profileOpn) {
        iconProfile.classList.remove('d-none')
      } else {
        iconProfile.classList.add('d-none')
      }
      setOpenProfile(!profileOpn)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(getUserData);
  })

  return (
    <nav className='navbar navbar-expand-lg'>
      <div id='popup-notif' className='d-none'>
        <PopUpNotifikasi></PopUpNotifikasi>
      </div>
      <div id="popup-profile" className='d-none'>
        <PopUp></PopUp>
      </div>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img alt='icon' src='/assets/img/logo web1.svg' className='logoweb1 ps-2'></img>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          // data-bs-target='#navbarTogglerDemo01'
          // aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
          // onClick={OpenNavBar('nav')}
          onClick={handleClickOpen}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse text-center' id='nav'>
          <ul
            className='navbar-nav ms-auto'
          // style={{ marginLeft: '170px', marginRight: '10px' }}
          >
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                PESAWAT
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='/checkin'>
                CHECK IN
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='/tentangkami'>
                TENTANG KAMI
              </a>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/my-ticket'>
                MY TIKCET
              </Link>
            </li>
          </ul>

          {getUserData ? (
            <ul className='navbar-nav ms-auto'>
              <li>
                <Link className='nav-link' to='/my-chart'>
                  <img src='/assets/images/cart.png' alt='' />
                </Link>
              </li>
              <li>
                <a className='nav-link' onClick={handleClickNotif}>
                  <img src='/assets/images/bell.png' alt='' />
                </a>
              </li>
              <li id='icon-profile' className=''>
                <a className='nav-link rounded-circle' href='#' onClick={handleClickProfile}>
                  {getUserData.email} <img width={"40px"} src={process.env.REACT_APP_API_SERVER_URL + getUserData.photo} alt='' />
                </a>
              </li>
            </ul>
          ) : (
            <ul className='navbar-nav ms-auto'>
              <li id='btn-no-login'>
                <div className="row">
                  <div className="col-sm-6 text-sm-end">
                    <a className='nav-link pe-0' href='/login'>
                      <button
                        className='btn btn-secondary w-100'
                      >
                        Login
                      </button>
                    </a>
                  </div>
                  <div className="col-sm-6 text-sm-start">
                    <a className='nav-link ps-0' href='/register'>
                      <button
                        className='btn btn-primary w-100'
                        style={{ marginRight: '10px' }}
                      >
                        Daftar
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
