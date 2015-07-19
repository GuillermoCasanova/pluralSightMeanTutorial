
angular.module('app')
    .controller('mvMainCtrl', function($scope) {

        $scope.courses = [
        {name: 'C# for sociopaths', featured: true, published:  new Date('1/1/2015')},
        {name: 'C# for mothers', featured: false, published: new Date('1/5/203')},
        {name: 'Crap course for cappy people', featured: true, published: new Date('4/9/2014')},
        {name: 'A survival guide to nothing', featured: false, published: new Date('3/12/2015')},
        {name: 'Death match for mathicnes etc', featured: true, published: new Date('6/6/2013')},
        {name: 'How to keep your soul and livng', featured: true, published: new Date('2/7/2009')},
        {name: 'another thing to do ', featured: true, published: new Date('7/2/2013')},
        {name: 'How to deal with narcissists', featured: true, published: new Date('20/6/2007')},
        {name: 'Cod reviews for jerks', featured: false, published: new Date('10/6/2015')},
        {name: 'Learning how to live with Pandas', featured: false, published: new Date('1/1/2014')}


        ]
    });