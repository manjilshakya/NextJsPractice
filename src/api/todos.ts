export type TodoFetch={
    id:number;
    title:string;
    completed: boolean;
}

export function getTodosFetch(){
    return fetch(`https://jsonplaceholder.typicode.com/todos`).then(res=>res.json())
    .then(data=>data as TodoFetch[])
}