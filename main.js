document.getElementById('pilote').innerHTML ="zeub"

fetch('http://ergast.com/api/f1/drivers/alonso')
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => alert("Erreur : " + error));