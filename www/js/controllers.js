angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('ChildrenCtrl', function($scope) {
  $scope.children = [
    { id: 1, name: 'Clint', details: ''},
    { id: 2, name: 'Ren', details: ''},
    { id: 3, name: 'Jay', details: ''},
    { id: 4, name: 'Shirley', details: ''},
    { id: 5, name: 'Kenneth', details: ''},
    { id: 6, name: 'Namae', details: ''},
    { id: 7, name: 'Carmelle', details: ''},
    { id: 8, name: 'Someone else..', details: ''},
  ];

  
})

.controller('EventsCtrl', function($scope, $stateParams) {
  $scope.events = [
    { id: 1, name: 'TLE project making', image: '', location: 'TLE Room', time: "7:00PM" , date: "03/03/2016"},
    { id: 2, name: 'Room Decoration', image: '', location: 'Classroom' , time: "7:00PM" , date: "03/03/2016"},
    { id: 3, name: 'Math group study', image: '', location: 'Computer Room 5' , time: "7:00PM" , date: "03/03/2016"},
    { id: 4, name: 'Math group study 2', image: '', location: 'Classroom' , time: "7:00PM" , date: "03/03/2016"},
    { id: 5, name: 'Thesis creation', image: '', location: 'Chemistry Lab' , time: "7:00PM" , date: "03/03/2016"},
    { id: 6, name: 'Database normalization', image: '', location: 'Banilad' , time: "7:00PM" , date: "03/03/2016"},
    { id: 7, name: 'Hackathon -- Highschool version', image: '', location: 'Auditorium' , time: "7:00PM" , date: "03/03/2016"},
    { id: 8, name: 'Cheerdance Practice', image: '', location: 'School grounds' , time: "7:00PM" , date: "03/03/2016"},
  ];
})

.controller('ChildCtrl', function($scope, $stateParams) {
})

.controller('EventCtrl', function($scope, $stateParams) {
})



;
