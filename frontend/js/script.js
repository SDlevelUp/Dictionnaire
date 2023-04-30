function search() {
    let word = document.getElementById("search-term").value;
    let resultat = document.getElementById("resultat");
  
    if (word.length != 0) {
      fetch("http://localhost:3000/api/definitions/?search=" + word)
        .then(res => res.json())
        .then(data => {
          console.log(data); // afficher la réponse dans la console
          try {
            let definition = data.definitions.filter(def => def.word.toLowerCase() === word.toLowerCase())[0].definition;
            resultat.innerHTML = "<p class='res'><span>Definition</span><br>" + definition + "</p>";
          } catch(err) {
            resultat.innerHTML = "<p>Sorry...No definition was found!</p>";
          }
        })
        .catch(err => {
          resultat.innerHTML = "<p>Sorry...An error occured while fetching data!</p>";
        });
    } else {
      resultat.innerHTML = "<p style='color:red;'>* This field must be filled</p>";
    }
  }
  
