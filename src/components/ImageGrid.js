import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ docs, setSelectedImg }) => {
	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						key={doc.id}
						className="img-wrap"
						onClick={() => setSelectedImg(doc.url)}
						layout
						whileHover={{ opacity: 1 }}
					>
						<motion.img src={doc.url} alt="" />
					</motion.div>
				))}
		</div>
	);
};

export default React.memo(ImageGrid);
