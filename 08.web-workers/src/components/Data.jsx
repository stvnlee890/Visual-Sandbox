export default function Data({ memoized }) {
  console.log(memoized, "DATA COMPONENT");
  return (
    <div>
      <h1>{memoized}</h1>
    </div>
  );
}
