/**
 * Created by bigbook on 09.02.16.
 */

console.log("helper");

(function(){
        var app = angular.module('store',['store-products']);
        app.controller('StoreController', function(){
            this.products = gems;
        });

        app.controller('SomeStupidController', ['$http',function($http){
            var store = this;
            store.products = [];
            $http.get('http://demo8530993.mockable.io/details').success(
                function(data) {
                    store.products = data;
                }
            );
        }]);

        app.controller('ReviewController', function(){
            this.review = {};
            this.addReview = function(product){
                this.review.createdOn = Date.now();
                product.reviews.push(this.review);
                this.review = {};
            };
        });


        var gems = [{
                    name : 'Product name first',
                    price: 10.32,
                    description: 'Lorem ipsum2 ...',
                    canPurchase: true,
                    soldOut: false,
                    reviews:[
                        {
                            stars: 5,
                            body: 'Some body1',
                            author: 'Jonathan'
                        },
                        {
                            stars: 3,
                            body: 'Some body2',
                            author: 'Michael'
                        }
                    ]
                },
                {
                    name : 'Product name second',
                    price: 100.32,
                    description: 'Lorem ipsum3 ...',
                    canPurchase: true,
                    soldOut: false,
                    reviews:[
                        {
                            stars: 5,
                            body: 'Some body1',
                            author: 'Jonathan'
                        },
                        {
                            stars: 3,
                            body: 'Some body2',
                            author: 'Michael'
                        }
                    ]
                }]

})();
