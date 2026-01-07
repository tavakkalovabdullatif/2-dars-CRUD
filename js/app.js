fetch("https://json-api.uz/api/project/fn44-amaliyot/cars")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    ui(res.data);
  })
  .catch(() => {})
  .finally(() => {});

function ui(data) {
  const elTemplateCard = document.getElementById("templateCard");
  const elContainer = document.getElementById("container");
  data.forEach((element) => {
    const template = elTemplateCard.cloneNode(true).content;
    template.querySelector("h2").innerText = element.name
      ? element.name
      : "No title!";
    template.querySelector("p").innerText = element.type
      ? element.type
      : "No title!";
    template.querySelector("img").src = element.image
      ? element.image
      : "No image!";

    elContainer.appendChild(template);
  });
}
