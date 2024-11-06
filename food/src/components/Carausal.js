import React from 'react';
import photo1 from '../photos/bg-title-01.jpg';

export default function ImageCarousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div
            className="carousel-caption d-flex justify-content-center align-items-center"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '10',
              width: '100%',
            }}
          >
            <form className="d-flex" style={{ width: '60%' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src={photo1}
              className="d-block w-100"
              alt="Delicious burger"
              style={{ filter: 'brightness(30%)' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={photo1}
              className="d-block w-100"
              alt="Tasty pizza"
              style={{ filter: 'brightness(30%)' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={photo1}
              className="d-block w-100"
              alt="Steamed momos"
              style={{ filter: 'brightness(30%)' }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
 