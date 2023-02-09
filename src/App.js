import { useState } from "react";

export default function App() {
  const [profile, setProfile] = useState({
    name: "Lamphrangmi",
    age: 20,
    job: "Junior Software engineer",
    company: "startup",
  });

function handleChange(e) {
  setProfile({
    ...profile,
    name: e.target.value,
  })
}

  return (
    <>
      <label>Enter your name:
        <input value={profile.name} onChange={handleChange} />
      </label>

      <h2>Hello my name is {profile.name}. I'm {profile.age} years old and I'm working as a {profile.job}</h2>
    </>
  )

}