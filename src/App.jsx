import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import Links from "./components/Links/Links";
import Menu from "./components/Menu/Menu";
import Card from "./components/Card/Card";
import Bottom from "./components/Bottom/Bottom";
import "./App.css";
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Logo />
			<Links />
			<Menu />
			<Card />
			<Bottom />
		</div>
	);
}

export default App;
