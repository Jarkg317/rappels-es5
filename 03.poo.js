function Personne(n,pr,ps){
    this.nom = n;
    this.prenom = pr;
    this.pseudo = ps;
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" - "+this.pseudo
    }
}

var jules = new Personne("LEMAIRE","Jules","jules77");
var paul = new Personne("LEMAIRE","Paul","paul44"); 

console.log(jules.getNomComplet());
console.log(paul.getNomComplet());

jules.pseudo ="jules"
console.log(jules.getNomComplet());
console.log(jules.age);

Personne.prototype.age = 'NON RENSEIGNE'
console.log(jules.age);

jules.age ="30"
console.log(jules.age);
function getInitiales(){var I = this.prenom.charAt(0); I += this.nom.charAt(0); return I}
Personne.prototype.getInitiales = getInitiales
console.log(jules.getInitiales());

var robert = {
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo :"robert77",
    getNomComplet : function(){
        return this.nom+" "+this.prenom+" - "+this.pseudo
    }
}

console.log(robert.getNomComplet());

function Client(nom,prenom,pseudo,numeroClient)
{
    Personne.call(this,nom,prenom,pseudo)
    this.numeroClient = numeroClient

    this.getInfos = function()
                    {
                        var str = this.numeroClient+" "+this.nom+" "+this.prenom
                        return str
                    }
}

var steeve = new Client("steeve","LUCAS","steeve44","A01")


console.log(steeve.numeroClient)
console.log(steeve.getInfos())