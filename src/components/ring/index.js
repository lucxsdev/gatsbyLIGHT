import React, { useState } from "react";
import { Circle, MiddleCircle, Container } from "./styles";

const Ring = () => {
  const [val, setVal] = useState(100);
  const c = val;
    return (
      <Container>
          <Circle val={val} >
              <MiddleCircle c={c} />
          </Circle>
          <div className="interruptor">
              <input
                  type="range"
                  aria-label="interruptor"
                  min="10"
                  max="100"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
              />
          </div>
      </Container>
    );
};

export default Ring;
