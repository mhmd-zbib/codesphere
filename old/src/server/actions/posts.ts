async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer ....",
    },
  };

  const response = fetch("http://localhost:4000/", options)
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return response;
}
