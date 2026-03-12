import './App.css'

function App() {
  return (
    <>
      <Demodata></Demodata>
      <Newdata name="pattia" roll="759287" ></Newdata>
      <Arraydestruct fullanme='shanto dey' roll='759291'></Arraydestruct>
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
