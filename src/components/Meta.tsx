// src/components/Meta.tsx
import { Helmet } from "react-helmet-async";

export default function Meta() {
  return (
    <Helmet>
      <title>Generative KI profitabel nutzen | Mission42</title>
      <meta
        name="description"
        content="Erhalte in 6 Wochen produktive KI-Agenten ohne Code. Steigere Gewinn & Produktivität – jetzt Beratungsgespräch sichern!"
      />
      <link rel="canonical" href="https://mission42.ai/" />
    </Helmet>
  );
}
