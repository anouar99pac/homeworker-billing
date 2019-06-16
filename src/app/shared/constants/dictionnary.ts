import { IDictionnary } from 'src/app/models/global-model';

export const dictionnaryColumns: IDictionnary[] = [
  { word: 'csInt', meaning: 'charges sociales de l\'intervenant'},
  { word: 'intTotal', meaning: 'prix charges de l\'intervenant comprises'},
  { word: 'rIR', meaning: 'la réduction d\'IR'},
  { word: 'remu', meaning: 'ce qu\'il faut se rémunérer}'},
  { word: 'IR', meaning: 'l\'IR à payer'},
  { word: 'cs', meaning: 'les charges sociales à régler sur votre rémunération'},
  { word: 'rIS', meaning: 'la réduction d\'IS'},
  { word: 'cout', meaning: 'le cout final pour votre entreprise (0 = le fait de ne pas prendre d\'intervenant du tout)'}
];

export const dictionnaryResults: IDictionnary[] = [
  { word: 'black', meaning: 'correspond au black, ou bien si vous réglez sans aucun avantage une rémunération nette (par exemple pour un intervenant intermittent du spectacle)'},
  { word: 'AE', meaning: 'correspond à un règlement pour un auto/microentrepreneur. Celui-ci paye lui-même ses charges.'},
  { word: 'AE-SAP', meaning: 'correspond à un règlement pour un auto/microentrepreneur ayant un agrément « service à la personne ».Celui-ci paye lui-même ses charges.'},
  { word: 'CESU', meaning: 'correspond à un règlement avec un CESU déclaratif (ou bancaire).'},
  { word: 'CESU-pre', meaning: 'correspond à un règlement avec un CESU préfinancé par une entreprise.'},
  { word: 'CESU-pre-post', meaning: 'correspond à un règlement avec un CESU préfinancé par une entreprise, mais après avoir passé le plafond d\'abattement de charges sociales de 1 830 € / an.'}
];
