
// // shared on 9:52............. Eaxmple 1 of Custom hook...........................................................................
// import { useState } from "react"

// const useNov21CustomHook = ()=>{
//     const [count, setCount] = useState(0)
//     const increment = ()=>{
//         setCount(count + 1)
//     }
//     const decrement = ()=>{
//         setCount(count - 1)
//     }
//     return {
//         count :  count,
//         increment : increment,
//         decrement : decrement
//     }
// }
// export default useNov21CustomHook





//shared on 10:35............. Eaxmple 2 of Custom hook...........................................................................
import { useState } from "react"

const useNov21CustomHook = ()=>{
    const [list,setList] = useState(['Adfar','Piyush','Lokesh','Bittoo'])
    const push =(value)=>{
        const newList = list.concat(value)
        setList(newList)
    }
    const pull =(index)=>{
        const newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }
    return {
        list:list,
        push:push,
        pull:pull
    }
}
 
export default useNov21CustomHook

