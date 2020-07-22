// import tokenService from './tokenService';
import userService from './userService';

const BASE_URL = '/api/forums';

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(forum) {
  forum.user = userService.getUser()._id
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(forum)
  }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

// export function create(forum) {
//     return fetch(BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           'Authorization': `Bearer ${tokenService.getToken()}`
//         },
//         body: JSON.stringify(forum)
//     }).then(res => res.json());
// }

//

// export function update(forum) {
//     return fetch(`${BASE_URL}/${forum._id}`, {
//       method: 'PUT',
//       headers: {'content-type': 'application/json'},
//       body: JSON.stringify(forum)
//     }).then(res => res.json());
// }
  


// These include Authorization


// export function getAll() {
//   return fetch(BASE_URL, {
//       headers: {
//         'Authorization': `Bearer ${tokenService.getToken()}`
//       }
//   })
//   .then(res => res.json());
// }

// export function create(forum) {
//     return fetch(BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           'Authorization': `Bearer ${tokenService.getToken()}`
//         },
//         body: JSON.stringify(forum)
//     }).then(res => res.json());
// }

// export function deleteOne(id) {
//     return fetch(`${BASE_URL}/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Authorization': `Bearer ${tokenService.getToken()}`
//         }
//     }).then(res => res.json());
// }

// export function update(pup) {
//     return fetch(`${BASE_URL}/${pup._id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': `Bearer ${tokenService.getToken()}`
//         },
//         body: JSON.stringify(pup)
//     }).then(res => res.json());
// }