import React from 'react';

/* Logic */
const Context = React.createContext({});
export function Accordion({ children }) {
  const [selected, setSelected] = React.useState();
  const toggleItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ''));
    },
    []
  );
  return <Context.Provider value={{ selected, toggleItem }}>{children}</Context.Provider>;
}
//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);
const style = {
  item: `block focus:outline-none bg-white border mx-4 my-1 p-4 font-bold`,
  panel: `overflow-x-hidden border mx-4 transition-height ease duration-300`,
};
export function AccordionItem({ toggle, children }) {
  const { selected, toggleItem } = useAccordion();
  return (
    <div role="button" onClick={toggleItem(toggle)} className={style.item}>
      {children}
      <span className="float-right">
        {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
      </span>
    </div>
  );
}
export function AccordionPanel({ children, id }) {
  const { selected } = useAccordion();
  const ref = React.useRef();
  const inlineStyle =
    selected === id
      ? { height: ref.current?.scrollHeight, visibility: 'visible' }
      : { height: 0, visibility: 'hidden' };
  return (
    <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
      <div className="p-4">{children}</div>
    </div>
  );
}
const AngleUpIcon = () => (
  <svg
    fill="gray"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4">
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);
const AngleDownIcon = () => (
  <svg
    stroke="currentColor"
    fill="gray"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4">
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);
