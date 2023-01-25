db.getCollection("customers").find(
    {
        "$and" : [
            {
                "address.state" : {
                    "$in" : [
                        "Washington",
                        "Idaho"
                    ]
                }
            },
            {
                "device" : /.*iPhone.*/i,
                "user_name": {$exists:true}
            }
        ]
    }, 
    {
        "first" : 1.0,
        "last" : 1.0,
        "user_name" : 1.0,
        "_id":0
    }
).sort(
    {
        
        "user_name" : 1.0
    }
);