/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useWizardForm } from "react-multistep-wizard-form";
import { userFormType } from "../App";

const AddressSection = ({
  setUserForm,
}: {
  setUserForm: React.Dispatch<React.SetStateAction<userFormType>>;
}) => {
  const {
    isFirstWizardStep,
    isLastWizardStep,
    previousWizardStep,
    submitWizardForm,
  } = useWizardForm();

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { address } = e.target as any;

    setUserForm((data: userFormType) => ({
      ...data,
      address: address.value,
    }));

    submitWizardForm();
  };
  return (
    <section onSubmit={formOnSubmit}>
      <form>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            rows={4}
            placeholder="Enter your comments here..."
          ></textarea>
        </div>
        <div className="BtnGroup">
          <button disabled={isFirstWizardStep} onClick={previousWizardStep}>
            Previous
          </button>
          <button type="submit">{isLastWizardStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </section>
  );
};

export default AddressSection;
