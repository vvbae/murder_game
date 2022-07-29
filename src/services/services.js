export async function getDbData(dbName) {
    const response = await fetch(`/api/dbs/${dbName}`);
    console.log(response);
    return response.arrayBuffer();
}