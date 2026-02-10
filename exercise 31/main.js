
async function Users() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            // throw new Error(`HTTP error! Status: ${response.status}`);
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const users = await response.json();
        console.log("List of all users:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

Users();

