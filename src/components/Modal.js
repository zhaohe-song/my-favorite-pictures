import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
		}
	};
	return (
		<motion.div
			className="backdrop"
			onClick={handleClick}
			initial={{ opacity: 0, y: '-100vh' }}
			animate={{ opacity: 1, y: 0 }}
		>
			<motion.img src={selectedImg} alt="" />
		</motion.div>
	);
};

export default Modal;
