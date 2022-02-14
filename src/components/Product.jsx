import React, {  useState } from "react";
import { ProductInput } from "./ProductInput";
import styles from "./Product.module.css";
export const Product = () => {
	const [data, setData] = useState({});
    const [product, setProduct] = useState([]);
	const handleData = (e) => {
		const { name, value } = e.currentTarget;
		setData({
			...data,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let _data = {
			title: data.title,
			cost: data.cost,
			image: data.image,
			category: data.category,
		};

		fetch("http://localhost:8000/posts", {
			method: "POST",
			body: JSON.stringify(_data),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				display();
			})
			.catch((err) => console.log(err));
	};

	function display() {
		fetch(`http://localhost:8000/posts`, {
			method: "GET",
			headers: {
				"content-type": "application/json; charset=utf-8",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((forJson) => {
				setProduct(forJson);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	


   
    
	return (
		<>
			<ProductInput
				data={data}
				handleData={handleData}
				handleSubmit={handleSubmit}
			/>
            <div >
			{product.map((elem) => (
				<div key={elem.id}>
					<div>{elem.title}</div>
					<div>Rs{elem.cost}</div>
					<div>
						<img
							src={elem.image}
							alt="imag"
							className={styles.imgSize}
						/>
					</div>
					<div>{elem.category}</div>
				</div>
			))}
		</div>
		</>
	);
};