const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.post = function(payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    // if content type not typed correctly it will not come out with the correct value Date: 01/01/2018 will come out undefined
    headers: {'Content-Type': 'application/json'}

  })
  .then((response) => response.json());

};
Request.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};

module.exports = Request;
