import React from 'react';


const RenderPosts = props => {

	return(
		<React.Fragment>
			<div className='container'>
				
				<div className='page-header'>
				<h1>{props.titile}</h1>
				</div>

				{ props.createPost }
				<div className='row'>
					{ props.onSort }
					{ props.onSearch }
				</div>
				
				
				{ props.onPages }
				
				<table className='table table-bordered table-hover'>
					<thead>
						<tr>
							<th>Thông tin sản phẩm</th>

						</tr>
					</thead>
					<tbody>
						{ props.children }
					</tbody>
				</table>

			</div>
		</React.Fragment>
	);
}

export default RenderPosts;