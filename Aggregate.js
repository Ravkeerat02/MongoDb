db.getCollection("customers").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                "address.state": "California"
                
            }
        },

        // Stage 2
        {
            $group: {
                _id:"$address.city",
                total: {$sum:"$transaction"}
            }
        },

        // Stage 3
        {
            $project: {
                _id:1,
                city:"$_id", 
                total:1
                
            }
        },

        // Stage 4
        {
            $replaceRoot: {
                newRoot: {city:"$city" , total:"$total"}
            }
        },

        // Stage 5
        {
            $sort: {
                total: 1
                
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);