/* eslint-disable no-var */
export const executeScript = (content) => {
  var script = document.createElement('script');
  var scriptContent = document.createTextNode(content);
  script.appendChild(scriptContent);
  document.body.appendChild(script);
};

export default null;
