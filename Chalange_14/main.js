let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'https://www.facebook.com/profile.php?id=100071937310430';
let url7 = 'https://www.facebook.com/groups/feed/';
let url8 = 'https://www.facebook.com/ATC.JO';
let url9 = 'https://www.facebook.com/stories/108460025018879/UzpfSVNDOjY3MTU4MDc5OTUxNzAzNDM=/?bucket_count=9&source=story_tray';

let re = /(https?)?(:\/\/)?(www.)?\w+.\w+(:\d+)?(\/\w+.\w+\D+\w+\D+)?(\d+)?(\D+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));
console.log(url8.match(re));
console.log(url9.match(re));
