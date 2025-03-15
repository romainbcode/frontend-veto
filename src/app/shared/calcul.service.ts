import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  /**
   * Convertit une date au format JJ/MM/YYYY en MM/DD/YYYY pour que JavaScript comprenne.
   * @param dateNaissance La date au format JJ/MM/YYYY
   * @returns La date au format MM/DD/YYYY
   */
  private convertDateFormat(dateNaissance: string): string {
    const parts = dateNaissance.split('/'); // Découpe la date au format JJ/MM/YYYY
    return `${parts[1]}/${parts[0]}/${parts[2]}`; // Renvoie la date au format MM/DD/YYYY
  }

  /**
   * Calcul l'âge en années d'une personne en fonction de sa date de naissance.
   * @param dateNaissance La date de naissance au format JJ/MM/YYYY.
   * @returns L'âge en années.
   */
  getAgeYear(dateNaissance: string): number {
    const dateNaissanceObj = new Date(this.convertDateFormat(dateNaissance)); // Convertir la date au format MM/DD/YYYY
    const today = new Date();

    let age = today.getFullYear() - dateNaissanceObj.getFullYear();
    const m = today.getMonth() - dateNaissanceObj.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dateNaissanceObj.getDate())) {
      age--;
    }

    return age;
  }

  /**
   * Calcul l'âge en mois d'une personne en fonction de sa date de naissance.
   * @param dateNaissance La date de naissance au format JJ/MM/YYYY.
   * @returns L'âge en mois.
   */
  getAgeMonth(dateNaissance: string): number {
    const dateNaissanceObj = new Date(this.convertDateFormat(dateNaissance)); // Convertir la date au format MM/DD/YYYY
    const today = new Date();

    let months = today.getMonth() - dateNaissanceObj.getMonth() + (12 * (today.getFullYear() - dateNaissanceObj.getFullYear()));

    // Si l'âge est d'une année complète, on n'ajoute pas 12 mois supplémentaires
    if (today.getDate() < dateNaissanceObj.getDate()) {
      months--;
    }

    // Si l'âge en années est supérieur à 0, on ne doit pas considérer 12 mois comme un mois supplémentaire
    if (months >= 12) {
      months -= 12; // On enlève les mois supplémentaires si on a dépassé une année complète
    }

    return months;
  }
}
