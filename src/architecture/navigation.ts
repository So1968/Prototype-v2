/**
 * Parcours visuels validés (étape 1 - architecture)
 *
 * Aucun score brut exposé.
 * Les chaînes sont destinées à l'affichage d'étapes dans les écrans parcours.
 */

export type JourneyType =
  | "social"
  | "socio_professionnel"
  | "appui_tns";

export const JOURNEY_STEPS: Record<JourneyType, readonly string[]> = {
  social: [
    "Accueillir",
    "Consolider",
    "Approfondir",
    "Agir",
    "Stabiliser",
  ],
  socio_professionnel: [
    "Situer",
    "Consolider",
    "Se projeter",
    "Avancer vers l'activité",
    "Stabiliser",
  ],
  appui_tns: [
    "Entrer",
    "Consolider",
    "Clarifier",
    "Structurer",
    "Ajuster",
  ],
} as const;

export interface NavigationGuardrail {
  key: string;
  rule: string;
}

export const NAVIGATION_GUARDRAILS: readonly NavigationGuardrail[] = [
  {
    key: "dossier_shared",
    rule: "Le dossier unique partagé suit la personne accompagnée.",
  },
  {
    key: "professional_space_private",
    rule: "L'espace professionnel réservé suit la professionnelle et n'est jamais visible par l'usager.",
  },
  {
    key: "direction_indicators",
    rule: "Les indicateurs direction restent limités à l'espace pilotage.",
  },
  {
    key: "continuity_priority",
    rule: "La navigation doit favoriser la reprise rapide et la continuité de service.",
  },
] as const;
