export default async function Todos() {
  const response = await fetch("http://localhost:3000/api/todos");
  const todos = await response.json();

  return <>{<p>{todos?.length} todos hittades</p>}</>;
}
