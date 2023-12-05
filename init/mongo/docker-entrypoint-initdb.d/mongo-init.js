console.log("START");

db = db.getSiblingDB("comp3123_assigment2");

db.createUser({
    user: "mahyargh",
    pwd: "mahyargh",
    roles: [
        {
            role: "readWrite",
            db: "comp3123_assigment2",
        },
    ],
});

db.createCollection("users");

console.log("END");