const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = graphql;

const LyricType = new GraphQLObjectType({
    name:  'LyricType',
    fields: () => ({
        id: { type: GraphQLID },
        likes: { type: GraphQLInt },
        content: { type: GraphQLString }
    })
});

module.exports = LyricType;