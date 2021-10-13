console.log('Create a CLI app which would detect fake news. This app will take news as input and then source.If source is Facebook or whatsapp then it will output user saying, Don\'t believe things on FB and Whatsapp". Can you extend this to include telegram as well?');

const readlineSync = require('readline-sync');

const news = readlineSync.question('Enter the news :   ');
const source = readlineSync.question('Enter the source of this news :   ').toLowerCase();

if( source === 'facebook' || source === 'twitter' || source === 'telegram') {
    console.log('Don\'t believe things on Facebook and Whatsapp');
} else {
    console.log('This news might be true.')
}