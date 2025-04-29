const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const cors = require("cors")
const mongoose = require('mongoose')

const authRouter = require('./routes/auth');

const TopicModel = require('./models/Topic')

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        await mongoose.connect(process.env.MONGO_URL, clientOptions)
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } catch(e) {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
        throw Error(e)
      }
}
run().catch(console.dir);

app.use(cors()) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send('Hello, Geeks!');
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

app.use('/auth', authRouter)

app.get('/topics', async (req, res) => {
    // const topics = [
    //     'Array',
    //     'Matrix or Grid',
    //     'Strings',
    //     'Recursion',
    //     'Stack',
    //     'Queue',
    //     'Linked List',
    //     'Heap',
    //     'Hashing',
    //     'Tree',
    //     'Graph',
    //     'Sliding Window',
    //     'Two Pointer',
    //     'Searching Algorithms',
    //     'Sorting Algorithms',
    //     'Dynamic Programming',
    //     'Greedy Algorithms',
    //     'Backtracking',
    // ];
    TopicModel.find({}, {title:1})
    .then(topics => {
        res.json(topics)
    })
    .catch(err => console.log(err))
    // res.json({topics: topics});
})

app.get('/topic/:topic', async (req, res) => {
    const topic = req.params
    console.log(topic)
    const problems = [
        { title: 'Problem 1', solved: false },
        { title: 'Problem 2', solved: false },
        { title: 'Problem 3', solved: false },
        { title: 'Problem 4', solved: false },
        { title: 'Problem 5', solved: false },
        { title: 'Problem 6', solved: false },
    ];
    res.json({
        problems: problems
    });
})
