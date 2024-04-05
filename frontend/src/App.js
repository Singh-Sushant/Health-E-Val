
import './App.css';
import Navbar from './pages/Navbar';
import FormComponent from './pages/FormComponent';

function App() {
  const componentStyle = {
    margin: '25px',
  };

  return (
    <>
      <div style={componentStyle}><Navbar/></div>
      <FormComponent/>
    </>

  );
}

export default App;
