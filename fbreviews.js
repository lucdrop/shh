var fanpage='https://www.facebook.com/ZeroTracePen/';
var fanpagename='quismi';
$('.fb-page').attr('data-show-facepile',true);
$('.fb-page').attr('data-href',fanpage);
$('.fb-page blockquote').attr('cite',fanpage);
$('.fb-page a,.rese.resebusca').attr('href',fanpage);
$('.fb-page a').text(fanpagename);
var comentarios=[[
	'duane.jpg', // AVATAR
	'I\'m doing it '+fanpagename, // COMMENT
	'Duane Miles', // NAME
	'February 26, 2019' // DATE
],[
	'moira.jpg', // AVATAR
	'Amazing trick, thank you very much for all your work and effort to bring us the best tricks and tips ... ❤️❤️❤️', // COMMENT
	'Moira Baxter', // NAME
	'February 04, 2019' // DATE
],[
	'lidia.jpg', // AVATAR
	'Hope this trick from '+fanpagename+' works, you\'re great', // COMMENT
	'Lidia Marin', // NAME
	'February 03, 2019' // DATE
],[
	'alex.jpg', // AVATAR
	'Thank dude, it really works', // COMMENT
	'Alex Lee', // NAME
	'February 02, 2019' // DATE
],[
	'jordy.jpg', // AVATAR
	'Perfect as always. I recommend doing it. I\'m doing it again', // COMMENT
	'Jordy Eubanks', // NAME
	'February 02, 2019' // DATE
],[
	'aila.jpg', // AVATAR
	'Yes, it worked from Argentina', // COMMENT
	'Aila Wiseman', // NAME
	'February 01, 2019' // DATE
],[
	'kasey.jpg', // AVATAR
	'Thanks for the winning info', // COMMENT
	'Kasey Burt', // NAME
	'February 01, 2019' // DATE
],[
	'fabio.jpg', // AVATAR
	'A WE SOME, did it 3 times already!', // COMMENT
	'Fabio Fontai', // NAME
	'February 01, 2019' // DATE
],[
	'leo.jpg', // AVATAR
	'I didn\'t think it would work, but it exceeded my expectations 100%', // COMMENT
	'Leo Gill', // NAME
	'February 01, 2019' // DATE
],[
	'demetri.jpg', // AVATAR
	'Thanks thanks thanks thanks ! ! ! 😱', // COMMENT
	'Demetri Caron', // NAME
	'February 01, 2019' // DATE
],[
	'sara.jpg', // AVATAR
	'ITTT WORKSSSSSS !!!!!', // COMMENT
	'Sara Koivisto', // NAME
	'February 01, 2019' // DATE
],[
	'adolfo.jpg', // AVATAR
	'It\'s still working?', // COMMENT
	'Adolfo Hess', // NAME
	'February 01, 2019' // DATE
],[
	'bonnie.jpg', // AVATAR
	'I\'ve tried it and it\'s going well, I hope I can do it again', // COMMENT
	'Bonnie Riley', // NAME
	'January 29, 2019' // DATE
],[
	'ian.jpg', // AVATAR
	'Looking for a long time ago! Thank you 😄', // COMMENT
	'Ian Dejesus', // NAME
	'January 28, 2019' // DATE
],[
	'daftpunk.jpg', // AVATAR
	'I\'ve been for sometime, looking for someone I need to know now, please tell me who I am', // COMMENT
	'Daft Punk', // NAME
	'January 26, 2019' // DATE
],[
	'thomas.jpg', // AVATAR
	'I use the golden helmet, and the name of our band comes from a criticism, they treated us as garbage, hope you do not think the same!', // COMMENT
	'Thomas Bangalter', // NAME
	'January 24, 2019' // DATE
],[
	'guymanuel.jpg', // AVATAR
	'i use the silver one! We reject an offer from Bowie to mix his songs, I hope we didn\'t make him mad', // COMMENT
	'Guy-Manuel de Homem-Christo', // NAME
	'January 22, 2019' // DATE
],[
	'giorgio.jpg', // AVATAR
	'So nobody told me what to do, and there was no preconception of what to do', // COMMENT
	'Giorgio Moroder', // NAME
	'January 21, 2019' // DATE
],[
	'avatar.png', // AVATAR
	'Thanks for downloading this! Find more CPA content at <a href="https://quismi.com" target="_blank">our site</a>', // COMMENT
	'quismi', // NAME
	'January 19, 2019' // DATE
]
];
var len=comentarios.reverse().length;
for(var i=0;i<len;i++)$('.cajarese').prepend('<div class="rese"><div class="titrese"><a href="'+fanpage+'" class="imgper" target="_blank"><img src="img/testi/'+comentarios[i][0]+'"/></a><div class="infotit"><h4>'+comentarios[i][2]+'</h4><a href="'+fanpage+'" target="_blank">'+comentarios[i][3]+'</a></div><a href="'+fanpage+'" class="btnface" target="_blank"><i class="fa fa-facebook-square"></i></a></div><div class="texto">'+comentarios[i][1]+'</div><div class="cbi"></div></div>');
$('.facereviews').show();