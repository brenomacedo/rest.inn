import InnsEntity from '../entities/innsEntity'
import { getConnectionManager, getConnection } from 'typeorm'

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
    state: string
    city: string
}

interface Search {
    state: string
    city: string
}

export default {
    Mutation: {
        createInn: async (root: any, args: Inn) => {
            const repository = getConnectionManager().get().getRepository(InnsEntity)
            const inns = new InnsEntity()

            inns.name = args.name
            inns.description = args.description
            inns.lat = args.lat
            inns.lng = args.lng
            inns.state = args.state
            inns.city = args.city

            

            const response = await repository.save(inns)
            console.log(response)
            return response
        }
    },
    Query: {
        getInns: async (root: any, args: Search) => {
            const repository = getConnectionManager().get().getRepository(InnsEntity)
            const Inns = await repository.find({
                where: {
                    city: args.city,
                    state: args.state
                }
            })
            return Inns
        }
    }
}