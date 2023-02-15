import "./Links.style.css";

function Links() {
	return (
		<div className='links'>
			<a
				href='#'
				style={{
					padding: "10px",
					color: "rgb(26, 25, 25)",
					textDecoration: "none",
				}}>
				Sell
			</a>
			<a
				href='#'
				style={{
					padding: "10px",
					color: "rgb(26, 25, 25)",
					textDecoration: "none",
				}}>
				Pricing
			</a>
			<a
				href='#'
				style={{
					padding: "10px",
					color: "rgb(26, 25, 25)",
					textDecoration: "none",
				}}>
				Blog
			</a>
			<a
				href='#'
				style={{
					padding: "10px",
					color: "rgb(26, 25, 25)",
					textDecoration: "none",
				}}>
				Resources
			</a>
		</div>
	);
}

export default Links;
