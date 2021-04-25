const baseUrl = 'http://10.0.0.20:3001/api';

export const getAll = pos => {
  const posParam = `${pos.latitude},${pos.longitude}`;
  return fetch(`${baseUrl}/all/${posParam}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err));
};

export const createPost = (post, type) => {
  if (type === 'home') type = 'post';
  return fetch(`${baseUrl}/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => post)
    .catch(err => console.error(err));
};

export const updateInterest = (id, interest) => {
  return fetch(`${baseUrl}/event/${id}/${interest}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(event => event)
    .catch(err => console.error(err));
};

export const deletePost = (id, type) => {
  if (type === 'home') type = 'post';
  return fetch(`${baseUrl}/${type}/${id}`, {
    method: 'DELETE'
  }).catch(err => console.error(err));
};
