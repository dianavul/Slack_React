import "./Menu.style.css";
import Navbar from "../Navbar/Navbar";
function Menu() {
	<Navbar />;
	return (
		<a href='#'>
			<img
				className='menu'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png'
			/>
		</a>
	);
}

export default Menu;
