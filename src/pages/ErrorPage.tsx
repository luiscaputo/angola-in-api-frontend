import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  return (
    <div id="error-page">
      <h1>Oops! Página Não Encontrada</h1>
      <p>Desculpa Página Não Encontrada.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
        <a href="/">Voltar ai Inicio</a>
    </div>
  );
}