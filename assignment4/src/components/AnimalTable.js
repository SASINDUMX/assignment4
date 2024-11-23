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
        <h3>{result}<br></br>target animal:{randomAnimal.name}</h3>


        {animals.map((animal, index) => (
    <button
      key={index}
      onClick={() => checker(animal.name)}
    >
      <img
        src={animal.image}
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
  );
}