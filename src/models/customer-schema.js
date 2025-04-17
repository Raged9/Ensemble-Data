module.exports = (db) =>
    db.model(
      'Customer',
      db.Schema({
        date: Date,
        tiktok: String,
        instagram: String,
        reddit: String,
        youtube: String,
        twitch: String,
      })
    );
  