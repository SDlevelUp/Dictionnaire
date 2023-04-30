function search(){
  let word = document.getElementById("search-term").value;
  let resultat = document.getElementById("resultat");

  if(word.length != 0) {

    fetch("localhost:3000/api/definitions/" + word)
    .then(res =>
        res.json().then(data =>{
            try{
                for(let words of data){
                    let definition = words.meanings[0].definitions[0].definition
                    resultat.innerHTML="<p class='res'><span>Definition</span><br>"+ definition+"</p>";
                }
            }catch(err){
                resultat.innerHTML="<p>Sorry...No definition was found!</p>"
            
            }
        }))
            }else{
                resultat.innerHTML = "<p style='color:red;'>* This field must be filled</p>"    }
}