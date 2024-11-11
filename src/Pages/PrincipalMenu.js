import '../styles/PrincipalMenu.css'

const PrincipalMenu = () => {
    return (
        <div class="container text-center">
            <h1>PrincipalMenu</h1>
            <div class="row align-items-center">
                <div class="col">
                    <div className="row">
                        <h1>CovidTracker</h1>
                        <p>Stadisctics and graphs about COVID in USA.</p>
                    </div>
                    <div className="row">
                        <img
                            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                            alt="new"
                            class="img-fluid round"
                        />
                    </div>
                    <div className="row">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div class="col">
                    <div className="row">
                        <div class="card mb-3 ">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Historical Results</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="card mb-3 ">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Single Day</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="card mb-3 ">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Single State</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="card mb-3 ">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Single Date and state</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipalMenu;