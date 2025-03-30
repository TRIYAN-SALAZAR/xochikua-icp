"use client";
import React from "react";
import {Form, Input, Button} from "@heroui/react";

export default function Deposit() {
    const [action, setAction] = React.useState<string | null>(null);

  return (
    <>
      <h2 className="text-4xl text-center mb-4">Depositar</h2>
      <div className="flex items-center justify-center p-4">
        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          onReset={() => setAction("reset")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          <Input
            className="appearance-none no-spinner"
            isRequired
            errorMessage="ID no valido"
            label="ID"
            labelPlacement="outside"
            name="ID de la cuenta"
            placeholder="ID cuenta"
            type="number"
          />
          <Input
            className="appearance-none no-spinner"
            isRequired
            errorMessage="Monto no valido"
            label="monto"
            labelPlacement="outside"
            name="monto"
            placeholder="Ingresa Monto"
            type="number"
          />
          <div className="flex gap-2 justify-center w-full">
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
          {action && (
            <div className="text-small text-default-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </div>
    </>
  );
}