// write a mongodb query to find the user record of the december month

db.connect("mongodb url")

db.userCollection.find({
    createdAt: {
        $gte: ISODate('2023-12-01'),
        $lt: ISODate('2024-01-01')
    }
})

// Find All Documents in a Collection
db.collectionName.find({})


// Filter Documents Based on a Condition
db.collectionName.find({ field: value })

// Find One Document
db.collectionName.findOne({ field: value })

// Count the Number of Documents
db.collectionName.countDocuments()


// Limit the Number of Results
db.collectionName.find({}).limit(5)


// Update a document
db.collectionName.updateOne({ _id: ObjectId("documentId") }, { $set: { field: newValue } })
