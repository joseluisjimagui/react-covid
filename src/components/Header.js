const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Covid Tracker</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/historical-results">Historical Results</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/single-day">Single Day</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/single-state">Single State</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/single-state-day">Single State and date</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;