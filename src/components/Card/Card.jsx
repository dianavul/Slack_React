import "./Card.style.css";
function Card() {
	return (
		<div className='cards'>
			<img
				className='hero'
				src='https://cdn.discordapp.com/attachments/930017297744154734/944283923549126737/hero.png'
			/>
			<div className='info'>
				<h1>Where Work Happens</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
					iure magni nisi reiciendis optio veritatis, quam laboriosam iste qui
					amet nihil maiores nulla veniam reprehenderit delectus fuga deserunt,
					mollitia animi.
				</p>
				<button className='btn'>GET STARTED</button>
				<br />
				<span>Already having Slack </span>
				<a href='#'>Sign in</a>
			</div>
		</div>
	);
}
export default Card;
