// step6

const BucketlistFormView = require('./views/bucketlist_form_view.js')
const BucketlistGridView = require('./views/bucketlist_grid_view.js');
const Bucketlist = require('./models/bucketlist.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log(Hi);
  const bucketlistForm = document.querySelector('form#bucketlist-form');
  const bucketlistFormView = new BucketlistFormView(bucketlistForm);
  bucketlistFormView.bindEvents();

  const bucketlistContainer = document.querySelector('div#bucketlist');
  const bucketlistGridView = new BucketlistGridView(bucketlistContainer);
  bucketlistGridView.bindEvents();


  const bucketlist = new Bucketlist();
  bucketlist.getData();
  bucketlist.bindEvents();



});
