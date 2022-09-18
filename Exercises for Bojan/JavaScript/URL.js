const apiUrls = {
  // here I get all the products
  products: `https://fakestoreapi.com/products`,
  // here i get all the categories
  category: "https://fakestoreapi.com/products/categories",
};

//global variable for the main div to use it for apending children in it
const div = document.getElementById("apiInfo");

//reuseble function fot geting data from URL's
async function getData(url) {
  let result = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return result;
}

//main function: get the data, create elements, add class to them, add inner content from the url, append them
function renderScreen() {
  getData(apiUrls.products).then((res) => {
    res.forEach((element) => {
      //main div
      let elem = document.createElement("div");
      elem.classList.add("container", "display-f-c-c");

      //title div
      let titleNew = document.createElement("div");
      titleNew.classList.add("title", "margin-15-auto", "display-f-c-c");
      titleNew.innerHTML = element.title;
      elem.appendChild(titleNew);

      //image
      let imageNew = document.createElement("img");
      imageNew.classList.add(
        "image",
        "margin-15-auto",
        "height-200-width-300",
        "display-f-c-c"
      );
      imageNew.src = element.image;
      elem.appendChild(imageNew);

      //category
      let category = document.createElement("p");
      category.classList.add("desc", "margin-15-auto", "display-f-c-c");
      category.innerHTML = `Looking at ${element.category}`;
      elem.appendChild(category);

      //price
      let price = document.createElement("p");
      price.classList.add("desc", "margin-15-auto", "display-f-c-c");
      price.innerHTML = `Price is ${element.price}`;
      elem.appendChild(price);

      //final step
      div.appendChild(elem);
    });
  });
}
renderScreen();
