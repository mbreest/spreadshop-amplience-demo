import React from 'react';

/* Tab logic */
const style = {
  notSelected: `text-gray-800 border-b`,
  default: `py-2 px-4 inline-block focus:outline-none`,
  selected: `border-gray-300 bg-white border-b-2 text-gray-700 font-bold`,
};
export function Tabs({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = React.useState(childrenArray[0].key);
  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child, { selected: child?.key === current })
  );
  return (
    <nav>
      {childrenArray.map((child) => (
        <div
          role="link"
          tabIndex={0}
          onClick={() => setCurrent(child?.key)}
          key={child?.key}
          className={`${style.default} ${
            current === child?.key ? style.selected : style.notSelected
          }`}>
          {child?.props.title}
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
}
export function Tab({ title, children, selected }) {
  return (
    <div title={title} hidden={!selected} className="mt-4">
      {children}
    </div>
  );
}
