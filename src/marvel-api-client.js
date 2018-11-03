// you will also have to setup the referring domains on your marvel developer portal
const PRIV_KEY = '2e5d72da891f2b5ca57fe0b1a06a26f20a622220';
const PUBLIC_KEY = '66ef26227cbc5462b13d6310153279e2';

const MARVELRESPONSE = function getMarvelResponse() {
  // you need a new ts every request
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

  // the api deals a lot in ids rather than just the strings you want to use
  const characterId = '1009718'; // wolverine


  const url = 'http://gateway.marvel.com:80/v1/public/comics';

  console.log(url);
  $.getJSON(url, {
    ts,
    apikey: PUBLIC_KEY,
    hash,
    characters: characterId,
  })
    .done((data) => {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail((err) => {
      // the error codes are listed on the dev site
      console.log(err);
    });
};

getMarvelResponse();
