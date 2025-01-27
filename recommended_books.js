const recommended_books = document.getElementById("recommended_books")
const url = "./recommended_books.json"
fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(let i=0; i<data.length; i++){
    recommended_books.innerHTML += `
        <div>
          <img src="${data[i].img}" alt="book ${data[i].id}">
          <a href="${data[i].url}" target="_blank">
            <button class="btn btn-default">
              Download as pdf
            </button>
          </a>
        </div>   
    `
  }
})
