import type { Route } from "./+types/learning";
import { LearningHub } from "../components/learning-hub";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Espace apprentissage | NetCom" },
    { name: "description", content: "Vos fichiers et documents d'apprentissage." },
  ];
}

export default function LearningPage() {
  return <LearningHub />;
}