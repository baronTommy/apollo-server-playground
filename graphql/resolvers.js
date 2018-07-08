import * as querys from './querys'
import * as mutations from './mutations'

export const resolvers = {
    Query: {
      company: querys.company
    },
    Mutation: {
      user: mutations.user
    }
  }
