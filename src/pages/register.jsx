import { useMemo, useState } from "react";

export default function Register() {
  // Arrays of JSON objects (as requested)
  const genderOptions = useMemo(
    () => [
      { id: "male", label: "Male", value: "male" },
      { id: "female", label: "Female", value: "female" },
      { id: "other", label: "Other", value: "other" },
    ],
    []
  );

  const hobbiesOptions = useMemo(
    () => [
      { id: "music", label: "Music", value: "Music" },
      { id: "movies", label: "Movies", value: "Movies" },
      { id: "plastic", label: "Plastic Model", value: "Plastic Model" },
    ],
    []
  );

  const roleOptions = useMemo(
    () => [
      { id: "general", label: "General Staff", value: "General Staff" },
      { id: "dev", label: "Developer", value: "Developer" },
      { id: "sa", label: "System Analyst", value: "System Analyst" },
    ],
    []
  );

  // States
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male"); // default like screenshot
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState(roleOptions[0].value);

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div className="page">
      <div className="card">
        <div className="form">
          <label className="field">
            <span className="label">Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="field">
            <span className="label">Firstname</span>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>

          <label className="field">
            <span className="label">Lastname</span>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>

          <div className="field">
            <div className="label">Gender</div>
            <div className="choices">
              {genderOptions.map((opt) => (
                <label key={opt.id} className="choice">
                  <input
                    type="radio"
                    name="gender"
                    value={opt.value}
                    checked={gender === opt.value}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="label">Hobbies</div>
            <div className="choices">
              {hobbiesOptions.map((opt) => (
                <label key={opt.id} className="choice">
                  <input
                    type="checkbox"
                    value={opt.value}
                    checked={hobbies.includes(opt.value)}
                    onChange={onHobbiesToggle}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="label">Role</div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              {roleOptions.map((opt) => (
                <option key={opt.id} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <hr className="divider" />

        {/* Display section (reflect input data) */}
        <div className="result">
          <div>
            <span className="resultKey">Username:</span>{" "}
            <span className="resultValue">{username}</span>
          </div>
          <div>
            <span className="resultKey">Firstname:</span>{" "}
            <span className="resultValue">{firstname}</span>
          </div>
          <div>
            <span className="resultKey">Lastname:</span>{" "}
            <span className="resultValue">{lastname}</span>
          </div>
          <div>
            <span className="resultKey">Gender:</span>{" "}
            <span className="resultValue">{gender}</span>
          </div>
          <div>
            <span className="resultKey">Hobbies:</span>{" "}
            <span className="resultValue">{hobbies.join(", ")}</span>
          </div>
          <div>
            <span className="resultKey">Role:</span>{" "}
            <span className="resultValue">{role.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
