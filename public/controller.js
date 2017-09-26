var app= angular.module('App-container')
.controller('AppCtrl', function() {
 this.Submit = function(){
 	$http({
   method: 'POST',
   url: '/contact',
   data:JSON.stringify({
  	name:this.name,
  	last:this.last,
  	phone:this.phone,
  	email:this.email
  })
}).then(function successCallback(response) {
   
  }, function errorCallback(response) {
  

  });
 },


  });

.component('app', {

  controller: 'AppCtrl',
  templateUrl:` public/index.html`
  });
