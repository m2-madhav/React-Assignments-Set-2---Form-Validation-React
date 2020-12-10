import React from "react";

export default function SignUp() {
  const [userValue, setuserValue] = React.useState("");
  const handleClick = () => {
    let msr = document.getElementById("email").value;
    let str = msr.match(/^([^@]*)@/)[1];
    setuserValue(str);
  };
  return (
    <div>
      <label for="name">Name: </label>
      <input type="text" data-testid="name" />
      <br />
      <br />
      <label for="email">Email: </label>
      <input type="email" id="email" data-testid="email" />
      <br />
      <br />
      <label for="gender" data-testid="gender">
        Gender:{" "}
      </label>
      <br />
      <input type="radio" name="gender" value="male" />
      <label for="male">Male</label>
      <br />
      <input type="radio" name="gender" value="female" />
      <label for="female">Female</label>
      <br />
      <input type="radio" name="gender" value="other" />
      <label for="other">Other</label>
      <br />
      <br />
      <label for="number">Phone Number: </label>
      <input type="number" data-testid="phoneNumber" />
      <br />
      <br />
      <label for="password">Password: </label>
      <input type="password" data-testid="password" />
      <br />
      <br />
      <label for="submit">Submit:</label>
      <button
        type="submit"
        id="submit"
        data-testid="submit"
        onClick={handleClick}
      >
        Submit
      </button>
      <br />
      {userValue}
    </div>
  );
}
