// 'use client'

import { useEffect, useState} from 'react'

export function useCounter() {
    const [count, setCount] = useState(0);
    
    const increment = () => useEffect(() => { setCount(count+1) }, [count]);
    return { count, increment };
}