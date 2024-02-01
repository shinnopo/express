var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://shinnopo:shinnopo25@test.bltrhxq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

router.get('/', async (req, res) => {
    // データベース、コレクションを設定
    const database = client.db('notes');
    const notes = database.collection('notes');

    // idが1のドキュメントを取得
    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note.title);
})

module.exports = router;