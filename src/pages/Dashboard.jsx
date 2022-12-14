import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='d-flex body'>
        <div className='d-flex justify-content'>
          <img
            className='img-fluid'
            src='/assets/img/image 40.svg'
            style={{ width: '100%' }}
          />
        </div>
      </div>
      <div className='position-relative'>
        <img className='img-fluid' src='/assets/img/image 25.svg' />
        <div className='row text-center'>
          <div className='col col-sm-12 position-absolute top-50 start-50 translate-middle'>
            <Link className='active' to='/login'>
              <button className='btn-kiri text-light fw-bold'>
                LIHAT PENERBANGAN
              </button>
            </Link>
            <Link className='active' to='/login'>
              <button className='btn-kanan text-light fw-bold'>
                PESAN TIKET
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='position-relative more'>
        <img
          className='img-fluid logo'
          src='/assets/img/travel-safely 1.svg'
        ></img>
        <div className='position-absolute top-50 start-50 translate-middle text-center '>
          <img
            className='img-fluid pesawat'
            src='/assets/img/Group 10.svg'
          ></img>
          <h1 className='text-light fw-bold'>
            kami mengerti anda
            <br /> karena kami peduli
          </h1>
          <button className='btn btn-transparent border text-light'>
            Selengkapnya
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='row kartu mt-5 mx-auto'>
          <div className='col-md-4 mt-2'>
            <div className='card text-center text-light'>
              <img src='/assets/img/image 1.svg'></img>
              <div className='card-body bg-primary'>
                <p>Pilot, Cabin Crew</p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-2'>
            <div className='card text-center text-light'>
              <img src='/assets/img/image 3.svg'></img>
              <div className='card-body bg-secondary'>
                <p>Our Healthy Food</p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-2'>
            <div className='card text-center text-light'>
              <img src='/assets/img/image 2.svg'></img>
              <div className='card-body bg-secondary'>
                <p>Passenger Comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container partner-maskapai'>
        <div className='row mt-5 pt-5  d-flex '>
          <h4 className='text-center fw-bold partner'>Partner Maskapai</h4>
          <div className='col-lg-6 col-md-12 mt-5'>
            <h3 className='fw-bold'>Airline Partner</h3>
            <p>Domestic & International Airline Partners</p>
            <p>
              Kami bermitra dengan berbagai maskapai penerbangan di seluruh
              dunia untuk membawa Anda ke mana pun Anda inginkan
            </p>
          </div>
          <div className='col-lg-6 col-md-12 mt-5 '>
            <div className='row p-3'>
              <div className='col-3'>
                <img src='/assets/img/image 5.svg'></img>
              </div>
              <div className='col-3'>
                <img src='/assets/img/image 4.svg'></img>
              </div>
              <div className='col-3'>
                <img src='/assets/img/image 6.svg'></img>
              </div>
              <div className='col-3'>
                <img src='/assets/img/image 10.svg'></img>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-3'>
                <img src='/assets/img/image 9.svg'></img>
              </div>
              <div className='col-3'>
                <img src='/assets/img/image 12.svg'></img>
              </div>
              <div className='col-3'>
                <img src='/assets/img/image 11.svg'></img>
              </div>
              <div className='col-3'>
                <img src='/assets/img/image 8.svg'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='skyteam'>
        <div className='container text-center mt-5 pt-5'>
          <img src='/assets/img/image 14.svg'></img>
          <p className='mt-5'>
            MyAIRFARE adalah maskapai penerbangan Indonesia <br></br>yang
            bergabung dengan SkyTeam
          </p>
          <button className='btn btn-transparent border-primary text-primary mt-5'>
            selengkapnya
          </button>
        </div>
      </div>
      <div className='container text-center mt-5 tentang-kami'>
        <h2 className='fw-bold ' id='tentangkami'>
          Tentang Kami
        </h2>
        <div className='row mt-5'>
          <div className='col-lg-3 col-md-6 mt-3'>
            <div className='card'>
              <img src='/assets/img/image 15.svg' className='card-img'></img>
              <div className='card-img-overlay mb-5'>
                <h5 className='card-text'>Profil Perusahaan</h5>
                <button className='btn btn-light text-primary'>
                  selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mt-3'>
            <div className='card'>
              <img src='/assets/img/image 16.jpg' className='card-img'></img>
              <div className='card-img-overlay mb-5'>
                <h5 className='card-text'>Unit Bisnis Strategis</h5>
                <button className='btn btn-light text-primary'>
                  selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mt-3'>
            <div className='card'>
              <img src='/assets/img/image 17.jpg' className='card-img'></img>
              <div className='card-img-overlay mb-5'>
                <h5 className='card-text'>Hubungan Investor</h5>
                <button className='btn btn-light text-primary'>
                  selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mt-3'>
            <div className='card'>
              <img src='/assets/img/image 18.jpg' className='card-img'></img>
              <div className='card-img-overlay mb-5'>
                <h5 className='card-text'>CSR</h5>
                <button className='btn btn-light text-primary'>
                  selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
