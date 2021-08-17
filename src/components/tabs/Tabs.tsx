import React, { useState } from 'react';
const Tabs = ({ fields }) => {
  const { tab } = fields;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab__labels flex justify-center">
        {tab.map((t, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={t.fields.title}
            className="tab__label px-6 hover:underline hover:font-bold">
            {t.fields.title}
          </button>
        ))}
      </div>
      <div className="tab__descriptions">
        <div className="tab__description">
          {tab[activeTab].fields.description.content.map((content) => content)}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
