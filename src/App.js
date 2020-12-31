import "./normalize.css";
import "./styles.css";
import Card from "./Card";
import { useState } from "react";

function App() {
	const [data, setData] = useState([
		{
			company: "Metamong",
			discount: "50%",
			amount: "1개",
			background: "green",
		},
		{
			company: "Metamong",
			discount: "50%",
			amount: "2개",
			background: "red",
		},
		{
			company: "Metamong",
			discount: "50%",
			amount: "3개",
			background: "pink",
		},
		{
			company: "Metamong",
			discount: "50%",
			amount: "4개",
			background: "purple",
		},
		{
			company: "Metamong",
			discount: "50%",
			amount: "5개",
			background: "gray",
		},
		{
			company: "Metamong",
			discount: "50%",
			amount: "6개",
			background: "blue",
		},
		{
			company: "Metamong",
			discount: "50%",
			amount: "7개",
			background: "green",
		},
	]);

	return (
		<div>
			<h1>오늘의 부스트를 확인해보세요</h1>
			<p>32분 57초 후 변경</p>

			<div className="cards-container">
				{data.map((item, index) => (
					<Card
						company={item.company}
						discount={item.discount}
						amount={item.amount}
						background={item.background}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
