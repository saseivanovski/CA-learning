// Clock in devtools
setInterval(() => {
  console.log(
    Intl.DateTimeFormat(navigator.locale, { timeStyle: "medium" }).format(
      new Date()
    )
  ),
    setTimeout(() => console.clear(), 1900);
}, 1000);
