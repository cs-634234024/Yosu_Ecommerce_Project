import { Toaster } from 'react-hot-toast';
import { ConnectRouter as Router } from "./routers/ConnectRouter";

function App() {


 
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <Router/>
    </>
  );
}

export default App;
