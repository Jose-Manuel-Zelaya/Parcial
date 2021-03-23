// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/usuario/',
    	url: 'usuario.html',
    	name: 'usuario',
  		},
		{
		path: '/cuartos2/',
    	url: 'cuartos2.html',
    	name: 'cuartos2',
  		},
		{
		path: '/cuartos1/',
    	url: 'cuartos1.html',
    	name: 'cuartos1',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationFull =myApp.notification.create({
    icon: '<i class="material-icons">shopping_cart</i>',
    title: 'eShop',
    subtitle: 'Add to Cart',
    text: 'Your product was added successfully',
    closeTimeout: 3000,
   });


$$(document).on('click','#add-cart', function () {
	console.log('add');
	notificationFull.open();
});


 

