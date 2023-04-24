$(document).ready(function() {

    let url = "http://localhost:5000/article/new?=" ;
    // debut code ajax 

// liste des utilisateurs
    $.ajax({
        url: url 
       // url: "https://test.npi-stores.com/user/all" 
        //contentType : 'application/json',
//dataType : 'json',
//headers: {"Accepts": "text/plain; charset=utf-8"}

    }).then(function(data) {

        console.log(data.data) ;
        
        for (i = 0; i < data.data.length; i++) {
            $('#news').append("<ul><li>"+data.data[i].ID_USER+"</li></ul>");
          $('#news').append("<ul><li>"+data.data[i].NOM_USER+"</li></ul>");
          $('#news').append("<ul><li>"+data.data[i].LOGIN+"</li></ul>");
        }
        
    });


    // liste des actifs 

    const liste = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:5000/article/all",
        "method": "GET",
        "headers": {
          "cookie": "connect.sid=s%253ARrBVcro_yRLa8Em5aqmGqW8KRwX0-JFS.No0q8Xhbjm%252FIRlX34iMv20zHpVaGjb5LZp54XpwmeLU",
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": ""
      };
      
      $.ajax(liste).done(function (response) {
        console.log(response);
      });


      // fin liste 

    // creer un materiel
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
          "cookie": "connect.sid=s%253A74I4gS7N_zqOKIdil43-GzzXljOQc6eq.iuyhnwCQ05tYpArtmgC%252FpJHxSTUwPeXSkxyIKsOJI%252FM",
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{\n\t\"num\" : \"VG022\"\n , \"description\": \"video projecteur LG \"  , \n\t\"libelle\" : \" vga et hdmi \",  \n\t\"disponibilite\" : \"1\" , \n\t\"etat\" : \"bon\" , \n\t\"dateAchat\"  : \"24/04/2023\", \n\t\"duree_garantie\" : \"6 mois\" ,\n\t\"num_type_actif\"  : \"1\"\n}"
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });


    //fin ajax

});