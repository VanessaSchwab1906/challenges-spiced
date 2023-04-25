import Link from "../components/Link";

export default function HomePage({ lights }) {
  const lengthLightsOn = lights.filter((light) => light.isOn).length;
  console.log(lengthLightsOn);
  return (
    <div>
      <h1>Home</h1>
      <p> {lengthLightsOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
