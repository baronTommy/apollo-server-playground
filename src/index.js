import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { mocks } from '../graphql/mock'
import { resolvers } from '../graphql/resolvers'

const typeDefs = importSchema('graphqlSchema/schema.graphql')
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// mock 有効化
addMockFunctionsToSchema({ 
  schema,
  mocks,
  // mock と resolversの併用
  preserveResolvers: true,
 })

const app = express()
app.use(cors());

// end point
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GQL エディタ 
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// GQL relation
app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.listen(3000, () => console.log(
  '/graphql',
  '/graphiql',
  '/voyager',
))
