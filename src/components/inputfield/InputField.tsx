type InputFieldProps = {
  firstNameLabel: string;
  lastNameLabel: string;
  firstNameId: string;
  lastNameId: string;
  firstNameName: string;
  lastNameName: string;
  firstNameBorderColor?: string;
  lastNameBorderColor?: string;
};

export default function InputField(props: InputFieldProps) {
  const {
    firstNameLabel = "first name",
    lastNameLabel = "last:name",
    firstNameId = "text",
    lastNameId = "text",
    firstNameName = "text",
    lastNameName = "text",
    firstNameBorderColor = "purple", // Standardwert für die Randfarbe
    lastNameBorderColor = "black", // Standardwert für die Randfarbe
  } = props;

  return (
    <>
      <h1>The input element</h1>

      <form>
        <label htmlFor={firstNameId}>{firstNameLabel}:</label>
        <input
          type="text"
          id={firstNameId}
          name={firstNameName}
          style={{
            color: firstNameBorderColor,
            border: `solid 2px ${firstNameBorderColor}`,
          }}
        />
        <br />
        <br />
        <label htmlFor={lastNameId}>{lastNameLabel}:</label>
        <input
          type="text"
          id={lastNameId}
          name={lastNameName}
          style={{
            borderColor: lastNameBorderColor,
            border: `solid 2px ${lastNameBorderColor}`,
          }}
        />
        <br />
        <br />
      </form>
    </>
  );
}
