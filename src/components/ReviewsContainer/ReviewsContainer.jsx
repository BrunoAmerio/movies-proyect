import React from 'react';
import PropTypes from 'prop-types';

import { Container, Review } from './styled';

const ReviewContainer = ({ reviews }) => {
	if (reviews.length) {
		return (
			<Container>
				{reviews.map(item => (
					<Review key={item.id}>
						<div>
							<p>
								<strong> {item.author}</strong>
							</p>
						</div>
						<p className='content'>{item.content}</p>
					</Review>
				))}
			</Container>
		);
	}
};

ReviewContainer.propTypes = {
	reviews: PropTypes.array.isRequired,
};

export default ReviewContainer;
