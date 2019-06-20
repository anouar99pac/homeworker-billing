# HomeworkerBilling

Remarque: Le logiciel marche en France, avec les taux de la france, donc je vais écrire en Français. je vous souhaite une bonne lecture.

Il y'a un an, j'étais trop débordé avec mes préoccupations ( boulot - sport - famille - transport ... la vie parisienne quoi )
finalement j'ai pris une décision de ramener une personne chez moi pour faire le ménage. jusqu'a ici tout va bien. Puis la première question à poser c'est le tarif, combien -- avec quel moyen -- comment réduire ou économiser le prix , si vous voulez savoir la réponse cette application Open source est faite pour vous. merci de m'encourager avec un like Star =).

Durant ma formation à l'école de Freealnce Academy
https://freelance.academy/ j'ai appris quelles sont les tickets CESU, Etienne et Quentin les deux fondateurs de l'école ont codé un script de calcul https://github.com/efolio/intervenant,  puis je me suis inspiré de ce code pour mettre une jolie interface graphique, avec des Features intéressantes.

##### Cette application va vous faire gagner de l'argent !

##### Oui mais comment ?

Vous avez besoin d'un service garde d’enfants, soutien scolaire, ménage, repassage, petit bricolage, maintien à domicile, assistance informatique ou administrative à domicile… et vous ne savez pas quel est le tarif le moins cher ?
Grace à cette application, vous pourrez comparer plusieurs cas possibles et elle vous montre plusieurs tarifs.

## DEMO

Lien pour la DEMO:

![pricing_intervenat](https://user-images.githubusercontent.com/12816334/59857071-72a0a500-9378-11e9-97e3-98f3a879726c.png)

#### Exemple: 

Un intervenant qui vous demande 30 euros par session, les charges sociales sont à votre charge.
Le coût moins chers c'est de prendre des tickets SECU  Préfinancés.

![dictionnaire](https://user-images.githubusercontent.com/12816334/59859032-530b7b80-937c-11e9-9c28-c46a70c16332.png)

Lien de l'application: [homeworker-billing](https://anouar99pac.github.io/homeworker-billing/) 
à vous de jouer Monsieurs Dames.

## Technique

Le projet a été implémenté avec la version d'Angular 8.0.2, Angular Material.

- Installation en local:

```
yarn install
ng serve
```

## Intérprétation des résultats

Vous aurez besoin de voir dans l'onget Glossaire dans le menu à gauche, la définition de chaque abréviation dans le tableau du résultat.

- `black` correspond au black, ou bien si vous réglez sans aucun avantage une rémunération nette (par exemple pour un intervenant intermittent du spectacle)
- `AE` correspond à un règlement pour un auto/microentrepreneur. Celui-ci paye lui-même ses charges.
- `AE-SAP` correspond à un règlement pour un auto/microentrepreneur ayant un agrément « service à la personne ». Celui-ci paye lui-même ses charges.
- `CESU` correspond à un règlement avec un CESU déclaratif (ou bancaire).
- `CESU-pre` correspond à un règlement avec un CESU préfinancé par une entreprise.
- `CESU-pre-post` correspond à un règlement avec un CESU préfinancé par une entreprise, mais après avoir passé le plafond d'abattement de charges sociales de 1 830 € / an.

Les colonnes sont :
- `csInt` : charges sociales de l'intervenant
- `intTotal` : prix charges de l'intervenant comprises
- `rIR` : la réduction d'IR
- `remu` : ce qu'il faut se rémunérer
- `IR` : l'IR à payer
- `cs` : les charges sociales à régler sur votre rémunération
- `rIS` : la réduction d'IS
- `cout` : le cout final pour votre entreprise (0 = le fait de ne pas prendre d'intervenant du tout)

## Important

Le paramétrage par défaut prend en compte :

  * un taux marginal d'imposition à 30%
  * des charges sociales de 45% en dehors (TNS)

Les règles de calcul et taux utilisés sont ceux applicables à l'année 2016 (charges sociales des différents statuts, réductions fiscales, …).

Vous allez pouvoir modifier ces deux paramètres dans une future version en fonction de statut. 
