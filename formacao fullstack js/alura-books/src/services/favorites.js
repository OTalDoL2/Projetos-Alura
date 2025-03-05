import axios from "axios"

const favoritesAPI = axios.create({baseURL: "http://localhost:8000/favorites"})

async function getFavorites() {
    const response = await favoritesAPI.get('/')
    console.log(response.data)
    return response.data
}

async function postFavorites(id){
    console.log('vai enviar')
    await favoritesAPI.post(`/${id}`)
}

async function deleteFavorites(id){
    await favoritesAPI.delete(`/${id}`)
}

export {
    getFavorites,
    postFavorites,
    deleteFavorites
}