import { useState } from "react";
import "./App.css";
import NameSection from "./sections/name-section";
import ContactSection from "./sections/contact-section";
import AddressSection from "./sections/address-section";
import {
  WizardForm,
  WizardSections,
  useWizardForm,
} from "react-multistep-wizard-form";

export type userFormType = {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNo: string;
  address?: string;
};

function App() {
  const [userForm, setUserForm] = useState<userFormType>({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNo: "",
  });
  const [showAddressSection, setAddressSection] = useState(true);
  const [fromSubmitted, setFormSubmitted] = useState(false);

  return (
    <main className="Main">
      <h2>User Registering</h2>

      {fromSubmitted ? (
        "Form Submitted Successfully\n" + JSON.stringify(userForm, null, 2)
      ) : (
        <WizardForm onSubmitWizardForm={() => setFormSubmitted(true)}>
          <h5>Current Step</h5>
          <CustomNav />
          <WizardSections>
            <NameSection setUserForm={setUserForm} />
            <ContactSection
              setUserForm={setUserForm}
              AddAddressChecked={showAddressSection}
              onAddAddressCheckChange={(isChecked) =>
                setAddressSection(isChecked)
              }
            />
            {showAddressSection && <AddressSection setUserForm={setUserForm} />}
          </WizardSections>
        </WizardForm>
      )}
    </main>
  );
}
export default App;

const CustomNav = () => {
  const { totalWizardSteps, currWizardStep } = useWizardForm();
  if (totalWizardSteps <= 1) return <></>;

  const getClass = (idx: number) =>
    idx == currWizardStep
      ? "Nav-Curr"
      : idx < currWizardStep
      ? ""
      : "Nav-NotDone";

  return (
    <div className="CustomNav">
      {Array.from({ length: totalWizardSteps }).map((_, idx) => (
        <div className="CustomNavGroup" key={"CustomNav-" + idx}>
          <div className={`Circle ${getClass(idx)}`}>{idx + 1}</div>
          {idx + 1 !== totalWizardSteps && <div className="Bar"></div>}
        </div>
      ))}
    </div>
  );
};




