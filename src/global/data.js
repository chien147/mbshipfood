export const filterData = [
    {name:'fast food', image:require('../assets/fastfood.png'), id:'0'},
    {name:'burgers', image:require('../assets/burger.png'), id:'1'},
    {name:'salads', image:require('../assets/salads.png'), id:'2'},
    {name:'hot dog', image:require('../assets/hotdog.png'), id:'3'},
    {name:'chinese', image:require('../assets/chinese.png'), id:'4'},
    {name:'mexican', image:require('../assets/mexican.png'), id:'5'},
    {name:'sea food', image:require('../assets/seafood.png'), id:'6'},

];


export const restaurantsData = [
    {
        restaurantName:"Mc Donalds", 
        farAway:"21.2",
        businessAddress:"22 Bessie street, Cape Towns",
        images:'https://c.pxhere.com/images/7a/6a/e7210d8b18149c258afc068afc0d-1417470.jpg!d',
        averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,
        discount:10,
        deliveryTime:15,
        collectTime:5, 
        foodType:"Burgers, Wraps,Milkshakes..." ,
        productData:[
        {
            name:"Hand cut chips", 
            price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
            {
                name:"Big Mac", 
                price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
            },
            {
                name:"Chicken Burger",
                price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
            },
        ],
            id:0
    },
    
    {
        restaurantName:"KFC", 
        farAway:"12.7",
        businessAddress:"22 Bessie street, Cape Town",
        images:'https://cdn.tgdd.vn/Files/2021/09/06/1380700/cach-lam-banh-mi-heo-quay-thom-ngon-cho-bua-sang-dinh-duong-202201110134135409.jpg',
        averageReview:4.3, 
        numberOfReview:306, 
        coordinates : {lat: -26.1891648, lng: 28.2441808},
        discount:20,
        deliveryTime:30,
        collectTime:10, 
        foodType:"Chicken,Chicken wings... ",
        productData:[
        {
            name:"Hand cut chips", 
            price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
        },
        {
            name:"Big Mac", 
            price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
        },
        {
            name:"Chicken Burger", 
            price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        },
        ],
        id:1
    },
    
    {
        restaurantName:"Steers", 
        farAway:"5",
        businessAddress:" 17 Olivia Rd, Johannesburg",
        images:'https://inoxvina.vn/wp-content/uploads/2020/11/cach-nau-nuoc-pho-ngon-hap-dan.jpg',
        coordinates :{ lat: -26.1886781, lng: 28.244879}, 
        averageReview: 4.9,
        numberOfReview: 1272,
        discount:12, 
        deliveryTime:25,
        collectTime:15,
        foodType:"Flame grilled beef Burgers",
        productData:[
        {
            name:"Hand cut chips", 
            price:29.30,
            image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
        },
        {
            name:"Big Mac", 
            price:50.80,
            image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
        },
        {
            name:"Chicken Burger",
            price:70,
            image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        },
        ],
        id:2
    },
    
    {
        restaurantName:"Roman Pizza", 
        farAway:"7",
        businessAddress:" 15 Atlas Rd, Kempton Park",
        images:'https://i1-giadinh.vnecdn.net/2021/01/02/Anh-6-7105-1609558348.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=P8D6u33sbLxZrsCmEki7-A',
        averageReview:4.3, 
        numberOfReview:700, 
        coordinates: {lat: -26.1845336, lng: 28.2481691},
        discount:null,
        deliveryTime:20,
        collectTime:10,
        foodType:"Chicken pizza, Vegetarian pizza...",
        productData:[
        {
            name:"Hand cut chips", 
            price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
        },
        {
            name:"Big Mac", 
            price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
        },
        {
            name:"Chicken Burger",
            price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        },
        ],
        id:3
    },
]
