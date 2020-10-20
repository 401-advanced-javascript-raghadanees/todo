import axios from 'axios';


const useAjax = (list,callback) => {

    const getTask = (url) => {
        axios.get(url).then(res => {
            console.log('res...', res)
            // callback(res.data);
            callback([...res.data.results]);
        })
    };

    const postTask = (url, data) => {
        const options = {
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache',
            body: JSON.stringify(data)
        };
        // axios.post(url, data, options).then().catch(console.error)
        axios.post(url, data, options).then(savedItem => {
            console.log('post  -->', savedItem)
            callback([...list, savedItem.data])
        }) //.catch(console.error);
    };

    const putTask = (url, data) => {
        axios.put(url, data)
            .then(savedItem => {
                console.log('put  -->', savedItem);
                console.log('put data -->', data);
                console.log('put list -->', list);
                callback(list.filter(listItem => listItem._id === data._id ? savedItem.data : listItem));
            })
    };

    const deleteTask = (url, id) => {

        axios.delete(url)
            .then(savedItem => {
                console.log('delete  -->', savedItem)
                callback(list.filter(item => item._id !== id))
            })
    };

    return [getTask, postTask, putTask, deleteTask];
}

export default useAjax;