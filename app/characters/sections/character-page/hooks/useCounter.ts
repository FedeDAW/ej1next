'use client'


var count = getStorageCount('count');

function useCounter() {
        localStorage.setItem('count', String(count+1));
        count = getStorageCount('count');
        window.location.href = 'http://localhost:3000/personajes';
        return count;
}

function getStorageCount(key: any){
    return Number(localStorage.getItem(key));
}

export{
    useCounter,
    count
}