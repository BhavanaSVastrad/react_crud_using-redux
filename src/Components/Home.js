const Home = () => {
    return (
        <div>
            <h2>React JS CRUD using REDUX & JSON Server</h2>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg" class="d-block w-100" alt="..." style={{height:400}}/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.ctfassets.net/lpvian6u6i39/6ZlxSJTo7RmMCy73i9Oarw/7a2b1a56ae3bb435a926bb7250396194/615aaae37a9185639535c3d2_CRUD.png" class="d-block w-100" alt="..." style={{height:400}}/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://assets.website-files.com/5ff66329429d880392f6cba2/63fdf75ad4a978704fe9ac9c_CRUD%20%20Preview.jpeg" class="d-block w-100" alt="..." style={{height:400}}/>
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
        </div>
    );
}

export default Home;