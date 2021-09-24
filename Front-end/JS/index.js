fetch('http://localhost:3000/api/teddies/')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data);
        let html = '';
        for( const item of data ) {
        html+=` <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                    <div class="card border bg-light shadow p-3 mb-5 bg-body rounded">
                        <div class="card-body">
                            <div class="row">
                                <img src="${item.imageUrl}" class="img-fluid img-thumbnail p-1" alt="Peluche"></a>
                                <div class="col-6 col-sm-7 mt-3">
                                    <h5 class="card-title">${item.name}</h5>
                                </div>
                                <div class="col-6 col-sm-5 text-end mt-3">
                                    <h5 class="card-title">${item.price}</h5>
                                </div>
                            </div>
                            <p class="card-text text-truncate">${item.description}</p>
                            <a href="./Front-end/panier.html?id=${item._id}" class="btn btn-secondary">Acheter ce produit</a>
                        </div>
                    </div>
                </div>`;
        }
        document.querySelector('.listing').innerHTML = html;
    })