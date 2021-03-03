import { isObjInvalid } from "./invalidObject";

export const arrayHasKey = (element, array) =>
{
    if (isObjInvalid(element) || isObjInvalid(array)) {
            console.log('ERROR! -> recognised')
            return
    }
    let key = element.key
    for (let i in array)
    {
        if (array[i].key === key)
        {
            return true    
        }
    } 
    return false
}