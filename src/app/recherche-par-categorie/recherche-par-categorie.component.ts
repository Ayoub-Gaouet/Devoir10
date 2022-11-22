import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  categories! : Categorie[];
  IdCategorie!:number;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories=this.produitService.listeCategories();
    this.produits=[];
  }

onChange(){
  console.log(this.IdCategorie);
  this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
}
/* supprimerProduit( prod: Produit){
  
  const index = this.produits.indexOf(prod, 0);
  if (index > -1) {
  this.produits.splice(index, 1);
  } 
} */
supprimerProduit(p:Produit)
{
  let conf=confirm('Etes-vous sur?');
  if(conf)
  {
    this.produitService.supprimerProduit(p);
    this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
  }
}

}