import "./App.css";
import CheckBoxWithLabel from "./components/form/CheckBoxWithLabel";
function App() {
  const checkboxes = [
    { id: 1, label: "Page 1" },
    { id: 2, label: "Page 2" },
    { id: 3, label: "Page 3" },
    { id: 4, label: "Page 4" },
  ];

  return (
    <div className="parent">
      <div className="form">
        <div className="main">
          <div className="header">
            <CheckBoxWithLabel id="header" title={"All Pages"} />
          </div>
          <hr className="generic-seperator"/>
          <div className="checkboxes-container">
            {checkboxes.map((item) => {
              return <CheckBoxWithLabel id={item.id} title={item.label} />;
            })}
          </div>
          <hr className="generic-seperator"/>
        </div>
        <button type="button" className="cta">Done</button>
      </div>
    </div>
  );
}

export default App;
