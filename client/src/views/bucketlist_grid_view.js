// gridview - has the nested view which each fucntion calls the other

const PubSub = require('../helpers/pub_sub.js');
const BucketlistView = require('./bucketlist_view.js');

const BucketlistGridView = function (container) {
  this.container = container;
};

// step2
BucketlistGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Bucketlist:data-loaded', (event) =>{
    // console.log(event.detail);
    this.render(event.detail);
  });
};

// step3
BucketlistGridView.prototype.render = function (bucketlists) {
  // console.log(this.container.innerHTML);
  this.container.innerHTML = '';
  const bucketlistView = new BucketlistView(this.container);
  // console.log(bucketlistView);
  bucketlists.forEach((bucketlist) => bucketlistView.render(bucketlist));

};






module.exports = BucketlistGridView;
