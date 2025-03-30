import React from "react";
import {Button, InputOtp, Form} from "@heroui/react";

export default function InputOTPold() {
  const [otp, setOtp] = React.useState("");

  return (
    <Form
      className="flex w-full flex-col items-start gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const otp = formData.get("otp") as string | null;

        setOtp(otp || "");
      }}
    >
      <InputOtp
        isRequired
        aria-label="OTP input field"
        length={4}
        name="otp"
        placeholder="Enter code"
      />
      <Button size="sm" type="submit" variant="bordered">
        Verificar
      </Button>
      {otp && <div className="text-small text-default-500">Success</div>}
    </Form>
  );
}

