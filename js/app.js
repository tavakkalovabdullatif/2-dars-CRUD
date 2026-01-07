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

function loader(bool) {
  const elLoader = document.getElementById("loader");
  const elTemplateSkeleton = document.getElementById("templateSkeleton");

  if (bool) {
    elLoader.innerHTML = null;
    Array.from({ length: 7 }, (_, index) => index).forEach(() => {
      elLoader.appendChild(elTemplateSkeleton);
    });
  } else {
    elLoader.innerHTML = null;
  }
}

loader(true);
