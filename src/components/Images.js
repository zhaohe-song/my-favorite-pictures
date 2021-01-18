import { Fragment, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const Images = () => {
	const [ selectedImg, setSelectedImg ] = useState(null);
	const { docs } = useFirestore('images');
	return (
		<Fragment>
			<ImageGrid docs={docs} setSelectedImg={setSelectedImg} />
			{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</Fragment>
	);
};

export default Images;
