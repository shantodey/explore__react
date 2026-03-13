export default function User({usa}) {
  return (
    <div className='border'>
      <h4>id {usa.id}</h4>
      <h3>Name is {usa.name}</h3>
      <p>Age is {usa.age}</p>
      <p>Has beocme {usa.role}</p>
    </div>
  );
}