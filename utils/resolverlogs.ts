interface GraphQLRequestContext {
  request: any // Specify the actual type for request
  response: any // Specify the actual type for response
  // Add other fields as needed
}

export const resolverLogPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext: GraphQLRequestContext) {
    //console.log('Get query and variables!')
    // console.log('Request started! Query:\n' + requestContext.request.query)
    // console.log('Request started! Query:\n' + JSON.stringify(requestContext.request.variables));

    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      async parsingDidStart(requestContext: GraphQLRequestContext) {
        //console.log('Parsing started!')
        //console.log(requestContext)
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      async validationDidStart(requestContext: GraphQLRequestContext) {
        //console.log('Validation started!')
        //console.log(requestContext)
      }
    }
  }
}
