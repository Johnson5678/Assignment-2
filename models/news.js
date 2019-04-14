const mongoose = require('mongoose');

const newsSchema = mongoose.Schema(
    {
        category: String,
        title: String,
        length: String,
        dates: Date
    }
 );

 mongoose.model('fakenews',newsSchema);