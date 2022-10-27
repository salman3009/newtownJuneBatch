
'use strict';

var assert = require('assert');
var mongoose = require('mongoose');
var async = require('async');
var through = require('through');

var mcsv = require('./');

var user;

function models() {

    user = new mongoose.Schema({
        username: String,
        secret: { type : String, csv : false },
        date: Date,
        number: Number,
        nested: {
            foo: String,
            secret: { type : String, csv : false },
        },
        arr: [{

        }]
    });
    user.plugin(mcsv);
    user = mongoose.model('user', user);

}

function test() {

    var user1 = new user({
        _id : '5605710130d525e34c6e6afb',
        username: 'foobar',
        secret: (~~(Math.random(0) * 1e7)).toString(16),
        date: (new Date('Fri Sep 25 2015 11:56:30 GMT-0400 (EDT)')),
        number: 1,
        nested: {
            foo: 'bar',
            secret: (~~(Math.random(0) * 1e7)).toString(16),
        },
        arr: [{ 'foo' : 'bar' }]
    });

    // check api methods
    assert.equal(typeof user.find().csv, 'function');
    assert.equal(typeof user.csv_header, 'function');
    assert.equal(typeof user1.toCSV, 'function');

    // check api results
    var header = '"_id","username","date","number","nested.foo"\n';
    assert.equal(header, user.csv_header(), 'malformed CSV header');

    var user1_csv = '"5605710130d525e34c6e6afb","foobar","Fri Sep 25 2015 11:56:30 GMT-0400 (EDT)","1","bar"\n';
    assert.equal(user1_csv, user1.toCSV(), 'malformed CSV row');

    // create documents
    async.waterfall([
        function(cb) {
            user.remove(function(err) {
                assert.equal(err, null, 'remove failed');
                cb(err);
            });
        },
        function(cb) {

            user1.save(function(err, doc) {
                assert.equal(err, null);

                // ensure non CSV values exist on the document
                assert(doc.arr instanceof Array);
                assert(doc.secret);
                assert(doc.nested.secret);

                cb(err);
            });

        }, function(cb) {

            var stream = through(function write(data) {
                this.emit('data', data);
            }, function end() {
                this.emit('end');
            });

            var lines = [];
            stream.on('data', function(data) {
                lines.push(data);
            }).on('end', function() {
                assert.equal(lines.length, 2, 'wrong number of lines');
                assert.equal(header, lines[0], 'malformed CSV header');
                assert.equal(user1_csv, lines[1], 'malformed CSV row');
                cb();
            });

            // call and invoke the stream
            user.find().csv(stream);
        }

    ], function(err) {
        assert.equal(null, err);

        if (!/node-dev$/.test(process.env._)) {
            mongoose.disconnect();
            process.exit(0);
        }
    });

}

// connect and test
mongoose.connect('mongodb://localhost/mcsv-test', function() {
    models();
    test();
});
