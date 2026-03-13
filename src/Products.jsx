export default function Product({pro}) {
  return (
    <div className='border'>
      <h4> Serial {pro.id}</h4>
      <h3>{pro.name}</h3>
      <p> Item price {pro.price}</p>
      <p> Available {pro.inStock}</p>
    </div>
  );
}