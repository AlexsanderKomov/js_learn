import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json.json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo';
import './css/style.css';

const post = new Post('Webpack post title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

// console.log('Post to String:', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('CSV:', csv);
