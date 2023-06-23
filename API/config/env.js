export const utilisateur = process.env.NODE_ENV === 'production'

export const apiUrl =  utilisateur ? '': 'http://localhost:4000'