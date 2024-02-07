const gameCatalog = [
   { title: 'GTA5',
    releaseYear: '2015' 
},
{ title: 'Cyberpunk 2077',
    releaseYear: '2020' 
},
{ title: 'Dota 2',
    releaseYear: '2013' 
},
{ title: 'ROBLEX',
    releaseYear: '2006' 
},
{ title: 'GENSHEN',
    releaseYear: '2020' 
},
{ title: 'Min',
    releaseYear: '2011' 
},
{ title: 'CS',
    releaseYear: '2012' 
},
{ title: 'Сапер',
    releaseYear: '1989' 
},
{ title: 'Косынка',
    releaseYear: '1990' 
}
]
//function filterGame(elem,x, y, z) {
  //  console.log(x, y, z)
    //return x.releaseYear > 1900
//}
const newCatalog = gameCatalog.filter(x => x.releaseYear > 1900);
gameCatalog.filter(x => x.releaseYear > 1900)
//console.log(newCatalog)