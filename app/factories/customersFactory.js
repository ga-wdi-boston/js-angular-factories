(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function($http){
    var remoteAPI = {};

    remoteAPI.getCustomers = function(){
      // Return a promise to to clients, controllers
      // See https://docs.angularjs.org/api/ng/service/$http
      return  $http.get('http://localhost:3000/customers');
    };

    remoteAPI.getCustomer = function(customerId){
      // Return a promise to to clients, controllers
      // See https://docs.angularjs.org/api/ng/service/$http
      return  $http.get('http://localhost:3000/customers/' + customerId);
    };
    return remoteAPI;
  };

  customersFactory.$inject = ['$http'];

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();
