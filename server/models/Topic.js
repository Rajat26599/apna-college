const mongoose = require("mongoose")

const TopicSchema = new mongoose.Schema({
    title: {
        type: String
    },
    problems: {
        type: [
            {
                title: {
                    type: String
                },
                solved: {
                    type: Boolean
                }
            }
        ]
    }
})

const TopicModel = mongoose.model("topics", TopicSchema)
module.exports = TopicModel