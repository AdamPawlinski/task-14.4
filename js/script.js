var movies = [
  {
    id: 1,
    title: 'Siedem',
    desc: 'Film o mordercy kazącym za siedem grzechow głownych',
    pict: 'http://1.fwcdn.pl/po/07/02/702/6967799.3.jpg',
    alt: 'Siedem - plakat'
  },
  {
    id: 2,
    title: 'Władca Pierścieni',
    desc: 'Ekranizacja ksiązki J.R.R. Tolkiena',
    pict: 'https://cache2.artprintimages.com/LRG/61/6181/8351100Z.jpg',
    alt: 'Władca Pierścieni - plakat'
  },
  {
    id: 3,
    title: 'Skazani na Shawshank',
    desc: 'Film o niesłusznie skazanym i jego ucieczce z więzienia',
    pict: 'http://stephenking.pl/wp-content/uploads/2015/07/Skazani-na-Shawshank-1994-DVD.jpg',
    alt: 'Skazani na Shawshank - plakat'
  },
  {
    id: 4,
    title: '12 gniewnych ludzi',
    desc: 'Film o ławnikach decydujących o skazaniu chłopaka za morderstwo',
    pict: 'http://1.fwcdn.pl/po/07/01/30701/7492190.6.jpg',
    alt: '12 gniewnych ludzi - plakat'
  }

]

var moviesElements = movies.map(function(movie){
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p',{}, movie.desc),
    React.createElement('img',{src: movie.pict, alt: movie.alt})
  )
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmow'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
