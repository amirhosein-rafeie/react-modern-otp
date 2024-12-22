import OTP from "./components/OTP";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "red",
      }}
    >
      <OTP renderInput={(props) => <input {...props} />} />
    </div>
  );
}

export default App;
