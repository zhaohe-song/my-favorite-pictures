import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

export default function(file) {
	const [ progress, setProgress ] = useState(0);
	const [ error, setError ] = useState(null);
	const [ url, setUrl ] = useState(null);
	useEffect(
		() => {
			const storageRef = projectStorage.ref(file.name);
			const collectionRef = projectFirestore.collection('images');
			storageRef.put(file).on(
				'state_changed',
				(snap) => {
					const percentage = snap.bytesTransferred / snap.totalBytes * 100;
					setProgress(percentage);
				},
				(err) => {
					setError(err);
				},
				async () => {
					const url = await storageRef.getDownloadURL();
					setUrl(url);
					const createdAt = timestamp();
					await collectionRef.add({ url, createdAt });
				}
			);
		},
		[ file ]
	);
	return { progress, error, url };
}
