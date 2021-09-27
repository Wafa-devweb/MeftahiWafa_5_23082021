// Listing produit sur la page index
fetch('http://localhost:3000/api/teddies/')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data);
        let html = '';
        for( const item of data ) {
        html+=` <div class="card border shadow p-3 mb-5 bg-body rounded">
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
                            <a href="produit.html?id=${item._id}" class="btn btn-primary">Voir le produit</a>
                            <a href="panier.html?id=${item._id}" class="btn btn-secondary">Acheter ce produit</a>
                        </div>
                </div>`;
        }
        document.querySelector('#listing').innerHTML = html;
    })


