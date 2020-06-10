const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const SongType = require('./SongType');
const LyricType = require('./LyricType');
const Song = require('../models/Song');
const Lyric = require('../models/Lyric');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        songs: {
            type: new GraphQLList(SongType),
            resolve() {
                return Song.find({});
            }
        },
        song: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return Song.findById(id);
            }
        },
        lyric: {
            type: LyricType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return Lyric.findById(id);
            }
        }
    })
});

module.exports = RootQuery;