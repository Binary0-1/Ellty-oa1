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
    <div className="app-container">
      <div className="page-selector-widget">
        <div className="page-selector-widget__main">
          <div className="page-selector-widget__header">
            <CheckBoxWithLabel id="header" title={"All Pages"} />
          </div>
          <hr className="generic-separator"/>
          <div className="page-selector-widget__options">
            {checkboxes.map((item) => {
              return <CheckBoxWithLabel id={item.id} title={item.label} />;
            })}
          </div>
          <hr className="generic-separator"/>
        </div>
        <button type="button" className="page-selector-widget__cta">Done</button>
      </div>
    </div>
  );
}

export default App;
