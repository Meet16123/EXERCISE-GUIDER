export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': "f1812a3728mshd8186ffdc9dca0cp1e1fecjsn7aa167559c79",
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f1812a3728mshd8186ffdc9dca0cp1e1fecjsn7aa167559c79',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};