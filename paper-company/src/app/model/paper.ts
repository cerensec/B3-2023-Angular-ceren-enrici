export class Paper {
  public id : string;
  public nom : string;
  public texture : string;
  public grammage : string;
  public couleur : string;

  constructor(id : string, nom : string, texture : string, grammage : string, couleur : string) {
    this.id = id;
    this.nom = nom;
    this.texture = texture;
    this.grammage = grammage;
    this.couleur = couleur;
  }
}
