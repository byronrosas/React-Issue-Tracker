const { GraphQLScalarType, Kind } = require('graphql');

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    // return new Date(value);
    const dateValue = new Date(value);
    const valueReturn = Number.isNaN(dateValue) ? undefined : dateValue;
    return valueReturn;
  },
  parseLiteral(ast) {
    // return (ast.kind == Kind.STRING) ? new Date(ast.value) : undefined;
    if (ast.kind === Kind.STRING) {
      const dateValue = new Date(ast.value);
      const value = Number.isNaN(dateValue) ? undefined : dateValue;
      return value;
    }
    return undefined;
  },
});


module.exports = GraphQLDate;