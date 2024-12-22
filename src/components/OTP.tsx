type OTPProps = { numbers?: number };

const OTP = ({ numbers = 4 }: OTPProps) => {
  const inputs = Array.from({ length: numbers }, (_, i) => i);

  return (
    <div>
      {inputs.map((_i, index) => (
        <input
          key={index}
          style={{ height: 80, width: 80, textAlign: "center", fontSize: 30 }}
          type="number"
        />
      ))}
    </div>
  );
};

export default OTP;
