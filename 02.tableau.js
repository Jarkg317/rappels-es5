var ville = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
ville.forEach(function(element){console.log(element)});
 console.log("lettreADansToutesLesVilles = "+ville.every(function(element){return element.includes('a')}))
 console.log("auMoinsUneVilleAvecUnTiret = "+ville.some(function(element){return element.includes('-')}))
 console.log("villesSansTiretSansEspace = "+ville.filter(function(element){return !element.includes('-')&&!element.includes(' ')}))
 console.log("villesMajusculeSeTerminantParS = "+ville.filter(function(element){return element.endsWith('s')}).map(function(element){ return element.toUpperCase()}))