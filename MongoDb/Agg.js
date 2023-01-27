db.getCollection("customers").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: { "dob": { "$lt": ISODate("1970-01-01T00:00:00.000Z") } }
        },

        // Stage 2
        {
            $group: { "_id": "$address.state", "total": { "$sum": "$transactions" } }
        },

        // Stage 3
        {
            $project: {
              _id: 0,
              state: "$_id",
              total: 1
            }
        },

        // Stage 4
        {
            $replaceRoot: {
                newRoot: {state: "$state", total: "$total"}
            }
        },

        // Stage 5
        {
            $sort: { "state": 1 }
        }
    ],

    // Options
    {
        allowDiskUse: true,

        collation: {
            locale: "en_US"
        }
    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);