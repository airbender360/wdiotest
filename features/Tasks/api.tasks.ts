import axios from 'axios';

export class ApiTasks {

    public async get():Promise<any>{
        let url = "https://jsonplaceholder.typicode.com/posts/"
        let response = await axios.get(url)
            .catch((error: {message:any; response: any; }) => {
                throw new Error(`Error getting the information:- ${error.message}\n`)
            })
        return response;
    }

    public async post():Promise<any>{
        let url = "https://jsonplaceholder.typicode.com/posts/"
        const payload:any = {
            author: "hsum",
            title: "test",
            body: "this is a test",
        }
        let response = await axios.post(url, payload)
            .catch((error: {message:any; response: any}) => {
                throw new Error(`Error posting the information:- ${error.message}\n`)
            })
        return response;
    }
}