import { baseUrl, apiKey } from './constants';

const getApi = async (search, page, limit) => {
  const data = {
    arrayUrls: null,
    error: '',
    pagination: null,
  };

  let url = `${baseUrl}trending?api_key=${apiKey}`;
  if (search === '') {
    url = `${baseUrl}trending?api_key=${apiKey}&limit=${limit}&offset=${
      limit * page
    }`;
  }
  if (search !== '') {
    url = `${baseUrl}search?api_key=${apiKey}&q=${search}&limit=${limit}&offset=${
      limit * page
    }`;
  }
  console.log(url);
  const result = await fetch(url);
  const resultJson = await result.json();
  console.log(resultJson);
  if (result.status === 200) {
    const arrayUrls = resultJson.data.map(
      value => value.images.preview_gif.url
    );
    data.arrayUrls = arrayUrls;
    data.pagination = resultJson.pagination;
  } else if (result.status === 403) {
    data.error = 'Error 403';
  }
  return data;
};

export { getApi };
