let elasticsearch = require('elasticsearch');
let client = elasticsearch.Client({
    host: 'localhost:9200'
});

client.search({
    index: 'books',
    type: 'books',
    body: {
        query: {
            multi_macth: {
                query: 'express.js',
                fields: ['title', 'description'],
            }
        }
    }
}).then(function(response){
    let hits = response.hits.hits;
},function (err) {
    console.trace(err.message);
});