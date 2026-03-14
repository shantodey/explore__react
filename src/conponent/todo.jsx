export default function Call({titel,hasbecome}) {
    if(hasbecome=== true){
        return (<p > shanto has beocme {titel}</p>
    )
    }else{
        return (<p >shanto has not become {titel}</p>)
    }
    
}