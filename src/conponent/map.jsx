export default function Map({props}) {

    return (
        <>
            <div className='border'>
                <h4>id {props.id}</h4>
                <h3>Prodect catagory is {props.name}</h3>
                <p>price is {props.price}</p>
            </div>
        </>
    )

}