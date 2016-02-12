
(function(){
        var app = angular.module('store-products',[ ]);

        app.directive('productDescription', function(){
                return{
                    restrict: 'E', //element
                    templateUrl: 'product-desc.html'
                };
            }
        );

        app.directive('productPanel', function(){
            return {
                restrict: 'E',
                templateUrl: 'product-panel.html',
                controller: function(){
                    this.tab = 1;

                    this.selectTab = function(setTab){
                        this.tab = setTab;
                    }

                    this.isSelected = function(checkTab){
                        return this.tab == checkTab;
                    }
                },
                controllerAs: 'panel'
            };
        });

        app.directive('productTitle', function(){
                return{
                    restrict: 'A', //attribute
                    templateUrl: 'product-title.html'
                };
            }
        );
    }
)();