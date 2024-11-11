const CardAndButton = () => {
    return (
        <div className="row">
            <div className="col">
                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Single Date and state</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <button type="button" class="btn btn-primary">Get Results</button>
            </div>
        </div>
    );
}

export default CardAndButton;