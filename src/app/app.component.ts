import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
    title: "Mon premier post",
    content: "Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt dans le champs de commentaires. Le projet doit être fonctionnel une fois que le projet a été cloné et que la commande npm install a été saisie à la racine.",
    loveIts: 2,
    created_at: new Date()
    },
    {
    title: "Mon deuxième post",
    content: "Le databinding, c'est la communication entre votre code TypeScript et le template HTML qui est montré à l'utilisateur.  Cette communication est divisée en deux directions",
    loveIts: -1,
    created_at: new Date()
    },
    {
    title: "Encore un post",
    content: "L'interpolation est la manière la plus basique d'émettre des données issues de votre code TypeScript.",
    loveIts: 0,
    created_at: new Date()
    }     
  ];


}

