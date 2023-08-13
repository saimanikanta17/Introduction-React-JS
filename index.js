const rootElement = document.getElementById("root");
const variable = "greeting";
const using = "External JS file using JSX syntax";
const functionExpression = (using) => "HTML element created by" + using;
const element = (
  <div>
    <h1 className={variable}>Hello {functionExpression(using)}</h1>
    <p>src="index.js"</p>
    <p>JSX syntax is similar to HTML syntax</p>
    <h1 className="greeting">Attribute Name</h1>
    <p>class in html</p>
    <p>className in JSX</p>
  </div>
);
ReactDOM.render(element, rootElement);
