type ButtonProps = {
  backgroundColor: "orange" | "white" | "transparent"| "black";
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
      case "black":
      colorClass = "btn--black";
      break;
  }

  return <button className={`btn ${colorClass}`}>See product</button>;
}
