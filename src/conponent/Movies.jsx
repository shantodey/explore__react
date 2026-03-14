export default function Movie({mov}) {
  return (
    <div className='border'>
      <h4> Movie Nong {mov.id}</h4>
      <h3> movie title {mov.title} </h3>
      <p> Year of Release {mov.year}</p>
      <p> rating {mov.rating}</p>
    </div>
  );
}