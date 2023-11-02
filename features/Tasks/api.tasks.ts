import axios from 'axios'

export class ApiTasks {

    public async getResults():Promise<any>{
        let url = "https://jsonplaceholder.typicode.com/posts/"
        let response = await axios.get(url)
            .catch((error: {message:any; response: any; }) => {
                throw new Error(`Error getting the information:- ${error.message}\n`)
            })
        return response;
    }

    public async postResult():Promise<any>{
        let url = "https://jsonplaceholder.typicode.com/posts/"
        const payload:any = {
            title: "",
            body: ""
        }
        let response = await axios.post(url, payload)
            .catch((error: {message:any; response: any}) => {
                throw new Error(`Error posting the information:- ${error.message}\n`)
            })
        return response;
    }
}