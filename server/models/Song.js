const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: { type: String },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'Lyric'
    }]
});

SongSchema.statics.addLyric = function(id, content) {
    const Lyric = mongoose.model('lyric');
    return this.findById(id)
        .then(song => {
            const lyric = new Lyric({ content, song });
            song.lyrics.push(lyric);
            return Promise.all([lyric.save(), song.save()])
                .then(([lyric, song]) => lyric);
        });
};

SongSchema.statics.findLyrics = function(id) {
    return this.findById(id)
        .populate('lyrics')
        .then(song => song.lyrics);
};

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;