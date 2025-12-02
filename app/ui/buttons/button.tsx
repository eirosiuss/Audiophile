type ButtonProps = {
  backgroundColor: "orange" | "white" | "transparent";
};

export default function Button({ backgroundColor }: ButtonProps) {
  let colorClass = "";

  switch (backgroundColor) {
    case "orange":
      colorClass = "btn--orange";
      break;
    case "white":
      colorClass = "btn--white";
      break;
    case "transparent":
      colorClass = "btn--transparent";
      break;
  }

  return <button className={`btn ${colorClass}`}>See product</button>;
}
