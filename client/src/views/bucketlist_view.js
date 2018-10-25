const PubSub = require('../helpers/pub_sub.js');

const BucketlistView = function (container) {
  this.container = container;
};

// step4
BucketlistView.prototype.render = function (bucketlist) {
  const bucketlistContainer = document.createElement('div');
  // console.log(bucketlistContainer);
  // you can give this to css class id
  // console.log(bucketlistContainer.id);
  bucketlistContainer.id = 'bucketlist';
  // debugger;

  // bucketlist.activities -- bucketlist is been passed from the fucntion
  const activities = this.createDetail('Activities' ,bucketlist.activity);
  bucketlistContainer.appendChild(activities);

  const country = this.createDetail('Country', bucketlist.country);
  bucketlistContainer.appendChild(country);

  const location = this.createDetail('Location', bucketlist.location);
  bucketlistContainer.appendChild(location);

  const date = this.createDetail('Date', bucketlist.date);
  bucketlistContainer.appendChild(date);


  const deleteButton = this.createDeleteButton(bucketlist._id);
  bucketlistContainer.appendChild(deleteButton);

  this.container.appendChild(bucketlistContainer);
 };


 // step5

 // BucketlistView.prototype.createHeading = function (textContent) {
 //  const heading = document.createElement('h3');
 //  heading.textContent = textContent;
 //
 //  return heading;
// };

BucketlistView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  // console.log(detail.textContent);
  detail.textContent = `${label}: ${text}`;
  // console.log(detail);
  return detail;
};

// step

BucketlistView.prototype.createDeleteButton = function (bucketlistId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketlistId;

// step

  button.addEventListener('click', (event) => {
    PubSub.publish('BucketlistView:bucketlist-delete-clicked', event.target.value);
  });

return button;

};



module.exports = BucketlistView;
