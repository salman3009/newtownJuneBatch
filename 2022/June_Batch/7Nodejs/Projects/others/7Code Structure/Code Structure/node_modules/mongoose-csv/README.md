# mongoose-csv

generate CSVs from a mongoose schema

### usage 

```javascript
var mongoose_csv = require('mongoose-csv');
var schema = new mongoose.Schema({ name: String });
schema.plugin(mongoose_csv);
```

This adds a `.csv()` function, which takes a [write-stream](https://nodejs.org/api/stream.html#stream_class_stream_writable), to the `mongoose.Query`, utilizing [mongoose QueryStream](http://mongoosejs.com/docs/api.html#querystream_QueryStream-pipe). This should be called after [query](http://mongoosejs.com/docs/api.html#query-js) calls, e.g. `.find()`, `.select()`, `.limit()`. This facilitates responding to an HTTP request, writing to a file, etc.

For example, a simple Express/Restify handler:

```javascript
app.get('/csv', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=sample.csv'
    });
    // pipe file using mongoose-csv
    model.find().sort({ _id : 1 }).limit(100).csv(res);
})
```

This is faciliated by two lower-level methods, which are exposed for extensibility:

 - a static function to the schema `.csv_header()`, returning property names
 - an instance method on documents `.toCSV()`, returning values of a document


### configuration

By default, `mongoose-csv` automatically includes any property with a type that is not `Array` or `Mixed` (this includes the nested properties of an `Object` type). Properties are returned in the order they are defined. Properties which are nested have a column name that is prefixed by their parent name and a period, e.g. `nested.foo` and `nested.bar` below.

If you want to prevent a property from the CSV output, annotate it with `{ csv : false }`. For example:

```javascript
var schema = new mongoose.Schema({ 
    'name' : String,
    'secret' : { type: String, csv: false },
    'nested' : { 
        'foo' : String,
        'bar' : Date
    }
});
```
