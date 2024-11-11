import '../styles/DataResults.css'

const DataResults = () => {
    return (
        <div class="">

            <div class="container text-center DataResults">

                <div class="row">
                    <h2>Historical Results</h2>
                    <hr />
                </div>

                <div class="row">
                    <div class="col-9">
                        <div className="row DataResultsItem">
                            <h4>Item #1</h4>
                            <p>Hola</p>
                        </div>
                        <div className="row DataResultsItem">
                            <p>Hola</p>
                        </div>
                    </div>
                    <div class="col-3">
                        IMAGE
                    </div>
                </div>

            </div>



        </div>
    );
}

export default DataResults;