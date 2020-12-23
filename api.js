async function getData() {
  const res = await fetch("./app.json");
  const data = await res.json();

  return data;
}

export default getData;
