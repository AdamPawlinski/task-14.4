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

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function () {
    return (
      React.createElement('li', {key: this.props.movie.id},
      React.createElement(MovieTitle, {movie: this.props.movie}),
      React.createElement(MovieDesc, {movie: this.props.movie})
      )
    )
  }
})

var MovieTitle = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function () {
    return (
        React.createElement('h2', {}, this.props.movie.title)
    )
  }
})

var MovieDesc = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
        React.createElement('p',{}, this.props.movie.desc),
        React.createElement('img',{src: this.props.movie.pict, alt: this.props.movie.alt})
      )}
  })

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },
  render: function() {
    var items = this.props.movies.map(function(movie){
      return React.createElement(Movie, {movie: movie, key: movie.id});
    });
    return (
      React.createElement('ul', {}, items)
    )
  }
})

var element =
    React.createElement('div', {},
        React.createElement(MovieList, {movies: movies})
);

ReactDOM.render(element, document.getElementById('app'));
