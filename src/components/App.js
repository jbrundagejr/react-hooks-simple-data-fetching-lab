import React, {useState, useEffect} from "react"


function App(){
    const [dogImages, setDogImages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then((data) => {
                setDogImages(data.message)
                setIsLoaded(true)
            })            
    }, [])
    if(!isLoaded) return <p>Loading...</p>
    return (
        <img src={dogImages} alt="A Random Dog"></img>
    )
}

export default App