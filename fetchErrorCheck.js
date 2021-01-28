fetch("https://api-to-call.com/endpoint")
.then(response => {
  if(response.ok) {
    return response.json();
  }
  // executed because if the conditional is confirmed, the function will stop there but
  // if error'ed, it will execute the throw declaration
  throw new Error("Request failed!");

}, networkError => { // executed if no response
  console.log(networkError.message);
})
.then(jsonResponse => {
  return jsonResponse;
})


