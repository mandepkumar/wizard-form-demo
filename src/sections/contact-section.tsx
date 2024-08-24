/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWizardForm } from "react-multistep-wizard-form";
import { userFormType } from "../App";

const ContactSection = ({
  setUserForm,
  AddAddressChecked,
  onAddAddressCheckChange,
}: {
  setUserForm: React.Dispatch<React.SetStateAction<userFormType>>;
  AddAddressChecked: boolean;
  onAddAddressCheckChange: (isChecked: boolean) => void;
}) => {
  const {
    isFirstWizardStep,
    isLastWizardStep,
    nextWizardStep,
    previousWizardStep,
    submitWizardForm,
  } = useWizardForm();
  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { emailId, phoneNo } = e.target as any;

    setUserForm((data: userFormType) => ({
      ...data,
      emailId: emailId.value,
      phoneNo: phoneNo.value,
    }));

    if (isLastWizardStep) submitWizardForm();
    else nextWizardStep();
  };
  return (
    <section>
      <form onSubmit={formOnSubmit}>
        <div>
          <label htmlFor="emailId">Email id</label>
          <input id="emailId" required type="email" />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone no.</label>
          <input id="phoneNo" type="phone" />
        </div>
        <div className="InLine">
          <input
            type="checkbox"
            checked={AddAddressChecked}
            onChange={(e) =>
              onAddAddressCheckChange(e.target.checked as boolean)
            }
          />
          <label>Add my address</label>
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

export default ContactSection;
