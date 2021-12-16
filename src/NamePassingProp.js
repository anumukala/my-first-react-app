function NamePassingProp(Props) {
  return (
    <div style={{ backgroundColor: "lightgray", margin: 10 }}>
      <h1>Hello {Props.name}</h1>
      <h2>{Props.email}</h2>
      <h3>{Props.phone}</h3>
    </div>
  );
}
export default NamePassingProp;
