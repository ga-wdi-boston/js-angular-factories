(function ordersControllerIIFE(){

  var OrdersController = function($routeParams, customersFactory, utilsFactory){
    var vm = this,
        customerId = $routeParams.customerId;


    function init(){
      // Search for the customer by id
      customersFactory.getCustomer(customerId)
        .then(function(response){
          vm.customer = response.data;
          vm.orders = response.data.orders;
        },utilsFactory.displayErrors);
    }

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$routeParams', 'customersFactory', 'utilsFactory'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})();
