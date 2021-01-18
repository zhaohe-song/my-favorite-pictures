import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
	const [ file, setFile ] = useState(null);
	const [ error, setError ] = useState(null);
	const handleChange = (e) => {
		const selected = e.target.files[0];
		const types = [ 'image/png', 'image/jpeg' ];
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('Please choose an image file');
		}
	};
	return (
		<form>
			<label>
				<input type="file" onChange={handleChange} />
				<span>+</span>
			</label>
			<div className="output">
				{file && <div>{file.name}</div>}
				<div className="error">{error}</div>
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadForm;
