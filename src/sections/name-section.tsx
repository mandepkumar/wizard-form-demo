/* eslint-disable @typescript-eslint/no-explicit-any */
import { userFormType } from "../App";
import { useWizardForm } from "react-multistep-wizard-form";

const NameSection = ({
  setUserForm,
}: {
  setUserForm: React.Dispatch<React.SetStateAction<userFormType>>;
}) => {
  const { isFirstWizardStep, nextWizardStep, previousWizardStep } =
    useWizardForm();
  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName } = e.target as any;

    setUserForm((data: userFormType) => ({
      ...data,
      firstName: firstName.value,
      lastName: lastName.value,
    }));
    nextWizardStep();
  };

  return (
    <section>
      <form onSubmit={formOnSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" required type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" required type="text" />
        </div>
        <div className="BtnGroup">
          <button disabled={isFirstWizardStep} onClick={previousWizardStep}>
            Previous
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </section>
  );
};

export default NameSection;
