import Header from 'components/Header';
import Protected from 'hoc/Protected';

const App = () => {
	return (
		<div className='h-full flex flex-col'>
			<Header />
			<Protected />
		</div>
	);
};

export default App;
