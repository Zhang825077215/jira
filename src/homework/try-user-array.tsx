import { useArray, useMount } from "utils";



export const TsReactTest = () => {
    const persons: {name: string; age: number} [] = [
        {name: "jack", age: 25},
        {name: "ma", age: 22}
    ];
    const {values, clear, removeIndex, add} = useArray(persons);
    useMount(() => {
        // console.log(values.notExist);
        // add({name: "david"});
        // removeIndex("123")
    })
    return (
        <div>
            <button onClick={() => add({name: "John", age: 22})}>add John</button>
            <button onClick={() => removeIndex(0)}>remove index-0</button>
            <button style={{marginBottom: '50px'}} onClick={() => clear()}>clear</button>
            {
                values.map((person, index) => (
                    <div style={{marginBottom: '30px'}}>
                        <span style={{color: 'red'}}>{index}</span>
                        <span>{person.name}</span>
                        <span>{person.age}</span>
                    </div>
                ))
            }
        </div>
    )
}