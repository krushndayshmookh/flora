const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    roles: [
      {
        type: String,
        enum: ['farmer', 'expert']
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    toObjects: {
      virtuals: true
    }
  }
)

UserSchema.plugin(mongoosePaginate)

const UserModel = mongoose.model('Idea', UserSchema)

module.exports = {
  model: UserModel,
  schema: UserSchema
}
