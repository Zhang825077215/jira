import { useEffect, useState } from "react"

// 改变对象不提倡
export const isFalsy = (value: unknown) => value === 0 ? false : !value

export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(object).forEach(key => {
        // @ts-ignore
        const value = object[key]
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    })
    return result
};

export const useMount = (callback: () => void) => {
    useEffect(() => callback(), [])
}

export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debouncedValue
}

export const useArray = <V>(persons: V[]) => {
    const [values, setValues] = useState(persons)
    const clear = (): void => {
        setValues([])
    }
    const removeIndex = (index: number): void => {
        const copy = [...values]
        copy.splice(index, 1)
        setValues(copy)
    }
    const add = (value: V): void => {
        setValues([...values, value])
    }
    return {values, clear, removeIndex, add}
}