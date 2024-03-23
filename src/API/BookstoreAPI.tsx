const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=quilting";

const fetchBookData = async () => {
    try {
        const res = fetch(apiUrl,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        const response = (await res).json();
        return response;
    } catch (error) {
        console.log("error",error);
        throw error;
    }
}

export default fetchBookData