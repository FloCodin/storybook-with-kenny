import {useState} from "react";

type InputFieldProps = {
  Input1Label: string;
  Input2Label: string;
  InputId1: string;
  InputId2: string;
  Input1BorderColor?: string;
  Input2BorderColor?: string;
  Input3BorderColor?: string;
};

export default function InputField(props: InputFieldProps) {
  const {
    Input1Label = "first name ",
    Input2Label = "last name ",
    InputId1 = "text",
    InputId2 = "text",
    Input1BorderColor = "purple", // Standardwert für die Randfarbe
    Input2BorderColor = "black", // Standardwert für die Randfarbe
    Input3BorderColor = "blue", // Standardwert für die Randfarbe
  } = props;


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  return (
    <>
      <h1>The input element</h1>

      <form>
        <label htmlFor={InputId1}>{Input1Label}:</label>
        <input
          type="text"
          id={InputId1}
          name={"Input1"}
          placeholder="Your first name here"
          value={firstName}
          onChange={handleFirstNameChange}
          style={{
            borderColor: Input1BorderColor,
            border: `solid 2px ${Input1BorderColor}`,
            marginLeft: '10px',
          }}
        />
        <br />
        <br />
        <label htmlFor={InputId2}>{Input2Label}:</label>
        <input
          type="text"
          id={InputId2}
          name={"Input2"}
          placeholder="Your last name here"
          value={lastName}
          onChange={handleLastNameChange}
          style={{
            borderColor: Input2BorderColor,
            border: `solid 2px ${Input2BorderColor}`,
            marginLeft: '10px',
          }}
        />
        <br />

        <br />
        <label htmlFor="fullName">Full name:</label>
        <input
            type="text"
            id="fullName"
            value={`${firstName} ${lastName}`}
            disabled
            style={{
              borderColor: Input3BorderColor,
              border: `solid 2px ${Input3BorderColor}`,
              marginLeft: '10px',
            }}
        />
      </form>
    </>
  );
}
