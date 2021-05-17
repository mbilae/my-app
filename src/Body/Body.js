import React from 'react';


class Body extends React.Component {
    render() {

        return (
            
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.britannica.com/85/171285-050-12311890/Printing-press.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://m.guardian.ng/wp-content/uploads/2020/08/5791e781d77eff92e4b6f249690eb717.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.apprenticeship.ng/wp-content/uploads/2020/04/printing-image-1024x576.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br />

<div class="container">
  <div class="row">
    <div class="col">
    <div class="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCvna9bm7_Jy96xKLZm7yr-BzzcBIeMg06A&usqp=CAU" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://i.pinimg.com/originals/3b/b0/d5/3bb0d51fb7bd74a1c0b1e83afb4f8174.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://qph.fs.quoracdn.net/main-qimg-21420606088c3700eae6cda00ba9e13c" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
</div>



            
        )
    };
};
export default Body;