/**
 * Architecture générale ARTAG (étape 1)
 *
 * Objectif: poser un cadre stable avant d'implémenter les blocs métier.
 * Ce fichier décrit les zones applicatives et les points d'entrée.
 */

export type EntryPoint =
  | "parcours_social_socioprofessionnel"
  | "appui_tns"
  | "direction"
  | "connexion_nominative";

export type AppArea =
  | "accueil"
  | "authentification"
  | "dossier_unique_partage"
  | "espace_professionnel_reserve"
  | "pilotage_direction"
  | "administration_technique";

export type ScreenId =
  | "home"
  | "login"
  | "forgot_password"
  | "parcours_social_board"
  | "parcours_sociopro_board"
  | "appui_tns_board"
  | "shared_case_file"
  | "professional_private_notes"
  | "direction_dashboard";

export interface ScreenDefinition {
  id: ScreenId;
  area: AppArea;
  description: string;
  visibleToBeneficiary: boolean;
}

export const ENTRY_POINTS: readonly EntryPoint[] = [
  "parcours_social_socioprofessionnel",
  "appui_tns",
  "direction",
  "connexion_nominative",
] as const;

export const APP_AREAS: readonly AppArea[] = [
  "accueil",
  "authentification",
  "dossier_unique_partage",
  "espace_professionnel_reserve",
  "pilotage_direction",
  "administration_technique",
] as const;

export const SCREENS: readonly ScreenDefinition[] = [
  {
    id: "home",
    area: "accueil",
    description: "Page d'entrée avec les deux parcours principaux et accès direction discret.",
    visibleToBeneficiary: false,
  },
  {
    id: "login",
    area: "authentification",
    description: "Connexion nominative par mail professionnel et mot de passe personnel.",
    visibleToBeneficiary: false,
  },
  {
    id: "forgot_password",
    area: "authentification",
    description: "Réinitialisation du mot de passe via mail professionnel.",
    visibleToBeneficiary: false,
  },
  {
    id: "parcours_social_board",
    area: "dossier_unique_partage",
    description: "Vue parcours social: Accueillir → Consolider → Approfondir → Agir → Stabiliser.",
    visibleToBeneficiary: true,
  },
  {
    id: "parcours_sociopro_board",
    area: "dossier_unique_partage",
    description: "Vue parcours socio-professionnel: Situer → Consolider → Se projeter → Avancer vers l'activité → Stabiliser.",
    visibleToBeneficiary: true,
  },
  {
    id: "appui_tns_board",
    area: "dossier_unique_partage",
    description: "Vue Appui TNS: Entrer → Consolider → Clarifier → Structurer → Ajuster.",
    visibleToBeneficiary: true,
  },
  {
    id: "shared_case_file",
    area: "dossier_unique_partage",
    description: "Dossier unique partagé qui suit la personne accompagnée.",
    visibleToBeneficiary: true,
  },
  {
    id: "professional_private_notes",
    area: "espace_professionnel_reserve",
    description: "Bloc interne relation d'aide, hypothèses et notes sensibles.",
    visibleToBeneficiary: false,
  },
  {
    id: "direction_dashboard",
    area: "pilotage_direction",
    description: "Espace direction / pilotage et indicateurs institutionnels.",
    visibleToBeneficiary: false,
  },
] as const;
