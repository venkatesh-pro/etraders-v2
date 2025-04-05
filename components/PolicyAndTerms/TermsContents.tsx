import React from "react";

const TermsContents = ({ term }) => {
  return (
    <div className="mt-[60px]">
      <h2 className="text-[24px] font-[400]">{term.title}</h2>
      <div>
        {term.content.map((c, i) => {
          return (
            <div className={`${i === 0 ? "mt-[24px]" : "mt-[26px]"}`} key={i}>
              <p className="text-[16px] font-[400]">{c}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsContents;
