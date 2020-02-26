const request = require('request');
const cheerio = require('cheerio');

request('https://mentor.codingninjas.com/doubts/workplace',(err,res,html)=>{
    if(!err && res.statusCode==200){
        // console.log(html);
        const $ = cheerio.load(html);
        
        const valClass = $('.ng-star-inserted');
        // console.log(valClass.html());
        const output = valClass.find('b').attr();
        console.log(output);
    }
})