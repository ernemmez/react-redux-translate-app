import SelectLang from "./components/SelectLang";
import TextArea from "./components/TextArea";
import {AiOutlineGithub} from 'react-icons/ai';


function App() {

  return (
    <div className="App">
      <h1>ERN Translate</h1>
      <a href="http://" className="git">
           <AiOutlineGithub/> ernemmez
      </a>
      <div className="main-wrapper">
         <SelectLang/>
         <TextArea/>
      </div>
    </div>
  );
}

export default App;
