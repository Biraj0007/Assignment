import React, {useState} from 'react'
import './CalculateIncentive.css'

const CalculateIncentive = () => {
    const [inp, setInp] = useState('')
    const [op, setOp] = useState([])
    const data = localStorage.getItem('email').split(',')
    if (!data) {
        return
    }
    const handleCalculation = () => {
        function convertInputToObjects(inputString) {
            // Split the input string by commas
            const pairs = inputString.split(', ');
        
            // Initialize an empty array to store the objects
            const result = [];
        
            // Iterate over each pair
            pairs.forEach(pair => {
                // Split each pair by the colon
                const [empIdStr, targetStr] = pair.split(':');
        
                // Convert the employee ID and target value to numbers
                const empId = parseInt(empIdStr);
                const target = parseInt(targetStr);
        
                // Check if the conversion resulted in NaN (Not-a-Number)
                if (isNaN(empId) || isNaN(target)) {
                    // If either empId or target is NaN, throw an error
                    throw new Error('Invalid input format');
                }
        
                // Create an object with the employee ID and target value and push it into the result array
                result.push({ empId, target });
            });
        
            // Return the resulting array
            return result;
        }
        
        // Test the function with the input string
        try {
            const inputString = inp.target.value; // Introduce an invalid pair
            const resultArray = convertInputToObjects(inputString);
            setOp([...resultArray])
            console.log(resultArray);
        } catch (error) {
            console.error(error.message);
        }
        
        console.log(inp.target.value);
        fetch("http://localhost:5000/api/auth/updateTarget", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                admin_id: data[0]
                , admin_password: data[1],
                listOfEmployees: [{ empId: 1000, target: 40000 }, { empId: 1002, target: 60000 }, {empId: 1003, target: 10000}]
            })
        }).then((x) => {
            return x.json()
        }).then((x) => {
            console.log(x)

            // navigate('/uploads')
        }).catch((x) => {
            console.log(`error occured${x}`);
        })
    }
    const onChange = (e)=>{
        setInp(e)
    }
    return (
        <>
            <div>CalculateIncentive</div>
            <div>Enter Emp id and performance like this </div>
            <div> 1001 : 10000, 1002:2000</div>
            <textarea type='textarea' onChange={onChange} value={inp.value}/>
            <div>
                <button onClick={handleCalculation}>
                    CalculateIncentive
                </button>
            </div>
        </>
    )
}

export default CalculateIncentive