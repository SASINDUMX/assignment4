import { animals } from "../data/AnimalsDb";
import { useState,useEffect } from 'react';

export default function AnimalTable() {
    const randomIndex = () => {
        const index = Math.floor(Math.random() * animals.length);
        return animals[index];
    }
    
    const [randomAnimal, setRandomAnimal] = useState(randomIndex());
    const [result, setResult] = useState("");

    const checker = (animal) => {
        if (animal === randomAnimal.name) {
            setResult('Win');
        } else {
            setResult('Lost');
        }
    };
    

    useEffect(() => {
        const randomAnimal = randomIndex();
        setRandomAnimal(randomAnimal);
    }, []);
    

  return (
    <div>
    <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
            <tr>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                    <h3>Result</h3>
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                    <h3>Animal Name</h3>
                </td>
                <td style={{ border: "1px solid black", padding: "10px", textAlign: "right" }}>
                    <h3><center>Select the Animal</center></h3>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                    {result}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                    {randomAnimal.name}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                    <div style={{
                        display: "grid", 
                        gridTemplateColumns: "repeat(4, 1fr)", 
                        gap: "10px"
                    }}>
                        {animals.map((animal, index) => (
                            <button
                                key={index}
                                onClick={() => checker(animal.name)}
                                style={{
                                    border: "none", 
                                    background: "none", 
                                    padding: "0"
                                }}
                            >
                                <img
                                    src={require(`../assets/pictures/${animal.img}`)}
                                    alt={animal.name}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        borderRadius: "8px",
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  );
}