function handleSubmit(event) {
  event.preventDefault();
  let pointer = true;
  let obj = handleObjectCreate();
  for (const property in obj) {
    if (obj[property] === "") {
      pointer = false;
      handleError(property);
    }
  }
  if (pointer) {
    handleAPIPost(obj);
  }

  //   if (
  //     obj.title !== "" &&
  //     obj.price !== "" &&
  //     obj.description !== "" &&
  //     obj.image !== "" &&
  //     obj.category !== ""
  //   ) {
  //     JSON.stringify(obj);
  //   } else {
  //     for (const property in obj) {
  //       if (obj[property] === "") {
  //         handleError(property);
  //       }
  //     }
  //   }
}

async function handleAPIError(data) {
  if (!data.ok) {
    document.getElementById("error").innerText = data.statusText;
    return false;
  } else {
    return data;
  }
}

async function handleAPIPost(obj) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(obj),
  });
  let jsonRes = await handleAPIError(res);
  if (jsonRes) {
    let asd = await jsonRes.json();
    console.log(asd);
  }
}

// async function handleAPIPost(obj) {
//   await fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify(obj),
//   })
//     .then((res) => res.json())
//     .then((result) => console.log(result));
// }

function handleObjectCreate() {
  return {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    image: document.getElementById("image").value,
    category: document.getElementById("category").value,
  };
}

function handleError(data) {
  return (document.getElementsByTagName("label").namedItem(data).innerText =
    "Please enter " + data);
}
