const baseUrl = 'http://10.0.0.20:3001/api'

export const getAll = (pos) => {
  const posParam = `${pos.latitude},${pos.longitude}`
  return fetch(`${baseUrl}/all/${posParam}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err));
}

export const createPost = (post) => {
  return fetch(`${baseUrl}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).then(res => res.json())
    .then(post => post)
    .catch(err => console.error(err));
}

export const createNotice = (notice) => {
  return fetch(`${baseUrl}/notice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notice),
  }).then(res => res.json())
    .then(notice => notice)
    .catch(err => console.error(err));
}