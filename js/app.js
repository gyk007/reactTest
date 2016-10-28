console.log(React);
console.log(ReactDOM);

var photos =['images/cat.jpg', 'images/dog.jpg', 'images/bear.jpg'];

var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четчерг, четвертого числа...',
		bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!',
		bigText: 'А евро 42!'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
		bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
	}
];

var Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired
		})
	},
	getInitialState: function(){
		return {
			visible: false
		};
	},
	readmemoreClick: function(e){
		e.preventDefault();
		this.setState({visible: true});
	},
	render: function(){
		var author  = this.props.data.author,
			text    = this.props.data.text,
			bigText = this.props.data.bigText,
			visible = this.state.visible;

		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<p className="news__text">{text}</p>
				<a href="#"
				onClick={this.readmemoreClick}
				className={'news_readmore ' + (visible ? 'none' : '')}>
					Подробнее
				</a>
				<p className={'news_big-text ' + (visible ? '' : 'none' )}>{bigText}</p>
			</div>
		)
	}
});

var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},

	render: function() {
		var data = this.props.data;
		var newsTemplate;

		if(data.length > 0) {
			newsTemplate = data.map(function(item, index){
				return (
					<div key={index}>
						 <Article data={item} />
					</div>
				)
			});
		} else {
			newsTemplate = <p>Нет новостей</p>
		}
		return (
			<div className="news">
				{newsTemplate}
				<b className ={data.length > 0 ? '' : 'none'}>Всего новостей: {data.length}</b>
			</div>
		);
	}
});

var App = React.createClass({
	render: function(){
		return(
			<div className="app">
			Новости
			<News data={my_news} /> {/*свойство data*/}
			</div>
		);
	}
});


ReactDOM.render(
	<App/>,
	document.getElementById('root')
);



