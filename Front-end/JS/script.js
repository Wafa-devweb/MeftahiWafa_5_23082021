let url ="http://localhost:3000/api/teddies";
 function  Loadteddy(){

 fetch(url)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

Loadteddy()
