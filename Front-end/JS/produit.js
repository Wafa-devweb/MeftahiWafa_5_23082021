
// produit sur la page produit

const searchParams = (searchParams) => {
    const parameters = new URL(document.location).searchParams;
    return parameters.get(searchParams);
}

const paramId = searchParams('id');
fetch(`http://localhost:3000/api/teddies/${paramId}`) //http://localhost:3000/api/teddies/6767676767676
    .then(res => {
        return res.json()
    })
    .then( item => {
        console.log(item);
        const optionsTpl = item.colors.map( color => {
          return `<option value="${color}">${color}</option>`;
        }).toString().replace(',', "");
        let html = `<div class="flex flex-col items-stretch w-full p-4 mt-4 rounded-md lg:flex-row bg-oniPink">
      <div class="w-full h-full mr-4 lg:w-1/2 md:min-w-1/2">
          <img id="productImage" class="object-cover rounded" src="${item.imageUrl}" alt="">
        </div>
        <div class="flex flex-col flex-wrap items-start w-full">
              <h1 class="w-full mt-8 mb-8 text-xl font-bold text-center lg:mt-4">${item.name}</h1>
              <p id="productDescription" class="mt-4 text-justify text-black text-opacity-80">${item.description}</p>
              <div class="flex-grow"></div>
              <div id="detailProduit">
                <h2 class="mt-4 font-bold text-bold font-lg">Choisir la couleur de votre produit : </h2>
              <div class="grid w-full gap-4 mt-4">
		            <select name="option" id="choix_option" required="" aria-invalid="false">
                <option value="" selected>Choix couleur</option>
                ${optionsTpl} 
                </select>
              </div>
            <button id="addToCart" class="w-full py-2 mt-4 text-lg font-bold text-center transition duration-150 transform rounded mb hover:scale-102">Ajouter au panier pour <span id="productPrice">${item.price / 100 }€</span></button>
         </div>
    </div>
          
        `;
        console.log(html)
        document.querySelector('.produit').innerHTML = html;
    })
