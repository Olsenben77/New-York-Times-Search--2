
// API consts
const myKey = 'qSHvM1jVAPSpzcahkXf4we3GRfxLAhRQ';
const newyorkURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times';

let NYObj = {};


// relevan t JSON data
let abstract = respose.doc[i].abstract;
let author = respose.doc[i].byline.original;
let section = response.doc[i].section_name;
let publishDate = response.doc[i].pub_date;
let articleURL = response.doc[i].web_url;

