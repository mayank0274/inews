export const handleFavourites = (news: any) => {
  let favouriteNews = Array.from(
    JSON.parse(localStorage.getItem("inews-favourites") || "{}")
  );

  if (favouriteNews.length > 0) {
    let alreadyAdded = favouriteNews.filter((elem: any) => {
      return elem.url == news.url;
    });

    if (alreadyAdded.length > 0) {
      let filteredArray = favouriteNews.filter((elem: any) => {
        return elem.url != news.ur;
      });

      localStorage.setItem("inews-favourites", JSON.stringify(filteredArray));

      favouriteNews = Array.from(
        JSON.parse(localStorage.getItem("inews-favourites") || "{}")
      );
    } else {
      localStorage.setItem(
        "inews-favourites",
        JSON.stringify([...favouriteNews, news])
      );

      favouriteNews = Array.from(
        JSON.parse(localStorage.getItem("inews-favourites") || "{}")
      );
    }
  } else {
    localStorage.setItem(
      "inews-favourites",
      JSON.stringify([...favouriteNews, news])
    );

    favouriteNews = Array.from(
      JSON.parse(localStorage.getItem("inews-favourites") || "{}")
    );
  }
};
