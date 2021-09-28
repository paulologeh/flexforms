import React, { useState, createContext } from "react";

export const FormStore = createContext();

const initialStore = {};

export function FormStoreProvider(props) {
  const [formStore, updateFormStore] = useState(initialStore);

  return (
    <FormStore.Provider value={[formStore, updateFormStore]}>
      {props.children}
    </FormStore.Provider>
  );
}
