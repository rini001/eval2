import React from 'react'

export const ProductInput = ({ data, handleData, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>title</label>
				<input
					type="text"
					placeholder="Title"
					name="title"
					value={data.title}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>cost</label>
				<input
					placeholder="Cost"
					name="cost"
					value={data.cost}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>image</label>
				<input
					type="text"
					placeholder="img url"
					name="image"
					value={data.image}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>category</label>
				<select
					name="category"
					value={data.category}
					onChange={handleData}
				>
					<option value="">select</option>
					<option value="vegetables">vegetables</option>
					<option value="fruits">fruits</option>
					<option value="provisions">provisions</option>
				</select>
			</div>
			<div>
				<button>submit</button>
			</div>
		</form>
	);
};