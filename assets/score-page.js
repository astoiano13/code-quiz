function scoreSheet () {
    var table = document.getElementById("table")
    console.log(table)

    var scores = JSON.parse(localStorage.getItem("highScores"))
    scores = scores.sort(function(a, b) {
            return b.score - a.score;
          });
          
    
    for(var i = 0; i < scores.length; i++)
    {
      console.log(scores[i].initials)
      var tr = document.createElement("tr")
      var intials = document.createElement("td")
      intials.textContent = scores[i].initials
      tr.appendChild(intials)
       var secondScores = document.createElement("td")
      secondScores.textContent = scores[i].score
      tr.appendChild(secondScores)
      table.appendChild(tr)
    }
    }