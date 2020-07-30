const axios=require('axios');
const cheerio=require('cheerio');


//1
//example de recuperation des donner en faison une requete avec axios
// console.log("le programe a demarer");
// axios.get('https://jsonplaceholder.typicode.com/users/1').then(function(respense){console.log(respense.data)}).catch(function(err){console.log('erreur lors du telechargement..!!')});
// console.log("le programe est finis..");
//2
//axios vs cheerio
//example scraping dun site web de tourisme a laide de cheerio et axios..
// axios.get('https://latindancecalendar.com/festivals/location/europe/style/salsa/')
//                                                                                   .then(function(respense){console.log(respense)})
//                                                                                   .catch(function(err){console.log("erreur de telechargement",err)});
//3
//example de recuperation des les valeur des href present su la div aui a pour id primary
axios.get('https://latindancecalendar.com/festivals/location/europe/style/salsa/')
                                             .then(function(respense){
                                                const $ =cheerio.load(respense.data);
                                                const linkTags=$("#primary a.url.summary");
                                               let allLink=[];
                                               linkTags.map(function(index,element){
                                                const ttLinks=$(element).attr('href');
                                                allLink.push(ttLinks);
                                               })
                                                
                                                console.table(allLink)
                                             }).catch(function(err){console.log("erreur fatal",err)});        




