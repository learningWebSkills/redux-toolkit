import {useSelector, useDispatch} from "react-redux";
import {ordered, restocked} from "./icecreamSlice";

export const IcecreamView = () => {
	const dispatch = useDispatch();
	const numOfIcecreams = useSelector(
		(state) => state.icecream.numOfIcecreams
	);
	return (
		<div>
			<h2> Number of ice creams - {numOfIcecreams} </h2>
			<button onClick={() => dispatch(ordered())}>Order cake</button>
			<button onClick={() => dispatch(restocked(5))}>
				Restock ice creams
			</button>
		</div>
	);
};
