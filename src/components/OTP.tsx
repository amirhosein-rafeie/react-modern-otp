import { ReactNode, useEffect } from "react";

type RenderOTPInputProps = {
  index: number;
  maxLength: number;
  className: string;
  style: object;
};

type OTPProps = {
  numbers?: number;
  renderInput: (props: RenderOTPInputProps) => ReactNode;
};

const OTP = ({ numbers = 4, renderInput }: OTPProps) => {
  const inputs = Array.from({ length: numbers }, (_, i) => i);

  useEffect(() => {
    const inputElements =
      document.querySelectorAll<HTMLInputElement>(".js-otp-input");

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;
      const userInput = e.key;
      const nextInput = target.nextElementSibling as HTMLInputElement | null;
      const prevInput =
        target.previousElementSibling as HTMLInputElement | null;

      const isDigit = /^[0-9]$/.test(userInput);

      if (target.value) {
        target.select();
      }

      if (isDigit && nextInput) {
        if (nextInput?.value) {
          nextInput.select();
        }
        target.value = userInput;
        nextInput.focus();
        e.preventDefault();
      } else if (userInput === "Backspace" && prevInput) {
        if (prevInput?.value) {
          prevInput.select();
        }
        target.value = "";
        prevInput.focus();
        e.preventDefault();
      }
    };

    inputElements.forEach((el) =>
      el.addEventListener("keydown", handleKeyDown)
    );

    return () => {
      inputElements.forEach((el) =>
        el.removeEventListener("keydown", handleKeyDown)
      );
    };
  }, []);

  return (
    <div>
      {inputs.map((_i, index) =>
        renderInput({
          index,
          maxLength: 1,
          className: "js-otp-input",
          style: { height: 80, width: 80, textAlign: "center", fontSize: 30 },
        })
      )}
    </div>
  );
};

export default OTP;
