import React from 'react';
import './onam.css';

const Onam = () => {
  return (
    <div className="onam">
      <p className="onamTxt">
        Onam <br /> series.
      </p>

      <p className="onamDes">
        This Onam series was edited to preserve the essence of nostalgia —
        the warmth of tradition, the softness of light, and the beauty of
        Kerala’s festive culture.
      </p>

      {/* Forward track */}
      <div className="onam-track">
        {["1","2","3","4","5","1","2","3","4","5"].map((n, i) => (
          <div className="card" key={`f-${i}`}>
            <video
              src={`/video/Onam${n}.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Reverse track */}
      <div className="onam-trackReverse">
        {["1","2","3","4","5","1","2","3","4","5"].map((n, i) => (
          <div className="cardReverse" key={`r-${i}`}>
            <video
              src={`/video/Onam${n}.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onam;
