import React from "react";

const PrivacyPolicyContents = ({ privacyPolicy }) => {
  return (
    <div className="mt-[60px]">
      <h2 className="text-[24px] font-[400]">{privacyPolicy.title}</h2>
      <div>
        {privacyPolicy.content.map((c, i) => {
          return (
            <div className={`${i === 0 ? "mt-[28px]" : "mt-[23px]"}`} key={i}>
              {c.type === "p" ? (
                <p className="text-[16px] font-[400]">{c.text}</p>
              ) : c.type === "ul" ? (
                <ul className="list-disc pl-[25px] text-[16px] font-[400]">
                  {c.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`${idx === 0 ? "mt-[0px]" : "mt-[10px]"}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicyContents;
