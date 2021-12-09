import Inline from "./components/imline/inline";
import ModuleBtn from "./components/moduleCss/moduleBtn";
import StyleSheet from "./components/regular-style/StyleSheet";
//import Sassy from "./sass/sassy/sassy";

function App() {
  return (
    <div>
      {/* <h1>Clarusway</h1> */}
      <Inline />
      <StyleSheet btnClass={true} btnName="Module" />
      <StyleSheet btnClass="secondary" btnName="Secondary" />
      {/* <Sassy /> */}
      <ModuleBtn btnClass="primary" btnName="btn" />
    </div>
  );
}
export default App;
