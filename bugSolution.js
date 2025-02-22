```javascript
//Correct usage of $inc operator in MongoDB
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});
```