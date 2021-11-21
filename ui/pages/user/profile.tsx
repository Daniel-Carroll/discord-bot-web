import { Button } from "@chakra-ui/button"
import React, { useEffect, useState } from "react"
import styles from '../../styles/Home.module.css'

function Profile() {
    const [numBeers, setNumBeers] = useState(0)

    const [count, setCount] = useState(0)

    function addBeer() {
        setNumBeers(numBeers + 1);
    }

    useEffect(() => {
        return () => {
            console.log("cleanup beer")
        }
    }, [numBeers])

    useEffect(() => {
        return () => {
            console.log("cleanup count")
        }
    }, [count])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                User Profile

                <div>Beers Drank: {numBeers}</div>
                <Button onClick={() => addBeer()}>Increment Beer</Button>

                <div>Count: {count}</div>
                <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
            </main>
        </div>
    )
}

export default Profile