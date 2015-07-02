(function customersControllerIIFE(){

  var CustomersController = function(customersFactory, appSettings){
    this.sortBy = "name";
    this.reverse = false;
    this.customers= [];
    this.appSettings = appSettings;

    function init(){
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
      customersFactory.getCustomers()
      .success(function(customers){
        this.customers = customers;
      })
      .error(function(data, status, headers, config){
        console.log("Error getting customers from the remote api");
        alert("Error getting customers from the remote api");
      });
    }

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 CustomersController.$inject = ['customersFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('customersApp').controller('customersController', CustomersController);

})();
