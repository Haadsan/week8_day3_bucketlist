// model is where all logic happens, get, update, adding, delete
// https://github.com/codeclan/g8_classnotes/blob/master/week_08/day_3/lab_full_stack_bucket_list/lab_full_stack_bucket_list.md
const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucketlist = function (url) {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};


Bucketlist.prototype.bindEvents = function () {
  PubSub.subscribe('BucketlistView:bucketlist-delete-clicked', (event) => {
// debugger;
    this.deleteBucketlist(event.detail);
    // event.detail hold the new data inputed
  });

  PubSub.subscribe('BucketlistView:bucketlist-submitted', (event) => {
    debugger;
    console.log(event);
    // console.log(event);

    this.postBucketlist(event.detail);
    // debugger;

  })
};


// step1
Bucketlist.prototype.getData = function () {
  this.request.get()
  .then((bucketlist) => {
    // console.log(bucketlist);
    // subscribe to bucketlist_grid_view.js
    PubSub.publish('Bucketlist:data-loaded', bucketlist);
  })
  .catch(console.error);

};

Bucketlist.prototype.postBucketlist = function (bucketlist) {
  console.log(bucketlist);
  // debugger;
  this.request.post(bucketlist)
  .then((bucketlists) => PubSub.publish('Bucketlist:data-loaded', bucketlists));
};


Bucketlist.prototype.deleteBucketlist = function (bucketlistId) {
  this.request.delete(bucketlistId)
  .then((bucketlist) =>{
    PubSub.publish('Bucketlist:data-load', bucketlist);
  })
  .catch(console.error);

};

module.exports = Bucketlist;
