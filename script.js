
// API consts
const myKey = 'qSHvM1jVAPSpzcahkXf4we3GRfxLAhRQ';
const newyorkURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
const beginYear = '&begin_date='; //string
const endYear = '&end_date='

// event listeners
$('#number-records').on('click', function(){
    console.log($(this));
});


// let NYObj = {};


// relevan t JSON data
let abstract = NYObj.response.docs[0].abstract;
let author = NYObj.response.docs[0].byline.original;
let section = NYObj.response.docs[0].section_name;
let publishDate = NYObj.response.docs[0].pub_date;
let articleURL = NYObj.response.docs[0].web_url;

console.log(abstract);