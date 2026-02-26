const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimer(5);
  };

  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timer]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp || "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="assertive">
        {timer > 0
          ? `Expires in: ${timer} seconds`
          : otp && timer === 0
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};