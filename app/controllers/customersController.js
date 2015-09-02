(function customersControllerIIFE(){

  var CustomersController = function(customersFactory, appSettings, utilsFactory){
    var vm = this;
    vm.sortBy = "name";
    vm.reverse = false;
    vm.customers =  customersFactory.customers;
    vm.customer = customersFactory.customer;
    vm.appSettings = appSettings;

    function init(){
      // Init the customers from the factory
      customersFactory.getCustomers()
        .then(function(response){
          vm.customers = response.data;
        }, utilsFactory.displayErrors);
    }

    init();

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

  };

 CustomersController.$inject = ['customersFactory', 'appSettings', 'utilsFactory'];

 // The Controller is part of the module.
 angular.module('customersApp').controller('customersController', CustomersController);

})();
