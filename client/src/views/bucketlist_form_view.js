// step7 responsibble to get input from user up until save click...and the goes to gridview

const PubSub = require('../helpers/pub_sub.js')

const BucketlistFormView = function (form) {
  this.form = form;
};

BucketlistFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    // debugger;

    // console.log(event);
    event.preventDefault();

    this.handleSubmit(event);
  });
};

BucketlistFormView.prototype.handleSubmit = function (event) {
  // debugger;
  event.preventDefault();
  const newBucketlist = this.createBucketlist(event.target);
  // console.log(newBucketlist);
  // bucketlist subscribe
  PubSub.publish('BucketlistView:bucketlist-submitted', newBucketlist);
console.log(newBucketlist);
  event.target.reset();
};

BucketlistFormView.prototype.createBucketlist = function (form) {
  const newBucketlist = {
    activities: form.activities.value,
    country: form.country.value,
    location: form.location.value,
    date: form.date.value
  }
  // console.log(newSighting);
  return newBucketlist
};

module.exports = BucketlistFormView;
