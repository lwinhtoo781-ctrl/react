import { useRef, useState } from "react";

const hobbiesList = [
  { label: "Reading", value: "reading" },
  { label: "Gaming", value: "gaming" },
  { label: "Music", value: "music" },
  { label: "Sports", value: "sports" },
];

export default function SubmitData() {
  // toggle between "form view" and "result view"
  const [isSubmitted, setIsSubmitted] = useState(false);

  // store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // input refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);

  // checkbox refs (hint requirement)
  const hobbyRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedHobbies = hobbiesList
      .filter((_, index) => hobbyRef.current[index]?.checked)
      .map((h) => h.value);

    const data = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      gender: genderRef.current?.value || "",
      hobbies: selectedHobbies,
    };

    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 16 }}>
      <h2>Submit Data</h2>

      {isSubmitted ? (
        // ✅ RESULT VIEW
        <div>
          <h3>Submission Result</h3>
          <p><b>Name:</b> {submittedData?.name}</p>
          <p><b>Email:</b> {submittedData?.email}</p>
          <p><b>Gender:</b> {submittedData?.gender}</p>
          <p>
            <b>Hobbies:</b>{" "}
            {submittedData?.hobbies?.length
              ? submittedData.hobbies.join(", ")
              : "None"}
          </p>

          <button onClick={handleBack}>Back to Form</button>
        </div>
      ) : (
        // ✅ FORM VIEW
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label>Name</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter name"
              style={{ width: "100%", padding: 8 }}
              required
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              style={{ width: "100%", padding: 8 }}
              required
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label>Gender</label>
            <select
              ref={genderRef}
              style={{ width: "100%", padding: 8 }}
              defaultValue=""
              required
            >
              <option value="" disabled>Select one</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label>Hobbies</label>
            <div style={{ marginTop: 8 }}>
              {hobbiesList.map((item, index) => (
                <label key={item.value} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    id={item.value}
                    name="hobbies"
                    value={item.value}
                    ref={(el) => (hobbyRef.current[index] = el)}
                  />
                  {" "}{item.label}
                </label>
              ))}
            </div>
          </div>

          {/* ✅ Submit button below the form */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
