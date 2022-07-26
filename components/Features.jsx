import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsArrowReturnRight } from "react-icons/bs";

import Feature from "../data/Feature";

const Features = () => {
  return (
    <>
      <div className="Drophq__Feature__Container">
        <div className="Layout__constraint">
          <div className="Drophq__Feature__Section">
            <div className="Drophq__Feature__Grid">
              {Feature.map((feature) => {
                return (
                  <div className="Drophq__Feature__Box" key={feature.id}>
                    <div className="Drophq__Feature__Icon">
                      <Image
                        src={feature.icon}
                        alt={feature.id}
                        layout="responsive"
                      />
                    </div>
                    <div className="Drophq__Feature__Title">
                      <h1>{feature.title}</h1>
                      <p>{feature.description}</p>
                      <Link href="/">
                        <a
                          style={{
                            color: "#5890D3",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5em",
                          }}
                        >
                          {feature.link} <BsArrowReturnRight />
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
