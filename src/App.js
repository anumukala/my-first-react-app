import logo from "./logo.svg";
import "./App.css";
import Employee from "./Employee";
import User from "./User";
import { ClassComp, ClassComp1 } from "./ClassComp";
import JsxExample from "./JsxExample";
import { UsingStyles } from "./UsingStyles";
import Button from "./ButtonExampleShorthand";
import Button1 from "./ButtonExampleEmphasis";
import VerticalForm from "./DividerExampleVerticalForm";
import EventsInFunction from "./EventsInFunction";
import OnClickWithVariable from "./OnClickWithVariable";
import UseStateHook from "./UseStateHook";
import IncrementClick from "./IncrementClick";
import { UseStateInClassComp } from "./UseStateInClassComp";
import { SimpleClassComp } from "./SimpleClassComp";
import { CounterMouseHover } from "./CounterMouseHover";
import BasicFunctionComp from "./BasicFunctionComp";
import NamePassingProp from "./NamePassingProp";
import PropsInClass from "./PropsInClass";
import OnChangeEvent from "./OnChangeEvent";
import DidMountMethod from "./DidMountMethod";
import DidUpdateMethod from "./DidUpdateMethod";
import ShouldCompUpdateMethod from "./ShouldCompUpdateMethod";
import CompUnmountMethod from "./CompUnmountMethod";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Employee></Employee> */}
      {/* <User /> */}
      {/* <ClassComp /> */}
      {/* <ClassComp1 /> */}
      {/* <JsxExample /> */}
      {/* <UsingStyles /> */}
      {/* <Button /> */}
      {/* <Button1 /> */}
      {/* <VerticalForm /> */}
      {/* <EventsInFunction /> */}
      {/* <OnClickWithVariable /> */}
      {/* <ReRenderWithVariable /> */}
      {/* <UseStateHook /> */}
      {/* <IncrementClick /> */}
      {/* <UseStateHook /> */}
      {/* <UseStateInClassComp /> */}
      {/* <SimpleClassComp /> */}
      {/* <CounterMouseHover /> */}
      {/* <BasicFunctionComp /> */}
      {/* <NamePassingProp
        name={"Steve"}
        email={"Steve@yahoo.com"}
        phone={"123-456-8790"}
      />
      <NamePassingProp
        name={"John"}
        email={"John@yahoo.com"}
        phone={"134-456-8790"}
      />
      <NamePassingProp
        name={"Jane"}
        email={"Jane@yahoo.com"}
        phone={"134-346-8790"}
      /> */}
      {/* <PropsInClass
        name={"Steve"}
        email={"abc@yahoo.com"}
        phone={"123-546-78990"} */}
      {/* <OnChangeEvent /> */}
      {/* <DidMountMethod /> */}
      {/* <DidUpdateMethod /> */}
      {/* <ShouldCompUpdateMethod /> */}
      <CompUnmountMethod />
    </div>
  );
}

export default App;
