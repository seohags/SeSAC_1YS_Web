var fetched = fetch('https://jsonplaceholder.typecode.com/posts');
console.log('fetched', fetched);
fetched.then(function(result){});
fetched.catch(function(reason){});