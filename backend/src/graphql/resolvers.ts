const inns = [{
    id: 1, name: 'pousada drake e josh', description: 'description', lat: 20.25, lng: 20.25, image: 'img'
}, {
    id: 2, name: 'pousada sei la oq', description: 'description', lat: 12.15, lng: 12.58, image: 'img'
}]

interface Inn {
    id: number
    name: string
    description: string
    lat: number
    lng: number
    image: string
}

export default {
    Mutation: {
        createInn: (root: any, args: Inn) => {
            return inns
        }
    },
    Query: {
        getInns: () => {
            return inns
        }
    }
}