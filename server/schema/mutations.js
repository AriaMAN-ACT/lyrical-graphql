const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const Song = require('../models/Song');
const Lyric = require('../models/Lyric');
const SongType = require('./SongType');
const LyricType = require('./LyricType');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSong: {
            type: SongType,
            args: {
                title: { type: GraphQLString }
            },
            resolve(parentValue, { title }) {
                return (new Song({ title })).save()
            }
        },
        addLyricToSong: {
            type: LyricType,
            args: {
                content: { type: GraphQLString },
                songId: { type: GraphQLID }
            },
            resolve(parentValue, { content, songId }) {
                return Song.addLyric(songId, content);
            }
        },
        likeLyric: {
            type: LyricType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Lyric.like(id);
            }
        },
        deleteSong: {
            type: SongType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Song.findByIdAndDelete(id);
            }
        }
    }
});

module.exports = mutation;