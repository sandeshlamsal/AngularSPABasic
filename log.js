console.log('note for the Angular js');

/*
include below 2 scripts

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script src="https://code.angularjs.org/1.4.5/angular-route.js"></script>    //for the routing purppose only


first define myApp name in html, create different bases required, 
then in app.js, define the routing sections with their associated controller

# is the default routing for angular so when 

main.html#/second  is accessed only second.html is updated in specific sector of main.html
similarly
main.html#/first  is accessed only first.html is updated in specific sector of main.html

so the header and footer page must be desinged in main.html and only <ng-view> will be updated
by angualr js

*/