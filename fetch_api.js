const API_KEY = "f7E4OIxclZfM54dwgRlHNr7QnJ6xGG8b"

const peticion =  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

peticion
  .then(resp => resp.json())
  .then(data => {
    const { url } = data.data.images.original; 
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    console.log(url);  
  })
  .catch(console.warn);

// esto se conoce como promesas encadenadas

// esto se conoce como promesas de cadena


