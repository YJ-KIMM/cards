function Card({ company, discount, amount, background }) {
	return (
		<div
			className="card"
			style={{ background: background ? background : "#ff0000" }}
		>
			<div className="card__header">
				<p className="card__company">{company}</p>
				<h2 className="card__discount">{discount}</h2>
			</div>
			<p className="card__amount">{amount}</p>
		</div>
	);
}

export default Card;
