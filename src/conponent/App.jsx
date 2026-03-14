import './App.css'
import Todo from './todo'
import Usermapp from './users'
import Fruit from './simpalString'
import Score from './nuMbers'
import User from './users'
import Product from './Products'
import Movie from './Movies'

function App() {
  // 1. Simple strings
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Strawberry"];

  // 2. Numbers
  const scores = [95, 82, 74, 88, 91, 67, 100];

  // 3. Users
  const users = [
    { id: 1, name: "Alice", age: 28, role: "Engineer" },
    { id: 2, name: "Bob", age: 34, role: "Designer" },
    { id: 3, name: "Carol", age: 25, role: "Manager" },
    { id: 4, name: "David", age: 31, role: "Developer" },
  ];

  // 4. Products
  const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Mouse", price: 29, inStock: true },
    { id: 3, name: "Monitor", price: 399, inStock: false },
    { id: 4, name: "Keyboard", price: 79, inStock: true },
  ];

  // 5. Movies
  const movies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8 },
    { id: 2, title: "Interstellar", year: 2014, rating: 8.6 },
    { id: 3, title: "The Matrix", year: 1999, rating: 8.7 },
    { id: 4, title: "Dune", year: 2021, rating: 8.0 },
  ];

  return (
    <>
      <div className="section">
        <h2 className="section-title">Fruits</h2>
        <div className="container">
          {fruits.map(fru => <Fruit fru={fru} />)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Scores</h2>
        <div className="container">
          {scores.map(num => <Score num={num} />)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Users</h2>
        <div className="container">
          {users.map(usa => <User usa={usa} />)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Products</h2>
        <div className="container">
          {products.map(pro => <Product pro={pro} />)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Movies</h2>
        <div className="container">
          {movies.map(mov => <Movie mov={mov} />)}
        </div>
      </div>
      {/* {
        products.map(props => <Usermapp props={props}></Usermapp>)

      } */}
      <Demodata></Demodata>
      <Newdata name="pattia" roll="759287" ></Newdata>
      <Arraydestruct fullanme='shanto dey' roll='759291'></Arraydestruct>
      <Todo titel="mand dev" hasbecome={false}></Todo>

    </>
  )
}

function Demodata() {
  const students = [
    { id: 1, name: "Shanto", age: 17 },
    { id: 2, name: "Ratul", age: 20 },
    { id: 3, name: "Rakib", age: 19 },
  ];
  return (
    <>
      <p className='border'> {students[0].id}my name is {students[0].name} and my age is {students[0].age}  </p>
      <p className='border'>{students[1].id}my name is {students[1].name} and my age is {students[1].age}  </p>
      <p className='border'>{students[2].id}my name is {students[2].name} and my age is {students[2].age}  </p>
    </>
  )
}


function Newdata(props) {
  return (
    <>
      <div className='border'>
        <p >name is {props.name} </p>
        <p >roll is  {props.roll}</p>

      </div>

    </>
  )
}
// const { fullanme, roll } = { fullanme="shanto", roll="759291" }
function Arraydestruct({ fullanme, roll }) {
  return (
    <>
      <div className='border'>
        <p >name is {fullanme} </p>
        <p >roll is  {roll}</p>

      </div>
    </>
  )
}
export default App
