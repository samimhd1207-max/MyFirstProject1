import type { Route } from "./+types/sign-in";
import { SignInForm } from "../components/sign-in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Se connecter | NetCom" },
    { name: "description", content: "Page de connexion NetCom." },
  ];
}

export default function SignIn() {
  return <SignInForm />;
}