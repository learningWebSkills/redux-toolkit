import "./App.css";
import {CakeView} from "./features/cake/CakeView";
import {IcecreamView} from "./features/icecream/IcecreamView";
import {UserView} from "./features/user/UserView";

function App() {
	return (
		<>
			<h1>Dairy Queen</h1>
			<CakeView />
			<IcecreamView />
			<UserView />
		</>
	);
}

export default App;
